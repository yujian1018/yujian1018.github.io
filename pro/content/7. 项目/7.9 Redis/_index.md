
## redis

```bash
https://redis.io/

wget https://download.redis.io/releases/redis-6.2.6.tar.gz

tar -zxf redis-6.2.6.tar.gz

make

```

## config

```config

#bind 127.0.0.1

port 63098  #绑定端口

daemonize yes #是否后台启动

pidfile /var/run/redis_63098.pid
logfile "log_63098.log" #日志

databases 2  #启动多少个数据库

#   save ""

rdbcompression yes
rdbchecksum yes
dbfilename dump_63098.rdb  #dump_63098.rdb redis重启后不会通过该文件还原数据

appendonly yes    #appendonly.aof
appendfsync no     #依赖操作系统，对大多数Linux操作系统，是每30秒进行一次fsync，将缓冲区中的数据写到磁盘上
   everysec  #Redis会默认每隔一秒进行一次fsync调用，将缓冲区中的数据写到磁盘。但是当这一 次的fsync调用时长超过1秒时。Redis会采取延迟fsync的策略，再等一秒钟。也就是在两秒后再进行fsync，这一次的fsync就不管会执行多长时间都会进行。这时候由于在fsync时文件描述符会被阻塞，所以当前的写操作就会阻塞
   always   #每一次写操作都会调用一次fsync，这时数据是最安全的，当然，由于每次都会执行fsync，所以其性能也会受到影响


requirepass 1234567890

loglevel notice
```
