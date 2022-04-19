---
title: "YawsEhtml"
menuTitle: "YawsEhtml"
weight: 0
date: 2019-08-30T15:13:01+08:00
---
<erl>
    out( A ) ->
        %L = talk_mod_init:geturlpage(),
        %{html, L  }.
        {ehtml,
         [{'div',[{style,"display:none"},{id,right}],["我有一头小毛驴"]
         }]}.
</erl>

Data1 ={p, [{style, "display:none"},{id,"nowpage"}],[Page]},
 {ehtml, Data1}
{ehtml,
  {table, [],
    {tr, [],
       [{td, [{width, "30%"}],
          {table,[{border, "1"}, {bgcolor, beige},{bordercolor, black}],
           [{tr, [], {td, [], pb("User: ~s", [User])}}]
          }
        },
        {td, [{align, right}], {img, [{src, "junk.jpg"}]}
       }]
     }
  }
}.
![](images/screenshot_1527428652492.png)
