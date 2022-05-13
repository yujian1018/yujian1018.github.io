---
title: "./time/Ticker.md"
date: 2022-05-12T14:13:01+08:00
---
# type Ticker struct {
#		C <-chan Time
# }

保存一个同步的channel，每隔一个时钟间隔发出一个Tick