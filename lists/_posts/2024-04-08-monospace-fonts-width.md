---
layout: post
title: 能与中文对齐的西文等宽字体
last_modified_at: 2024-05-09
tags:
  - 字体
custom_head: "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r<link href=\"https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inconsolata:wght@200..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+Mono:wght@100..900&family=PT+Mono&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Ubuntu+Sans+Mono:wght@400..700&display=swap\" rel=\"stylesheet\">"
custom_js: /assets/js/monospace-test.js
---
汉字字体普遍采用等宽设计，而西文字体则有比例和等宽两种选择。

比例字体是指每个字符宽度各不相同的字体。这种设计使得文字在视觉上更加自然流畅，也因此更符合阅读习惯。因而广泛应用于书籍、报刊、杂志等印刷品，以及网页设计、UI界面等领域，为读者带来更加舒适、美观的阅读体验。

等宽字体是指所有字符都拥有相同宽度（通常以像素为单位）的字体。其整齐划一的特点能够使多行相似的文字信息对齐显示，在编程领域占据着不可替代的地位，此外也被广泛应用于表格制作、金融数据展示等场景。

在编程环境中，字体选择除了等宽之外，还需要考虑一些额外的要求：

- **相似字形区分:** 编程中经常使用一些容易混淆的字符，例如字母```O```和数字```0```，数字```1```和字母```l```等。等宽字体的固定宽度可以使这些字符之间的差异更加明显，避免误读。
- **编程连字:** 编程语言中存在一些特殊符号，例如```:=```、```->```等，这些符号通常会被拆分成多个字符显示。部分等宽字体可以将这些符号的显示为特殊的连字。

等宽字体的宽度并没有统一的标准。在中英混排的环境中，由于汉字的宽度通常大于字母，此时西文字体的宽度显得尤为重要。只有宽度合适的等宽字体才能使英文字符与中文对齐，提升代码或表格的可读性。

为了方便中文用户选择合适的等宽字体，本文整理了一些常见西文等宽字体与中文的字形宽度比例：

| 字体名称                                                    | 西文宽度  | 备注                                                                                                                                                                                                                      |
| ------------------------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 等距更纱黑体 (Sarasa Mono SC)                                 | 0.5   | 思源黑体 + Iosevka，[开源](https://github.com/be5invis/Sarasa-Gothic)，有编程连字                                                                                                                                                    |
| 思源等宽 (Source Han Mono SC)                               | 2/3   | 思源黑体 + Source Code Pro，[开源](https://github.com/adobe-fonts/source-han-mono)，西文宽度拉伸到2/3个中文                                                                                                                               |
| 思源黑体HW (Source Han Sans HW SC)<br>Noto Sans Mono CJK SC | 0.5   | 思源黑体 + Source Sans Pro，[开源](https://github.com/adobe-fonts/source-han-sans)，无字形区分，西文宽度1/2个中文<br>注意[Noto Sans Mono CJK](https://github.com/notofonts/noto-cjk/tree/main/Sans/Mono)的西文也是Source Sans Pro，而不是Noto Sans Mono |
| 文泉驿等宽微米黑 (Wenquanyi Micro Hei Mono)                     | 0.6   | Droid Sans Fallback + Droid Sans Mono<br>远古时期Android默认字体，无字形区分                                                                                                                                                          |
| Roboto Mono                                             | 0.6   | Android默认等宽字体，[开源](https://github.com/googlefonts/RobotoMono)                                                                                                                                                           |
| Noto Sans Mono                                          | 0.6   | 替代Roboto的新一代Android默认等宽字体，[开源](https://github.com/notofonts/noto-fonts)                                                                                                                                                 |
| DejaVu Sans Mono                                        | 0.6   | [开源字体](https://github.com/dejavu-fonts/dejavu-fonts)                                                                                                                                                                    |
| Fira Code                                               | 0.6   | [开源字体](https://github.com/intel/intel-one-mono)，有编程连字                                                                                                                                                                   |
| Hack                                                    | 0.6   | [开源字体](https://github.com/source-foundry/Hack)                                                                                                                                                                          |
| JetBrains Mono                                          | 0.6   | [开源字体](https://github.com/JetBrains/JetBrainsMono/)，有编程连字                                                                                                                                                               |
| Source Code Pro                                         | 0.6   | [开源字体](https://github.com/adobe-fonts/source-code-pro)，由Adobe开发                                                                                                                                                         |
| Inconsolata                                             | 0.5   | [开源字体](https://github.com/googlefonts/Inconsolata)                                                                                                                                                                      |
| Ubuntu Mono                                             | 0.5   | 旧版Ubuntu默认等宽字体，你现在看到的表格使用的字体就是它                                                                                                                                                                                         |
| Ubuntu Sans Mono                                        | ≈0.56 | Ubuntu默认等宽字体，[开源](https://github.com/canonical/Ubuntu-Sans-Mono-fonts)<br>新版字形加宽，比例更和谐了，但不再能与中文对齐                                                                                                                       |
| Intel One Mono                                          | ≈0.62 | [开源字体](https://github.com/intel/intel-one-mono)                                                                                                                                                                         |
| Cascadia Code                                           | ≈0.59 | VS Code默认字体，[开源](https://github.com/microsoft/cascadia-code)，有编程连字<br>就差那么一丢丢对不齐                                                                                                                                        |
| Consolas                                                | 0.55  | 微软出品，经典编程字体                                                                                                                                                                                                             |
| Courier New                                             | 0.6   | Windows默认等宽字体                                                                                                                                                                                                           |
| Lucida Console                                          | 0.6   | Windows预装字体                                                                                                                                                                                                             |
| SF Mono                                                 | 0.6   | macOS/iOS默认等宽字体                                                                                                                                                                                                         |
| Monaco                                                  | 0.6   | macOS/iOS预装字体                                                                                                                                                                                                           |
| Menlo                                                   | 0.6   | macOS/iOS预装字体                                                                                                                                                                                                           |
| PT Mono                                                 | 0.6   | macOS/iOS预装字体                                                                                                                                                                                                           |

你也可以使用下面的工具预览上述字体的外观，其中 Fira Code, Inconsolata, JetBrains Mono, Noto Sans Mono, PT Mono, Roboto Mono, Source Code Pro, Ubuntu Mono, Ubuntu Sans Mono 九款字体可以调用托管于 Google Font 的 webfont，其余字体只有在本地已安装的前提下才能调用。

<select id="fontselect"></select>

<div><pre><code id="fontpreview" style="font-family: monospace;">
------
一二三四五六七八九十一二
12345678901234567890
1ilIL  oO0
== != >= =>
!! ?? && ||
</code></pre></div>