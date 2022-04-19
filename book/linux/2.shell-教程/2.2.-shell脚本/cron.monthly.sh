---
title: "cron"
menuTitle: "cron"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
#!/bin/sh

#crontab -uroot -e
#0 5 1 * * sh /root/cron/monthly.sh > /root/cron/log_monthly.log

DATE=$(date +%F_%H_%M)

fun_nginx() {
    #nginx按天记录日志
    mv /usr/local/nginx/logs/access.log /usr/local/nginx/logs/access_${DATE}.log
    /usr/local/nginx/sbin/nginx -s reload
}

fun_nginx