---
title: "install_apt"
menuTitle: "install_apt"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
#!/bin/sh

sudo apt update

sudo apt install -y make gcc g++ openssl libssl-dev ssh autoconf;

sudo apt install -y vim git tmux curl rsync;



# /proc/sys/fs/file-max限制不了/etc/security/limits.conf
# 只有root用户才有权限修改/etc/security/limits.conf
# 对于非root用户， /etc/security/limits.conf会限制ulimit -n，但是限制不了root用户
# 对于非root用户，ulimit -n只能越设置越小，root用户则无限制
# 任何用户对ulimit -n的修改只在当前环境有效，退出后失效，重新登录新来后，ulimit -n由limits.conf决定
# 如果limits.conf没有做设定，则默认值是1024
# 当前环境的用户所有进程能打开的最大问价数量由ulimit -n决定
vim /etc/security/limits.conf
* soft nproc 2047		# --nproc：用户可用的最大进程数量 硬配置和软配置 硬配置是个上限
* hard nproc 16384
* soft nofile 1024		#--nofile：当前shell以及该shell启动的进程打开的文件数量
* hard nofile 65536

vim /etc/sysctl.conf
fs.nr_open = 10000000  	#进程级别
fs.file-max = 11000000 	#系统级别

cat /proc/sys/fs/file-max
cat /proc/sys/fs/nr_open



# mysql
# redis
# svn
# git
# sds
# ssh