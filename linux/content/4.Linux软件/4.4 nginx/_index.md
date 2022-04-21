---
title: "4.4 nginx"
date: 2019-08-30T10:56:29+08:00
chapter: true
weight: 04040000
---

## nginx使用

```bash
## ubuntu
sudo apt install -y libpcre3-dev

./configure --with-http_ssl_module --with-http_v2_module --with-http_gzip_static_module

make
sudo make install
```

## Generate Certificates

```bash
cd /usr/local/nginx/conf
openssl genrsa -des3 -out server.key 1024
openssl req -new -key server.key -out server.csr
cp server.key server.key.org
openssl rsa -in server.key.org -out server.key
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt


server {

    server_name YOUR_DOMAINNAME_HERE;
    listen 443;
    ssl on;
    ssl_certificate /usr/local/nginx/conf/server.crt;
    ssl_certificate_key /usr/local/nginx/conf/server.key;

}

```
