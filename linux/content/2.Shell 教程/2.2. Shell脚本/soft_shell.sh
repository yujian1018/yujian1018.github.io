#!/bin/sh


string="alibaba is a great company"
echo `expr index "$string" is`


# 日期
date "+%Y%m%d%M" #-> 2018062547
date "+%Y-%m-%d %H:%M:%S"


#
nohup cmd &


# 
fun_erl() {
    echo erl -name "$NAME" -config config/sys -config config/${APP_NAME}_"$CONFIG" -args_file config/vm.args -args_file config/${APP_NAME}_vm.args
    erl -name "$NAME" -config config/sys -config config/${APP_NAME}_"$CONFIG" -args_file config/vm.args -args_file config/${APP_NAME}_vm.args
}