---
layout: post
title: 能与中文对齐的西文等宽字体
last_modified_at: 2026-05-30
tags:
  - 字体
custom_head: "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\r<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\r<link href=\"https://fonts.googleapis.com/css2?family=Cascadia+Code&family=Cascadia+Mono&family=Fira+Code&family=Google+Sans+Code&family=Inconsolata&family=JetBrains+Mono&family=Noto+Sans+Mono&family=PT+Mono&family=Roboto+Mono&family=Source+Code+Pro&family=Ubuntu+Mono&family=Ubuntu+Sans+Mono&display=swap\" rel=\"stylesheet\">"
description: 中英文等宽编程字体挑选指南。盘点更纱黑体、Maple等定制字体及纯西文等宽字体与中文的1:2对齐方案。内置相似字符区分、编程连字技术对比，完美解决VSCode和终端混排难题。同时支持30余款主流与极客字体在线代码动态预览
---
汉字字体普遍采用等宽设计，而西文字体则有比例和等宽两种选择。

- 比例字体的每个字符宽度各不相同。这种设计使得文字在视觉上更加自然流畅，也因此更符合阅读习惯。因而广泛应用于书籍、报刊、杂志等印刷品，以及网页设计、UI界面等领域，为读者带来更加舒适、美观的阅读体验。
- 等宽字体的所有字符都拥有相同宽度。其整齐划一的特点能够使多行相似的文字信息对齐显示，在编程领域占据着不可替代的地位，此外等宽数字也被广泛应用于表格制作、金融数据展示等场景。

此外，在编程环境中，字体选择除了等宽之外，还需要考虑一些额外的要求：

- **相似字形区分:** 编程中经常使用一些容易混淆的字符，例如字母```O```和数字```0```，数字```1```和字母```l```等。编程字体常常会在字形设计上突出相似字符之间的字形差异，避免误读。
- **编程连字:** 编程语言中存在一些特殊符号，例如```:=```、```->```等，这些符号通常会被拆分成多个字符显示。部分编程字体可以将这些符号显示为特殊的连字。
- **NF图标:** Nerd Font 内置了大量开发常用图标，可以直接显示在终端或编辑器中，用图形替代文字标注，让信息识别更直观。因而部分程序员对于编程使用的字体会有内置NF图标的需求。

以汉字为代表方块字通常固定 1em 宽，而西文字体的宽度并没有统一的标准。多语言混排的环境中，只有在两者宽度比例关系合适的情况下，才能使字母与汉字对齐。为了方便中文用户选择合适的等宽字体，本文整理了一些常见西文等宽字体与中文的字形宽度比例：

| 字体名称                                                       | 中文字形                | 西文字形                                             | 西文宽度            | 授权                                                                                                                                | 备注[^0]                                                                                                                                                          |
| ---------------------------------------------------------- | ------------------- | ------------------------------------------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 等距更纱黑体 / Sarasa Mono SC                                    | 思源黑体                | Iosevka                                          | 0.5em           | [开源](https://github.com/be5invis/Sarasa-Gothic)                                                                                   | 有/无连字多版本                                                                                                                                                        |
| 思源黑体HW / Source Han Sans HW SC / Noto Sans Mono CJK SC[^1] | 思源黑体                | Source Sans Pro                                  | 0.5em           | 开源： [Adobe](https://github.com/adobe-fonts/source-han-sans) / [Google](https://github.com/notofonts/noto-cjk/tree/main/Sans/Mono) | 无字形区分                                                                                                                                                           |
| 思源等宽 / Source Han Mono SC[^2]                              | 思源黑体                | Source Code Pro 加宽版                              | 0.667em         | [开源](https://github.com/adobe-fonts/source-han-mono)                                                                              |                                                                                                                                                                 |
| Source Code Pro                                            | 无                   | Source Code Pro                                  | 0.6em           | [开源](https://github.com/adobe-fonts/source-code-pro)                                                                              |                                                                                                                                                                 |
| Noto Sans Mono                                             | 无                   | Noto Sans Mono                                   | 0.6em           | [开源](https://github.com/notofonts/noto-fonts)                                                                                     | 作为 Android fallback 字体的等宽字体，部分 Linux 发行版也有预装。无编程连字。                                                                                                             |
| 文泉驿等宽微米黑 / Wenquanyi Micro Hei Mono                        | Droid Sans Fallback | Droid Sans Mono                                  | 0.6em           | [开源](http://wenq.org/wqy2/index.cgi?MicroHei)                                                                                     | 两种远古时期 Android 默认字体的拼接，无字形区分                                                                                                                                    |
| Roboto Mono                                                | 无                   | Roboto Mono                                      | 0.6em           | [开源](https://github.com/googlefonts/RobotoMono)                                                                                   | 当前 Android 默认等宽字体。无编程连字。                                                                                                                                        |
| Maple Mono CN                                              | 资源圆体 间距加宽版[^3]      | Maple Mono                                       | 0.6em           | [开源](https://github.com/subframe7536/maple-font)                                                                                  | 可选NF图标、hinted / unhinted、以及多种连字预设版本                                                                                                                             |
| 新晰黑 Code / NeoXiHei Code                                   | 霞鹜新晰黑               | Migu 1M                                          | 0.5em           | [开源](https://github.com/lxgw/NeoXiHei-Code)                                                                                       |                                                                                                                                                                 |
| LXGW Bright Code                                           | 霞鹜文楷 Lite           | Monaspace Argon 缩窄版                              | 0.5em           | [开源](https://github.com/lxgw/LxgwBright-Code)                                                                                     | NF图标                                                                                                                                                            |
| Monaspace Neon / Argon / Xenon / Radon / Krypton           | 无                   | Monaspace Neon / Argon / Xenon / Radon / Krypton | 0.6~0.75em      | [开源](https://monaspace.githubnext.com/)                                                                                           | 编程连字。字重、斜度、宽度三轴可变。                                                                                                                                              |
| DejaVu Sans Mono                                           | 无                   | DejaVu Sans Mono                                 | 0.602em         | [开源](https://github.com/dejavu-fonts/dejavu-fonts)                                                                                | 部分 Linux 发行版预装。无编程连字                                                                                                                                            |
| Fira Code                                                  | 无                   | Fira Code                                        | 0.6em           | [开源](https://github.com/intel/intel-one-mono)                                                                                     | 编程连字                                                                                                                                                            |
| Hack                                                       | 无                   | Hack                                             | 0.6em           | [开源](https://github.com/source-foundry/Hack)                                                                                      |                                                                                                                                                                 |
| JetBrains Mono                                             | 无                   | JetBrains Mono                                   | 0.6em           | [开源](https://github.com/JetBrains/JetBrainsMono/)                                                                                 | 编程连字                                                                                                                                                            |
| Inconsolata                                                | 无                   | Inconsolata                                      | 0.5em           | [开源](https://github.com/googlefonts/Inconsolata)                                                                                  | 编程连字                                                                                                                                                            |
| Ubuntu Mono                                                | 无                   | Ubuntu Mono                                      | 0.5em           | [开源](https://github.com/canonical/Ubuntu-Sans-Mono-fonts/releases/tag/v1.002)                                                     | Ubuntu 默认等宽字体旧版                                                                                                                                                 |
| Ubuntu Sans Mono                                           | 无                   | Ubuntu Sans Mono                                 | 0.56em          | [开源](https://github.com/canonical/Ubuntu-Sans-Mono-fonts)                                                                         | Ubuntu 默认等宽字体。新版字形加宽，比例更和谐了，但不再能与中文对齐                                                                                                                           |
| Cascadia Code                                              | 无                   | Cascadia Code                                    | 0.586em         | [开源](https://github.com/microsoft/cascadia-code)                                                                                  | [Win11](https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list) 预装，终端和 Visual Studio 的新一代默认字体。提供有连字 (Code) / 无连字 (Mono) 双版本。                   |
| Cascadia Next SC                                           | Cascadia Next SC    | Cascadia Next                                    | 0.5em           | [开源](https://github.com/microsoft/cascadia-code/tree/cascadia-next)                                                               | 2024年放出的一个试验版本，收录了常用的CJK字符                                                                                                                                      |
| Consolas                                                   | 无                   | Consolas                                         | 0.55em          | 专有                                                                                                                                | [Windows](https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list) 预装的上一代编程字体                                                                   |
| Courier New                                                | 无                   | Courier New                                      | 0.6em           | 专有                                                                                                                                | 几十年来 [Windows](https://en.wikipedia.org/wiki/List_of_typefaces_included_with_Microsoft_Windows) / [macOS](https://support.apple.com/zh-cn/122869) 都预装的 web 安全字体 |
| Lucida Console                                             | 无                   | Lucida Console                                   | 0.6em           | 专有                                                                                                                                | [Windows](https://learn.microsoft.com/en-us/typography/fonts/windows_11_font_list) 预装                                                                           |
| SF Mono                                                    | 无                   | SF Mono                                          | 0.6em           | 专有                                                                                                                                | [macOS](https://developer.apple.com/cn/fonts/) / iOS 默认等宽字体                                                                                                     |
| Monaco                                                     | 无                   | Monaco                                           | 0.6em           | 专有                                                                                                                                | [macOS](https://support.apple.com/zh-cn/122869) / iOS 预装                                                                                                        |
| Menlo                                                      | 无                   | Menlo                                            | 0.6em           | 专有                                                                                                                                | [macOS](https://support.apple.com/zh-cn/122869) / iOS 预装                                                                                                        |
| PT Mono                                                    | 无                   | PT Mono                                          | 0.6em           | 专有                                                                                                                                | [macOS](https://support.apple.com/zh-cn/122869) / iOS 预装                                                                                                        |
| Google Sans Code                                           | 无                   | Google Sans Code                                 | 0.6em           | [开源](https://github.com/googlefonts/googlesans-code)                                                                              | Gemini 和 Android Studio 的等宽字体                                                                                                                                   |
| Intel One Mono                                             | 无                   | Intel One Mono                                   | 0.62em?[^4]<br> | [开源](https://github.com/intel/intel-one-mono)                                                                                     | 编程连字                                                                                                                                                            |


[^0]: 字形区分未提及即默认具有，编程连字以及其他特性均会说明
[^1]: 注意：[Noto Sans Mono CJK](https://en.wikipedia.org/wiki/Source_Han_Sans#Noto_Sans_Mono_CJK) 的西文既不是 Noto Sans Mono，也不是 Source Code Pro
[^2]: 思源等宽没有对应的 Noto 版本
[^3]: 与其他内置中文的编程字体不同，Maple Font并没有缩窄西文宽度，而是**增加中文间距**实现1:2对齐。故无法自由搭配其他中文字体，但可任意组合其他0.6em宽的英文字体实现1:2对齐。
[^4]: Intel One Mono 的网格理论上是 0.6em，但经测试 v1.4 版本在 VS Code 中渲染的实际宽度比 0.6em 略宽，原因不明

你也可以使用下面的工具预览上述字体的外观，其中 Cascadia Code, Cascadia Mono, Fira Code, Google Sans Code, Inconsolata, JetBrains Mono, Noto Sans Mono, PT Mono, Roboto Mono, Source Code Pro, Ubuntu Mono, Ubuntu Sans Mono 十二款字体可以调用托管于 Google Font 的 webfont，其余字体只有在本地已安装的前提下才能调用。

<select id="fontselect"></select>

<div><pre><code id="fontpreview" style="font-family: monospace;">
------
一二三四五六七八九十一二
12345678901234567890
1ilIL  oO0
== != >= =>
!! ?? && ||
</code></pre></div>

<script>
const chooseSelect = document.getElementById('fontselect');
const previewElement = document.getElementById('fontpreview');

// 字体列表
const fonts = [
  "Cascadia Code",
  "Cascadia Mono",
  "Cascadia Next",
  "Consolas",
  "Courier New",
  "DejaVu Sans Mono",
  "Droid Sans Mono",
  "Fira Code",
  "Google Sans Code",
  "Hack",
  "Inconsolata",
  "Intel One Mono",
  "Iosevka",
  "JetBrains Mono",
  "Lucida Console",
  "LXGW Bright Code",
  "Maple Mono",
  "Maple Mono CN",
  "Menlo",
  "Migu 1M",
  "Monaco",
  "Monolisa",
  "NeoXiHei Code",
  "Noto Sans Mono",
  "Noto Sans Mono CJK SC",
  "PT Mono",
  "Roboto Mono",
  "SF Mono",
  "Source Code Pro",
  "Source Han Mono SC",
  "Source Han Sans HW SC",
  "Sarasa Mono SC",
  "Iosevka",
  "Ubuntu Mono",
  "Ubuntu Sans Mono",
  "Wenquanyi Micro Hei Mono"
];

// 将字体按字母顺序排序
fonts.sort();

// 填充下拉选框
for (const font of fonts) {
  const option = document.createElement('option');
  option.value = font;
  option.textContent = font;
  chooseSelect.appendChild(option);
}

// 监听下拉选框变化
chooseSelect.addEventListener('change', function() {
  const selectedFont = this.value;
  previewElement.style.fontFamily = `${selectedFont}, monospace`;
});
</script>