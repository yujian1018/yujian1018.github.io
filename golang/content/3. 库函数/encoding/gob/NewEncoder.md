---
title: "./encoding/gob/NewEncoder.md"
date: 2022-05-12T14:13:01+08:00
---
func NewEncoder(w io.writer) *Encoder 

参数列表:

- r Writer对象

返回值:

- *Encoderr 指向Encoder的指针

功能说明:

这个函数主要是给w创建一个encoder实例


代码：

[gob.go](gob.go)


