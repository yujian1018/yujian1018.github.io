# 管理

## 查询活动用户

```sql
-- 查看postgresql的连接数
select * from pg_stat_activity;

-- 查看最大连接数限制
show max_connections;

-- 查看为超级用户保留的连接数
show superuser_reserved_connections; 
```

## 正在执行中的SQL

```sql
SELECT 
    procpid, 
    start, 
    now() - start AS lap, 
    current_query 
FROM 
    (SELECT 
        backendid, 
        pg_stat_get_backend_pid(S.backendid) AS procpid, 
        pg_stat_get_backend_activity_start(S.backendid) AS start, 
       pg_stat_get_backend_activity(S.backendid) AS current_query 
    FROM 
        (SELECT pg_stat_get_backend_idset() AS backendid) AS S 
    ) AS S 
WHERE 
   current_query <> '<IDLE>' 
ORDER BY 
   lap DESC;

/*
procpid：进程id
start：进程开始时间
lap：经过时间
current_query：执行中的sql
*/

-- 怎样停止正在执行的sql
SELECT pg_cancel_backend(进程id);

```