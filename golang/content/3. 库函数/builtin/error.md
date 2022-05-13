---
title: "./builtin/error.md"
date: 2022-05-12T14:13:01+08:00
---
## type error
~~~go
type error interface {
    Error() string
}
~~~

功能说明：

error 内建接口类型是表示错误情况的约定接口，nil 值即表示没有错误。