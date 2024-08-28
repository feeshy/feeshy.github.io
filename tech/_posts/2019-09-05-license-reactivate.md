---
layout: post
title: 重装系统/更换硬件时软件许可证的转移
date: 2019-09-05
last_modified_at: 2024-08-25
tags:
  - license
  - 许可证
  - ilok
  - 折腾记录
redirect_from:
  - https://post.smzdm.com/p/a839v9g0/#cl_1
  - /tech/license_reactivate.html
toc: true
---

本文是对2019年[我在什么值得买社区发布的一篇文章](https://post.smzdm.com/p/a839v9g0/#cl_1)的更新，主要记录了我在重装系统、更换硬件，以及设备故障、出售、赠送和丢失前后，对电脑中软件许可证进行的处理。希望这些经验能够帮助大家更好地管理自己的软件授权，避免成为正版软件受害者。

___

## 微软生态

### Windows数字许可证[^win]

[^win]: 关于Windows的数字许可证激活[这位知乎网友的回答](https://www.zhihu.com/question/376281858/answer/1059876378)解释的比较透彻

#### 重装系统

厂商预装的Windows数字许可证与OEM硬件绑定。不更换硬件，仅仅是重装系统可以自动激活。

##### 更换硬件前

我们要检查 Windows 的激活状态是否为“已使用与 Microsoft 帐户关联的数字许可证激活”。如果不是，则要先[将数字许可证链接到微软账户](https://support.microsoft.com/zh-cn/help/20530)，再更换硬件。

##### 更换硬件后

更换硬件后Windows变为未激活状态，在[激活疑难解答](ms-settings:activation?activationSource=SMC-Article-20530)中选择“最近更换了此设备的硬件”→“这是我当前正在使用的设备”，即可将原来的数字许可证转移至新机。微软对于硬件的“更换”程度是不设限制的，我经历过只换硬盘、更换主板型号、全新装机，从win7到win11，从3代移动到10代桌面，每一次都可以顺利承接这份链接到微软账户的数字许可证，即便最初预装它的那台笔记本物理上已经不存在了。

转移许可证操作的前提是，新机的系统必须与原有数字许可证的版本准确对应。近几年中国大陆销售的电脑一般是预装Windows家庭中文版(EditionID=CoreCountrySpecific)，而淘汰的旧笔记本则有可能是预装家庭版(EditionID=Core)，两个版本极易混淆，且不支持互转。可以在（[微软账户的设备页](https://account.microsoft.com/devices)查询）。

对于未关联账户的情况，也有这样一种说法：拨打微软的[400服务号码](tel: 4008203800)，解释清楚，提供购买记录等必要的信息，工程师可能会帮你远程激活。

### Office家庭和学生版

买断版的 Office 限制1台电脑。无法在重装系统前取消激活，而要在下次安装Office时按照[重装激活](https://support.microsoft.com/zh-cn/office/%e4%bd%bf%e7%94%a8%e6%bf%80%e6%b4%bb%e5%90%91%e5%af%bc%e6%bf%80%e6%b4%bboffice-1144e0de-e849-496e-8e33-ed6fb1b34202?ui=zh-CN&rs=zh-CN&ad=CN#bkmk_reinstall)的流程通过电话激活

### Microsoft 365

Office 365家庭版订阅的每个成员可以授权最多5台电脑，使用任何一个设备访问[Office的安装网页](https://account.microsoft.com/services/office/install)，点击注销按钮即可注销不再使用的电脑（不要求设备在线）

### Microsoft 查找我的设备

用任何设备访问[微软账户设备页](https://account.microsoft.com/devices/)移除对某台设备的查找和锁定功能，无需被移除的设备在线

### Microsoft Store

Microsoft Store上购买的应用支持最多授权10台设备，移除对某台设备的授权，亦无需被移除的设备在线，只要访问[微软账户的设备页](https://account.microsoft.com/devices/content)断开链接即可。

## 流媒体软件

### iTunes

iTunes中的DRM内容有最多授权5台电脑的限制（iOS设备不占额度），授权和取消都经由iTunes完成[^itunes]，用户可以主动取消授权本电脑，也可以等数量达上限后一键取消对所有电脑的授权。

[^itunes]: [针对 Apple ID 购买项目对电脑授权或取消对电脑的授权](https://support.apple.com/zh-cn/HT201251#deauthorize)

## 图像处理软件

### Affinity Photo

Affinity的软件本身不限制个人用户的安装数[^serif]，因此没有转移前取消激活的必要。不过如果是经由操作系统的商店购买的软件，商店可能会有限制，例如微软商店购买的软件会统一限制10台。

[^serif]: [Affinity 商店和 Affinity 帐户的帮助与支持](https://store.serif.com/zh-cn/help)

## 音乐制作软件

### iLok License Manager——需取消激活

ilok许可证的设备数限制由插件厂商决定，一般是2~3台。

ilok许可证通常需要在重装系统、更换硬件前打开 iLok License Manager 手动注销。如果待移除的设备已经无法访问，就比较麻烦了，用户和PACE都没有权限注销已经离线的远程iLok设备，重置许可证需要经过插件厂商批准。有以下两种申请方式[^ilok]：

[^ilok]: [FAQ - Your Licenses](https://help.ilok.com/faq_licenses.html)

- 在另一台电脑安装并打开 iLok License Manager (5.5版本以上)，找到无法访问的设备，勾选 `Report as Unusable` 发送重置申请<br><img src="https://help.ilok.com/img/faq/unusable_circled.png" style="display:inline;">
- 如果无法安装5.5版本以上的iLok License Manager，那么也可以联系自己所拥有的众多插件中的一家厂商，申请由厂商在后台发起授权重置，此时需要提供以下必要信息：
	- 解释你的电脑坏了，希望重置激活数
	- 提供你的 ilok 用户名
	- 提供想重置的电脑的名称

通过以上任一方式发起重置申请后，各家插件厂商会陆续审核并批准，处理速度因厂商而异。以我在2024年经历的一次主板损坏为例，Softube和Eventide均能在几小时内快速批准，Pulsar可在24小时内处理，而Universal Audio的反应则相对较慢[^uaudio]。

[^uaudio]: [UA在帮助页面中标注，授权重置最长需要2周的审核时间](https://help.uaudio.com/hc/en-us/articles/21642033868436)

### Waves——需取消激活

经由Waves Central完成，电脑仍然能开机可以[取消激活](https://www.waves.com/support/move-licenses)，电脑或硬盘损坏、丢失可以[找回授权](https://www.waves.com/support/reactivate-recover-licenses)（每年不超过1次）

### Native Instruments——无需干预

根据Native Instruments的用户协议，其软件可以安装在至多2台电脑上，其中MASCHINE和KOMPLETE的限制放宽到3台[^ni]。重装系统、更换硬件之前直接卸载即可，无需取消激活；如果旧电脑或旧硬盘已经不能访问，也可以在下一次安装NI软件时选择清除已损坏设备的授权。

[^ni]: [我可以在多少台计算机上激活并使用我的 Native Instruments 产品](https://support.native-instruments.com/hc/zh-cn/articles/209559469)

### Ableton——无需干预

Live的授权也允许[激活两台电脑](https://help.ableton.com/hc/zh-cn/articles/209771885)，重装系统或更换硬件前[不需要取消激活](https://help.ableton.com/hc/zh-cn/articles/209068629)。当我们的激活数达到限制之后，只需登录Ableton账号[申请释放激活次数](https://www.ableton.com/account/request-unlocks)。

### Reason & Rack Plugin——登录授权不用管，离线激活记得取消

Reason 提供在线与离线两种激活方式。

在线模式每次启动Reason时需要登录账号并连接服务器验证，同一时刻仅允许登陆一台设备。在线激活不限制安装的设备数，也不在本机存储激活信息，因此不需要取消激活。

离线激活的方式在Reason 12.6更改过。目前12.6以前的离线授权服务器已经关闭，12.6以后的版本最多可以授权三台计算机用于长期使用。如果已经授权了三台计算机，需要先移除其中一台的授权。这个操作可以在这三台计算机中的任意一台上运行Reason/Reason Rack Plugin，然后在偏好设置/设置页面上点击“移除长期授权”按钮[^reason]

[^reason]: [About offline use and authorization of Reason 12.6 and later](https://help.reasonstudios.com/hc/en-us/articles/10288581394322-About-offline-use-and-authorization-of-Reason-12-6-and-later)

## 移动设备

### Google (手机和电脑)

#### 出售、赠送、损坏

最简单的方法是直接在手机上退出账号并重置手机。如果已经不再持有该手机，也可以在[Google账户的设备活动页](https://myaccount.google.com/device-activity)管理和移除登录Google账号的手机和电脑

#### 丢失

在单独的查找页[查找丢失的Android手机](https://www.google.com/android/find)

### Apple设备

#### 出售、赠送、损坏

最简单的方法是在出售、赠送之前，在设备上[退出账号并抹掉所有内容和设置](https://support.apple.com/zh-cn/HT201351#above)。

如果已经不再持有该设备了，则可以远程[抹掉和移除该设备](https://www.icloud.com/find/)，[移除Apple Pay、关闭激活锁](https://appleid.apple.com/account/manage)。

#### 丢失

丢失设备的标记、抹掉都是通过[iCloud设备查找页](https://www.icloud.com/find/)完成的

#### 注销iMessage

如果下一台手机不再使用iPhone，还要记得[注销iMessage](https://selfsolve.apple.com/deregister-imessage/cn/zh/)
