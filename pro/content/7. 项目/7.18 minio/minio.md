

## 1.安装

```bash

# 在各台服务器上，新建用户minio
useradd minio
su minio

cd ~/
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
```

## 2.分布式部署

采用单节点，多drivers模式

### 2.1防火墙配置

```bash
firewall-cmd --permanent --zone=public --add-port=9000-9001/tcp
firewall-cmd --reload

#如果使用云服务器，需要在云厂商管理后台中配置防火墙规则
```

### 2.2DNS配置

```bash

# 1.设置主机名称
vim /etc/hostname
  dev-oss4.htjicon.com


# 2.设置DNS
vim /etc/hosts
  192.168.1.121 dev-oss1.htjicon.com
  192.168.1.122 dev-oss2.htjicon.com
  192.168.1.123 dev-oss3.htjicon.com
  192.168.1.124 dev-oss4.htjicon.com
```

### 2.3挂载本地硬盘

```bash

# 确保部署中的所有节点使用具有相同容量（例如TB）的相同类型（NVMe、SSD 或 HDD）驱动器。MinIO 不区分驱动器类型，也不受益于混合存储类型。此外。MinIO 将每个磁盘使用的大小限制为部署中的最小驱动器。例如，如果部署有 15 个 10TB 磁盘和 1 个 1TB 磁盘，MinIO 将每个磁盘的容量限制为 1TB。

# MinIO需要在创建新部署时使用扩展符号{x...y}来表示一系列连续的磁盘，其中部署中的所有节点都有一组相同的已安装驱动器。MinIO 还要求物理磁盘的顺序在重新启动时保持不变，以便给定的挂载点始终指向相同的格式化磁盘。因此，MinIO强烈建议使用/etc/fstab或类似的基于文件的挂载配置，以确保重启后驱动器顺序不会改变。

mkfs.xfs /dev/sdb -L DISK1
mkfs.xfs /dev/sdc -L DISK2
mkfs.xfs /dev/sdd -L DISK3
mkfs.xfs /dev/sde -L DISK4

nano /etc/fstab

  # <file system>  <mount point>  <type>  <options>         <dump>  <pass>
  LABEL=DISK1      /mnt/disk1     xfs     defaults,noatime  0       2
  LABEL=DISK2      /mnt/disk2     xfs     defaults,noatime  0       2
  LABEL=DISK3      /mnt/disk3     xfs     defaults,noatime  0       2
  LABEL=DISK4      /mnt/disk4     xfs     defaults,noatime  0       2

```

### 2.4创建systemd服务文件

```bash
vim /usr/lib/systemd/system/minio.service
    [Unit]
    Description=MinIO
    Documentation=https://docs.min.io
    Wants=network-online.target
    After=network-online.target
    AssertFileIsExecutable=/home/minio/minio

    [Service]
    WorkingDirectory=/home/minio

    User=minio
    Group=minio
    ProtectProc=invisible

    EnvironmentFile=/home/minio/.bashrc
    ExecStartPre=/bin/bash -c "if [ -z \"${MINIO_VOLUMES}\" ]; then echo \"Variable MINIO_VOLUMES not set in /etc/default/minio\"; exit 1; fi"
    ExecStart=/home/minio/minio server $MINIO_OPTS $MINIO_VOLUMES

    # Let systemd restart this service always
    Restart=always

    # Specifies the maximum file descriptor number that can be opened by this process
    LimitNOFILE=1048576

    # Specifies the maximum number of threads this process can create
    TasksMax=infinity

    # Disable timeout logic and wait until process is stopped
    TimeoutStopSec=infinity
    SendSIGKILL=no

    [Install]
    WantedBy=multi-user.target

    # Built for ${project.name}-${project.version} (${project.name})

```

### 2.5设置环境变量

```bash
vim /home/minio/.bashrc
    # .bashrc

    # Source global definitions
    if [ -f /etc/bashrc ]; then
        . /etc/bashrc
    fi

    # Uncomment the following line if you don't like systemctl's auto-paging feature:
    # export SYSTEMD_PAGER=

    # User specific aliases and functions

    # Set the hosts and volumes MinIO uses at startup
    # The command uses MinIO expansion notation {x...y} to denote a
    # sequential series.
    #
    # The following example covers four MinIO hosts
    # with 4 drives each at the specified hostname and drive locations.
    # The command includes the port that each MinIO server listens on
    # (default 9000)

    # http://dev-oss{01...04}.example.com:9000/mnt/disk{1...4}/minio
    MINIO_VOLUMES="/home/minio/data{1...4}"

    # Set all MinIO server options
    #
    # The following explicitly sets the MinIO Console listen address to
    # port 9001 on all network interfaces. The default behavior is dynamic
    # port selection.

    MINIO_OPTS="--console-address :9001"

    # Set the root username. This user has unrestricted permissions to
    # perform S3 and administrative API operations on any resource in the
    # deployment.
    #
    # Defer to your organizations requirements for superadmin user name.

    MINIO_ROOT_USER=admin

    # Set the root password
    #
    # Use a long, random, unique string that meets your organizations
    # requirements for passwords.

    MINIO_ROOT_PASSWORD=adminadmin

    # Set to the URL of the load balancer for the MinIO deployment
    # This value *must* match across all MinIO servers. If you do
    # not have a load balancer, set this value to to any *one* of the
    # MinIO hosts in the deployment as a temporary measure.
    MINIO_SERVER_URL="http://127.0.0.1:9000"

```

### 2.6启动minio服务

```bash

ln -s /usr/lib/systemd/system/minio.service /etc/systemd/system/multi-user.target.wants/minio.service
systemctl start minio.service

systemctl status minio.service
journalctl -f -n 1000 -u minio.service

systemctl stop minio.service

# Enable startup on boot
systemctl enable minio.service
# Disable MinIO service
systemctl disable minio.service
```

## 3.操作minio

### 3.1扩容

```bash
vim /home/minio/.bashrc
    MINIO_VOLUMES="/home/minio/data{1...4}"
    # 修改为
    MINIO_VOLUMES="/home/minio/data{1...4} /home/minio/data{5...8}"

systemctl restart minio.service
```

### 3.2减容

```bash
./mc admin decommission status dev-minio
┌─────┬─────────────────────────┬─────────────────────────────────┬────────┐
│ ID  │ Pools                   │ Capacity                        │ Status │
│ 1st │ /home/minio/data{1...4} │ 67 GiB (used) / 3.0 TiB (total) │ Active │
│ 2nd │ /home/minio/data{5...8} │ 67 GiB (used) / 3.0 TiB (total) │ Active │
└─────┴─────────────────────────┴─────────────────────────────────┴────────┘


./mc admin decommission start dev-minio/ /home/minio/data{1...4}
    Decommission started successfully for `/home/minio/data{1...4}`.


./mc admin decommission status dev-minio
┌─────┬─────────────────────────┬─────────────────────────────────┬──────────┐
│ ID  │ Pools                   │ Capacity                        │ Status   │
│ 1st │ /home/minio/data{1...4} │ 67 GiB (used) / 3.0 TiB (total) │ Draining │
│ 2nd │ /home/minio/data{5...8} │ 68 GiB (used) / 3.0 TiB (total) │ Active   │
└─────┴─────────────────────────┴─────────────────────────────────┴──────────┘

./mc admin decommission status dev-minio /home/minio/data{1...4}
    Decommissioning rate at 155 B/sec [67 GiB/3.0 TiB]
    Started: 1 minute ago


# 如果状态读取为失败，您可以重新运行该 命令以恢复该过程。对于持续性故障，使用或查看日志（例如）以识别更具体的错误。
./mc admin console dev-minio
journalctl -f -n 1000 -u minio


# 执行完成后，修改启动命令参数
vim /home/minio/.bashrc
    MINIO_VOLUMES="/home/minio/data{1...4} /home/minio/data{5...8}"
    # 修改为
    MINIO_VOLUMES="/home/minio/data{5...8}"

# 重启minio
systemctl restart minio

# 删除老文件目录
rm -rf /home/minio/data1 /home/minio/data2 /home/minio/data3 /home/minio/data4
```

### 3.3升级minio

```bash
cd /home/minio
wget https://dl.min.io/server/minio/release/linux-amd64/minio minio2
chmod +x minio2
chown minio:minio minio2
mv minio2 minio

./mc admin service restart dev-minio
# 或者
systemctl restart minio
```

## 4.配置

```bash
# 版本控制

# 对象锁定功能

```

## 5.异常情况

```bash
# 软件异常 文件损坏 
/data5/public/Downloads/mock-partner-service-java.zip
echo "aaa" > xl.meta
# 文件改动后，会自动修复


# 硬件异常 硬盘损坏 异常断电

# 一节点 4driver的情况下，删除一个或者两个driver目录，minio会自动修复目录，删除两个以上的driver后，数据无法修复
ls
data1
data2
data3
data4

rm -rf data1
data2
data3
data4

./mc admin heal dev-minio/public
 ◓  public
    0/0 objects; 0 B in 1s
    ┌────────┬───┬─────────────────────┐
    │ Green  │ 0 │   0.0%              │
    │ Yellow │ 3 │  75.0% █████████    │
    │ Red    │ 1 │  25.0% ███          │
    │ Grey   │ 0 │   0.0%              │
    └────────┴───┴─────────────────────┘

# 如果不出现硬件故障，driver可用的情况下，minio会自动修复数据

./mc admin heal dev-minio/public
 ◓  public
    0/0 objects; 0 B in 1s
    ┌────────┬───┬─────────────────────┐
    │ Green  │ 4 │ 100.0% ████████████ │
    │ Yellow │ 0 │   0.0%              │
    │ Red    │ 0 │   0.0%              │
    │ Grey   │ 0 │   0.0%              │
    └────────┴───┴─────────────────────┘


```

## 6.纠删码

```bash
# EC:N默认设置
# 当drivers个数小于等于5时，EC:2
# 当drivers个数6-7时，EC:3
# 当drivers个数大于等于8时，EC:4

# If N is equal to exactly 1/2 the drives in the erasure set, MinIO write quorum requires N+1 drives to avoid data inconsistency (“split-brain”).

# Minio使用纠删码erasure code和校验和checksum来保护数据免受硬件故障和无声数据损坏。 即便您丢失一半数量（N/2）的硬盘，您仍然可以恢复数据。

# 纠删码的工作原理和RAID或者复制不同，像RAID6可以在损失两块盘的情况下不丢数据，而Minio纠删码可以在丢失一半的盘的情况下，仍可以保证数据安全。 而且Minio纠删码是作用在对象级别，可以一次恢复一个对象，而RAID是作用在卷级别，数据恢复时间很长。 Minio对每个对象单独编码，存储服务一经部署，通常情况下是不需要更换硬盘或者修复。Minio纠删码的设计目标是为了性能和尽可能的使用硬件加速。

# 如果8个driver，最大可以4个driver出现故障，此时可以读取数据；当小于4个driver出现故障时，可以写入数据
# 如果4个driver，最大可以2个driver出现故障，此时可以读取数据；当小于2个driver出现故障时，可以写入数据
# 注意扩容时的数据，由4driver扩容到8driver时，当前版本[RELEASE.2022-05-23T18-45-11Z],如果老的4个driver出现故障后整个集群会异常，数据丢失。


# 什么是位衰减bit rot保护?
# 位衰减又被称为数据腐化Data Rot、无声数据损坏Silent Data Corruption,是目前硬盘数据的一种严重数据丢失问题。硬盘上的数据可能会神不知鬼不觉就损坏了，也没有什么错误日志。正所谓明枪易躲，暗箭难防，这种背地里犯的错比硬盘直接咔咔宕了还危险。 不过不用怕，Minio纠删码采用了高速 HighwayHash 基于哈希的校验和来防范位衰减。

```
