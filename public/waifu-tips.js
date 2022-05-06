/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
const initLive2dData = () => {
    console.debug('开始加载 Live2D 模型');

    //初始位置，默认左上角，与下面的 目标位置 搭配修改
    $(".waifu").css({
        'top': 0,
        'right': 0,
    });

    // 隐藏看板娘后的选项区域
    const live2dHideBtn = (function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return
        }

        let isShow = false, // 当前是否正在显示
            lock = false; // 动画过程中，锁定状态

        let $btn = $('#waifu-btn');

        let show = function () {
            if (lock) return;
            if (!isShow) $btn.addClass('load');
            isShow = true;
        }

        let hide = function () {
            if (lock) return;
            if (isShow) {
                $btn.removeClass('load')
                isShow = false
            }
        }

        let runAway = function () {
            lock = true
            $btn.addClass('ani-leave')

            setTimeout(function () {
                $btn.removeClass('ani-leave').addClass('leaved')
            }, 390)

            setTimeout(function () {
                $btn.addClass('ending')
            }, 120)

            setTimeout(function () {
                $btn.removeClass('load')
            }, 1500);

            setTimeout(function () {
                lock = false
                isShow = false
                $btn.removeClass('leaved ending');
            }, 2000);
        };

        $btn.click(runAway);

        return {
            show,
            hide,
            runAway
        }
    })();

    let waifu_display = localStorage.getItem('waifu-display');
    if (waifu_display === "none") {
        $('.waifu').hide();
        live2dHideBtn.show();
    }
    // 开关被打开时
    $('.waifu-btn').click(function () {
        localStorage.removeItem('waifu-display');
        $('.waifu').show();
        // $('.waifu-btn').hide();
        showMessage(wordDict.appear, 4000)
    });
    // 随机一句话
    $('.waifu-tool .wt-comments').click(function () {
        showHitokoto()
    });
    // 拍照页面
    $('.waifu-tool .wt-camera').click(function () {
        showMessage(wordDict.afterCamera, 5000);
        window.Live2D.captureName = model_p + '.png';
        window.Live2D.captureFrame = true
    });
    // 关闭按钮
    $('.waifu-tool .wt-close').click(function () {
        localStorage.setItem('waifu-display', 'none');
        showMessage(wordDict.goodbye, 2000);
        window.setTimeout(function () {
            $('.waifu').hide();
            live2dHideBtn.show();
        }, 1000)
    });
    // 剪贴板监听
    $(document).on('copy', function () {
        showMessage(wordDict.oncopy, 8000)
    });
    // 响应式
    $(window).resize(function () {
        $(".waifu").css('top', window.innerHeight - 250)
    });

    function showHitokoto() {
        $.get("https://v1.hitokoto.cn/?encode=text", function (result) {
            showMessage(result)
        })
    }

    function showMessage(a, b) {
        if (b == null) b = 10000;
        jQuery(".waifu-tips").hide().stop();
        jQuery(".waifu-tips").html(a);
        jQuery(".waifu-tips").fadeTo("10", 1);
        jQuery(".waifu-tips").fadeOut(b)
    }
    (function () {
        let text;
        let SiteIndexUrl = window.location.protocol + '//' + window.location.hostname + '/';
        if (window.location.href == SiteIndexUrl) {
            let now = (new Date()).getHours();
            let ks = Object.keys(wordDict.time).sort();
            for (let key of ks) {
                let [start, end] = key.split(',');
                if (now <= end && now > start) {
                    text = wordDict.time[key];
                }
            }
        } else {
            let titleName = document.title.split(' - ')[0];
            if (document.referrer !== '') {
                let referrer = document.createElement('a');
                referrer.href = document.referrer;
                let domain = referrer.hostname.split('.')[1];
                if (window.location.hostname == referrer.hostname) {
                    text = wordDict.welcome['_LOCAL'].replaceAll('%TITLE%', titleName);
                } else if (wordDict.welcome[domain]) {
                    text = wordDict.welcome[domain];
                } else {
                    text = wordDict.welcome['_OTHERS'].replaceAll('%DOMAIN%', domain);
                }
            } else {
                text = wordDict.welcome['_LOCAL'].replaceAll('%TITLE%', titleName);
            }
        }
        //目标位置，默认左下角
        $(".waifu").animate({
            top: $(window).height() - 300,
            right:0,
        }, 800);
        showMessage(text, 8000)
    })();
    $("#live2d").mouseover(function () {
        var i = Math.floor(Math.random() * wordDict.hover.length);
        showMessage(wordDict.hover[i])
    });
    jQuery(document).ready(function () {
        // 初始化
        if (typeof loadlive2d === 'function') {
            loadlive2d('live2d', './model/model.json');
        }
    });
    jQuery(document).ready(function ($) {
        for (selector in wordDict.hint) {
            $(selector).on('mouseover', ((sel) => function () {
                let text = wordDict.hint[sel];
                if (text.indexOf('%TEXT%') !== -1) {
                    text = text.replaceAll('%TEXT%', $(this).text());
                }
                showMessage(text);
            })(selector));
        }
    });
    jQuery(document).ready(function ($) {
        window.setInterval(function () {
            showMessage(showHitokoto());
        }, 25000);
        var stat_click = 0;
        // 绑定点击事件监听
        $("#live2d").click(function () {
            if (!ismove) {
                stat_click++;
                if (stat_click > wordDict.clickThreshold) {
                    msgs = wordDict.clickAngry;
                    var i = Math.floor(Math.random() * msgs.length)
                } else {
                    msgs = wordDict.clickMsg;
                    var i = Math.floor(Math.random() * msgs.length)
                }
                s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, -0.1, -0.2, -0.3, -0.4, -0.5, -0.6, -0.7, -0.75];
                var i1 = Math.floor(Math.random() * s.length);
                var i2 = Math.floor(Math.random() * s.length);
                $(".waifu").animate({
                    left: (document.body.offsetWidth - 210) / 2 * (1 + s[i1]),
                    top: (window.innerHeight - 240) - (window.innerHeight - 240) / 2 * (1 - s[i2])
                }, {
                    duration: 500,
                    complete: showMessage(msgs[i].replaceAll('%TIMES%', stat_click))
                })
            } else {
                ismove = false
            }
        });
    });

    var ismove = false;
    // 在屏幕里乱跑
    jQuery(document).ready(function ($) {
        var box = $('.waifu')[0];
        var topCount = 20;
        box.onmousedown = function (e) {
            var Ocx = e.clientX;
            var Ocy = e.clientY;
            var Oboxx = parseInt(box.style.left);
            var Oboxy = parseInt(box.style.top);
            var Ch = document.documentElement.clientHeight;
            var Cw = document.documentElement.clientWidth;
            document.onmousemove = function (e) {
                var Cx = e.clientX;
                var Cy = e.clientY;
                box.style.left = Oboxx + Cx - Ocx + "px";
                box.style.top = Oboxy + Cy - Ocy + "px";
                if (box.offsetLeft < 0) {
                    box.style.left = 0
                } else if (box.offsetLeft + box.offsetWidth > Cw) {
                    box.style.left = Cw - box.offsetWidth + "px"
                }
                if (box.offsetTop - topCount < 0) {
                    box.style.top = topCount + "px"
                } else if (box.offsetTop + box.offsetHeight - topCount > Ch) {
                    box.style.top = Ch - (box.offsetHeight - topCount) + "px"
                }
                ismove = true
            };
            document.onmouseup = function (e) {
                document.onmousemove = null;
                document.onmouseup = null
            }
        }
    });
}


// 因加载方式导致，必须等到 Jquery、live2D 可用时才能初始化
let jqeurySpinWaitTime = 0;
let intervalId = setInterval(() => {
    if (window.$ && typeof loadlive2d === 'function') {
        clearInterval(intervalId);
        initLive2dData();
    } else if (jqeurySpinWaitTime == 2000) {
        console.error("无法加载模型，因为等待 JQuery 和 live2D 加载超时，刷新可能解决此问题");
        clearInterval(intervalId);
    } else {
        jqeurySpinWaitTime++;
        console.debug('Waiting for JQuery');
    }
}, 200);