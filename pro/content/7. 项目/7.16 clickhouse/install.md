# Quick start

## 安装

```text
    https://clickhouse.tech/#quick-start
```

## 配置

```text
<http_port>8123</http_port>
<tcp_port>8124</tcp_port>
<mysql_port>8125</mysql_port>
<listen_host>::</listen_host>
```

## 用户

### 如何生成密码

```bash
PASSWORD=$(base64 < /dev/urandom | head -c8);
echo "$PASSWORD"; echo -n "$PASSWORD" | sha256sum | tr -d '-'

 <users>
    <default>
        <password>705c37761366c70774b786a9d800af2369759c1fc73ff61f2396648dd5daa5aa</password>
        <networks incl="networks" replace="replace">
            <ip>::/0</ip>
        </networks>
        <profile>default</profile>
        <quota>default</quota>
    </default>
    <ck>
        <password_sha256_hex>967f3bf355dddfabfca1c9f5cab39352b2ec1cd0b05f9e1e6b8f629705fe7d6e</password_sha256_hex>
        <networks incl="networks" replace="replace">
            <ip>::/0</ip>
        </networks>
        <profile>readonly</profile>
        <quota>default</quota>
    </ck>
</users>

clickhouse-client -h 127.0.0.1  -u log --port 8124 --password ldsLjNhB
clickhouse-client -h 127.0.0.1  -u default --port 8124 --password 705c37761366c70774b786a9d800af2369759c1fc73ff61f2396648dd5daa5aa

```
