#!/bin/sh


###=====================================================
# erlang
###=====================================================
#ubuntu
sudo apt install -y libncurses-dev libwxgtk3.0-dev m4;
#centOS
yum -y install m4 ncurses-devel;

wget https://github.com/erlang/otp/archive/OTP-21.0.tar.gz
tar -zxf otp-OTP-21.0.tar.gz
cd otp-OTP-21.0
./otp_build autoconf
./configure --enable-native-libs
make
sudo make install

###=====================================================
# yaws
###=====================================================
#ubuntu sudo apt install libpam0g-dev

yum install autoconf libtool pam-devel
wget http://yaws.hyber.org/download/yaws-1.9.6.tar.gz
tar -zxf yaws-1.9.6.tar.gz
cd yaws
vim c_src/setuid_drv.c
#注释 line:135
vim src/yaws_log.erl
#注释 line:168

autoreconf -fi
./configure --prefix=/usr/local/lib/yaws/
sed -i 's/ -Werror//g' `grep -rl " -Werror" ./`
make install



###=====================================================
# chrom
###=====================================================
#sudo apt install -y chromium-browser;


##=subversion===============================================
yum -y install subversion
svnadmin create /root/project/svn/haowenjiao
svnserve -d -r /root/project/svn/ --listen-port 27000



#=superset====================================================
mkdir superset
cd superset
python -m venv venv
source ./venv/bin/active
pip install superset
pip uninstall pandas
pip install pandas==0.23.4
pip uninstall SQLAlchemy
pip install SQLAlchemy==1.2
cd venv/bin

fabmanager create-admin --app superset
 
# Initialize the database
py superset db upgrade
 
# 加载superset例子，可要可不要
py superset load_examples
 
# Create default roles and permissions
py superset init
 
# To start a development web server on port 8088, use -p to bind to another port
py superset runserver -d

# MySQL 数据库
pip install mysqlclient
 
# Postgres 数据库
pip install psycopg2


docker run --name superset -d -p 8088:8088 -v /root/project/superset/conf:/etc/superset -v /root/project/superset/data:/var/lib/superset amancevice/superset
