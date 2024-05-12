---
layout: post
title: 重装系统/更换硬件时软件授权的转移
date: 2019-09-05
last_modified_at: 2023-07-19
tags:
  - license
  - 许可证
  - 折腾记录
redirect_from:
  - https://post.smzdm.com/p/a839v9g0/#cl_1
  - /tech/license_reactivate.html
toc: true
---

这是对2019年我在什么值得买社区发布的[一篇文章](https://post.smzdm.com/p/a839v9g0/#cl_1)的更新。主要记录我在重装系统、更换硬件，以及设备故障、出售、赠送、丢失前后需对电脑中软件授权进行的处理
___

## 微软生态

### Windows数字许可证

关于Windows的数字许可证激活[这位知乎网友的回答](https://www.zhihu.com/question/376281858/answer/1059876378)解释的比较透彻

#### 重装系统

厂商预装的Windows数字许可证与OEM硬件绑定。不更换硬件，仅仅是重装系统可以自动激活。

##### 更换硬件前

我们要检查 Windows 的激活状态是否为“已使用与 Microsoft 帐户关联的数字许可证激活”。如果不是，则要先[将数字许可证链接到微软账户](https://support.microsoft.com/zh-cn/help/20530)，再更换硬件。

##### 更换硬件后

更换硬件后Windows变为未激活状态，在[激活疑难解答](ms-settings:activation?activationSource=SMC-Article-20530)中选择“最近更换了此设备的硬件”→“这是我当前正在使用的设备”，即可将原来的数字许可证转移至新机。微软对于硬件的“更换”程度是不设限制的，我经历过只换硬盘、更换主板型号、全新装机，从win7到win11，从3代移动到10代桌面，每一次都可以顺利承接这份链接到微软账户的数字许可证，即便最初预装它的那台笔记本物理上已经不存在了。

转移许可证操作的前提是，新机的系统必须与原有数字许可证的版本准确对应。近几年中国大陆销售的电脑一般是预装Windows家庭中文版(EditionID=CoreCountrySpecific)，而淘汰的旧笔记本则有可能是预装家庭版(EditionID=Core)，两个版本极易混淆，且不支持互转。可以在（[微软账户的设备页](https://account.microsoft.com/devices)查询）。

对于未关联账户的情况，也有这样一种说法：拨打微软的[400服务号码](tel: 4008203800)，解释清楚，提供购买记录等必要的信息，工程师可能会帮你远程激活。

### Office家庭和学生版

买断版的Office 限制1台电脑。无法在重装系统前取消激活，而要在下次安装Office时按照[重装激活](https://support.microsoft.com/zh-cn/office/%e4%bd%bf%e7%94%a8%e6%bf%80%e6%b4%bb%e5%90%91%e5%af%bc%e6%bf%80%e6%b4%bboffice-1144e0de-e849-496e-8e33-ed6fb1b34202?ui=zh-CN&rs=zh-CN&ad=CN#bkmk_reinstall)的流程通过电话激活

### Microsoft 365

Office 365家庭版订阅的每个成员可以授权最多5台电脑，使用任何一个设备访问[Office的安装网页](https://account.microsoft.com/services/office/install)，点击注销按钮即可注销不再使用的电脑（不要求设备在线）

### Microsoft 查找我的设备

用任何设备访问[微软账户设备页](https://account.microsoft.com/devices/)移除对某台设备的查找和锁定功能，无需被移除的设备在线

### Microsoft Store

Microsoft Store上购买的应用支持最多授权10台设备，移除对某台设备的授权，亦无需被移除的设备在线，只要访问[微软账户的设备页](https://account.microsoft.com/devices/content)断开链接即可。

## 流媒体软件

### iTunes

iTunes中的DRM内容有最多授权5台电脑的限制（iOS设备不占额度），授权和取消都[经由iTunes完成](https://support.apple.com/zh-cn/HT201251#deauthorize)，用户可以主动取消授权本电脑，也可以等数量达上限后一键取消对所有电脑的授权。

## 图像处理软件

### Affinity Photo

Affinity的软件本身[不限制个人用户的安装数](https://store.serif.com/zh-cn/help/)，因此没有转移前取消激活的必要。不过如果是经由操作系统的商店购买的软件，商店可能会有限制，例如微软商店购买的软件会统一限制10台。

## 音乐制作软件

### iZotope——无需干预

iZotope部分旧版插件支持把授权导出到iLok License Manager，数量限制仅仅为1台。现在更推荐使用的授权方式其实是iZotope Product Portal。

iZotope的用户协议[并不限制单用户激活的设备数](https://support.izotope.com/hc/en-us/articles/360024955073)，但有[五次的激活数量上限](https://support.izotope.com/hc/en-us/articles/360026394474)，超出后写工单申请更多次数

### Native Access——无需干预

根据Native Instruments的用户协议，[其软件可以安装在至多2台电脑上](https://support.native-instruments.com/hc/en-us/articles/209559469)（其中MASCHINE和KOMPLETE的限制放宽到3台）。重装系统、更换硬件之前直接卸载即可，无需取消激活；如果旧电脑或旧硬盘已经不能访问，也可以在下一次安装NI软件时选择清除已损坏设备的授权。

### iLok License Manager——需取消激活

大多数使用iLok授权的插件厂商会为我们的购买提供至少2台设备的激活量。

重装系统、更换硬件前打开 iLok License Manager，手动注销插件的授权；此外，也可以在被移除的设备iLok在线的情况下通过网络移除（然而并没有什么实用性）

如果设备无法访问，就比较麻烦了。iLok虽没给普通用户开放找回授权的入口，却给插件厂商预留了相关的权限。我们只需要联系自己所拥有众多插件授权中的一家厂商，请求其对损坏的设备发起授权Reset即可，其他厂商一般会陆续在后台批准。如果等不及，也可以在成功发起重置后，联系催促其他厂商批准。

由于时差的关系，常常需要两个工作日以上的沟通才能处理完。建议尽量在一封邮件中提供必要的信息：

-   解释你的电脑坏了，希望重置激活数
-   提供你的 ilok 用户名
-   提供想重置的电脑的名称
-   提供想重置的插件名称

### Waves——需取消激活

经由Waves Central完成，电脑仍然能开机可以[取消激活](https://www.waves.com/support/move-licenses)，电脑或硬盘损坏、丢失可以[找回授权](https://www.waves.com/support/reactivate-recover-licenses)（每年不超过1次）

### Ableton Live——无需干预

Live的授权也允许[激活两台电脑](https://help.ableton.com/hc/zh-cn/articles/209771885)，重装系统或更换硬件前[不需要取消激活](https://help.ableton.com/hc/zh-cn/articles/209068629)。当我们的激活数达到限制之后，只需登录Ableton账号[申请释放激活次数](https://www.ableton.com/account/request-unlocks)。

### Reason 11 & Rack Extensions——登录授权不用管，离线激活记得取消

Reason 提供在线与离线两种激活方式。

在线模式每次启动Reason时需要登录账号并连接服务器验证，同一时刻仅允许登陆一台设备。在线激活不限制安装的设备数，也不在本机存储激活信息，因此不需要取消激活。

Codemeter离线模式仅可授权一个设备，重装系统或者更换硬件前要[手动移除](https://help.reasonstudios.com/hc/en-us/articles/360002214074)。如果已经重装系统，或者损坏，[则没有自助的补救措施](https://help.reasonstudios.com/hc/en-us/articles/360002214454)，暂时用在线登录方式，联系人工客服移除

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
