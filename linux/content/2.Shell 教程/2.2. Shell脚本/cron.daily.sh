---
title: "cron"
date: 2019-08-30T15:13:01+08:00
---

#!/bin/sh

##crontab -uroot -e
##30 4 * * * sh /root/cron/daily.sh > /root/cron/log_daily.log

DATE=$(date +%F_%H_%M)

## 同步时间
fun_sync_date() {
    #备份源文件
    mv /etc/localtime /etc/localtimebak
    #修改时区为东八区
    ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
    #调试查看时间差异
    ntpdate -d cn.pool.ntp.org
    #同步时间
    ntpdate cn.pool.ntp.org && hwclock --systohc && hwclock -w # 通过对时服务器核对时间，并写入硬件
}

fun_sync_file() {
    #>/usr/bin/rsync --daemon #启动rsync服务
    #>echo "/usr/bin/rsync --daemon" >> /etc/rc.d/rc.local #把rsync加入自动启动脚本，开机后自动启动
    #a:表示以递归方式传输文件，并保持所有文件属性，等于-rlptgoD
    #v:详细模式输出
    #r:表示保持属性，
    #t:表示保持时间，
    #L:表示软link视作普通文件。
    #p:想显示具体传输过程
    #z:压缩传输
    #u:仅仅进行更新
    #e:--rsh=command 指定使用rsh、ssh方式进行数据同步
    #--delete:删除那些DST中SRC没有的文件
    #-progress:在传输时现实传输过程。
    rsync -azue ssh --delete /root/git root@1.2.3.4:/root/
    rsync -azuev ssh --delete /var/www/media /var/www/voice                          #本地拷贝目录
    rsync -azuev ssh --delete --progress /var/www/media root@1.2.3.4://var/www/media #将本地目录拷贝到远程服务器 -e "ssh -p 你的SSH端口"
}

fun_mysqldump() {
    find /root/cron/ -mtime +10 -name "*.sql" | xargs rm -rf
    find /var/www/file/ -type f -mtime +3 | xargs rm -rf
    mysqldump -u root -p123456 --port 3066 --databases snake_account snake_d_1 snake_gm snake_log_1 snake_s_1 >/root/cron/mysql_${DATE}.sql
}

fun_nginx() {
    #nginx按天记录日志
    mv /usr/local/nginx/logs/access.log /usr/local/nginx/logs/access_${DATE}.log
    /usr/local/nginx/sbin/nginx -s reload
}

fun_let_encrypt() {
    export Ali_Key="aaa"
    export Ali_Secret="bbb"

    acme.sh --renew -d 01cs.cc -d *.01cs.cc --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please

}

fun_sync_date
fun_let_encrypt
fun_nginx
