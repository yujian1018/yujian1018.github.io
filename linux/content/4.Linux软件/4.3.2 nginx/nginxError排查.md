---
title: "nginxError排查"
date: 2019-08-30T15:13:01+08:00
---

## nginxError排查

### 错误描述 {error, socket_closed_remotely}

#### 复现

Leofs（分布式文件存储系统）  
Gateway_0 192.168.1.16:8080  
Gateway_1 192.168.1.17:8080  
100w条 每条500字节数据，由erlang httpc post到任意gateway， 所有数据存储ok

加入nginx，放在192.168.1.16:80，负载 ->  
192.168.1.16:8080  
192.168.1.17:8080

此时测试  
客户端会出现在某次post时{error, socket_closed_remotely}

#### 分析

a.根据错误关键字{error, socket_closed_remotely},发现可能是服务器主动关闭了socket套接字  
b.gateway没有问题，加上nginx出现问题，考虑nginx配置是否正确  
c.nginx 官方文档  
d.google，发现有人遇到类似情况<http://rtbdev.com/2014/03/nginx-proxy-time_wait/>  

#### 技术点

TCP/IP的TIME_WAIT  
Nginx nginx代理使用了短链接的方式和后端交互的原因，使得系统TIME_WAIT的tcp连接很多  
 shell> ss -ant | awk '{++s[$1]} END {for(k in s) print k,s[k]}'
 %查看TIME_WAIT数量

upstream {
 keepalive 32;
}

server {
    ...
    location /http/ {
        proxy_pass <http://http_backend>;
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        ...
    }
}

### 错误描述 readv() failed (104: Connection reset by peer) while reading upstream

#### 分析

1.认为是配置问题。（没有查到）  
2.检查leofs服务器，发现问题。服务器主动关闭connect，导致keep-alive出现问题  

#### 技术点

修改成按照标准的http通讯
