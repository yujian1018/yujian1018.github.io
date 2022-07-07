---
title: "soft_shell"
menuTitle: "soft_shell"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
#!/bin/sh


string="alibaba is a great company"
echo `expr index "$string" is`


# 日期
date "+%Y%m%d%M" #-> 2018062547
date "+%Y-%m-%d %H:%M:%S"


#
nohup cmd &

