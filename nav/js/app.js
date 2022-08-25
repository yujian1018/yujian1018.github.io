
(function ($) {
    $(document).ready(function () {
        for (var i = 0; i < configs.length; i++) {
            item = configs[i];
            $(".item:eq("+i+")").append(toItems(item.items))
        }

        // 初始化tab滑块
        intoSlider();

    });

    // Enable/Disable Resizable Event
    var wid = 0;
    $(window).resize(function () {
        clearTimeout(wid);
        wid = setTimeout(go_resize, 200);
    });
    function go_resize() {
        stickFooter();
        //if(theme.minNav != '1'){
        trigger_resizable();
        //}
    }
    // count-a数字动画
    $('.count-a').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //返回顶部
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#go-to-up').fadeIn(200);
        } else {
            $('#go-to-up').fadeOut(200);
        }
    });
    $('.go-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    //滑块菜单
    $('.slider_menu').children("ul").children("li").not(".anchor").hover(function () {
        $(this).addClass("hover"),
            //$('li.anchor').css({
            //    transform: "scale(1.05)",
            //}),
            toTarget($(this).parent())
    }, function () {
        //$('li.anchor').css({
        //    transform: "scale(1)",
        //}),
        $(this).removeClass("hover")
    });
    $('.slider_menu').mouseleave(function (e) {
        var menu = $(this).children("ul");
        window.setTimeout(function () {
            toTarget(menu)
        }, 50)
    });
    function intoSlider() {
        $(".slider_menu[sliderTab]").each(function () {
            if (!$(this).hasClass('into')) {
                var menu = $(this).children("ul");
                menu.prepend('<li class="anchor" style="position:absolute;width:0;height:28px"></li>');
                var target = menu.find('.active').parent();
                if (0 < target.length) {
                    menu.children(".anchor").css({
                        left: target.position().left + target.scrollLeft() + "px",
                        width: target.outerWidth() + "px",
                        height: target.height() + "px",
                        opacity: "1"
                    })
                }
                $(this).addClass('into');
            }
        })
    }

    $(".ajax-list-home").each(function () {
        $(this).find("a").click(function () {
            var index = $(this).parent().parent().find("a").index($(this))

            $(this).parents(".item").find(".row-content").hide()
            $(this).parents(".item").find(".row-content:eq(" + index + ")").show()

            $(this).parent().siblings().find("a").removeClass("active")
            $(this).addClass("active")

        })
    })

    $(".sidebar-item").each(function (index1) {
        $(this).find("ul a").click(function () {

            var index2 = $(this).parent().parent().find("a").index($(this))

            $(".item:eq(" + index1 + ")").find(".row-content").hide()
            $(".item:eq(" + index1 + ")").find(".row-content:eq(" + index2 + ")").show()

            $(".item:eq(" + index1 + ") .ajax-list-home a").removeClass("active")
            $(".item:eq(" + index1 + ") .ajax-list-home a:eq(" + index2 + ")").addClass("active")

            toTarget($(".item:eq(" + index1 + ") .ajax-list-home ul"))

        })
    })

    // Trigger Resizable Function
    var isMin = false,
        isMobileMin = false;
    function trigger_resizable(isNoAnim = false) {
        if ((theme.minNav == '1' && !isMin && 767.98 < $(window).width()) || (!isMin && 767.98 < $(window).width() && $(window).width() < 1024)) {
            //$('#mini-button').removeAttr('checked');
            $('#mini-button').prop('checked', false);
            trigger_lsm_mini(isNoAnim);
            isMin = true;
            if (isMobileMin) {
                $('#sidebar').addClass('mini-sidebar');
                isMobileMin = false;
            }
        }
        else if ((theme.minNav != '1') && ((isMin && $(window).width() >= 1024) || (isMobileMin && !isMin && $(window).width() >= 1024))) {
            $('#mini-button').prop('checked', true);
            trigger_lsm_mini(isNoAnim);
            isMin = false;
            if (isMobileMin) {
                isMobileMin = false;
            }
        }
        else if ($(window).width() < 767.98 && $('#sidebar').hasClass('mini-sidebar')) {
            $('#sidebar').removeClass('mini-sidebar');
            isMobileMin = true;
            isMin = false;
        }
    }
    // sidebar-menu-inner收缩展开
    $('.sidebar-menu-inner a').on('click', function () {
        if (!$('.sidebar-nav').hasClass('mini-sidebar')) {//菜单栏没有最小化   
            $(this).parent("li").siblings("li.sidebar-item").children('ul').slideUp(200);
            if ($(this).next().css('display') == "none") { //展开
                //展开未展开
                // $('.sidebar-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(200);
                $(this).parent('li').addClass('sidebar-show').siblings('li').removeClass('sidebar-show');
            } else { //收缩
                //收缩已展开
                $(this).next('ul').slideUp(200);
                //$('.sidebar-item.sidebar-show').removeClass('sidebar-show');
                $(this).parent('li').removeClass('sidebar-show');
            }
        }
    });
    function trigger_lsm_mini(isNoAnim = false) {
        if ($('.header-mini-btn input[type="checkbox"]').prop("checked")) {
            $('.sidebar-nav').removeClass('mini-sidebar');
            $('.sidebar-menu ul ul').css("display", "none");
            if (isNoAnim)
                $('.sidebar-nav').width(220);
            else
                $('.sidebar-nav').stop().animate({ width: 220 }, 200);
        } else {
            $('.sidebar-item.sidebar-show').removeClass('sidebar-show');
            $('.sidebar-menu ul').removeAttr('style');
            $('.sidebar-nav').addClass('mini-sidebar');
            if (isNoAnim)
                $('.sidebar-nav').width(60);
            else
                $('.sidebar-nav').stop().animate({ width: 60 }, 200);
        }
        //$('.sidebar-nav').css("transition","width .3s");
    }
    $.fn.textSlider = function (settings) {
        settings = jQuery.extend({
            speed: "normal",
            line: 2,
            timer: 1000
        },
            settings);
        return this.each(function () {
            scllor($(this), settings)
        })
    };
    function scllor($this, settings) {
        var ul = $("ul:eq(0)", $this);
        var timerID;
        var li = ul.children();
        var _btnUp = $(".up:eq(0)", $this);
        var _btnDown = $(".down:eq(0)", $this);
        var liHight = $(li[0]).height();
        var upHeight = 0 - settings.line * liHight;
        var scrollUp = function () {
            _btnUp.unbind("click", scrollUp);
            ul.animate({
                marginTop: upHeight
            },
                settings.speed,
                function () {
                    for (i = 0; i < settings.line; i++) {
                        ul.find("li:first").appendTo(ul)
                    }
                    ul.css({
                        marginTop: 0
                    });
                    _btnUp.bind("click", scrollUp)
                })
        };
        var scrollDown = function () {
            _btnDown.unbind("click", scrollDown);
            ul.css({
                marginTop: upHeight
            });
            for (i = 0; i < settings.line; i++) {
                ul.find("li:last").prependTo(ul)
            }
            ul.animate({
                marginTop: 0
            },
                settings.speed,
                function () {
                    _btnDown.bind("click", scrollDown)
                })
        };
        var autoPlay = function () {
            timerID = window.setInterval(scrollUp, settings.timer)
        };
        var autoStop = function () {
            window.clearInterval(timerID)
        };
        ul.hover(autoStop, autoPlay).mouseout();
        _btnUp.css("cursor", "pointer").click(scrollUp);
        _btnUp.hover(autoStop, autoPlay);
        _btnDown.css("cursor", "pointer").click(scrollDown);
        _btnDown.hover(autoStop, autoPlay)
    }

})(jQuery);
function isPC() {
    let u = navigator.userAgent;
    let Agents = ["Android", "iPhone", "webOS", "BlackBerry", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let i = 0; i < Agents.length; i++) {
        if (u.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function showAlert(data) {
    var title, alert, ico;
    switch (data.status) {
        case 1:
            title = '成功';
            alert = 'success';
            ico = 'icon-adopt';
            break;
        case 2:
            title = '信息';
            alert = 'info';
            ico = 'icon-tishi';
            break;
        case 3:
            title = '警告';
            alert = 'warning';
            ico = 'icon-warning';
            break;
        case 4:
            title = '错误';
            alert = 'danger';
            ico = 'icon-close-circle';
            break;
        default:
    }
    var msg = data.msg;
    if (!$('#alert_placeholder').hasClass('text-sm')) {
        $('body').append('<div id="alert_placeholder" class="text-sm" style="position: fixed;bottom: 10px;right: 10px;z-index: 1000;text-align: right;text-align: -webkit-right"></div>')
    }
    $html = $('<div class="alert-body" style="display:none;"><div class="alert alert-' + alert + ' text-lg pr-4 pr-md-5" style="text-align:initial"><i class="iconfont ' + ico + ' icon-lg" style="vertical-align: middle;margin-right: 10px"></i><span style="vertical-align:middle">' + title + '</span><br><span class="text-md" style="margin-left:30px;vertical-align:middle">' + msg + '</span></div></div>');
    $('#alert_placeholder').append($html);//prepend
    $html.show(200).delay(3500).hide(300, function () { $(this).remove() });
}
function toTarget(menu, padding = true, isMult = true) {
    var slider = menu.children(".anchor");
    var target = menu.children(".hover").first();
    if (target && 0 < target.length) {
    }
    else {
        if (isMult)
            target = menu.find('.active').parent();
        else
            target = menu.find('.active');
    }
    if (0 < target.length) {
        if (padding)
            slider.css({
                left: target.position().left + target.scrollLeft() + "px",
                width: target.outerWidth() + "px",
                opacity: "1"
            });
        else
            slider.css({
                left: target.position().left + target.scrollLeft() + (target.outerWidth() / 4) + "px",
                width: target.outerWidth() / 2 + "px",
                opacity: "1"
            });
    }
    else {
        slider.css({
            opacity: "0"
        })
    }
}


function toItems(items) {
    var itemHtml = ``
    for (var i = 0; i < items.length; i++) {
        item = items[i];

        if (i == 0) {
            itemHtml += `<div class="row mt-4 row-content" style="position: relative;">` + toRowContent(item) + "</div>"
        } else {
            itemHtml += `<div class="row mt-4 row-content" style="position: relative;display:none;">` + toRowContent(item) + "</div>"
        }
    }
    return itemHtml
}

function toRowContent(items) {
    var itemHtml = ``
    for (var i = 0; i < items.length; i++) {
        item = items[i];
        itemHtml += `<div class="url-card col-6 col-sm-6 col-md-4 col-xl-3 ">
  <div class="url-body default">
      <a href="`+ item.url + `" target="_blank" title=""
          class="card no-c mb-4 site-232">
          <div class="card-body">
              <div class="url-content d-flex align-items-center">
                  <div
                      class="url-img rounded-circle mr-2 d-flex align-items-center justify-content-center">
                      <img class="lazy loaded" src="`+ item.icon + `">
                  </div>
                  <div class="url-info flex-fill">
                      <div class="text-sm overflowClip_1"> <strong>`+ item.title + `</strong> </div>
                      <p class="overflowClip_1 m-0 text-muted text-xs">`+ item.desc + `</p>
                  </div>
              </div>
          </div>
      </a>
  </div>
</div>`
    }
    return itemHtml
}

