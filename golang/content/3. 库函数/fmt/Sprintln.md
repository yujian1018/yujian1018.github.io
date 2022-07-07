# func Sprintln(a ...interface{}) string

参数列表

- a... 值变量列表

返回值：

- 返回打印字符串

功能说明：

这个函数主要是用来根据默认格式字符串和参数表生成一个打印字符串并带换行

代码实例：

 	package main
	
	import 	"fmt"
		
	func main() {
		fmt.Sprintln("默认格式打印出字符串并带换行!")
	}
