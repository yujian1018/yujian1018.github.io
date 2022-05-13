---
title: "./time/Timer.md"
date: 2022-05-12T14:13:01+08:00
---
# type Timer Struct {
#		C <-Time
# }

代表一个单独的事件，当时间过期的时候，把当前的时间发送给C，除非Timer是由[AfterFunc](AfterFunc.md)创建的。

