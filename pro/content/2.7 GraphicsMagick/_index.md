---
title: "2.7 GraphicsMagick"
date: 2019-08-30T10:56:29+08:00
weight: 02070000
chapter: true
---

## 开源的图像处理软件

GraphicsMagick官网
GraphicsMagick编程接口  
GraphicsMagick 命令行参数，说明文档

GraphicsMagick的命令概览
----------------------------------------------------------------------------

[ convert | identify | mogrify | composite | montage | compare | display | animate | import | conjure ]

convert：转换图像格式和大小，模糊，裁剪，驱除污点，抖动，临近，图片上画图片，加入新图片，生成缩略图等。 
identify：描述一个或较多图像文件的格式和特性。 
mogrify：按规定尺寸***一个图像，模糊，裁剪，抖动等。Mogrify改写最初的图像文件然后写到一个不同的图像文件。 
composite：根据一个图片或多个图片组合生成图片。 
montage：创建一些分开的要素图像。在含有要素图像任意的装饰图片，如边框、结构、图片名称等。 
compare：在算术上和视觉上评估不同的图片***其它的改造图片。 
display：如果你拥有一个X server的系统，它可以按次序的显示图片 
animate：利用X server显示动画图片 
import：在X server或任何可见的窗口上输出图片文件。 你可以捕获单一窗口，整个的荧屏或任何荧屏的矩形部分。 
conjure：解释执行 MSL (Magick Scripting Language) 写的脚本。

需要安装的依赖库函数
png <http://www.libpng.org/pub/png/pngcode.html> apt-get install libpng
 www.zlib.net yum install libpng-devel
jpg <http://www.remotesensing.org/libtiff/> apt-get install libtiff
  yum install libtiff-devel
  
![](images/screenshot_1527427965176.png)
