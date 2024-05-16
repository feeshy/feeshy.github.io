---
layout: post
title: 海备思采集拓展坞晒单
date: 2023-11-14
last_modified_at: 2023-11-14
tags:
  - 晒单
  - 扩展坞
  - 采集卡
redirect_from:
  - https://post.smzdm.com/p/a5o23oo7/
---
从前，如果想用iPad给Windows笔记本当副屏，只能使用SpaceDesk、Duet Play之类的基于WLAN的虚拟屏幕App，画面卡顿、清晰度低，实用性不高。iPadOS17支持了USB采集卡，现在可以用拓展坞+采集卡来进行更稳定的有线屏幕扩展。

今天分享的这个小玩意儿是一个USB-C输入、自带采集卡功能的拓展坞，只需要它的本体加上一根C2C的USB线，就能把iPad变成Windows笔记本的副屏，相比拓展坞+采集卡的方案，集成方案的布线更加优雅，便携性也有所进步。

## 接口

![](/assets/img/capture-dock-1.webp)

这个扩展坞有5个接口。其中HDMI口和采集口都支持视频输出（采集口需要使用3.0以上规格的数据线），二者既支持单独使用，也支持同时使用，但只能输出相同的画面，不能用一个拓展坞外接两个屏幕扩展出三个桌面。

这里做了一个表格，总结了每个接口的规格和可以插的设备：

|          | 规格                    | 适用设备                          |
| -------- | --------------------- | ----------------------------- |
| 全功能C口    | USB3 + DP In + PD Out | 【作为DP信号源】电脑、iPad、手机、Switch    |
| 采集口      | USB3 (1080P 60Hz)     | 【作为屏幕】电脑、iPad、手机(OTG)         |
| HDMI Out | 4k 30Hz               | 显示器、便携屏                       |
| USB-A    | USB3 10Gbps           | 键盘鼠标、摄像头、手机(MTP/PTP)、另一个采集卡…… |
| PD In    | ≤100W                 | 充电器、移动电源                      |

## 使用场景

USB有线采集的延迟相比SpaceDesk、Duet Display改善很多，但多少还是有点。如果只是简单地挪挪鼠标打打字，延迟的影响并不算严重，但打游戏还是会略微影响操作的。

这款产品在厂商的官方定位是“Switch采集底座”，但我觉得它最有竞争力的场景其实是多屏办公或者手机游戏的录屏/推流，而不是让电脑成为游戏掌机的大屏监视器。某种程度上，厂商剑走偏锋的宣传耽误了它的流行度和销量。

### iPad当副屏

我个人最看重的场景是借助它把iPad变成Windows电脑的副屏。

把笔记本的全功能C口接到拓展坞的全功能C口，再准备一根USB3.0以上的C2C线，把采集口与iPad连起来，去App Store安装一个CAM X，输入设备选择USB摄像头，就可以使用了。

如果想给电脑边用边充，可以把电源接到拓展坞的PD口。

![](/assets/img/capture-dock-2.webp)

这款采集卡拓展坞本身不支持三屏扩展。但我的笔记本有两个全功能C口，一个C口直连显示器，另一个C口通过采集卡接iPad，也就实现了三屏。

### 手游录屏/推流

也可以像官方宣传的那样，把Switch / iPad / 以及其他有全功能C口的手机接入电脑，方便使用OBS等桌面软件录屏或者推流。由于采集延迟的存在，个人觉得这个场景下，它的监视实用性并不如手机、平板自身的小屏幕，意义更多还是在于降低手机内录所造成的发热和卡顿，允许开更高的游戏特效。

![](/assets/img/capture-dock-3.webp)

有些移动设备强制要求插入PD电源才能输出视频，最典型的是Switch。iPad虽然可以正常使用无源的视频转接头，但实测这款有PD口的拓展坞反而需要在PD口插上电源，才能被识别成显示器。

另外，USB3跟DP输出是互相独立的两码事。除去常见的USB3且支持DP（苹果/三星/Pixel/华为/坚果/黑鲨/小米14）、USB2且不支持DP（小米13以前/oppo/vivo的绝大多数型号），其余的两种组合——USB2但支持DP（iPhone 15/15 Plus）、USB3但不支持DP——也都是可能存在的。手机圈的USB-C接口兼容性目前处于异常混乱的局面，如果拿不准，建议询问官方客服。

### 接显示器

可以作为普通的没有采集功能的拓展坞使用。

如果显示器原生支持全功能C口一线通，直连原生C口的体验最好，没必要额外引入这个拓展坞。

不支持C口一线通的显示器，可以使用拓展坞的HDMI口连接——既包括HDMI形状也包括DVI-D形状，二者的转接是单纯的触点转换，不需要芯片，花三块~五块买一个HDMI-DVI转接头即可完美兼容。

### USB Hub

还有一个场景是监视或者录制相机的取景画面。

传统相机的视频输出一般是mini HDMI接口，你需要的是传统的不带拓展坞功能的HDMI采集卡，这款并不支持HDMI输入。

有些比较新的相机自带USB摄像头功能，这种相机直接用数据线连接电脑或者手机就能监视，完全不需要采集卡。如果想一边取景一边给手机充电，可以把手机接到全功能C口，充电宝接PD口，再用A2C的线把相机接到A口，这里用到的实际是拓展坞的功能。

除了接相机，也可以在A口上接入第二个采集卡玩套娃，实现”甲设备采集了乙设备所采集到的丙设备的画面”，虽然不知道有什么意义<img class="sticker" src="https://res.smzdm.com/images/emotions/50.png">

## 优缺点

采集卡的优点是能让本身缺乏视频输入接口的电脑、iPad，获得临时充当便携屏的能力，相比SpaceDesk、Duet Display等网络传输方案有更高的画质和更低的延迟，但相比于自带全功能Type C接口的便携屏，也仍然存在一些不可消除的机制缺陷：

- 采集画面延迟仅仅是相比网络传输有所改善，鼠标的跟手程度仍然达不到原生视频接口
- 不支持双向传输，无法调用便携屏的触摸功能、显示器的键盘鼠标（当然，这款采集卡集成了拓展坞，键鼠可以直接插在拓展坞的A口上）

也有一些缺点属于具体的产品设计问题，是可以改进的。如果厂商看到了，希望能在开发下一代的时候，思考一下如何解决这些问题：

- 采集卡的Gamma曲线不准，有明显的高光溢出，色彩的饱和度和明度都偏高，颜色奇怪。
- 分辨率只支持16:9，没适配iPad的比例。拿iPad当显示器用时，采集画面的上下黑边很大，拿iPad当信号源时，采集画面的左右黑边很大。
- 它的采集口只是一个纯粹的数据传输用C口，PD接口只能给信号源端供电，如果想给两端的设备同时充电，就只能给采集端额外接一个带PD和USB的拓展坞。要是能从原本的一个采集卡加单个拓展坞的架构，变成一个采集卡加两个拓展坞，给原本只有数据功能的采集端也加上跟信号源端一样的PD取电功能，就更优雅了。