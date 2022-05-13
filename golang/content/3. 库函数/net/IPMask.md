---
title: "./net/IPMask.md"
date: 2022-05-12T14:13:01+08:00
---
## 结构 IPMask

	type IPMask []byte
	
IP掩码结构

====

- func (m IPMask) Size() (ones, bits int)

返回在同一网段内该掩码下能支持多少个IP

====
- func (m IPMask) String() string

返回 掩码的字符串形式
