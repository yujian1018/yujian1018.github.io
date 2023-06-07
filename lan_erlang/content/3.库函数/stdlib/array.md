函数式且可扩展的数组模块

```erlang
内部实现：tuple

array:new(10, {default, {[], 0}}). -> {array,10,0,{[],0},10}
array:set( 0, [1,2,3], Array2 ). -> Array
array:get( 0, Array3 ). -> [1,2,3].
array:reset(Index, Array). 清空该列
array:from_list(Sub)
```

![图片](/images/screenshot_1534642192915.png)
