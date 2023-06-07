# func Sprintf(format string, a ...interface{}) string

参数列表

- format 打印的格式说明 
- a... 值变量列表

返回值：

- 返回打印字符串

功能说明：

这个函数主要是用来根据说明格式字符串和参数表生成一个打印字符串

代码实例：

 	package main
	
	import 	"fmt"
		
	func main() {
		str := fmt.Sprintf("Format:%s\n","格式打印出字符串!")
		fmt.Println(str)  // Format:格式打印出字符串!
	}
