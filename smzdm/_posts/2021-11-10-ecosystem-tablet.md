---
layout: post
title: iPad与Surface的生产力生态
date: 2021-11-10
last_modified_at: 2023-06-30
tags:
  - ipad
  - surface
  - appinn
  - 深度体验
redirect_from:
  - https://meta.appinn.net/t/27415
toc: true
---
今年秋季入手了一台iPad，跟之前的一台[联想的类Surface产品](/smzdm/yoga-duet-iml)互补使用。Surface Pro与iPad Pro的生产力之争持续了很多年，我用Surface形态的产品有几年了，iPad也用了几个月，现在算是有发言权了，来逐步分享一些实际使用中两个系统硬件和生态的差异。

## 差异很小的方面

### 各种基于Web套壳的软件

核心都是网页，各个平台的使用体验当然没多大的差别啦。

例如，我平时大量使用的幕布，基本是随手逮到哪台设备就用哪台，iOS端唯一的限制是快捷键稍微少一些。

### Affinity专业创意软件

Serif是一家真的在用行动重视iPad的软件商，旗下的Affinity Photo、Designer、Publisher的iPad端功能和更新频率基本上看齐桌面端，买断价格不到PC端的一半，性价比非常高。

### 窗口管理

将窗口按照直觉贴靠即可分屏是Windows11更新最重大的新特性之一。win11还跟进了iPad的多指手势，切换应用、虚拟桌面也不再依赖于键盘。

苹果这边则有iPadOS16引入、iPadOS17完善的台前调度功能。目前两系统的窗口管理能力基本在同一水平。

## iPad的优势

### 续航

|                | 架构 | 制程 | 电量   | 续航时间 |
| -------------- | ---- | ---- | ------ | -------- |
| Yoga Duet 2020 | x86  | 14nm | 42Wh   | 4~6h     |
| iPad Pro 2021  | arm  | 5nm  | 28.5Wh | 10~15h   |

Yoga Duet的4~6小时续航是在新机电池老化之前。这台电脑我已经使用3年半，目前电池损耗25%，续航缩短到不到3小时——这也是我有了win板还要添置iPad最重要的原因

### GPU加速

#### 轻量的剪辑

Yoga Duet的配置i5-10210U+16GB，算是笔记本性能的下水道了。知名的剪辑软件如达芬奇、KdenLive、Shotcut，在这台电脑上连最基本的1080P时间线30帧播放都做不到，众多知名和不知名的剪辑软件中，只有剪映和VSDC两个可以勉强使用。

iPad Pro的配置是M1+8GB，两年后仍旧是平板中性能较高的那一梯队。不管是用iMovie、VideoLight、VN、剪映这些玩具，还是用LumaFusion、达芬奇、FCPX，剪个1080P都是轻松胜任的。没尝试4K是因为iPad的容量单价太高，如果为了剪4K外接SSD，又有点失去iPad便携的意义了。

M1 iPad的发热量、时间线流畅程度、渲染耗时都远远优于采用i5-10210U的Yoga Duet。

#### 机器学习

苹果的Core ML配合自家芯片的神秘加成。之前[测试过这两个平台的waifu2x项目](https://meta.appinn.net/t/topic/27097)，速度差距超出想象。

### 色彩

Windows作为一个历史包袱沉重的系统，不要说第三方软件对于色彩管理的支持良莠不齐，[连系统组件都有一部分不支持色彩管理](https://www.zhihu.com/question/49981685/answer/1478740184)，在广色域的屏幕上，只有少量的专业软件能够保证色彩准确显示，而包括Windows桌面在内的大量不支持色彩管理的软件通通会出现过饱和失真。Surface Pro和类似的产品都是硬件上选用不超过100% sRGB色域的屏幕来规避这个问题。

而iPad得益于自身硬件和软件的封闭性，可以在一块广色域的屏幕上同时兼顾广色域内容的鲜艳和sRGB内容的准确。Windows和iPad的Affinity Photo我都有，在不方便外接显示器时，我会更倾向在iPad这块Display P3色域的屏幕上修图。

### 字体渲染

iOS的字体渲染机制要比Windows更加舒服，而且有的内容源（例如微信公众号）也只有在移动平台阅读才会比较方便。

### 音频延迟

[音频延迟](https://www.zhihu.com/question/270656997)也是苹果的传统强项了。Windows使用虚拟乐器或者音游软件时一般要插[额外的ASIO声卡](/smzdm/sonata-hd)才能保证跟手的手感，而iPad则不用太关心这些驱动上的问题，拿起设备直接就是可用的状态，就很顺手。

## Surface的优势

### 支架

iPad的智能双面夹或者键盘夹只能提供非常有限的角度（梦回surface pro 2）；支持角度无极调节的妙控键盘比iPad本体还重，装上后重量直逼MacBook；罗技的[Combo Touch](https://www.logitech.com.cn/zh-cn/products/ipad-keyboards/combo-touch.html)键盘可以从保护壳上分离，拆下键盘就能变成类似Surface的形态倒是不错，可惜支架保护壳只与键盘捆绑销售。

我目前的解决方案是用moft的这款折叠支架粘贴在一个阿里巴巴买的保护壳上，角度基本可以满足使用。

### 多显示器

自古以来，Windows支持四种多显示器模式。

苹果方面则是iPadOS 16.2才加入对外接显示器桌面扩展模式的支持，且需要使用键鼠才能控制外置显示器内的内容，并不像安卓那样提供内置屏幕上的虚拟触控板。

iOS优秀的色彩管理也仅限于其内置的屏幕，[对于外接的屏幕iOS则是无从加载其ICC的](https://www.reddit.com/r/ipad/comments/jnlbku/how_does_color_management_work_with_an_external/)。例如，外接显示器使用Affinity Photo，iPad会用色彩准确但寸土寸金的内置屏幕显示很小的工具界面，用大尺寸但色彩裸奔的显示器监视照片的效果——完美避开两块屏幕各自的长处。

### 文件管理和传输

当我们需要多个软件协同处理同一个文件时，iOS会在各个应用内形成不同处理阶段的副本，这样的文件管理逻辑是非常混乱的。

与此同时，M1芯片、iOS系统、苹果的“文件”App三者的结合[并不能满足机身的雷电接口](https://youtu.be/rCkTrHNt1Z8)，即使iOS 15对此进行了一定程度的修复，外接硬盘的读写速度[仍然远远达不到接口的速度上限](https://youtu.be/gSE0Q47I4aU)，在操作一些较大的文件时还常常失去响应（不过，相比Win10，Win11的资源管理器卡住的频率也有一定的上升，还真是半斤八两。）

此外，iPad外接存储器没有安全删除功能。使用的硬盘盒有指示灯还好判断一些，如果存储设备没有指示灯，就只能拔掉它时在心里默默祈祷了。

### 手写笔（当你不需要绘画时）

我承认iPad和Apple Pencil的搭配在抑制慢速斜线抖动和书写延迟上表现更好，但这也是它仅有的优势了。

也许是网评对Apple Pencil的过度神化导致我对它产生了过高的期待，真正用下来，我发现在仅文字标注、不绘画的情景下，iPad使用手写笔的体验反而不如Windows平板

- 续航焦虑——这个缺点适用于Apple Pencil 2以外的所有官方笔和第三方笔。Apple Pencil 1这样的噩梦产品自不必说；即便是可以关机的第三方笔，在轻度的使用下，续航也仅仅能坚持一周出头——在两年换一节电池的N-Trig和Wacom AES手写笔面前，可以说是毫无竞争力。
- 书写不跟手：我写字是个笔画与笔画之间抬笔不高的人，Apple Pencil没接触到屏幕就会提前出墨，写字笔画是飞的七扭八拗
- 缺少实体按键：手势的具体功能依赖于软件适配，各软件之间的手势功能并不统一。而笔-橡皮-笔的切换，也要比直接按住实体橡皮擦键擦除有着更强的思路打断感。有一段时间我一直在强迫自己只使用iPad的笔写字和标注，发现这种打断感其实是无法适应的，最终iPad的笔还是沦为Win板没电时才会选择的后备选项。
- 贵：官方Apple Pencil以N-Trig、Wacom AES笔3~5倍的价格，却并不能提供与价格相匹配的优势。可以做到与N-Trig、Wacom AES笔价格相当的第三方笔，甚至连压感都没有。

iPad手写笔续航和价格问题在第三方厂商普及了无线充电之后有所缓解。这里分享一点踩坑经验——谨慎考虑使用触摸按键的笔，这类设计其实非常容易误触。

### Microsoft Office

Windows就是MS Office的最佳平台，没有之一，这是毫无悬念的。“最佳Android/iOS开发者微软”这种玩笑话不必当真。2023年，iPad的Office相比Windows平台仍然缺少包括大纲视图、SmartArt编辑在内等等最为基础的功能。iPad可以是一个优秀的Office阅读器，而作为Office编辑器，就只能在及格线上下徘徊了。

### Lightroom平替RAW显影软件

Lightroom本身手机RAW是免费的

[桌面端的Lightroom替代品](https://meta.appinn.net/t/topic/17302#rawlightroom-5)有免费的RAWTherapee、darktable，都蛮好用的。

而iOS端的RAW编辑软件，除了Adobe和Affinity有自己的显影引擎，其余众多软件都是调用iOS系统所提供的Apple RAW引擎，68元买断的RAW Power是其中性价比较高的选择。Apple的RAW引擎相比Adobe和Affinity的要更加初级，处理一下苹果设备所拍摄的RAW还凑合；在处理微单、单反的拍摄的RAW时，Apple RAW引擎甚至缺失读取镜头校正配置文件的基本功能，对新相机的解码支持也只能依赖于iOS系统的更新。

### 浏览器插件

Safari插件是iPadOS 15的新功能，浏览器扩展生态与耕耘了十几年的桌面浏览器不在一个体量上。插件代码移植到另一个平台很方便，最大的障碍其实是触屏与鼠标的两种交互方式的差异。许多浏览器插件和脚本win板想用就用，而iPad只能等了

### PWA

Safari for iOS对PWA的支持也比较初级，基本上只能看作是简单的离线缓存和网页全屏，并不能提供后台推送、App资源库、接入共享菜单等类似本地应用的体验（[苹果计划2023年在iOS Safari上支持推送](https://meta.appinn.net/t/topic/43613)）；而MS Edge与Windows11则可以对PWA做到系统级的整合。

### 虚拟机

win板可以跑[Linux](https://docs.microsoft.com/zh-cn/windows/wsl/)子系统、[Android](https://docs.microsoft.com/zh-cn/windows/android/wsa/)子系统，以及其他的虚拟机

iPad目前也有了[UTM](https://getutm.app/)虚拟机，但安装过程会较windows更麻烦一些。


## 小孩子才做选择题，成年人当然是全都要

![](/assets/img/surface-versus-ipad.png)

### iPad做Surface副屏

如果想体验一下可以安装免费的Spacedesk。

经过我浪费几小时和一百多块的验证，其余的付费应用，不论是有线还是无线连接，实际体验都与spacedesk拉不开差距。这是因为Retina级别的iPad当作副屏需要很大的传输带宽，即便是duet display的有线连接在全分辨率下刷新率也是达不到60Hz的，鼠标仍然是严重的不跟手。

2023更新：[iPadOS 17支持了USB摄像头](https://www.v2ex.com/t/947468)，现在只需购买一个采集卡，就可以使用iPad有线连接任何支持外接显示器的设备作为副屏使用了。不过目前采集卡普遍是HDMI输入的，轻薄本又普遍没有HDMI输出，用iPad做电脑的副屏就需要把两个转接头拼接，先把笔记本的USB DP转成HDMI，再用采集卡转回UVD信号输给iPad，谈不上优雅，未来[直接支持USB DP输入](/smzdm/capture-dock)、再转换成UVD输出的采集卡应该是个蓝海？

### Zotero

Zotero 6.0提供了内置PDF阅读器和iOS支持。目前Windows平台的Zotero导入、管理、引用文献较为方便，但字体渲染效果和对触控笔的支持较差；iPad OS版本则是导入文献不够方便，但阅读体验极好。将两者结合使用，便可发挥各自的长处