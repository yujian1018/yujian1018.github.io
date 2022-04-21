---
title: "7.17 hugo"
date: 2019-08-30T10:56:29+08:00
chapter: true
weight: 07170000
---

## hugo 使用

## 安装

```bash
# 源代码安装
go get -u -v github.com/spf13/hugo

# 包安装
https://github.com/gohugoio/hugo/releases

hugo version
```

## 生成站点

```bash
hugo new site /path/to/site
hugo new site blog.01cs.cc
```

## 创建 themes 目录

```bash
cd /path/to/site
git init

# doc 模板
git clone https://github.com/matcornic/hugo-theme-learn.git 

git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
echo 'theme = "ananke"' >> config.toml

git submodule add  https://github.com/spf13/hyde.git themes/hyde
echo 'theme = "hyde"' >> config.toml
```

## 创建文章

```bash
hugo new about.md
hugo new post/first.md
```

## 运行 <http://localhost:1313>

```bash
hugo server -D

hugo server --theme=hyde --buildDrafts

hugo server --baseURL=http://yoursite.org/ \
              --port=80 \
              --appendPort=false \
              --bind=87.245.198.50 \
              --theme=hyde


使用方法:
  hugo
  hugo [flags]
  hugo [command]
  hugo [command] [flags]

节选的 command:
  new         为你的站点创建新的内容
  server      一个高性能的web服务器

节选的 flags:
  -D, --buildDrafts                包括被标记为draft的文章
  -E, --buildExpired               包括已过期的文章
  -F, --buildFuture                包括将在未来发布的文章

举几个栗子:
  hugo -D                          生成静态文件并包括draft为true的文章
  hugo new post/new-content.md     新建一篇文章
  hugo new site mysite             新建一个称为mysite的站点
  hugo server --buildExpired       启动服务器并包括已过期的文章

```

## 部署

```bash
hugo --theme=hyde --baseUrl="http://coderzh.github.io/"



```
