---
layout: post
title: 创建可适配主流浏览器的favicon集合
last_modified_at: 2024-05-03
tags:
  - 折腾记录
redirect_from:
  - https://meta.appinn.net/t/topic/24614
toc: true
---
> Favicon（favorite icon）是与某个网站或网页相关联的小图标。它通常显示在浏览器地址栏的左侧、收藏夹列表中以及标签页标题前，可帮助用户快速识别不同的网站或网页。
> 
> ![](https://upload.wikimedia.org/wikipedia/commons/2/22/Wikipedia_favicon_in_Firefox_on_KDE_%282023%29.png)
> 
> [Favicon - Wikipedia](https://en.wikipedia.org/wiki/Favicon)

创建favicon的方法有两种

- 将名为“favicon.ico”的文件放置在网站的根目录下。这是最传统的方法，被所有浏览器支持。
- 在HTML代码的 `<head>` 部分中添加 `<link>` 标签，指向favicon图标或者图标配置文件。这种方法支持更多格式的图标，例如PNG、SVG等，但各家浏览器的要求不尽相同。Andrey Sitnik提到，只需要准备6个文件即可适配2024年主流的桌面浏览器以及iOS、Android两大移动操作系统[^howto]。

[^howto]: [How to Favicon in 2024: Six files that fit most needs](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)

| 文件                        | 特性               | 适用范围                                                                            |
| ------------------------- | ---------------- | ------------------------------------------------------------------------------- |
| ICO                       |                  | 所有                                                                              |
| SVG+XML                   | 无损缩放、动态样式        | Firefox, Chrome, Edge (Chromium), Opera                                         |
| PNG                       | iOS主屏幕图标         | Safari                                                                          |
| PNG + `webmanifest`       | Android 主屏幕图标    | Chrome & Edge (Chromium)                                                        |
| PNG + `browserconfig.xml` | Windows Metro 磁贴 | Edge Legacy / IE 11 on Windows 8.1 & 10 / Windows Phone 8.1 / Windows 10 Mobile |

## 位图图标

通常会用到以下几种尺寸的位图图标：

| 浏览器            | 尺寸              |
| -------------- | --------------- |
| 通用             | 16x16 或 32x32   |
| Safari         | 180x180         |
| Android Chrome | 192x192 512x512 |
| Metro磁贴        | 150x150         |

可以在设计软件手动导出以上分辨率，也可以只导出最高分辨率，使用[RealFaviconGenerator](https://realfavicongenerator.net/)生成全尺寸图标包。

### PWA图标

PWA的信息由`webmanifest`文件提供[^manifest1]，2014年以后的Chromium内核浏览器均支持在webmanifest中定义主屏幕图标[^manifest2]：

```json
{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

[^manifest1]: Web 应用程序清单在一个 JSON 文本文件中提供有关应用程序的信息（如名称，作者，图标和描述）。manifest 的目的是将 Web 应用程序安装到设备的主屏幕，为用户提供更快的访问和更丰富的体验。

[^manifest2]: [manifest: icons | Can I use... Support tables](https://caniuse.com/mdn-html_manifest_icons)

在 webmanifest 文件中多声明一行 `"purpose": "maskable"` 可以启用 Android 遮罩图标[^maskable]：

```json
{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192", "purpose": "maskable" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512", "purpose": "maskable" }
  ]
}
```

[^maskable]: 遮罩图标于Android 8.0引入，支持任意形状设计，并根据设备自适应裁剪缩放，可以令App列表更加整齐划一，避免出现形状各异的图标影响视觉美观。

不过要注意遮罩图标与非遮罩图标的边距是不同的，直接使用非遮罩图标可能会导致图标的一部分被裁切掉。解决方法可以是在设计阶段就做好窄边距、宽边距两个版本，也可以只出一个窄边距图标，再用[maskable.app](https://maskable.app/editor)转化成适配遮罩的宽边距版本。

### Windows磁贴图标

Windows 8.1 & 10 / Windows Phone 8.1 / Windows 10 Mobile 等系统上的 Edge Legacy / IE 11，将网页固定到开始菜单的图标。

虽说Windows 11与Chromium内核的新版Edge已经弃用了Metro UI，但截止2024年4月，Win8.1与Win10仍然有高达70%左右的市场占有率[^winshare]，其中必然也有一些用户仍然在使用老版Edge，是否放弃适配Metro磁贴还是看主观喜好吧，毕竟最少只要再额外加两个文件就能适配Metro UI，我个人倾向于适配。

[^winshare]: [Desktop Windows Version Market Share Worldwide](https://gs.statcounter.com/os-version-market-share/windows/desktop/worldwide)

Win8.1与Win10的Metro磁贴图标由放置在站点根目录的`browserconfig.xml`文件定义，这个文件不需要在网页`head`引用，因此不可使用其他名称，修改背景色

```xml
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/mstile-150x150.png"/>
            <TileColor>#da532c</TileColor>
        </tile>
    </msapplication>
</browserconfig>
```

另外，即使不建立`browserconfig.xml`，也可以在网页的head部分指定磁贴背景色，例如这段meta标签指定了磁贴的背景是灰色：

```html
<meta name="msapplication-TileColor" content="{{ site.ms_tile_color | default: '#888888' }}">
```

## 矢量图标

SVG是一种基于XML的矢量图形格式，可以使用CSS媒体查询来动态切换SVG图像的样式。例如，在夜间模式下，可以将SVG图像的填充颜色反转为深色，以提高阅读舒适度。

SVG favicon可以被2014年之后的Firefox以及2020年之后的Chromium内核浏览器支持，Safari目前尚不支持[^svg]。

[^svg]: [SVG favicons | Can I use... Support tables](https://caniuse.com/link-icon-svg)

可以使用[SVG Favicon Generator](https://realfavicongenerator.net/)生成根据日夜主题动态切换的矢量图标。

如果有其他的需求，也可以用文本编辑器打开SVG文件，自行编写其中的CSS代码。例如，本站日夜图标的转化并不是采用通常的invert filter，而是采用交换图标与背景色的方式，日间白底蓝字，夜间蓝底白字：

```css
@media (prefers-color-scheme: light) {
    path { fill: rgb(64,63,95); stroke:rgb(64,63,95) }
    circle { fill: rgb(255,255,255); }
}
@media (prefers-color-scheme: dark) {
    path { fill: rgb(255,255,255); stroke:rgb(255,255,255) }
    circle { fill: rgb(64,63,95); }
}
```
