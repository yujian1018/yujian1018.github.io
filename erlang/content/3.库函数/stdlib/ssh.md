---
title: "ssh"
date: 2019-08-30T15:13:01+08:00
---


```erlang
crypto:start().
ssh:start().
{ok, Conn} = ssh:connect("ip or host name", 22, [
        {user, "the user name"},
        {password, "the password"},
        {silently_accept_hosts, true},
        {user_interaction, false}
]).
```
