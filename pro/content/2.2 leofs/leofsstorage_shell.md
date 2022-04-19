---
title: "leofsstorage_shell"
menuTitle: "leofsstorage_shell"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
Shell Description 描述
leofs-adm detach <storage-node> • Remove the storage node from the LeoFS storage cluster 移除
 • Current status: running | stop 可以使用
  leofs-adm rollback storage_0@127.0.0.1 恢复（当node状态是detach时）
  
leofs-adm suspend <storage-node> • Suspend a storage node for maintenance 挂起
 • This command is NOT similar to the detach command, just only to suspend the node.
 • While suspending, it rejects any requests
 • Current status: running
leofs-adm resume <storage-node> • Resume a storage node until a finished maintenance 恢复
 • Current status: suspended | restarted
leofs-adm start • Start LeoFS after distributing the RING from LeoFS Manager to LeoFS Storage and Gateway 第一次启动时，初始化数据库以及数据
leofs-adm rebalance • Commit detached and attached nodes to update the cluster and Ring(routing-table) 在node加入集群或者离开集群时，需要调用该命令来重新刷新ring
 • Rebalance objects in the cluster which is based on the updated cluster topology
 • Current status: attached
  
leofs-adm compact-start <storage-node> (all|<num-of-targets>) [<num-of-compaction-proc>] • Remove unnecessary objects from the node delete操作无法删除持久化的数据，
 • num-of-targets: It controls the number of containers in parallel 使用该命令移除多余的数据
 • num-of-compaction-procs: It controls the number of procs to execute the compaction in parallel
leofs-adm compact-suspend <storage-node> • Suspend the compaction 压缩挂起
leofs-adm compact-resume <storage-node> • Resume the compaction 压缩重新启动
leofs-adm compact-status <storage-node> • See the current compaction status 目前的状态，包括压缩状态，目前正在压缩的containers in parallel，等待压缩哦containers in parallel
 • Compaction’s status: idle, running, suspend
leofs-adm diagnose-start <storage-node> • v1.1.5- Diagnose data of a target storage node 诊断

![](images/screenshot_1527428873410.png)