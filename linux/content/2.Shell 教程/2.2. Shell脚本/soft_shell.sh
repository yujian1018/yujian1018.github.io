#!/bin/sh


string="alibaba is a great company"
echo `expr index "$string" is`


# 日期
date "+%Y%m%d%M" #-> 2018062547
date "+%Y-%m-%d %H:%M:%S"


#
nohup cmd &

