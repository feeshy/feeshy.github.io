---
layout: post
title: 全平台剪贴板推送与同步方案合集
date: 2020-08-25
last_modified_at: 2024-04-20
tags:
  - appinn
  - 剪贴板
  - 推送
redirect_from:
  - https://meta.appinn.net/t/topic/18527
toc: true
---
【概念定义】

- 推送：主动发送文本，移动端不需打开客户端就能收到消息（iOS受限于权限需要手动复制）
- 同步：无需主动发送文本，Android常驻后台会增加电量消耗，iOS必须打开App才能复制
- 获取：需要主动发送文本，且不支持后台推送

## 1. 剪贴板推送工具

### [Bark](https://github.com/Finb/Bark)

https://www.appinn.com/bark-for-iphone/

iOS14.5以下支持自动将推送复制到剪贴板

> iOS 14.5 之后的版本因权限收紧，不能在收到推送时自动复制推送内容到剪切板。
可暂时先下拉推送或在锁屏界面左滑推送点查看即可自动复制，或点击弹出的推送复制按钮。

#### Bark-接收端

- [iOS接收：Bark](https://apps.apple.com/cn/app/id1403753865) ——支持免开App自动复制到剪贴板
- [Android接收：Push Lite](https://github.com/xlvecle/PushLite)

#### Bark-发送端

- [网页推送，支持定时](https://api.ihint.me/bark.html)
- [Chrome推送](https://github.com/xlvecle/Bark-Chrome-Extension)
- [Android推送（基于Tasker）](https://meta.appinn.net/t/19189)
- [Android推送（基于HTTP Shortcuts）](https://meta.appinn.net/t/19778)
- [iOS推送（基于快捷指令）](https://sharecuts.cn/shortcut/8187)
- [Windows推送（基于AutoHotKey）](https://meta.appinn.net/t/18677) 
- [Windows推送（基于Quicker）](https://getquicker.net/Sharedaction?code=e927d844-d212-4428-758d-08d69de12a3b)
- [Windows推送（基于Delphi）](https://github.com/HsuDan/BarkHelper)
- [Windows推送（基于.NET Framework）](https://github.com/romebake/AutoBark4Windows)
- [Linux/macOS/Windows命令行推送（基于Golang）](https://github.com/JasonkayZK/bark-cli)

#### [Bark-服务端](https://day.app/2018/06/bark-server-document/)
Bark开发者随应用提供了一个开箱即用的服务器。而如果你的数据特别敏感，你也可以选择将Bark部署到私人服务器。

### [Pushover](https://pushover.net/)

2012年成立的推送届元老。接收端覆盖iOS/Android/桌面浏览器，售价$4.99/平台。可以通过邮件或者API发送推送消息，官方收录了70多个接入的平台，也可以自己造轮子。

#### Pushover-接收端
- [Android](https://play.google.com/store/apps/details?id=net.superblock.pushover)
- [iOS](https://apps.apple.com/cn/app/id506088175)
- [Web](https://pushover.net/clients/desktop)

#### Pushover-发送端
- 现有[80多项服务](https://pushover.net/apps)，包括邮件、IFTTT、Zapier、HomeAssitant等等
- [API](https://pushover.net/api)

### [AnPush](www.anpush.com)

开发者也在本论坛。特色是支持非常多样的接收端，包括本地化的微信、QQ、飞书等，看得出有做生态的野心。目前还在起步阶段，接收客户端的上架还没完全完成。

https://meta.appinn.net/t/topic/52116

### [ntfy.sh](https://ntfy.sh/)

2022年出现的开源软件，可免费使用。定位类似Pushover，但目前缺少Pushover那样成规模的生态，从国内连接到服务器的线路也不太稳定

https://ntfy.sh/

#### nify-接收端

- Android: [Google Play](https://play.google.com/store/apps/details?id=io.heckel.ntfy) | [F-Droid](https://f-droid.org/en/packages/io.heckel.ntfy/)
- [iOS](https://apps.apple.com/us/app/ntfy/id1625396347)
- [Web](https://ntfy.sh/app)

#### ntfy-发送端

- [手搓](https://ntfy.sh/docs/publish/)

### Pushbullet

2013年成立，与Pushover同为推送届的元老

https://www.appinn.com/pushbullet/

- [官方客户端（Android/Chrome/Firefox/Windows）](https://www.pushbullet.com/apps)
- [iOS快捷指令](https://feeshy.github.io/tech/pushbullet)

### [Join](https://joaoapps.com/join)

由Tasker的第二代开发者joao出品，除了最基本的文本和文件推送之外，还有很多可与Tasker联动的高级功能。且[开放API](https://joaoapps.com/join/api/)，没有官方客户端的平台也可以自己造轮子

- [Android](https://play.google.com/store/apps/details?id=com.joaomgcd.join)
- [Web](https://joinjoaomgcd.appspot.com/)
- [Chrome](https://chrome.google.com/webstore/detail/flejfacjooompmliegamfbpjjdlhokhj)
- [Windows / macOS / linux](https://github.com/joaomgcd/JoinDesktop/releases)
- [Microsoft Store](https://www.microsoft.com/store/apps/join-by-joaoapps/9nblggh5krjx)
- [Google Assistant（基于ifttt）](https://joaoapps.com/google-assistant-ifttt-join-tasker-awesomeness/)

### [PushDeer](https://www.pushdeer.com/)

类似Bark的推送工具，有iOS和Android轻应用

https://www.appinn.com/pushdeer-app-clips/

## 2. 剪贴板同步工具

### [快贴](https://kuaitie.cloud/)

全平台剪贴板同步方案，自2014年稳定运行至今。

https://www.appinn.com/clipber-kuaitie/

- [全平台客户端](https://kuaitie.cloud/download/)
- [插件](https://kuaitie.cloud/developer/)

### Pushbullet

付费账户可在Android设备/桌面客户端之间同步剪贴板

- [官方客户端（Android/Chrome/Firefox/Windows）](https://www.pushbullet.com/apps)

### Join

由Tasker的第二代开发者joao出品，桌面版支持同步剪贴板

- [Android](https://play.google.com/store/apps/details?id=com.joaomgcd.join)
- [Windows / macOS / linux](https://github.com/joaomgcd/JoinDesktop/releases)
- [Microsoft Store](https://www.microsoft.com/store/apps/join-by-joaoapps/9nblggh5krjx)

### [KDE Connect](https://kdeconnect.kde.org/)

全平台但只有桌面端与Android端支持同步，iOS端属于第三类情况（既不支持同步也不支持推送）
- [全平台客户端](https://kdeconnect.kde.org/download.html)

### FnSync

仅支持Windows↔[Android](https://play.google.com/store/apps/details?id=holmium.fnsync)同步

https://www.appinn.com/fnsync/

### [SyncClipboard](https://github.com/hgoldfish/lafdup/) by hgoldfish

仅支持Windows↔[Android](https://play.google.com/store/apps/details?id=com.hgoldfish.lafdup)同步

### [微信输入法](https://z.weixin.qq.com/)

目前支持Windows/Android/iOS/macOS。直接通过输入法同步，不需要登录微信

### 微软

可以在Windows设备之间，或者Windows与安装了Android设备之间同步剪贴板

#### 途径1：SwiftKey键盘
- 【win+v】[Windows 10/11](https://support.microsoft.com/zh-cn/windows/%E5%89%AA%E8%B4%B4%E6%9D%BFwindows-c436501e-985d-1c8d-97ea-fe46ddf338c6)
- 【SwiftKey键盘】[Android](https://play.google.com/store/apps/details?id=com.touchtype.swiftkey&hl=en_US) | [iOS](https://apps.apple.com/zh/app/microsoft-swiftkey-ai-keyboard/id911813648) - 剪贴板同步暂时仅Android支持
#### 途径2：连接至Windows
- 【手机连接】[Windows 10/11](https://www.microsoft.com/en-us/p/your-phone/9nmpj99vjbwv)
- 【连接至Windows】[Android](https://play.google.com/store/apps/details?id=com.microsoft.appmanager) | [iOS](https://apps.apple.com/cn/app/id6443686328) - 剪贴板同步仅限[特定Android支持](https://support.microsoft.com/zh-cn/topic/%E5%9C%A8%E8%AE%BE%E5%A4%87%E4%B9%8B%E9%97%B4%E6%97%A0%E7%BC%9D%E4%BC%A0%E8%BE%93%E5%86%85%E5%AE%B9-8a0ead3c-2f15-1338-66ca-70cf4ae81fcb)

### 三星

#### 途径1：三星多屏联动

剪贴板与通知同步。还可拖拽文件和屏幕镜像，甚至可以直接在电脑上多指触摸

- [Android](https://play.google.com/store/apps/details?id=com.samsung.android.galaxycontinuity)
- [win10/win11](https://www.microsoft.com/store/apps/9nblggh5gb0m)

#### 途径2：Samsung DeX

DeX是三星手机的一个连接显示器、电视、电脑的屏幕扩展模式。其中电脑版支持剪贴板同步和文件拖拽

- [windows&macOS](https://www.samsung.com/cn/apps/samsung-dex/)

### 借助文件同步软件

Windows↔Android

https://www.appinn.com/resilio-sync-windows-android-by-feeshy/

## 3. 剪贴板获取工具

### [SyncClipboard](https://github.com/Jeric-X/SyncClipboard) by Jeric-X

与前面的同名工具重名，但这个支持全平台，美中不足是移动端需要手动获取

- 服务器
  - 独立服务端
  - 客户端内置服务器
  - WebDAV
- 客户端
  - [Windows](https://github.com/Jeric-X/SyncClipboard/releases/)
  - [Linux / macOS](https://github.com/Jeric-X/SyncClipboard.Desktop/releases)
  - [iOS（基于快捷指令）](https://github.com/Jeric-X/SyncClipboard?tab=readme-ov-file#ios)
  - [Android（使用HTTP Shortcut或者Autox.js）](https://github.com/Jeric-X/SyncClipboard?tab=readme-ov-file#android)

### [Clipboard-online](https://github.com/YanxinTang/clipboard-online)

一个以Windows为中心的剪贴板工具，可以在其他设备操作Windows剪贴板

https://www.appinn.com/clipboard-online/

#### clipboard-online服务端
- [Windows](https://github.com/YanxinTang/clipboard-online/releases/)

#### clipboard-online客户端
- [iOS（基于快捷指令）](https://github.com/YanxinTang/clipboard-online/blob/master/README_zh.md#%E4%BD%BF%E7%94%A8)
- [Android（基于HTTP Shortcuts）](https://meta.appinn.net/t/topic/20322)
- [Android（基于Tasker）](https://www.coolapk.com/feed/46426929)

### [AirDroid](https://www.airdroid.com/)

老牌多设备协同工具，本职功能是传文件，也能传文本和链接。Android、iOS Wwindwos、macOS全覆盖，美中不足是没法连接Tasker和快捷指令实现自动化操作。

https://www.appinn.com/airdroid-file-transfershare-for-ios/

- [官方客户端（全平台）](https://airdroid.com/download)

### [Feem](https://feem.io/)

也是一个能传文本的传文件工具。<s>iOS平台最后一次更新是适配iOS14，现在iOS16打开会闪退（2023.2.28编辑）</s>2024年恢复更新

- [官方客户端（全平台）](https://feem.io/#download)

### [SnapDrop](https://snapdrop.net)

本职是基于WebRTC的文件传输工具。长按图标也能跨设备发送文字，但这里的「长按」不管移动端还是桌面端必须用手指来按，没法识别按住鼠标左键的操作

https://www.appinn.com/snapdrop-for-web/

### [LocalSend](https://localsend.org/)

类似SnapDrop的文件传输工具，有全平台客户端

https://www.appinn.com/localsend/

- [官方客户端（全平台）](https://localsend.org/#/download)

### [Clipboard Beam](https://f-droid.org/zh_Hans/packages/de.ub0r.android.clipboardbeam/)

通过 NFC 和 Android Beam 等在不同设备间复制到剪贴板