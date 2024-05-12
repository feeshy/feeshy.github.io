---
layout: post
title: 思源系列字体中英名称对照表
tags:
  - fonts
  - noto-cjk
  - source-han
---

> 思源 (Noto CJK) 系列字体是由 Adobe 与 Google 合作开发的开源泛中日韩字体家族，包含思源黑体和思源宋体两种字形，支持中文（大陆简体/繁体、台湾繁体、香港繁体）、日文、韩文等文字，提供 7 种字重和可变字体。

思源系列字体本身，以及基于它二次开发的CJK字体版本众多、命名混乱。这里选择了几个具有相同中国大陆标准字形的版本，用几个表格整理了它们的中英名称，方便写CSS时调用。

- 字重
	- 静态 - 每个字重都是单独的文件，字重在250~900范围内分为七档
	- 可变 - 单文件包括全部字重，字重在250~900范围内无极调节
- 字符数量
	- 全字集：更适合电脑本地安装
		- Language Specific OTF - 首选本地区标准字形，通过支持的软件[^1]能调用其他地区的字形
		- OTC - 多语言版本，用单文件打包了全部的Language Specific OTF，体积只比Language Specific OTF大一点点，部分低版本操作系统不支持
	- 小字集：更适合Webfont、嵌入式设备等使用场景的小体积版本
		- Subset OTF - 去除了本地区不使用的字形

[^1]: [requires an app that supports language tagging and the OpenType 'locl' GSUB feature](https://github.com/adobe-fonts/source-han-sans/tree/release?tab=readme-ov-file#language-specific-variable-fonts)

以下每个小级标题下的中文字形相同，区别仅在的内置西文字体：

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
| 更纱黑体          | 静态  | Inter           | Sarasa Gothic SC      |                       |

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
| 等距更纱黑体             | 静态  | Iosevka 1/2宽         | Sarasa Gothic SC      |                    |

- 思源黑体HW与Noto Sans Mono CJK的西文均基于Source Sans Pro，仅提供字符等宽，缺少针对编程的优化（例如，数字`0`与大写字母`O`的外观几乎没有区别）
- 思源等宽内置的Source Code Pro宽度是2/3个中文（而独立的Source Code Pro的宽度则是0.6个中文字符）
- 推荐字体
	- 表格数字与中文混排：等距更纱黑体、思源黑体HW、Noto Sans Mono CJK
	- 代码与中文注释混排：等距更纱黑体、思源等宽，或者用中文字体与其他等宽英文字体拼凑

最后附[常见等宽字体的英文字符与中文字符宽度的比值](/lists/monospace-fonts-width)
