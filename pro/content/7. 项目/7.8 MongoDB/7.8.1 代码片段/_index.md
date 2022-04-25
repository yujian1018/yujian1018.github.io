---
title: "7.8.1 代码片段"
weight: 07080100
date: 2019-08-30T15:13:01+08:00
chapter: true
---

```mongo
# rs.initiate(config),需要连接入某个节点

# rs.config()  rs.status() rs.isMaster()

# rs.add("server_4:27017")

# rs.addArb("localhost:30001") %添加仲裁者

# rs.remove("server_1:20000")

# var config = rs.config()

# config.memebers[0].host = "server_1:20000"

# rs.reconfig(config)

# rs.addArb("server_5:27017") 等效与 rs.add({"_id":4, "host":"server_5:27017", "arbiterOnly":true})

# rs.stepDown(600) %主节点降级为备份节点10分钟内没有选举出新的主节点，该节点可以重新加入选举

# rs.freeze(10000) %保持备份节点，不能参与选举成主节点

# rs.freeze(0) %释放, 参与选举成主节点

# c1 = (new Mongo("localhost:30001")).getDB("test")

# db1 = c2.getDB("test")

# db1.test.find()

# db1.test.count()

# db1.stats()

# db1.test.stats()

# sh,status()
# sh.enableSharding("test") #需要分片的数据库
# db.users.ensureIndex({"username":1}) #片键 "hashed"
# sh.shardCollection("test.users", {"username":1}) #"hashed"
# db.users.find({"username":"user12345"}).explain()
# sh.addShard("ADCMS_HUIYU/192.168.1.101:20001")

# 查看配置服务器信息，链接上mongos， use config

# db.shards.find()

# db.databases.find()

# db.collection.find()

# db.chunks.find()
```
