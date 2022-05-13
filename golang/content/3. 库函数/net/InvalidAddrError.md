---
title: "./net/InvalidAddrError.md"
date: 2022-05-12T14:13:01+08:00
---
## 结构 InvalidAddrError

	type InvalidAddrError string

非法地址错误,请查看Error包
	
====
- func (e InvalidAddrError) Error() string

- func (e InvalidAddrError) Temporary() bool

- func (e InvalidAddrError) Timeout() bool

