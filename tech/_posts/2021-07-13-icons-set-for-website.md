---
layout: post
title: 创建可适配主流浏览器的 favicon 集合
last_modified_at: 2026-05-17
tags:
  - 折腾记录
  - github-pages
  - favicon
redirect_from:
  - https://meta.appinn.net/t/topic/24614
toc: true
description: 2026年适配99%网站的favicon只需3个文件。从SVG矢量图标的动态样式、深色模式适配，到Android可遮罩图标与iOS液态玻璃避坑，一次性讲清如何用极简的资源实现全平台完美显示。
---

## favicon

### favicon的历史

Favicon 诞生于 1999 年微软发布的 Internet Explorer 5。最初，它是一个名为 `favicon.ico` 的文件，被简单地放置在网站的根目录下。浏览器识别 favicon 后，会将它显示在地址栏的左侧、收藏夹列表中以及标签页标题前，帮助用户快速识别不同的网站或网页。

随着 Web 技术的发展，为了解决传统 Favicon 的局限性，各种需要开发人员在 HTML `<head>` 中手动声明的图标标准层出不穷，导致网页头部代码变得越来越臃肿。不过此后，随着部分特定浏览器逐渐失去市场份额乃至淡出历史舞台，许多繁杂的专用标准也慢慢随之消失了。Andrey Sitnik 提出：2026年，对于 99% 的现代化网站，只需要准备 3 个文件就足够适配几乎所有的设备和场景了[^howto]。

[^howto]: [How to Favicon in 2026: Three files that fit most needs](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs)

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- 180×180 -->
```

### SVG favicon

SVG是一种基于XML的矢量图形格式。目前 SVG favicon 已经可以被2014年之后的 Firefox、2020年之后的 Chromium 内核浏览器、2025年之后的 Safari 浏览器支持[^svg]。相比传统位图 favicon，具有如下优点：

[^svg]: [SVG favicons | Can I use... Support tables](https://caniuse.com/link-icon-svg)

【节省带宽】作为矢量图形，浏览器只需解析极小的文本代码，就能将其完美无损地缩放到任意尺寸。这不仅显著节省带宽，也能完美适配任何像素密度的屏幕，避免了为高分屏提供小尺寸位图显示模糊、提供大尺寸位图拖慢载入速度的尴尬。

借助在线工具 [SVGOMG](https://jakearchibald.github.io/svgomg/) 移除不重要的元数据、注释、隐藏元素，可以使 SVG 文件进一步变得更小、加载更快。

【动态样式】得益于内部支持嵌入原生 CSS 代码，SVG 可以动态调整图标的视觉细节。例如，通过改变描边粗细来模拟字体在不同视觉尺寸下的微调表现（Optical Size），或者直接读取系统的 prefers-color-scheme 状态，实现图标色彩在浅色与深色模式下的实时响应式切换 <object type="image/svg+xml" data="/favicon.svg" style="display:inline-block; height: 1em; width: 1em;"></object>

```css
@media (prefers-color-scheme: light) { circle { fill: #666699; } }
@media (prefers-color-scheme: dark) { circle { fill: #ffffff; } }
```

【素材复用】得益于矢量图标可自由缩放的特性，SVG favicon 也可以作为通用的设计素材被复用到网页的UI设计中。

由于 Safari 不支持通过`<img>`标签引用 SVG 文件，通常的处理方式是改用`<object>`标签。

```html
<object type="image/svg+xml" data="/favicon.svg"></object>
```

此时需特别注意，通过 `<object>` 标签引用的 SVG 文件与宿主网页整体对于 `color-scheme` 的声明必须匹配[^object]。若网页声明支持亮暗主题切换，而 SVG 内部没有对应声明，在深色模式下，浏览器会将 SVG 内部原本透明的区域强行渲染为纯白或纯黑，产生大块牛皮癣式的色块 Bug。

```xml
<svg style="color-scheme: light dark;">
	<!-- 内部图形代码 -->
</svg>
```

[^object]: [Object 嵌入 SVG 深色模式踩坑记](./adaptive-svg-for-dark-mode)

## 桌面图标

当用户选择“添加到主屏幕”或安装 PWA（渐进式 Web 应用）时，图标需要脱离浏览器，在操作系统桌面上像一个原生 App 一样展示。

许多手机操作系统的启动器会强制统一桌面上所有图标的形状（如圆形、圆角矩形、水滴形等）。如果将传统的自由形状透明背景图标丢给桌面，系统可能将透明渲染成黑色，在暴力裁切时会剪掉部分主体，或者在周围垫上一圈难看的白色。

### Android


PWA 是一种能让网页具备原生 App 般安装与离线使用体验的技术，其名称、图标等主要配置信息由放在网站根目录下的 webmanifest (`manifest.json`) 文件定义。Chrome 对 webmanifest 的特性支持最早最全。

#### 图标尺寸

最初的规范要求提供 192x192 和 512x512 像素的两套高清 PNG。随着高分屏的发展，许多现代化网站开始提供更高解析度的 1024x1024 像素位图，导致单个图标的文件体积达到了数百 KB。可以在设计软件手动导出以上分辨率，也可以只导出最高分辨率，使用 [RealFaviconGenerator](https://realfavicongenerator.net/) 生成全尺寸图标包。

随着矢量图标支持的普及，一种更高效的选择是用一张仅几 KB 的 SVG 覆盖全部尺寸。在 Manifest 中声明 SVG 图标时，只需直接将其尺寸属性设为 `"sizes": "any"` 即可。

#### 图标目的

在 webmanifest 中，可以为图标声明 `purpose` 属性，浏览器收藏夹与系统桌面图标的用途对应 `any` 与 `maskable` 两种不同的取值。

|           | favicon       | 可遮罩图标                  | 变色图标                   |
| --------- | ------------- | ---------------------- | ---------------------- |
| 背景        | 可透明           | 纯色                     | 纯色或透明                  |
| 边缘轮廓      | 可以不规则         | 填满正方形画布                | 填满正方形画布或透明             |
| 安全区       | 不需要           | 图标主体需位于直径为正方形边长80%的圆以内 | 图标主体需位于直径为正方形边长80%的圆以内 |
| 场景        | 收藏夹、标签栏、安装弹窗等 | 启动器、桌面                 | 启动器、桌面                 |
| `purpose` | `any`         | `maskable`             | `monochrome`           |

由于两者对于图标有不同的侧重要求，在配置 webmanifest 时，将单个图标同时标记为 `"purpose": "any maskable"` 是非常糟糕的体验。一种比较推荐的 Manifest 隔离声明：

```json
"icons": [
    {
        "src": "/favicon.svg",
        "sizes": "any",
        "type": "image/svg+xml",
        "purpose": "any"
    },
    {
        "src": "/icon-maskable.svg",
        "sizes": "any",
        "type": "image/svg+xml",
        "purpose": "maskable"
    }
]
```

由于 `purpose: any` 与 `maskable` 对安全区域的要求截然不同（前者通常为主体撑满的“窄边距”，后者则需要为自适应裁切预留空间的“宽边距”），在实际工程中，我们通常有两种应对策略：一是在设计阶段就分别做好这两个版本的图标；二是仅导出一个窄边距大图，随后借助  [maskable.app](https://maskable.app/editor) 等在线工具，将其一键缩放并填充背景，转化出适配遮罩的宽边距版本。

为了对接从 Android 13 开始引入的 Material You 的设计语言，webmanifest 也引入了由启动器控制染色的 `monochrome` purpose。通过  [monochrome.fyi](https://monochrome.fyi/) 在线工具，可以预览图标在 Material You 染色下的显示效果。

不过，受限于安卓定制系统的碎片化，许多浏览器并未完全适配 `monochrome` 的图标规范，即使在需要图标变色的场景仍会采用 `maskable` 规范来生成桌面图标。这里需要区分两组概念：

1. `monochrome` 与 `maskable`：
   · `monochrome` 图标支持跟随系统主题实时变色（类似自适应单色图标）
   · `maskable` 图标则不具备这一能力
2. 桌面图标与 favicon：
   · 带媒体查询的响应式 SVG favicon 在浏览器标签页中可以随系统主题实时变色。
   · 桌面图标则完全不同：即便你在 Manifest 中配置了带媒体查询的 SVG 图标，也仅会在用户点击“添加到主屏幕”时执行一次，之后便被永久固化。浅色模式下安装的图标永远锁定浅色样式，深色模式下安装的则永远锁定深色样式。

`maskable purpose` 的桌面图标，既无法像 `monochrome` 那样跟随主题实时变化，也无法像 favicon 那样在运行时重新评估媒体查询。遵循标准的系统，能适配就适配；无法适配的场景，去寻求标准之外的强行实现方法，是一件非常浪费精力的事，直接放弃就好。

### iOS

#### 声明方式

苹果在 iOS 生态早期便确立了专属的桌面图标获取方式，该语法**严格只支持 PNG 位图格式**。

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

从 iOS 15.4 开始，苹果开始支持在桌面无 `apple-touch-icon` 标签时，自动读取 `webmanifest` 里的 `icons` 数组作为主屏幕图标。

但是，iOS 在读取 Manifest 时更倾向于选择 `"purpose": "any"` 的图标。该属性下通常是为 PC 端准备的透明背景图标，由于 iOS 主屏幕严禁透明像素，Safari 抓取后会自动用纯黑色填满透明区域，导致桌面图标出现突兀的黑边。

因此，即便在现代 iOS 环境下，仍强烈建议保留传统的 PNG 格式 `apple-touch-icon` 标签。这样可以在第一优先级直接满足 Safari 的图标嗅探，从根源上完美阻断因降级读取引发的黑边 Bug。

#### 深色反转与液态玻璃效果

自 iOS 18 起，苹果推出了与 Android 类似的主屏幕图标智能适配功能，到了 iOS 26，系统更会自动施加一层液态玻璃 3D 光照和立体折射效果。

可惜 iOS 的 PWA 图标没有办法像原生 App 那样精细地分情况适配不同的图标外观。只能在设计阶段，保证图标是白底且界限分明的，没有添加阴影或羽化效果，PWA安装后就会被iOS自动抠图适配深色模式与染色模式，自动添加液态玻璃效果。当然，设计白底图标时，还是要同时考虑前景色与浅色、深色背景搭配的效果。

### 正在消失的Metro UI

在旧版 Windows 8.1 与 Windows 10 系统上，微软内置的 Edge Legacy 和 Internet Explorer 11 浏览器支持将网页作为磁贴固定到系统的开始屏幕上。虽然微软在 Win11 中摒弃了 Metro UI，但截止到2026年5月，Win10 仍然有20%多的遗留占有率[^winshare]，继续适配磁贴也算是一种情怀了。

[^winshare]: [Desktop Windows Version Market Share Worldwide](https://gs.statcounter.com/os-version-market-share/windows/desktop/worldwide "null")

Win8.1 与 Win10 的 Metro 磁贴图标与背景色由放置在站点根目录的`browserconfig.xml`文件定义，这个文件不需要在网页`head`引用，因此不可使用其他名称。

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

另外，即使不建立`browserconfig.xml`，也可以在网页的 `<head>` 部分指定磁贴背景色，例如这段 `<meta>` 标签指定了磁贴的背景是灰色：

```html
<meta name="msapplication-TileColor" content="{{ site.ms_tile_color | default: '#888888' }}">
```

