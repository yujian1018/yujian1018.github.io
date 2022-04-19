---
title: "st"
menuTitle: "st"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
#!/usr/bin/env bash


ARG_1=$1
ARG_2=$2


os_type='Linux'

if [ "$(uname)" == "Darwin" ];then # Mac OS X 操作系统
    os_type="Darwin"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ];then # GNU/Linux操作系统
    os_type='Linux'
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ];then # Windows NT操作系统
    os_type="MINGW32_NT"
fi


fun_build(){
    case ${ARG_2} in
        'init')
            source venv/bin/activate ;;
        'install')
            pip install -r requirements.txt ;;
         'cc')
            (cd lib/common;make -C c_src)
	        (cd lib/jiffy;./rebar clean;./rebar co) ;;
        'rebuild')
            (cd lib/common;make def)
            (cd apps/global;make def)
            (cd user;make def)
            (cd gateway;make all)
            (make cl)
            (make co) ;;
        *)
            ./rebar compile ;;
    esac
}


release(){
    VERSION=`awk -F'"' '/{health/{print $2}' rebar.config`
    mysqldump -u root -p123456 --port 27199 --databases ${VERSION} > ${VERSION}.sql
    mv ${VERSION}.sql ../db/sql/release/
    git add -A
    git commit
    git push
    git checkout develop
    git merge yujian
    git push
    git checkout master
    git merge develop
    git push
    git checkout yujian
    git tag -a ${VERSION}
    git push --tags;;
}


zip_release(){
    DATE=`date +%F_%H_%M`
    date -d "1 day ago" +"%Y-%m-%d"
    APP_NAME=${ARG_2}
    VERSION=`awk -F'"' '/{health/{print $2}' rebar.config`
    rm -rf ${APP_NAME}_*.zip
    mkdir -p ${VERSION}

    cp -rf ${APP_NAME} ${VERSION}
    cp -f st.sh ${VERSION}
    cp -rf libs ${VERSION}

    rm -rf ${VERSION}/*/.git

    case $1 in
        'MINGW32_NT')
            zip -rq -l ${APP_NAME}_${VERSION}_${DATE}.zip ${VERSION} ;;
        *)
            zip -rq -ll ${APP_NAME}_${VERSION}_${DATE}.zip ${VERSION} ;;
    esac
    rm -rf ${VERSION}
    echo ${VERSION}
}

tar_release(){
    DATE=`date +%F_%H_%M`
    APP_NAME=${ARG_2}
    VERSION=`awk -F'"' '/{health/{print $2}' rebar.config`
    rm -rf ${APP_NAME}_*.zip
    mkdir -p ${VERSION}

    cp -rf ${APP_NAME} ${VERSION}
    cp -f st.sh ${VERSION}
    cp -rf libs ${VERSION}

    rm -rf ${VERSION}/*/.git

    tar -zcf ${APP_NAME}_${VERSION}_${DATE}.tar.gz ${VERSION}
    rm -rf ${VERSION}
    echo ${VERSION}
}


fun_zip(){
    case ${ARG_2} in
        'release')
            release ;;
        'win')
            os_type="MINGW32_NT"
            zip_release os_type;;
        'tag_del')
            TAG_NAME=$2
            git tag -d ${TAG_NAME}
            git push origin --delete tag ${TAG_NAME} ;;
        *)
            os_type='Linux'
            zip_release os_type;;
    esac
}


fun_tar(){
    case ${ARG_2} in
        *)
            tar_release;;
    esac
}


fun_git(){
    case ${ARG_2} in
        'release')
            release ;;
        'tag_del')
            TAG_NAME=$2
            git tag -d ${TAG_NAME}
            git push origin --delete tag ${TAG_NAME} ;;
        *)
            git add -A
            git commit ;;
    esac
}


fun_scp(){
    case ${ARG_2} in
        'scp_rar')
            scp health_*.zip root@212.64.37.40:/root/project/health/ ;;
        'scp_data')
            scp config/database/*.data root@212.64.37.40:/root/project/health/${VERSION}/config/database/ ;;
        *)
            scp _build/default/lib/$2/ebin/$3.beam root@212.64.37.40:/root/project/health/${VERSION}/_build/default/lib/$2/ebin/ ;;
    esac
}


fun_run(){
    case ${ARG_2} in
        't')
            curl -i 'http://192.168.72.74:61003/crontab/1?sign=aaa' ;;
        *)

            APP_NAME=$2
            IP=$3
            PORT=$4

            if [ "${PORT}" = "" ]; then
                CONFIG=${IP}
                NAME=${APP_NAME}@${IP}
            else
                CONFIG=${IP}_${PORT}
                NAME=${APP_NAME}_${PORT}@${IP}
            fi

            OPTIONS=" -name ${NAME}"
            CONFIGS=" -config config/sys -config config/${APP_NAME}_${CONFIG}"
            ARGS+=" -args_file config/vm.args -args_file config/${APP_NAME}_vm.args"
            echo erl ${CONFIGS} ${ARGS} ${OPTIONS};
            erl ${CONFIGS} ${ARGS}  ${OPTIONS} ;;
    esac
}


fun_info(){
    case ${ARG_2} in
        'ps')
            show_info ;;
        *)
            echo "./st.sh info |h | help"
            echo "./st.sh build[cc, rebuild, init, install]"
            echo "./st.sh zip[zip, zip_win, release, tag_del]"
            echo "./st.sh sh ip port"
            echo "./st.sh cc"
            echo "./st.sh apps(health) ip port"
            echo "./st.sh scp_rar"
            echo "./st.sh scp apps(http || health) file" ;;
    esac
}

# 编译 make rebuild cc
# 部署 init:初始化 install:安装
# 压缩 zip release tag_del
# 文件传输 scp scp_rar scp_data
# 启动 run t
# 信息 h|help ps
# 其他 sh

case ${ARG_1} in
    'build')
        fun_build ;;
    'zip') #7z 和 zip 压缩格式都不能保留 unix 风格的文件权限
        fun_zip ;;
    'tar') #而 tar 本身不提供压缩，无非就是把包括所有文件的內容和权限拼成一个文件而己，所以用另外如 gzip 格式压缩。为什么是 gzip，因为几乎所有 linux 都支持而已
        fun_tar ;;
    'git')
        fun_git ;;
    'scp')
        fun_scp ;;
    'run')
        fun_run ;;
    'h'|'help'|'info')
        fun_info ;;
    'sh')
        erl -setcookie c847efcb974ad5164d5d867d1bb2f0f9 -name sh@127.0.0.1 -epmd_port 27100 -epmd "epmd -port 27100 -daemon" -remsh ${NAME};;
    *)
        echo '没有该命令' ;;
esac