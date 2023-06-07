## func (e CorruptInputError) Error() string

参数列表：

无

返回值：

- 错误描述

功能说明：

返回错误描述

代码实例：

```go
package examples

import (
    "fmt"
    "encoding/base64"
)

func ExampleCorruptInputError1() {

    // 不合法的 base64 串
    src := "dGhpcyBpcyBhI@HRlc3Qgc3RyaW5nLg=="
    maxlen := base64.StdEncoding.DecodedLen(len(src))
    dst := make([]byte, maxlen)
    _, err := base64.StdEncoding.Decode(dst, []byte(src))
    if err != nil {
        fmt.Println(err.Error())
    }

    // Output:
    // illegal base64 data at input byte 13
}
```
