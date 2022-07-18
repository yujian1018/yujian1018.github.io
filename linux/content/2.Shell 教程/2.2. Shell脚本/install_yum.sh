#!/bin/sh
yum -y update

yum -y install make gcc gcc-c++ kernel-devel openssl-devel ssh autoconf;

yum -y install vim git tmux curl rsync;


rpm:
安装
# rpm -ivh

移走一个包
# rpm -e

卸载
rpm -qa|grep mysql
rpm -e mysql

yum:
# yum install 包名
# yum -y remove 包名
yum clean all

#linux版本
cat /etc/os-release

getconf LONG_BIT

