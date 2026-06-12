---
layout: post
title: 思源系列字体中英名称对照表
last_modified_at: 2026-06-11
tags:
  - 字体
description: 思源系列字体版本繁多、命名混乱。这里用几个表格整理了思源黑体和思源宋体的中英名称（含 Noto Sans CJK / Noto Serif CJK 等英文文件名），方便在 CSS、PR、Figma、PS、Office 等场景中查找调用。
---
思源系列字体[^1]本身，以及基于它二次开发的CJK字体版本繁多、命名混乱。这里用几个表格整理了思源黑体和思源宋体的中英名称，方便在 CSS、PR、Figma、PS、Office 等场景中查找调用。

[^1]: 思源 (Noto CJK) 系列字体是由 Adobe 与 Google 合作开发的开源泛中日韩字体家族，包含思源黑体和思源宋体两种字形，支持中文（大陆简体/繁体、台湾繁体、香港繁体）、日文、韩文等文字，提供 7 种字重和可变字体。

<details>
<summary>字重</summary>
<ul>
<li>静态 - 每个字重都是单独的文件，字重在250~900范围内分为七档</li>
<li>可变 - 单文件包括全部字重，字重在250~900范围内无极调节</li>
</ul>
</details>

<details>
<summary>字符数量</summary>
<ul>
<li>全字集：更适合电脑本地安装
<ul>
<li>Language Specific OTF - 包含了完整CJK字符，默认显示本地区标准字形，<a href="https://github.com/adobe-fonts/source-han-sans/tree/release?tab=readme-ov-file#language-specific-variable-fonts">通过代码或支持的现代设计软件</a>，能够直接强行调用出其它地区的隐藏字形。</li>
<li>OTC - 多语言版本，用单文件打包了全部的Language Specific OTF，体积只比Language Specific OTF大一点点，部分低版本操作系统不支持</li>
</ul>
</li>
<li>小字集：更适合Webfont、嵌入式设备等使用场景的小体积版本
<ul>
<li>Subset OTF - 物理裁剪、精简掉了本地区不使用的隐藏字形，因此无法跨地区调用。</li>
</ul>
</li>
</ul>
</details>

<details>
<summary>各地区子集后缀</summary>
<p>表格以中国大陆的简体中文版本为例（SC / CN），其他地区版本的命名规律同理，只需在对应的字体英文名或 CSS 调用时替换后缀即可</p>
<ul>
<li>大陆：SC（全字集，默认大陆简中字形） / CN（小字集，精简掉大陆不使用的字形）</li>
<li>台湾：TC（全字集，默认台湾繁体字形） / TW（小字集，精简掉台湾不使用的字形）</li>
<li>香港：HK（全字集，默认香港繁体字形） / HC（小字集，精简掉香港不使用的字形）</li>
<li>日本：J（全字集） / JP（小字集）</li>
<li>韩国：K（全字集） / KR（小字集）</li>
</ul>
</details>

以下每个小级标题下的中文字形相同，区别仅在内置的西文字体：

---

## 衬线

|                | 字重  | 西文字体             | 全字集                    | 简中小字集            |
| -------------- | --- | ---------------- | ---------------------- | ---------------- |
| Noto Serif CJK | 静态  | Source Serif Pro | Noto Sans CJK SC       | Noto Sans SC     |
| Noto Serif CJK | 可变  | Source Serif Pro | Noto Sans CJK SC       | Noto Sans SC     |
| 思源宋体           | 静态  | Source Serif Pro | Source Han Serif SC    | Source Han CN    |
| 思源宋体 VF        | 可变  | Source Serif Pro | Source Han Serif SC VF | Source Han CN VF |

- 本地安装的全字集字体
	- 静态字体推荐选择Adobe分发的[Source Han Serif SC](https://github.com/adobe-fonts/source-han-serif/tree/release)，它在操作系统显示的名称比较简洁，是没有任何后缀的中文名称“思源宋体”，其他版本则会有或长或短的后缀；
	- 可变字体推荐选择Google分发的[Noto Serif CJK SC](https://github.com/notofonts/noto-cjk)，这版可变字体的名称与静态版本完全相同，可方便开发者调用。
- 服务器部署的小字集Webfont
    - 推荐选择Adobe分发的[思源宋体 CN VF](https://github.com/adobe-fonts/source-han-serif)，这版可变字体的名称与静态字体不同，便于列在font-family声明的末尾，从而实现只有在确实找不到本地安装的思源宋体时才会调用web font。例如：

``` CSS
font-family: 'Source Han Serif SC VF', 'Source Han Serif SC', 'Noto Serif CJK SC', 'Source Han Serif CN', 'Noto Serif SC', 'Source Han Serif CN VF', serif;
```

## 非衬线

### 非等宽

|               | 字重  | 西文字体            | 全字集名称                 | 小字集名称                 |
| ------------- | --- | --------------- | --------------------- | --------------------- |
| Noto Sans CJK | 静态  | Source Sans Pro | Noto Sans CJK SC      | Noto Sans SC          |
| Noto Sans CJK | 可变  | Source Sans Pro | Noto Sans CJK SC      | Noto Sans SC          |
| 思源黑体          | 静态  | Source Sans Pro | Source Han Sans SC    | Source Han Sans CN    |
| 思源黑体 VF       | 可变  | Source Sans Pro | Source Han Sans SC VF | Source Han Sans CN VF |
| 更纱黑体          | 静态  | Inter           | ×                     | Sarasa Gothic SC      |

思路同上。

### 等宽

|                    | 字重  | 西文字体                 | 全字集                   | 简中小字集              |
| ------------------ | --- | -------------------- | --------------------- | ------------------ |
| 思源等宽               | 静态  | Source Code Pro 2/3宽 | Source Han Mono SC    | Source Han Mono CN |
| 思源等宽               | 可变  | Source Code Pro 2/3宽 | Source Han Mono SC    | Source Han Mono CN |
| 思源黑体HW             | 静态  | Source Sans Pro 1/2宽 | Source Han Sans HW SC | ×                  |
| 思源黑体HW             | 可变  | Source Sans Pro 1/2宽 | Source Han Sans HW SC | ×                  |
| Noto Sans Mono CJK | 静态  | Source Sans Pro 1/2宽 | Noto Sans Mono CJK SC | ×                  |
| Noto Sans Mono CJK | 可变  | Source Sans Pro 1/2宽 | Noto Sans Mono CJK SC | ×                  |
| 等距更纱黑体             | 静态  | Iosevka 1/2宽         | ×                     | Sarasa Mono SC     |

- 思源黑体HW与Noto Sans Mono CJK的西文均基于Source Sans Pro，仅提供字符等宽，缺少针对编程的优化（例如，数字`0`与大写字母`O`的外观几乎没有区别）
- 思源等宽内置的Source Code Pro宽度是2/3个中文（而独立的Source Code Pro的宽度则是0.6个中文字符）
- 推荐字体
	- 表格数字与中文混排：等距更纱黑体、思源黑体HW、Noto Sans Mono CJK
	- 代码与中文注释混排：等距更纱黑体、思源等宽，或者用中文字体与其他等宽英文字体拼凑

最后附[常见等宽字体的英文字符与中文字符宽度的比值](/lists/monospace-fonts-width)
