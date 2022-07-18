#!/bin/sh

#crontab -uroot -e
#0 5 1 * * sh /root/cron/monthly.sh > /root/cron/log_monthly.log

DATE=$(date +%F_%H_%M)

fun_nginx() {
    #nginx按月记录日志
    mv /usr/local/nginx/logs/access.log /usr/local/nginx/logs/access_${DATE}.log
    /usr/local/nginx/sbin/nginx -s reload
}

fun_nginx