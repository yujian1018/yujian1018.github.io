---
title: "./index/suffixarray/New.md"
date: 2022-05-12T14:13:01+08:00
---
## func New(data []byte) *Index
参数列表

- data 需要创建Index的数据

返回值

- 返回Index类型

功能说明： 创建一个索引

代码示例

	package main
	
	import (
		"fmt"
		"index/suffixarray"
	)
	
	func main() {
		data := []byte("aaaa")
		index := suffixarray.New(data) 
		
	}