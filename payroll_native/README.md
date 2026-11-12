# 站内薪资中心

界面和薪资计算在Streamlit平台内运行，不加载chatgpt.site页面，也不向该域名发起浏览器API请求。原React核算及Excel功能保留，数据操作由Streamlit服务端执行。

## 生产配置

Streamlit Settings → Secrets：

```toml
PAYROLL_DATABASE_URL = "postgresql://用户:数据库密码@Supabase-Session-pooler主机:5432/postgres?sslmode=require"
# 可选；同一团队必须保持同一个值，否则会看到另一组月份。
PAYROLL_DATASET_ID = "youwosen"
```

使用Supabase实际生成的Session pooler URI，特殊字符密码需URL编码。不要将真实连接串写入Git或前端。连接要求SSL；驱动关闭服务端预编译语句，以兼容连接池。

首次独立登录并连接成功后，会创建专用表`yws_payroll_months`并启用RLS，不给匿名REST客户端开放策略，不会删除或覆盖其他表。数据库角色需要该表的所有者权限以建表、启用RLS及读写；数据库连接只在服务端使用。数据按dataset_id和month隔离，更新使用revision比较，避免多设备静默覆盖。

## 记录与备份

- 修改后点击“保存本月”，成功后其他设备通过“重新加载云端数据”获得最新版本。
- 未保存的编辑不自动写入数据库。
- 首次连接空库显示当前月份的空白资料；不会将开发机、示例员工或截断的旧数据库记录写入新库。
- 原Cloudflare数据库保留不变。历史记录可通过完整月份JSON备份迁移，或在对应月份用Excel导入，再保存。
- JSON格式：`{"format":"yws_payroll_backup_v1","months":[完整PayrollMonthData对象]}`。
- 导入只新增不存在的月份，任何冲突会回滚整批导入，不覆盖已有数据。
- “数据备份与迁移”中的下载只在独立登录后可用；备份含敏感薪资，请妥善保管，禁止提交到公开GitHub。

## 前端构建

`frontend_src/`包含界面、计算及Excel源代码；`frontend_dist/`为随Streamlit一起部署的静态构建，不含薪资记录和数据库配置。安装package.json中的依赖后运行`npm run build`即可更新构建。node_modules和测试数据不得提交。

独立登录采用服务端PBKDF2验证，8小时有效，可单独锁定。数据库连接、数据读取及写入均位于独立门禁之后；退出平台仍由平台登录模块清除全部会话。
