---
title: "yaws"
menuTitle: "yaws"
weight: 0
date: 2019-08-30T15:13:01+08:00
---

<http://yaws.hyber.org/yman.yaws?page=yaws.conf>

yaws默认上传文件大小为：2048
partial_post_size = nolimit 上传的文件无限大
post限制
partial_post_size = 2048

缓存机制
max_num_cached_files
max_num_cached_bytes
max_size_cached_file
cache_refresh_secs

max_connections

list_dir
errormod_crash = Module
errormod_401 = Module
errormod_404 = Module Module:out404(Arg, GC, SC)

Arg - a #arg{} record
GC - a #gconf{} record (defined in yaws.hrl)
SC - a #sconf{} record (defined in yaws.hrl)

url重写
appmods = <Path1, Module1> <Path2, Modules2>
appmods = <cgi-bin, yaws_appmod_cgi>

session 存活时间
keepalive_timeout = 1*3600*8*1000

![](images/screenshot_1527428560656.png)
