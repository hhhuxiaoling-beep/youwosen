"""Allowlisted diagnostics. Never return driver text or connection details."""
from __future__ import annotations


STAGES = {
    'configuration': '解析连接配置',
    'connect': '连接数据库',
    'session': '设置数据库会话',
    'create': '初始化薪资表',
    'rls': '启用薪资表访问保护',
    'commit': '提交初始化事务',
    'read': '读取月份目录',
    'operation': '执行云端操作',
}

# Every message is source-controlled, including the generic fallback. Raw driver
# messages can contain a password, URI, hostname, SQL or private payroll data.
MESSAGES = {
    'URI': ('连接串格式无法解析。', '从Supabase → Connect重新复制完整URI；数据库密码中的特殊字符需进行URL编码。'),
    'PLACEHOLDER': ('连接串仍含示例占位符。', '在Streamlit Secrets中将YOUR-PASSWORD、PROJECT-REF等占位符替换为实际配置。'),
    'SSL_CONFIG': ('SSL配置不满足要求。', '使用sslmode=require或verify-full；不要关闭SSL。'),
    'DEPENDENCY': ('数据库驱动未能加载。', '在Streamlit管理页重启应用并检查依赖安装日志，确认psycopg[binary]已安装。'),
    'TENANT': ('连接池未找到对应项目或用户。', '从Supabase → Connect → Session pooler重新复制URI，保留其原始主机名、端口和完整用户名。'),
    'PASSWORD': ('数据库拒绝了密码认证。', '核对Supabase数据库密码（不是网页登录密码或API key）；在URI中对密码的特殊字符进行URL编码，更新Secrets后重试。'),
    'AUTH': ('数据库拒绝了身份认证。', '核对Connect提供的数据库用户名和认证设置；连接池用户名必须包含项目标识。'),
    'PERMISSION': ('当前数据库角色权限不足。', '检查上述失败步骤所需的schema、建表、表所有权或读取权限；不要通过关闭RLS或开放匿名访问来解决。'),
    'DATABASE': ('目标数据库不存在。', '核对Connect提供的数据库名称，通常为postgres；不要填项目名称。'),
    'DNS': ('无法解析数据库主机名。', '从Connect复制原始主机名，检查是否误改拼写；如项目暂停，请先恢复项目。'),
    'DIRECT_NETWORK': ('当前网络无法到达数据库直连地址。', '该Supabase直连端点可能需要IPv6；请改用Connect提供的Session pooler URI。'),
    'TIMEOUT': ('数据库连接或请求超时。', '确认Supabase项目运行中，并检查连接地址、端口、Network Restrictions和数据库负载。'),
    'NETWORK': ('数据库网络连接失败。', '确认项目运行中，核对Connect提供的地址与端口，并检查Network Restrictions。'),
    'TLS': ('SSL连接建立失败。', '使用Connect提供的地址并保持SSL开启；如使用verify-full，请核对服务器证书配置。'),
    'CAPACITY': ('数据库或连接池连接数已满。', '检查Supabase数据库与连接池连接数，释放闲置连接后重试。'),
    'SCHEMA': ('薪资表结构与程序预期不一致。', '检查薪资表是否为本应用创建的结构；先备份，不要删除现有数据。'),
    'UNKNOWN': ('数据库操作失败，暂不能确定原因。', '将本页诊断码与失败步骤提供给维护人员；不要发送数据库连接串或密码。'),
}


class PayrollError(Exception):
    def __init__(self, message, status=400):
        super().__init__(message)
        self.status = status


class DatabaseDiagnostic(PayrollError):

    def __init__(self, code, stage):
        self.code = code if code in MESSAGES else 'UNKNOWN'
        self.stage = stage if stage in STAGES else 'operation'
        summary, action = MESSAGES[self.code]
        super().__init__(f'薪资数据库诊断 YWS-DB-{self.code} · 失败步骤：{STAGES[self.stage]}。{summary} {action}', 503)


def diagnose(error, stage='operation', *, direct=False):
    if isinstance(error, DatabaseDiagnostic):
        return error
    # Internal matching only. Nothing from these values is interpolated into UI,
    # replies or logs. SQLSTATE is only matched against a fixed allowlist.
    state = getattr(error, 'sqlstate', None)
    message = str(error).lower()
    if isinstance(error, (ImportError, ModuleNotFoundError)):
        code = 'DEPENDENCY'
    elif 'tenant or user not found' in message:
        code = 'TENANT'
    elif state == '28P01' or 'password authentication failed' in message:
        code = 'PASSWORD'
    elif state == '28000':
        code = 'AUTH'
    elif state == '42501':
        code = 'PERMISSION'
    elif state == '3D000':
        code = 'DATABASE'
    elif state in {'53300', '53400'} or any(s in message for s in ('too many connections', 'maxclients', 'max clients', 'remaining connection slots', 'max client connections')):
        code = 'CAPACITY'
    elif state in {'42P01', '42703', '42804'}:
        code = 'SCHEMA'
    elif any(s in message for s in ('could not translate host', 'failed to resolve host', 'name or service not known', 'nodename nor servname')):
        code = 'DNS'
    elif direct and any(s in message for s in ('network is unreachable', 'no route to host')):
        code = 'DIRECT_NETWORK'
    elif state == '57014' or any(s in message for s in ('timeout', 'timed out')):
        code = 'TIMEOUT'
    elif any(s in message for s in ('ssl error', 'ssl connection', 'ssl handshake', 'certificate verify failed', 'root certificate', 'server does not support ssl', 'tls handshake')):
        code = 'TLS'
    elif any(s in message for s in ('connection refused', 'network is unreachable', 'no route to host', 'server closed the connection', 'connection reset')):
        code = 'NETWORK'
    else:
        code = 'UNKNOWN'
    return DatabaseDiagnostic(code, stage)
