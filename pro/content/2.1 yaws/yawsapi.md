---
title: "yawsapi"
menuTitle: "yawsapi"
weight: 0
date: 2019-08-30T15:13:01+08:00
---

1.check_cookie( A ) ->
    H = A#arg.headers,
    case yaws_api:find_cookie_val( ?Cook, H#headers.cookie ) of
        Val when Val /= [] ->
            case yaws_api:cookieval_to_opaque( Val ) of
                {ok, Sess} ->
                    {ok, Sess, Val};
                { error, { has_session, Sess }} ->
                    {ok, Sess};
                Else ->
                    Else
            end;
        [] ->
            {error, nocookie}
    end.
2.{ok, _Sess, Cookie} -> yaws_api:delete_cookie_session( Cookie ); 删除session
3.yaws_api:new_cookie_session( Sess ). 新建session
  yaws_api:new_cookie_session( Sess, TTL ).
  yaws_api:new_cookie_session( Sess, TTL, CleanupPid ).
4.yaws_api:setcookie("haowenjiao",Cookie)  -> 估计默认权限为当前文件夹下的所有目录
  yaws_api:setcookie( "haowenjiao", Cookie, Path ). Path -> session在站点中的权限范围
5.yaws_api:cookieval_to_opaque( CookieVal ).
6.yaws_api:print_cookie_sessions().
7.yaws_api:replace_cookie_session(Cookie, NewCookie). 替换session

页面的值的传递
<erl>
ID = yaws_api:binding("B")
</erl>
<p>%%A%%</p>在页面中使用变量A

P = yaws_api:parse_query(A),
    L = case lists:keysearch(page, 1, P) of
              {value, {page, Page}} ->
                   .....
当form表单没用method时默认？传值

1.yaws_api:url_decode(Url),
  yaws_api:url_encode(Url),
2. out(_Arg) ->
        L="http://www.google.com/search?num=20&hl=en&lr=lang_en%7Clang_sv&q=yaws",
        {redirect, L}.
out(_Arg) ->
        {redirect_local, "/redirect2.yaws"}.本服务器上
out(_Arg) ->
        {redirect_local, {any_path, "redirect2.yaws"}}.
[yaws_api:redirect("/userLogin.yaws")]

3.yaws_api:binding("A")

![](images/screenshot_1527428590053.png)