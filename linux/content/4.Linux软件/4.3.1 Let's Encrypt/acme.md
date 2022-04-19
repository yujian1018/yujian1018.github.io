---
title: "cron"
menuTitle: "cron"
weight: 0
date: 2019-08-30T15:13:01+08:00
---

## acme.sh

```bash

#!/bin/sh

##crontab -uroot -e
##30 4 * * * sh /root/cron/daily.sh > /root/cron/log_daily.log

## acme.sh

curl  https://get.acme.sh | sh
export Ali_Key="aaa"
export Ali_Secret="bbb"
acme.sh --issue --dns dns_ali -d 01cs.cc -d *.01cs.cc


# 手动 dns 方式, 手动在域名上添加一条 txt 解析记录, 验证域名所有权.
# 然后 acme.sh 会生成相应的解析记录显示出来, 你只需要在你的域名管理面板中添加这条 txt 记录即可.
#等待解析完成之后, 重新生成证书:
acme.sh --issue -d htjicon.com -d *.htjicon.com --yes-I-know-dns-manual-mode-enough-go-ahead-please --dns
acme.sh --renew -d htjicon.com -d *.htjicon.com --yes-I-know-dns-manual-mode-enough-go-ahead-please
acme.sh --renew -d htjicon.com -d *.htjicon.com --yes-I-know-dns-manual-mode-enough-go-ahead-please --force


# 自动更新
acme.sh --installcert --force -d 01cs.cc -d *.01cs.cc --key-file /usr/local/nginx/conf/01cs.cc/01cs.cc.key --fullchain-file /usr/local/nginx/conf/01cs.cc/fullchain.cer --reloadcmd  "service nginx force-reload"

#nginx使用证书
ssl_certificate_key .acme.sh/htjicon.com/htjicon.com.key 
ssl_certificate     .acme.sh/htjicon.com/fullchain.cer

## 软件更新新版本
acme.sh --upgrade
acme.sh --upgrade  --auto-upgrade #自动升级
acme.sh --upgrade  --auto-upgrade  0 #关闭自动更新

```
