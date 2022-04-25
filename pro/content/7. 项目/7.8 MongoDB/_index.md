---
title: "7.8 MongoDB"
weight: 07080000
date: 2019-08-30T15:13:01+08:00
chapter: true
---
<https://docs.mongodb.org>

a) mongod - Mongodb服务通过执行该文件启动。启动时可指定数据存放目录及日志存放目录等。
b) mongos - Mongodb Sharding控制器，主要用在Mongodb分布式存储上，为数据的插入和查询提供路由服务。
c) mongo - Mongodb的CLI（Comannd Line Interface）为管理员或者开发人员提供操作mongodb的接口，纯命令行形式
d) mongodump - MongoDB dump工具，用于备份文件以及获取快照，可指定备份策略，同时配合mongorestore作为恢复数据库一起使用
e) mongorestore - MongoDB备份的恢复工具，配合mongodump一起使用
f) mongoexport - 对某个mongodb实例以Json或者CSV格式进行数据导出，若要导出所有数据，建议使用monogodump，同时配合mongoimport作为数据导入一起使用
g) mongoimport - 对某个mongodb实例导入Json或者CSV格式的数据，配合mongoexport一起使用
h) mongofiles - 用于往GridFS写入文件或者从GridFS中读取文件（GridFS是Monogodb提供的文件系统，用于管理数据文件）
i) mongostat - 用来查看当前运行的mongodb服务及mongos路由服务的状态
j) mongotop - 用来查看某个Mongodb实例的数据读写时间，并提供了某个数据库级别的数据读写时间，每秒返回统计值
k) mongosniff - 类似tcpdump的工具，主要用来实时查看mongodb的运行情况，更多时候是给开发人员使用
l) mongoperf - 用来检查mongodb运行时磁盘的IO情况

客户端：<https://robomongo.org/>
