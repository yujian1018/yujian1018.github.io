
## ntpd

ntpd服务的相关设置文件如下：

1./etc/ntp.conf：这个是NTP daemon的主要设文件，也是 NTP 唯一的设定文件。

2./usr /share/zoneinfo/:在这个目录下的文件其实是规定了各主要时区的时间设定文件，例如北京地区的时区设定文件在/usr/share/zoneinfo/Asia/Beijing 就是了。这个目录里面的文件与底下要谈的两个文件(clock 与localtime)是有关系的。

3./etc/sysconfig/clock：这个文件其实也不包含在NTP 的 daemon 当中，因为这个是linux的主要时区设定文件。每次开机后，Linux 会自动的读取这个文件来设定自己系统所默认要显示的时间。

4./etc /localtime：这个文件就是“本地端的时间配置文件”。刚刚那个clock 文件里面规定了使用的时间设置文件(ZONE) 为/usr/share/zoneinfo/Asia/Beijing ，所以说，这就是本地端的时间了，此时， Linux系统就会将Beijing那个文件另存为一份/etc/localtime文件，所以未来我们的时间显示就会以Beijing那个时间设定文件为准。

5./etc/timezone：系统时区文件

    下面重点说说 /etc/ntp.conf文件的设置。在 NTP Server 的设定上面，其实最好不要对 Internet 无限制的开放，尽量仅提供您自己内部的 Client 端联机进行网络校时就好。此外， NTP Server 总也是需要网络上面较为准确的主机来自行更新自己的时间啊，所以在我们的 NTP Server 上面也要找一部最靠近自己的 Time Server 来进行自我校正。事实上， NTP 这个服务也是Server/Client 的一种模式。

## 命令

```bash

\cp -r /usr/share/zoneinfo/Asia/Shanghai /etc/localtime # 时区设置为东八区


#Debian系统安装NTP校时包：
sudo apt-get install -y ntpdate ntp

#CentOS系统安装NTP校时包：
yum -y install ntpdate ntp #安装ntp


vim /etc/ntp.conf
server cn.pool.ntp.org
restrict default nomodifynotrapnoquery
restrict 127.0.0.1　　 # 开启内部递归网络接口 lo
restrict 192.168.9.0 mask 255.255.255.0 nomodify notrap #在内部子网里面的客户端可以 进行网络校时，但不能修改NTP服务器的时间参数


ntpdate cn.pool.ntp.org && hwclock -w                   # 通过对时服务器核对时间，并写入硬件

# 对时服务器
# cn.pool.ntp.org us.pool.ntp.org
# time.windows.com
# ntpupdate.tencentyun.com


#!/bin/bash
#备份源文件
mv /etc/localtime /etc/localtimebak
#修改时区为东八区
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
#安装ntp服务
yum -y install ntpdate ntp
#修改/etc/ntp.conf 
cat << EOF  >> /etc/ntp.conf 
server cn.pool.ntp.org
server time-a.nist.gov
server time.windows.com
server time.nist.gov
EOF
#调试查看时间差异
ntpdate -d cn.pool.ntp.org
#同步时间
ntpdate cn.pool.ntp.org && echo "SYNC_HWCLOCK=yes" >>/etc/sysconfig/ntpd || echo "Setting Filed!"
#自启动
chkconfig --levels 235 ntpd on
/etc/init.d/ntpd start
echo `date`


```
