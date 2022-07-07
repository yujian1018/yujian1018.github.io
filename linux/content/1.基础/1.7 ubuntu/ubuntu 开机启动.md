
## ubuntu18.04

```bash
/lib/systemd/system
sudo vim rc.local.service
[Install]
WantedBy=multi-user.target
Alias=rc-local.service

sudo ln -s rc.local.service /etc/systemd/system/
sudo vim /etc/rc.local
#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.

echo "看到这行字，说明添加自启动脚本成功。" > /home/yj/test.log

exit 0

sudo reboot
```
