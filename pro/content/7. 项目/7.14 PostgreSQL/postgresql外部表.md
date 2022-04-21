# 外部表 postgres_fdw

## 添加extension

```sql
create extension postgres_fdw;
select * from pg_foreign_data_wrapper;
```

## 创建远端数据库

create database dblink TEMPLATE template0;

## 本地创建server

select * from pg_foreign_server;
create server ex_db foreign data wrapper postgres_fdw options(host '127.0.0.1',port '5866',dbname 'highgo');
create server mysql_config foreign data wrapper postgres_fdw options(host '192.168.69.161',port '3306',dbname 'config');
ALTER SERVER ex_db OPTIONS (host '127.0.0.1', dbname 'highgo_2');

## 创建用户匹配信息

select * from pg_user_mappings;
create user mapping for postgres[账户名] server ex_db options(user 'highgo',password 'highgo');
create user mapping for postgres server mysql_config options(user 'root',password '185b838a0a4f_#A');

## 创建外部表

CREATE FOREIGN TABLE config_lv(lv int4, "exp" int4) server ex_db options (dbname 'config',table_name 'config_lv');

CREATE FOREIGN TABLE dblink.usr_truck_mapping(
    "PROFILE_ID" int4,
    "TKID" int4,
    "DEFAULT_TK" int4,
    "DELETED" int4,
    "CREATED_BY" int4,
    "CREATED_BY_NAME" varchar,
    "CREATED_TIME" TIMESTAMP,
    "UPDATED_BY" int4,
    "UPDATED_BY_NAME" varchar,
    "UPDATED_TIME" TIMESTAMP,
    "VERSION" int4
)
server ex_db options (dbname 'member_pilot', table_name 'usr_truck_mapping');

## 删除外部表

DROP FOREIGN TABLE bb;

## 导入整个schema下的所有表

grant all on foreign server mysql_config to postgres;
IMPORT FOREIGN SCHEMA dblink FROM SERVER ex_db into dblink;
