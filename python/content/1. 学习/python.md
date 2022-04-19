---
title: "python"
date: 2019-08-30T15:13:01+08:00
---

## python环境

## 问题

### 获取python2.x版本pip

```bash
curl <https://bootstrap.pypa.io/get-pip.py> -o get-pip.py
python2 get-pip.py
```

### psycopg2包安装错误

```bash
yum install postgresql-devel
pip2 install psycopg2
```

### 推送

```bash
#配置私有库
[distutils]
index-servers =
    pypi
    nexus
 test

 
[pypi]
repository:https://pypi.python.org/pypi
username:your_username
password:your_password

 
[nexus]
repository=http://121.36.244.209:18081/repository/hangtianpypi-hosted/
username=admin
password=hangtian123

[test]
repository=http://123.60.15.47:18081/repository/hangtianpypi-hosted/
username=admin
password=wlxihu123


#上传命令 
python setup.py sdist upload -r test
```
