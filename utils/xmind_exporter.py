from __future__ import annotations

import asyncio
import json
import os
import re
import tempfile
from dataclasses import dataclass
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any
from zoneinfo import ZoneInfo


BEIJING_TZ = ZoneInfo("Asia/Shanghai")
DEFAULT_SHEETS = ["优沃森组织架构", "淘宝闪购组织架构", "优沃森直营店"]
DEFAULT_CACHE_DIR = Path(os.getenv("XMIND_CACHE_DIR", Path(tempfile.gettempdir()) / "youwosen_xmind_cache"))
EXPORTER_REVISION = "2026-08-28.2"


@dataclass(frozen=True)
class XmindImage:
    sheet_name: str
    image_path: Path
    updated_at: datetime | None = None


def beijing_now() -> datetime:
    return datetime.now(BEIJING_TZ)


def format_beijing_time(value: str | datetime | None) -> str:
    if not value:
        return "未更新"
    if isinstance(value, str):
        try:
            parsed = datetime.fromisoformat(value)
        except ValueError:
            return value
    else:
        parsed = value
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=BEIJING_TZ)
    return parsed.astimezone(BEIJING_TZ).strftime("%Y-%m-%d %H:%M:%S")


def _safe_filename(value: str) -> str:
    slug = re.sub(r"[^\w\u4e00-\u9fff-]+", "-", value).strip("-")
    return slug or "xmind"


def _metadata_path(cache_dir: Path) -> Path:
    return cache_dir / "metadata.json"


def _read_metadata(cache_dir: Path) -> dict[str, Any]:
    metadata_path = _metadata_path(cache_dir)
    if not metadata_path.exists():
        return {}
    try:
        return json.loads(metadata_path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}


def _write_metadata(cache_dir: Path, metadata: dict[str, Any]) -> None:
    cache_dir.mkdir(parents=True, exist_ok=True)
    _metadata_path(cache_dir).write_text(json.dumps(metadata, ensure_ascii=False, indent=2), encoding="utf-8")


def list_cached_images(cache_dir: Path = DEFAULT_CACHE_DIR) -> list[XmindImage]:
    metadata = _read_metadata(cache_dir)
    updated_at = metadata.get("updated_at")
    images = []
    for item in metadata.get("images", []):
        path = cache_dir / item.get("filename", "")
        if path.exists() and path.stat().st_size > 0:
            images.append(XmindImage(item.get("sheet_name", "组织架构"), path, datetime.fromisoformat(updated_at) if updated_at else None))
    return images


def cache_is_fresh(cache_dir: Path = DEFAULT_CACHE_DIR, ttl_hours: int = 24) -> bool:
    metadata = _read_metadata(cache_dir)
    updated_at = metadata.get("updated_at")
    if not updated_at:
        return False
    try:
        parsed = datetime.fromisoformat(updated_at)
    except ValueError:
        return False
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=BEIJING_TZ)
    return beijing_now() - parsed.astimezone(BEIJING_TZ) < timedelta(hours=ttl_hours)


def last_updated_text(cache_dir: Path = DEFAULT_CACHE_DIR) -> str:
    return format_beijing_time(_read_metadata(cache_dir).get("updated_at"))


def refresh_xmind_images(share_url: str, cache_dir: Path = DEFAULT_CACHE_DIR, sheet_names: list[str] | None = None) -> list[XmindImage]:
    sheet_names = sheet_names or DEFAULT_SHEETS
    captures = asyncio.run(_capture_xmind_sheets(share_url, sheet_names))
    if not captures:
        raise RuntimeError("未能从在线 XMind 链接生成图片")

    cache_dir.mkdir(parents=True, exist_ok=True)
    updated_at = beijing_now()
    metadata_images = []
    for capture in captures:
        filename = f"{_safe_filename(capture['sheet_name'])}.png"
        path = cache_dir / filename
        path.write_bytes(capture["bytes"])
        metadata_images.append({"sheet_name": capture["sheet_name"], "filename": filename})

    _write_metadata(
        cache_dir,
        {
            "source_url": share_url,
            "updated_at": updated_at.isoformat(),
            "images": metadata_images,
        },
    )
    return list_cached_images(cache_dir)


def _find_chromium_executable() -> str | None:
    candidates = [
        os.getenv("CHROMIUM_EXECUTABLE"),
        os.getenv("CHROME_BIN"),
        "/usr/bin/chromium",
        "/usr/bin/chromium-browser",
        "/usr/bin/google-chrome",
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
    ]
    for candidate in candidates:
        if candidate and Path(candidate).exists():
            return candidate
    return None


async def _capture_xmind_sheets(share_url: str, sheet_names: list[str]) -> list[dict[str, Any]]:
    try:
        from playwright.async_api import async_playwright
    except ImportError as exc:
        raise RuntimeError("缺少 playwright 依赖，无法从在线 XMind 导出图片") from exc

    async with async_playwright() as playwright:
        executable_path = _find_chromium_executable()
        launch_options: dict[str, Any] = {
            "headless": True,
            "args": ["--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--lang=zh-CN"],
        }
        if executable_path:
            launch_options["executable_path"] = executable_path
        browser = await playwright.chromium.launch(**launch_options)
        try:
            page = await browser.new_page(
                viewport={"width": 2400, "height": 1400},
                device_scale_factor=1,
                locale="zh-CN",
                user_agent=(
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"
                ),
            )
            page.set_default_timeout(30_000)
            await page.goto(share_url, wait_until="domcontentloaded", timeout=90_000)
            await _wait_for_xmind_canvas(page)
            await _prepare_xmind_view(page)

            captures = []
            clicked_any_sheet = False
            for index, sheet_name in enumerate(sheet_names):
                clicked = await _click_sheet_if_visible(page, sheet_name)
                clicked_any_sheet = clicked_any_sheet or clicked
                if index > 0 and not clicked:
                    continue
                await page.wait_for_timeout(2_000)
                captures.append({"sheet_name": sheet_name, "bytes": await _capture_viewer(page)})

            if not captures or not clicked_any_sheet:
                captures = [{"sheet_name": "在线组织架构", "bytes": await _capture_viewer(page)}]
            return captures
        finally:
            await browser.close()


async def _wait_for_xmind_canvas(page: Any) -> None:
    for _ in range(30):
        ready = await page.evaluate(
            """
            () => {
              const visibleCanvas = Array.from(document.querySelectorAll('canvas'))
                .some((el) => {
                  const rect = el.getBoundingClientRect();
                  return rect.width > 200 && rect.height > 120;
                });
              const visibleSvg = Array.from(document.querySelectorAll('svg'))
                .some((el) => {
                  const rect = el.getBoundingClientRect();
                  return rect.width > 200 && rect.height > 120;
                });
              const text = document.body.innerText || '';
              return visibleCanvas || visibleSvg || text.includes('组织架构') || text.includes('Presented with xmind');
            }
            """
        )
        if ready:
            await page.wait_for_timeout(5_000)
            return
        await page.wait_for_timeout(1_000)


async def _prepare_xmind_view(page: Any) -> None:
    await page.evaluate(
        """
        () => {
          document.querySelectorAll('[aria-label*="cookie"], [class*="cookie"], [class*="modal"], [class*="toast"]').forEach((el) => {
            const text = el.innerText || '';
            if (text.includes('Cookie') || text.includes('下载') || text.includes('登录')) {
              el.style.display = 'none';
            }
          });
        }
        """
    )
    for key in ["Meta+0", "Control+0"]:
        try:
            await page.keyboard.press(key)
            await page.wait_for_timeout(500)
        except Exception:
            pass


async def _click_sheet_if_visible(page: Any, sheet_name: str) -> bool:
    selectors = [
        f"text={sheet_name}",
        f"[title*='{sheet_name}']",
        f"[aria-label*='{sheet_name}']",
    ]
    for selector in selectors:
        locator = page.locator(selector).last
        try:
            if await locator.count() and await locator.is_visible():
                await locator.click(force=True)
                return True
        except Exception:
            continue
    return False


async def _capture_viewer(page: Any) -> bytes:
    clip = await page.evaluate(
        """
        () => {
          const candidates = Array.from(document.querySelectorAll('canvas, svg, [class*="editor"], [class*="viewer"], [class*="canvas"]'))
            .map((el) => el.getBoundingClientRect())
            .filter((rect) => rect.width > 300 && rect.height > 180)
            .sort((a, b) => (b.width * b.height) - (a.width * a.height));
          const rect = candidates[0] || document.body.getBoundingClientRect();
          const pad = 24;
          const x = Math.max(0, rect.x - pad);
          const y = Math.max(0, rect.y - pad);
          const maxWidth = Math.max(1, document.documentElement.scrollWidth - x);
          const maxHeight = Math.max(1, document.documentElement.scrollHeight - y);
          return {
            x,
            y,
            width: Math.min(maxWidth, rect.width + pad * 2),
            height: Math.min(maxHeight, rect.height + pad * 2)
          };
        }
        """
    )
    width = max(1, min(2400, int(clip["width"])))
    height = max(1, min(1800, int(clip["height"])))
    return await page.screenshot(
        type="png",
        clip={"x": int(clip["x"]), "y": int(clip["y"]), "width": width, "height": height},
    )
