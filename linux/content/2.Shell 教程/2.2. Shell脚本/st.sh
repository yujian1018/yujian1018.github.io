#!/usr/bin/env bash

DATE=$(date +%F_%H_%M)
VERSION=$(awk -F'"' '/{health/{print $2}' rebar.config)
APP_NAME="health"
CONFIG=""
NAME=""

ARG1=$1
ARG2=$2
ARG3=$3

if [ "$ARG3" = "" ]; then
    CONFIG="$ARG2"
    NAME="$APP_NAME"@"$ARG2"
else
    CONFIG="$ARG2"_"$ARG3"
    NAME="$APP_NAME"_"$ARG3"@"$ARG2"
fi
echo $NAME
echo $CONFIG

OS_TYPE='Linux'

if [ "$(uname)" == "Darwin" ]; then # Mac OS X 操作系统
    OS_TYPE="Darwin"
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then # GNU/Linux操作系统
    OS_TYPE='Linux'
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then # Windows NT操作系统
    OS_TYPE="MINGW32_NT"
fi

fun_help() {
    case $ARG2 in
    'ps')
        ps aux | grep "${NAME}"
        ;;
    *)
        echo "./st.sh cmd [args]"
        echo "./st.sh [h | help ps]"
        echo "./st.sh make [dev || prod || clean || re]"
        echo "./st.sh build[init || install]"
        echo "./st.sh release[zip || rar] [win||linux]"
        echo "./st.sh git[tag,  tag_del]"
        echo "./st.sh scp[rar, data, mysql, erl app] [erl module]"
        echo "./st.sh erlc [+S] []"
        echo "./st.sh erl ip port"
        ;;
    esac
}

fun_make() {
    case $ARG2 in
    'clean')
        ../rebar3 clean
        ;;
    're')
        (
            cd ../egen || exit
            ../rebar3 compile
        )
        ../rebar3 clean
        (
            cd ../lib || exit
            make def
        )
        rm -rf */src/_auto
        (
            cd global || exit
            t_def config/def/ src/_auto/def/
        )
        (
            cd frame || exit
            t_def config/def/ src/_auto/def/
        )

        (
            cd gateway || exit
            t_proto config/proto/ src/_auto/proto/ priv/docroot/api config/def/
        )
        ../rebar3 compile
        ;;
    'dev')
        if grep -q "%{d, dev}" rebar.config.script; then
            sed -i "s/%{d, dev}/{d, dev}/" rebar.config.script
            sed -i "s/{d, prod}/%{d, prod}/" rebar.config.script
        fi
        ../rebar3 compile
        ;;
    'prod')
        if grep -q "%{d, prod}" rebar.config.script; then
            sed -i "s/{d, dev}/%{d, dev}/" rebar.config.script
            sed -i "s/%{d, prod}/{d, prod}/" rebar.config.script
        fi
        ../rebar3 compile
        ;;
    esac
}

fun_build() {
    case $ARG2 in
    'init')
        rm -rf _build/default/lib/jiffy/
        (
            cd _build/default/lib/lib || exit
            make -C c_src
        )
        rm -rf _build/default/lib/lib/ebin/iconv.beam
        rm -rf _build/default/lib/lib/ebin/ejieba.beam
        rm -rf _build/default/lib/lib/ebin/std.beam
        ;;
    'install')
        cp -r _build/default/lib/jiffy/ /usr/local/lib/erlang/erts-13.0.2/lib/
        ;;

    esac

}

fun_zip() {
    case $ARG2 in
    'rar') rar ;;
    'zip') zip ;;
    esac
}

rar() {
    rm -rf "${APP_NAME}"_*.tar.gz
    mkdir -p "${VERSION}"/_build/default/lib "${VERSION}"/config
    cp -r config/dict "${VERSION}"/config
    cp -r config/database "${VERSION}"/config
    cp -r config/mnesia.db "${VERSION}"/config
    cp -f st.sh "${VERSION}"

    cp -r _build/default/lib "${VERSION}"/_build/default/
    cp -r ../lib/c_src "${VERSION}"/_build/default/lib/lib/c_src

    rm -rf "${VERSION}"/config/database/.svn
    rm -rf "${VERSION}"/_build/default/lib/*/src
    rm -rf "${VERSION}"/_build/default/lib/*/include
    rm -rf "${VERSION}"/_build/default/lib/*/.rebar3
    rm -rf "${VERSION}"/_build/default/lib/*/priv
    rm -rf "${VERSION}"/_build/default/lib/*/test
    rm -rf "${VERSION}"/_build/default/lib/*/.git
    rm -rf "${VERSION}"/_build/default/lib/*/doc

    tar -zcf "${APP_NAME}"_"${VERSION}"_"${DATE}".tar.gz "${VERSION}"
    rm -rf "${VERSION}"
    echo "${VERSION}"
}

zip() {
    rm -rf "${APP_NAME}"_*.zip
    mkdir -p "${VERSION}"/_build/default/lib "${VERSION}"/config
    cp -r config/dict "${VERSION}"/config
    cp -r config/database "${VERSION}"/config
    cp -r config/mnesia.db "${VERSION}"/config
    cp -f st.sh "${VERSION}"

    cp -r _build/default/lib "${VERSION}"/_build/default/
    cp -r ../lib/c_src "${VERSION}"/_build/default/lib/lib/c_src

    rm -rf "${VERSION}"/config/database/.svn
    rm -rf "${VERSION}"/_build/default/lib/*/src
    rm -rf "${VERSION}"/_build/default/lib/*/include
    rm -rf "${VERSION}"/_build/default/lib/*/.rebar3
    rm -rf "${VERSION}"/_build/default/lib/*/priv
    rm -rf "${VERSION}"/_build/default/lib/*/test
    rm -rf "${VERSION}"/_build/default/lib/*/.git
    rm -rf "${VERSION}"/_build/default/lib/*/doc

    case $OS_TYPE in
    'MINGW32_NT')
        zip -rq -l "${APP_NAME}"_"${VERSION}"_"${DATE}".zip "${VERSION}"
        ;;
    'Linux')
        zip -rq -ll "${APP_NAME}"_"${VERSION}"_"${DATE}".zip "${VERSION}"
        ;;
    esac
    rm -rf "${VERSION}"
    echo "${VERSION}"
}

fun_git() {
    case $ARG2 in
    'tag')
        mysqldump -u root -p123456 --port 27199 --databases "${VERSION}" >"${VERSION}".sql
        mv "${VERSION}".sql ../db/sql/release/
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
        git tag -a "${VERSION}"
        git push --tags
        ;;
    'tag_del')
        git tag -d "$ARG3"
        git push origin --delete tag "$ARG3"
        ;;
    esac
}

fun_scp() {
    case $ARG2 in
    'rar')
        scp health_*.tar.gz root@212.64.37.40:/root/project/health/
        ;;
    'data')
        scp config/database/*.data root@212.64.37.40:/root/project/health/"${VERSION}"/config/database/
        ;;
    'mysql')
        mysqldump --default-character-set=utf8mb4 --host=127.0.0.1 -P 3306 -uroot -p123456 --opt 3.0.18 | mysql --host=212.64.37.40 -P 63099 -uroot -p86E5AA595C6A5190C985b3850154C_,# --default-character-set=utf8mb4 -C 3.0.18
        #mysqldump -uroot -p123456 --databases 3.0.18 | mysql --host=212.64.37.40 -uroot -p86E5AA595C6A5190C985b3850154C_,# -C "${VERSION}"
        ;;
    *)
        echo scp _build/default/lib/"$ARG2"/ebin/"$ARG3".beam root@212.64.37.40:/root/project/health/"${VERSION}"/_build/default/lib/"$ARG2"/ebin/
        scp _build/default/lib/"$ARG2"/ebin/"$ARG3".beam root@212.64.37.40:/root/project/health/"${VERSION}"/_build/default/lib/"$ARG2"/ebin/
        ;;
    esac
}

fun_erlc() {
    case $ARG2 in
    '+S')
        erlc +"'S'" -I frame/include/ frame/test/test_trie.erl
        ;;
    esac
}

fun_erl() {
    echo erl -name "$NAME" -config config/sys -config config/${APP_NAME}_"$CONFIG" -args_file config/vm.args -args_file config/${APP_NAME}_vm.args
    erl -name "$NAME" -config config/sys -config config/${APP_NAME}_"$CONFIG" -args_file config/vm.args -args_file config/${APP_NAME}_vm.args
}

case ${ARG1} in
'make') fun_make ;;
'build') fun_build ;;
'release') fun_zip ;;
'git') fun_git ;;
'scp') fun_scp ;;
'erlc') fun_erlc ;;
'erl') fun_erl ;;
'h' | 'help' | *) fun_help ;;
esac
