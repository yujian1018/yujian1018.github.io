#!/usr/bin/env bash

ARG_1=$1
ARG_2=$2

os_type='Linux'

if [ "$(uname)" == "Darwin" ]; then # Mac OS X 操作系统
    os_type="Darwin"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then # GNU/Linux操作系统
    os_type='Linux'
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then # Windows NT操作系统
    os_type="MINGW32_NT"
fi

# 主题
# mkdir themes
# git clone https://github.com/matcornic/hugo-theme-learn.git
# git clone https://github.com/theNewDynamic/gohugo-theme-ananke.git ananke
# git clone https://github.com/xslingcn/vno-hugo.git
# git clone https://github.com/heyeshuang/hugo-theme-tokiwa.git

# 编译 make rebuild cc
# 部署 init:初始化 install:安装
# 压缩 zip release tag_del
# 文件传输 scp scp_rar scp_data
# 启动 run t
# 信息 h|help ps

case ${ARG_1} in
'build')
    if [ ! -d "book" ]; then
        mkdir book
    fi

    cd blog && hugo --config config.yaml && cd ../ && rm -rf me && mv blog/public me
    cd cpp && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/cpp && mv cpp/public book/cpp
    cd erlang && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/erlang && mv erlang/public book/erlang
    cd game && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/game && mv game/public book/game
    cd golang && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/golang && mv golang/public book/golang
    cd html5 && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/html5 && mv html5/public book/html5
    cd linux && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/linux && mv linux/public book/linux
    cd pro && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/pro && mv pro/public book/pro
    cd python && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/python && mv python/public book/python
    cd rust && hugo --config ../config.yaml,config.yaml && cd ../ && rm -rf book/rust && mv rust/public book/rust

    ;;

'tar') #而 tar 本身不提供压缩，无非就是把包括所有文件的內容和权限拼成一个文件而己，所以用另外如 gzip 格式压缩。为什么是 gzip，因为几乎所有 linux 都支持而已
    DATE=$(date +%F_%H_%M)
    rm -rf *.tar.gz
    tar -zcf ${DATE}.tar.gz blog book
    ;;
'h' | 'help' | 'info')
    echo "./st.sh info |h | help"
    echo "./st.sh build[cc, rebuild, init, install]"
    echo "./st.sh zip[zip, zip_win, release, tag_del]"
    echo "./st.sh sh ip port"
    echo "./st.sh cc"
    echo "./st.sh apps(health) ip port"
    echo "./st.sh scp_rar"
    echo "./st.sh scp apps(http || health) file"
    ;;
*)

    if grep -q "文件存在
    1" README.md; then
        echo "true"
    else
        echo "false"
    fi

    if [ -e /temp/test.log ]; then
        //这里是判断语句，-e表示进行比较结果为真则存在
        echo "文件存在"
    else
        echo "文件不存在"
    fi
    ;;
esac

# hugo --config config/config_blog.toml --contentDir="content_blog" server
# hugo --config config.yaml server
# hugo new article/框架图.md

# ! -d "book" book目录是否存在
