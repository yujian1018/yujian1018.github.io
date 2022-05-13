---
title: "./sort/Float64s.md"
date: 2022-05-12T14:13:01+08:00
---
## func Float64s(a []float64)

参数列表

- a 表示要排序的 float64 切片

功能说明：

Float64s 以升序排列 float64 切片

代码实例：

	package main
	
	import (
		"fmt"
		"sort"
	)
		
	func main() {
		a := []float64{5.5, 2.2, 6.6, 3.3, 1.1, 4.4} // unsorted
		sort.Float64s(a)
		fmt.Println(a)
		// Output: [1.1 2.2 3.3 4.4 5.5 6.6]
	}
	





