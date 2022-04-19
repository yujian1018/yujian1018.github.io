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

# 编译 make rebuild cc
# 部署 init:初始化 install:安装
# 压缩 zip release tag_del
# 文件传输 scp scp_rar scp_data
# 启动 run t
# 信息 h|help ps

case ${ARG_1} in
'build')
    rm -rf me
    rm -rf book
    mkdir book

    cd blog && hugo && cd ../ && mv blog/public me
    cd cpp && hugo && cd ../ && mv cpp/public book/cpp
    cd erlang && hugo && cd ../ && mv erlang/public book/erlang
    cd game && hugo && cd ../ && mv game/public book/game
    cd golang && hugo && cd ../ && mv golang/public book/golang
    cd html5 && hugo && cd ../ && mv html5/public book/html5
    cd linux && hugo && cd ../ && mv linux/public book/linux
    cd pro && hugo && cd ../ && mv pro/public book/pro
    cd python && hugo && cd ../ && mv python/public book/python
    cd rust && hugo && cd ../ && mv rust/public book/rust

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
