---
title: "YawsBug"
menuTitle: "YawsBug"
weight: 0
date: 2019-08-30T15:13:01+08:00
---

1  Failed to load setuid_drv (from "/httx/yaws/lib/yaws/priv/lib") : "Driver compiled with incorrect version of erl_driver.h"  疑似原因：
  1.It looks like you've compiled on one version of Erlang and are trying
  to run it with different version.（由A版本编译，由B版本运行）
  2.安装Aerlang版本，卸载不全，由安装B版本
  环境：
  1.Erlang版本：R15B01（安装成功）
  2.yaws：1.91（安装失败）
  目前解决办法：安装yaws1.96版本成功
2  epam.c:2:22: fatal error: pam_appl.h: 没有那个文件或目录  yum -y install pam-devel
  
  下载 openpam
  wget <http://nchc.dl.sourceforge.net/sourceforge/openpam/openpam-20130907.tar.gz>
  编译/安装 openpam
  tar zxvf openpam-20130907.tar.gz
  cd openpam-20130907
  ./configure
  sudo make install
  修改 YAWS
  cd yaws-1.97/c_src
  vim epam.c
  修改#include <pam_appl.h> 为 #include <security/pam_appl.h>
  ./configure
  sudo make install

![](images/screenshot_1527428673987.png)