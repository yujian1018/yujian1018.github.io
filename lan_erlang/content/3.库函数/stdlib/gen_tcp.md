```erlang
server() ->
    LSock = listen(),
    {ok, Sock} = gen_tcp:accept(LSock),
    {ok, Bin} = do_recv(Sock, []),
    ok = gen_tcp:close(Sock),
    Bin.

listen() ->
    {ok, LSock} = gen_tcp:listen(5678, [binary, {packet, 4},
                                        {active, false}]),
    LSock.
client() ->
    SomeHostInNet = "localhost",
    {ok, Sock} = gen_tcp:connect(SomeHostInNet, 5678,
                                [binary, {packet, 0}]),
    ok = gen_tcp:send(Sock, "Some Data"),
    ok = gen_tcp:close(Sock).

do_recv(Sock, Bs) ->
    case gen_tcp:recv(Sock, 0) of
        {ok, B} ->
            do_recv(Sock, [Bs, B]);
        {error, closed} ->
            {ok, list_to_binary(Bs)}
    end.
gen_tcp:listen中使用的options
[binary, {packet, 4}, {active, true}, {reuseaddr,true}, {delay_send,true}]
%% {active,true} 创建一个主动套字节(非阻塞)
%% {active,false} 创建一个被动套字节(阻塞)
%% {active,once} 创建一个主动套字节仅接收一条消息,如想接收下一条必须再次激活(半阻塞)
%%{packet, 4} 表示每一个消息都是从一个4字节长的头部开始 意味着每个包有4个字节的包头，代表长度
```

![pic](/images/screenshot_1534760515753.png)
![pic](/images/screenshot_1534760522141.png)
