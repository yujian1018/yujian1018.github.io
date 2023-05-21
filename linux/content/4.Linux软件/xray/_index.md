
# xray

## 连接

    https://github.com/XTLS/Xray-core
    https://github.com/v2rayA/v2rayA [ui]

## 安装

    xray run -c /etc/xray/config.json

## 更新系统

    sudo apt update
    sudo apt upgrade -y

## 安装软件

    安装Nginx
    安装xray
    
    mkdir xray
    cd xray 
    wget https://github.com/XTLS/Xray-core/releases/download/v1.8.1/Xray-linux-64.zip
    unzip Xray-linux-64.zip
    vim server.json
    xray run -c server.json
