---
title: "./net/AddrError.md"
date: 2022-05-12T14:13:01+08:00
---
## 类型 AddrError

Addr 错误结构 - 请参考 Error包

结构:

	type AddrError struct {
	    Err  string
	    Addr string
	}


- func (*AddrError) Error

- func (*AddrError) Temporary

- func (*AddrError) Timeout


