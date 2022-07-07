# func Sscanf(str string, format string, a ...interface{}) (n int, err error)

参数列表

- str 指定的源字符串
- format 输入格式说明 
- a... 值变量列表

返回值：

- 返回输入字符数 n
- 返回error

功能说明：

这个函数主要是从指定字符串str中按说明的格式读取文本，根据格式字符串顺序将数据存入参数中，
它返回成功解析并存入的参数的数量

代码实例：

        package main

        import  "fmt"

        func main(){
        	str := "13 23 45"
                var a,b,c int
                fmt.Sscanf(str,"%d,%d,%d",&a,&b,&c)
                fmt.Println(a,b,c)
        }

注意上面的Sscanf("%d,%d,%d",&a,&b,&c)中%d,%d,%d之间有逗号，
在输入数据时也要加逗号，如果去掉逗号，输入时就不用逗号，
而用空格，tab键或回车键将各个数据隔开
