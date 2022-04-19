+++
# Table of content (toc) is enabled by default. Set this parameter to true to disable it.
# Note: Toc is always disabled for chapter pages
disableToc = "false"

# If set, this will be used for the page's menu entry (instead of the `title` attribute)
# 默认情况下，Hugo-theme-learn将使用页面的title属性作为菜单项（或linkTitle 如果定义）。
# 但是，当菜单是层次结构时，页面标题必须是描述性的。我们已经添加了menuTitle 用于此目的的参数：
# 例如（对于名为的页面） content/install/linux.md）：
menuTitle = ""

# The title of the page in menu will be prefixed by this HTML content
pre = ""

# The title of the page in menu will be postfixed by this HTML content
post = ""

# Set the page as a chapter, changing the way it's displayed
chapter = false

# Hide a menu entry by setting this to true
hidden = false

# Display name of this page modifier. If set, it will be displayed in the footer.
LastModifierDisplayName = ""

# Email of this page modifier. If set with LastModifierDisplayName, it will be displayed in the footer
LastModifierEmail = ""

#在页面前端中，添加一个pre参数以在菜单标签之前插入任何HTML代码。以下示例使用Github图标。
title = "Github repo"
pre = "<i class='fab fa-github'></i> "
+++

```bash
# 主页
# 要配置主页，您基本上有三个选择：

#创建一个 _index.md 文件 content文件夹并使用Markdown内容填充文件
#创建一个 index.html 文件中 static文件夹并用HTML内容填充文件
# 配置您的服务器以自动将主页重定向到您的文档页面

```
