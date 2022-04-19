---
title: "YawsSSIbindings"
menuTitle: "YawsSSIbindings"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
test.yaws
<erl>
out( A ) ->
 {ehtml,[{ssi,"ssi_ex1.txt","@",[{"a","zippo"},{"b","我有一头小毛驴"}]}]}.
</erl>
ssi_ex1.txt
variable a = @a@,b=@b@
test.yaws
variable a = zippo,b=我有一头小毛驴

{ssi, "/inc/health_text.inc", "%",[{"embed", "choosen"}]};
{ssi, "/inc/health_text.inc", "",[{"", ""}]};

<erl>
    out(A) -> {bindings, [{"A", "foo"}, {"B", "baz"}]}.
</erl>
Value = yaws_api:binding("A").

![](images/screenshot_1527428611174.png)
