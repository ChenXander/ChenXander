/* eslint-disable no-unused-vars */

// 同时需要引入的 css
const live2d_waifu_css = ['./waifu.css']

// 需要引入的 js 文件，无需手动添加 Jquery 因为后面会自动检测并添加
const live2d_waifu_js = ['./live2d.js', './waifu-tips.js']

// live2d 区域的 DOM 代码
const live2d_dom_html = `<div class="l2d_xb">
<div class="waifu">
    <div class="waifu-tips"></div>
    <canvas id="live2d" width="250" height="300" class="live2d"></canvas>
    <div class="waifu-tool">
        <span class="wt-comments"><svg width="19" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path></svg></span>
        <span class="wt-camera"><svg width="19" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg></span>
        <span class="wt-close"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg></span>
    </div>
</div>
</div>
<div id="waifu-btn" class="waifu-btn" title="出来！"></div>`
// 自定义提示信息配置
const wordDict = {
  appear: '兔然出现~', // 隐藏后显示时的提示
  afterCamera: '咱可爱吗？', // 拍照按钮按下时
  goodbye: '再见了呐~', // 隐藏时
  oncopy: '转载要加上出处哦~', // 复制时
  role: {
    // 不同看板娘的定制行为
    22: {
      // 22 娘时
      appear: 'また会いましたね',
      naked: '変態！見るな！',
      dressing: 'どう？どう？'
    },
    33: {
      // 33 娘时，对应的行为同上
      appear: 'ただいまー', // 出现时（22、33 切换时）
      naked: 'なんでこんなこと？', // 裸体模型出现时
      dressing: 'どうだい' // 换装时（非裸体）
    }
  },
  time: {
    // 打开主页后，根据时间显示的信息，时间为 24 小时制，区间为左闭右开，仅支持整点
    '0,5': '哈？怎么这么晚还不睡啊',
    '5,8': '早上适合继续赖床',
    '8,11': '总感觉没睡够的说',
    '11,13': '干饭！',
    '13,17': '午后昏昏欲睡呢',
    '17,19': '傍晚应该补个觉',
    '19,22': '又到了睡觉的时间',
    '22,24': '时间不早了，早点睡吧'
  },
  welcome: {
    // 打开页面后的欢迎语，打开主页时，可以拓展针对指定 domain 的欢迎语，本配置不会生效（因为要使用 time 的配置）
    baidu: '欢迎来自 <span style="color:#0099cc;">百度搜索</span> 的朋友', // 百度搜索的欢迎语
    google: '欢迎来自 <span style="color:#0099cc;">谷歌搜索</span> 的朋友', // 谷歌搜索的欢迎语
    so: '朋友，建议换一个广告少一些的搜索引擎', // 360搜索的欢迎语
    _OTHERS: '欢迎来自 <span style="color:#0099cc;">%DOMAIN%</span> 的朋友', // 其他 DOMAIN 的欢迎信息，%HOSTNAME% 会被替换为具体的 hostname
    _LOCAL: '欢迎来到<span style="color:#0099cc;">『%TITLE%』</span>' // 在本网站内的跳转、或者没有 hostname 的欢迎信息。%TITLE% 会被替换当前页面标题
  },
  // 鼠标悬浮在看板娘上的提示信息
  hover: [
    '你要干嘛呀？',
    '要姐姐陪你玩吗？',
    '喵喵喵？',
    '怕怕',
    '搞啥哦(⊙﹏⊙)'
  ],
  // 鼠标悬浮在页面元素上的提示信息，因为各主题的页面元素可能不同，提供 JQuery 属性选择器的方式
  // 包含 .waifu-tool 的选择器通常不需要修改，允许自定义添加
  hint: {
    '.cd-top.cd-is-visible.cd-fade-out': '点击它可以回到顶部哦',
    '.waifu-tool .wt-home': '回到首页？',
    '.waifu-tool .wt-comments': '你想听到什么？',
    '.waifu-tool .wt-drivers-license-o': '要换人了吗？',
    '.waifu-tool .wt-street-view': '要换装吗？',
    '.waifu-tool .wt-camera': '要拍照了吗？！',
    '.waifu-tool .wt-info-circle': '想要更了解我吗？',
    '.waifu-tool .wt-close': '已经厌倦了吗？',
    // %TEXT% 将被 $(this).text() 替换，用于文本类标签有较好的效果
    '.post-title': '要看看<span style="color:#0099cc;">%TEXT%</span>么？',
    '.post-nepre.previous': '要看上一篇文章吗？',
    '.post-nepre.next': '要看下一篇文章吗？',
    '.comment-textarea': '留下您的伟论吧！',
    '.post-share': '要分享吗？感谢支持！'
  },
  clickThreshold: 6, // 点击数到达此上限后，再点击将显示 clickAngry 内的信息
  // 点击看板娘显示信息，%TIMES% 将被替换为当前的点击次数
  clickMsg: [
    '不小心的对吧，一定是这样',
    '我跑呀跑呀跑！~~',
    '再摸的话我可要报警了！⌇●﹏●⌇',
    '别摸我，有什么好摸的！',
    '不要摸我了，我超凶的！',
    '干嘛动我呀！小心我咬你！'
  ],
  clickAngry: [
    '来るな！',
    'いい加減にしろよ！',
    '你已经摸我%TIMES%次了',
    '救命！',
    'いやだ！',
    '110吗，这里有个变态一直在摸我(ó﹏ò｡)'
  ]
}


// 检测 JQuery
if (!window.$) {
  live2d_waifu_js[live2d_waifu_js.length] =
    'https://cdn.jsdelivr.net/npm/jquery@2.1.4/dist/jquery.min.js'
}

// 动态添加 css 文件
let loadStyle = function () {
  live2d_waifu_css.forEach((url) => {
    let link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    let head = document.getElementsByTagName('head')[0]
    head.appendChild(link)
  })
}
// 添加 stript 文件
let loadScript = function (url) {
  live2d_waifu_js.forEach((url) => {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    document.body.appendChild(script)
  })
}
// 加载依赖的静态文件
loadStyle()
loadScript()

// 注入 live2d 区域
const live2dWrapperDiv = document.createElement('div')
live2dWrapperDiv.innerHTML = live2d_dom_html
document.body.appendChild(live2dWrapperDiv)
