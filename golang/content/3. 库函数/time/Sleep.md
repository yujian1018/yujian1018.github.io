---
title: "./time/Sleep.md"
date: 2022-05-12T14:13:01+08:00
---
# func Sleep(d Duration)

参数列表：

- d 时间跨度

返回值：

- 无

功能说明：

使当前goroutine暂停指定时间

代码实例：

    package main
  
    import (
      "time"
    )
  
    func main() {
      time.Sleep(100 * time.Millisecond)
    }
