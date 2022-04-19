---
title: "3.系统管理"
date: 2019-08-30T10:56:29+08:00
chapter: true
---

## 系统管理

系统的整体性能取决于各种资源的平衡，类似木桶理论，某种资源的耗尽会严重阻碍系统的性能。

Linux中需要监控的资源主要有 CPU、主存（内存）、硬盘空间、I/O时间、网络时间、应用程序等。

影响系统性能的主要因素有：
| 因素 | 说明 |
| :--- | :--- |
| 用户态CPU | CPU在用户态运行用户程序所花费的时间，包括库调用，但是不包括内核花费的时间。 |
| 内核态CPU | CPU在内核态运行系统服务所花费的时间。所有的 I/O 操作都需要调用系统服务，程序员可以通过阻塞 I/O 传输来影响这部分 |的时间。
| I | O 时间和网络时间 响应 I/O 请求、处理网络连接所花费的时间。 |
| 内存 | 切换上下文和交换数据（虚拟内存页导入和导出）花费的时间。 |
| 应用程序 | 程序等待运行的时间——CPU正在运行其他程序，等待切换到当前程序。 |

说明：一般认为用户态CPU和内核态CPU花费的时间小于70%时是良好状态。

下面的命令可以用来监控系统性能并作出相应调整：
| 命令 | 说明 |
| :--- | :--- |
| nice | 启动程序时指定进程优先级。 |
| renice | 调整现有进程的优先级。 |
| netstat | 显示各种网络相关信息，包括网络连接情况、路由表、接口状态(Interface Statistics)、masquerade 连接、多播成员(Multicast Memberships)等。实际上，netstat 用于显示与IP、TCP、UDP和ICMP协议相关的统计数据，一般用于检验本机各端口的网络连接情况。 |
| time | 检测一个命令运行时间以及资源（CPU、内存、I/O等）使用情况。 |
| uptime | 查看系统负载情况。 |
| ps | 查看系统中进程的资源使用情况（瞬时状态，不是动态监控）。 |
| vmstat | 报告虚拟内存使用情况。 |
| gprof | 精确分析程序的性能，能给出函数调用时间、调用次数、调用关系等。 |
| top | 实时监控系统中各个进程资源的资源使用情况。 |

常用命令组合：

vmstat、sar、mpstat检测是否存在CPU瓶颈；

vmstat、free检测是否存在内存瓶颈；

iostat检测是否存在磁盘I/O瓶颈；

netstat检测是否存在网络I/O瓶颈。

```bash
ps -a     显示所有用户的所有进程。
-x     显示无终端的进程。
-u     显示更多信息，类似于 -f 选项。
-e     显示所有进程。

ps -ef|grep mysql 查看带有mysql的进程  
kill kill -9
 ps kill -9 [PID] -9 表示强迫进程立即停止
 
 
系统信息 free -m 将结果以M为单位输出 查看系统中使用和剩馀的内存情况。
 top 运行着的进程和系统资源，包括 CPU、内存以及交换分区使用情况和运行着的任务的总的数量
 uname 命令的 -a 参数用来查看系统的所有信息，包括 机器名，内核名称 & 版本 和一些其它的细节。
         -m 显示机器的处理器架构 
-r 显示正在使用的内核版本
 lsb_release -a 参数查看当前运行的linux的版本信息
 ifconfig 显示当前系统的网络接口信息
 arch 显示机器的处理器架构 
dmidecode -q 显示硬件系统部件 - (SMBIOS / DMI)
 hdparm -i /dev/hda 罗列一个磁盘的架构特性 
hdparm -tT /dev/sda 在磁盘上执行测试性读取操作
 lspci -tv 罗列 PCI 设备  
lsusb -tv 显示 USB 设备
 
adduser newuser 添加新用户
 useradd 添加用户
 usermod 修改用户信息
 userdel 删除用户
 groupadd 添加用户组
 groupmod 修改用户组信息
 groupdel 删除用户组
passwd newuser 为新用户 newuser 创建一个密码
passwd 修改密码
man  man intro －查看 "用户命令介绍"，是一份很简介的linux命令的介绍
 man into 它通常比man 还深入。输入"info info" 命令可得到info页的介绍
 man -k foo 会搜索关于foo的man文件。试试看"man -k nautilus" 是怎样的
 man -f foo 仅仅搜所系统man文件的标题
whatis 
users、who、w 查看当前在线用户
whoami 查看当前用户信息
logout 退出登录 注销
 shutdown 安全关闭系统
 -r –r 10 "message" 将系统服务停掉然后重启 
 -h –h +5 –h 18:00 将系统服务停掉,然后关机 
 -c 取消已经在运行的 shutdown 命令内容
 
 reboot 重新启动系统 
 poweroff 通过断电来关闭系统
 halt 直接关闭系统
 init 0 使用预先定义的脚本关闭系统，关闭前可以清理和更新有关信息
 init 6 重新启动系统
 
 
date  显示系统日期
 date 设置系统时钟时间 
    设置时间为下午14点36分。 # date -s 14:36:00 
    设置时间为1999年11月28号。 # date -s 991128 
    设置时间伟2008年8月8号12:00 # date -s "2008-08-08 12:00:00"
修改完后,记得执行clock -w，把系统时间写入CMOS(硬件) 

 hwclock --show 查看计算机硬件时间
 tzselect 设置时区 hwcolock -w保存 设置硬件时钟
 ntpdate us.pool.ntp.org 同步时间
 clock -w 将时间修改保存到 BIOS 
hostname 修改主机名称


列 描述
UID 进程所属用户的ID，即哪个用户创建了该进程。
PID 进程ID。
PPID 父进程ID，创建该进程的进程称为父进程。
C CPU使用率。
STIME 进程被创建的时间。
TTY 与进程有关的终端类型。
TIME 进程所使用的CPU时间。
CMD 创建该进程的命令。

```

## 常用命令

| 命令 | 说明 |
| :--- | :--- |
| adduser | |
| exit | |
| suspend | |
| kill | |
| logname | |
| procinfo | |
| rlogin | |
| shutdown | |
| swatch | |
| chsh | |
| vlock | |
| newgrp | |
| w | |
| chfn | |
| finger | |
| groupdel | |
| last | |
| logout | |
| top | |
| rsh | |
| rwho | |
| tload | |
| userconf | |
| who | |
| renice | |
| id | |
| useradd | |
| fwhios | |
| groupmod | |
| lastb | |
| ps | |
| pstree | |
| sliplogin | |
| sudo | |
| logrotate | |
| userdel | |
| whoami | |
| su | |
| free | |
| date | |
| sleep | |
| halt | |
| login | |
| nice | |
| reboot | |
| screen | |
| gitps | |
| uname | |
| usermod | |
| whois | |
| skill | |
