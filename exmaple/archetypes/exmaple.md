---
title: "文章标题"
description: "文章的描述信息"
tags: [ "标签1", "标签2", "标签3" ]
categories: [ "分类1", "分类2" ]
keywords: [ "Hugo", "keyword" ]
date: 2012-04-06
lastmod: 2015-12-23
# CJKLanguage: Chinese, Japanese, Korean
isCJKLanguage: true

# 如果draft为true，除非使用 --buildDrafts 参数，否则不会发布文章
draft: false

# 设置文章的过期时间，如果是已过期的文章则不会发布，除非使用 --buildExpired 参数
expiryDate: 2020-01-01

# 设置文章的发布时间，如果是未来的时间则不会发布，除非使用 --buildFuture 参数
publishDate: 2020-01-01

# 排序你的文章
weight: 40

# 使用这两个参数将会重置permalink，默认使用文件名
url: 
slug: 

# 别名将通过重定向实现
aliases:
  - 别名1
  - /posts/my-original-url/
  - /2010/01/01/another-url.html

# type 与 layout 参数将会改变 Hugo 寻找该文章模板的顺序，将在下一节细述
type: review
layout: reviewarticle

# 三个比较复杂的参数
taxonomies:
linkTitle: 
outputs:
# 实验性的参数
markup: "md"

# 你还可以自定义任何参数，这些参数可以在模板中使用
include_toc: true
show_comments: false
---