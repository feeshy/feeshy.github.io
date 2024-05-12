---
layout: post
title: 免费虚拟乐器推荐
last_modified_at: 
tags:
  - virtual-instruments
  - 虚拟乐器
  - virtual-synthesizers
  - VSTi
  - AUv3
  - sample-libraries
  - soundfont
  - kontakt
redirect_from:
  - https://meta.appinn.net/t/topic/17301
  - /sounds/free_virtual_instruments.html
  - /tech/free_virtual_instruments.html
toc: true
---

- 模拟乐器
	- 原声乐器  
		包括各式各样的乐器、非乐器，通过麦克风拾音。有共鸣腔、音量过小的乐器，现场拾音会出现难以避免的啸叫。
	- 电声乐器  
		铁磁性的琴弦切割拾音器周围的磁感线，产生感应电流。
	- 合成器  
		利用震荡电路产生特定音高的波形。模拟合成器往往具有独特的温暖音染。
- 数字乐器  
	midi是目前通行的数字音乐传输标准。midi乐器的声音不受乐器物理形式的束缚，PC键盘上弹钢琴，键盘控制器上打鼓，吉他控制器上拉小提琴等等
	- 采样器  
		模拟乐器的数字化。Attack、Decay、采样乐器的质量与占用空间成指数关系。几MB就可以构建一个能用的采样乐器。而富有动态与表情的采样乐器往往要占用数GB到几十GB的空间。
	- 合成器  
		- 数字合成器  
			产生特定音高波形。比模拟合成器更精确、可调性更大，但相对地，少了一份温暖的音染。
		- 数字电路合成器  
			模拟合成器的数字化，采样器，也可以数字电路

---

## 采样乐器

采样乐器是把录制的音频以一定的方式回放来发声的虚拟乐器。质量的上限自然由录制时演奏者的演奏水平决定，下限则是由录制设备、场所的声学环境、以及它占用的存储空间所综合决定的，体积越大往往意味着越高的采样密度和音质、越多的力度和演奏技法。


- [ ] IK Multimedia
	- [ ] Modo Bass 2 CS
	- [ ] Modo Drum CS
- [ ] Orchestra
	- [ ] [BBC Symphony](https://www.spitfireaudio.com/shop/a-z/bbc-symphony-orchestra-discover/)
- [ ] [Audio Damage](https://www.audiodamage.com/pages/free-and-legacy)
	- [ ] Tattoo Drum Machine
- [ ] Slicer
	- [ ] [HY Slicer free](https://hy-plugins.com/product/hy-slicer2/)
- [ ] Drum
	- [ ] [Jamstix](https://www.rayzoon.com/index.html#free_version)

### 管弦乐

#### [VS Chamber Orchestra: Community Edition](https://vis.versilstudios.com/vsco-community.html)

Versil Studios Chamber Orchestra 的简化版，是公有领域中质量很高的音源。活跃的社区为它开发了非常丰富的格式，几乎可以支持市面上的任何宿主。

- 采样精度：16/24bit混合 44.1kHz
- 解压后体积：3GB
- 格式：SFZ, VST（带独立宿主）, NKI（需完整版Kontakt）, SAMPLETANK 3/Custom Shop FREE

#### [Sonatina Symphonic Orchestra](https://github.com/peastman/sso)

整合了多个开源/公版的管弦音源，2018年后该项目不再活跃。

> SSO was created from the following free/CC-licensed/public domain instrument samples: [The University of Iowa MIS](http://theremin.music.uiowa.edu/MIS.html), [MSLP](http://www.mediafire.com/?zqff4hkyeec22), [Philharmonia samples](http://www.philharmonia.co.uk/thesoundexchange/make_music/samples/library/), [OLPC project](http://wiki.laptop.org/go/Free_sound_samples), [The Complete K2000](http://www.sweetwater.com/k2000/sounds.html), [ldk1609 violin](http://www.freesound.org/usersViewSingle.php?id=692375), [stamperadam Kelon Xylophone](http://www.freesound.org/packsViewSingle.php?id=6168), [Corsica_S Cello Pizzicato](http://www.freesound.org/packsViewSingle.php?id=2680), [davidjwoll cymbal rolls](http://www.freesound.org/packsViewSingle.php?id=5577), [Satoration Castanets](http://www.freesound.org/samplesViewSingle.php?id=57299), Thores Triangle, Mystified timpani, Eddie’s English Horn and a variety of classic soundfonts by Campbell Barton, [Nando Florestan](http://oui.com.br/n/download.php?list.2), and [Ethan Winer](http://www.ethanwiner.com/ewsf2.html).

- 采样精度：16bit 44.1kHz
- 解压后体积：768MB
- 格式：SFZ

#### [Virtual Playing Orchestra](http://virtualplaying.com/virtual-playing-orchestra/)

另一套整合音源，有一点上面SSO继任者的意味。作者目前仍然比较活跃，SFZ脚本编写的非常规范用心，可以说榨干了这套采样的潜能

> attempts to emulate multiple articulations of the solo and section instruments from a full orchestra using the best free samples from [Sonatina Symphonic Orchestra](http://sso.mattiaswestlund.net/), [No Budget Orchestra](https://github.com/ssj71/No-Budget-Orchestra), [VSCO2 Community Edition](http://vis.versilstudios.net/vsco-2.html), [University of Iowa](http://theremin.music.uiowa.edu/), [Philharmonia Orchestra](http://www.philharmonia.co.uk/explore/make_music) and extra free samples from [Mattias Westlund](http://mattiaswestlund.net/samples/), author of Sonatina Symphonic Orchestra

由于采样的来源很杂，作者建议使用者自己加混响以让各个乐器听起来更加“融合”。

- 采样精度：16bit 44.1kHz
- 解压后体积：688MB
- 格式：SFZ

#### [Cakewalk Studio Instruments - String Section](http://www.cakewalk.com/Products/Studio-Instruments/Strings)

塑料感强烈的弦乐组音源，没有任何演奏技巧和表情控制，胜在体积较小。需要通过 [Bandlab Assistant](https://www.bandlab.com/products/cakewalk/) 安装 Cakewalk 后免费获取，下载过程比较考验网络条件。

- 采样精度：16bit 48kHz
- 解压后体积：167MB
- 格式：VST（仅支持Windows）

### 键盘&合成器

#### [Cakewalk Studio Instruments - Electric Piano](http://www.cakewalk.com/Products/Studio-Instruments/Electric-Piano)

![](http://static.cakewalk.com/cakewalk/products/studio-instruments/Studio-Instruments-Piano.png)

挺好听的电钢琴音源，不过乐器内置的过载效果不太好听，建议额外搭配Saturator使用。需要通过 [Bandlab Assistant](https://www.bandlab.com/products/cakewalk/) 安装 Cakewalk 后免费获取，过程比较考验网络条件。

- 采样精度：16bit 48kHz
- 解压后体积：457MB
- 格式：VST（仅支持Windows）

#### Kontakt Play 系列精选集

> 3款强大的流线型直观设计混合乐器音源，包含[ANALOG DREAMS](https://www.native-instruments.com/zh/products/komplete/play-series/analog-dreams/)（偏Lead音色），[ETHEREAL EARTH](https://www.native-instruments.com/zh/products/komplete/play-series/ethereal-earth/)（偏氛围音色），以及[HYBRID KEYS](https://www.native-instruments.com/zh/products/komplete/play-series/hybrid-keys/)（键盘音色）

注：以上为三款乐器完整版的介绍页面，它们的简化版均包含在免费的 [Komplete Start](https://www.native-instruments.com/zh/products/komplete/bundles/komplete-start/get-komplete-start/) 套装中

- 解压后体积：1.6GB
- 格式：NKI（Kontakt Player以上）

### 吉他&贝斯

#### [Ample Guitar Martin Lite](http://www.amplesound.net/cn/pro-pd.asp?id=7)

![](http://www.amplesound.net/images/ag/agml01.jpg)

> Ample Guitar M Lite II由一款Martin D-41 美式民谣吉他录制

支持基本的演奏技巧和表情控制，体积证明质量

- 采样精度：16bit 44.1kHz
- 解压后体积：774MB
- 格式：VST（带独立宿主）, VST3, AU, AAX

#### [Ample Bass Precision Lite](http://www.amplesound.net/cn/pro-pd.asp?id=19)

> Ample Bass P Lite II 由一款Fender Precison Bass录制

支持基本的演奏技巧和表情控制，体积证明质量

- 采样精度：16bit 44.1kHz
- 解压后体积：446MB
- 格式：VST（带独立宿主）, VST3, AU, AAX

#### [Cakewalk Studio Instruments - Bass](http://www.cakewalk.com/products/studio-instruments/Bass)

一款聊胜于无的Bass音源，缺乏演奏技巧和表情控制。需要通过 [Bandlab Assistant](https://www.bandlab.com/products/cakewalk/) 安装 Cakewalk 后免费获取，下载过程比较考验网络条件。

- 采样精度：16bit 44.1/48kHz混合
- 解压后体积：124MB
- 格式：VST（仅支持Windows）

### 鼓&打击乐器

#### [Cakewalk Studio Instruments - Drum Kits](http://www.cakewalk.com/Products/Studio-Instruments/Drums)

体积精简的系列原声鼓音源，采样深度和采样率有点参差不齐。

需要通过 [Bandlab Assistant](https://www.bandlab.com/products/cakewalk/) 安装 Cakewalk 后免费获取，下载过程比较考验网络条件。

- 采样精度：16/24/32bit混合 44.1/48kHz混合
- 解压后体积：435MB
- 格式：VST（仅支持Windows）

#### [Recording Hybrid Kit](https://www.ableton.com/en/packs/recording-hybrid-kit/)

一套流行、摇滚风格的原声鼓，仅可用于Ableton Live。注意本插件的400MB采样都是围绕同一套鼓展开的，而前面介绍的Cakewalk 400MB，则是采样了许多套鼓，从采样质量上来说本插件要更高一些。

- 采样精度：24bit 44.1kHz
- 解压后体积：445MB
- 格式：Ableton Live Rack

#### [DrumMic’a](https://en-de.sennheiser.com/drummica)

![](https://assets.sennheiser.com/img/20203/x1_desktop_sennheiser_drummica_03.jpg)

由森海塞尔免费提供的一套高品质、出版级的免费原声鼓音源。使用Sennheiser和Neumann多个型号的麦克风在不同收音位置录制。有25个力度层，13000多个采样。详见[使用说明书](https://assets.sennheiser.com/global-downloads/file/11814/DrumMicA_manual_en.pdf)

- 解压后体积：8GB
- 格式：NKI（2020年5月之前注册可用于任何版本的Kontakt，2020年5月之后注册需要完整版Kontakt运行）

#### [The Organic Calfskin Kit](https://www.organicdrumloops.com/ogdl-plugins/ock-vst/)

> 7 drum kits each played with varying tools (sticks, brushes, mallets) making for a total of 18 unique drum kit selections

3个力度层，5个麦克风

- 采样精度：24bit 48kHz
- 解压后体积：6.45GB
- 格式：VST3

#### [Ample Percussion Cloudrum](http://www.amplesound.net/cn/pro-pd.asp?id=27)

> Cloudrum得名于独特的云纹形音舌, 是钢舌鼓的一种. 声音通透空灵, 细腻悠扬, 既融入了钟, 磬等古代打击乐的婉转灵秀, 也加入了时下流行的手碟的创新设计, 现多用于宗教, 儒家, 禅修, 瑜伽冥想等领域

体积说明质量

- 采样精度：24bit 44.1kHz
- 解压后体积：756MB
- 格式：VST（带独立宿主）, VST3, AU, AAX

### 其他乐器

#### Kinetic Treats

![](https://www.native-instruments.com/typo3temp/pics/img-packshot-kinetic-toys_pf-60a2226eb1f7062bce0f61733596dce9-d.jpg)

> [从精心录制的儿童玩具采样库中，创造多种变化声音与质感。](https://www.native-instruments.com/zh/products/komplete/cinematic/kinetic-toys/)

注：该链接为完整版的介绍页面，简化版 Kinetic Treats 包含在免费的 [Komplete Start 套装](https://www.native-instruments.com/zh/products/komplete/bundles/komplete-start/get-komplete-start/)中

- 解压后体积：404MB
- 格式：NKI（Kontakt Player以上）

#### [空音免费乐器](http://www.kongaudio.com/free.htm)

免费的民乐采样乐器，包括古筝免费版，迷你笛子、迷你二胡

- 解压后体积：古筝>90MB、笛子9MB、二胡20MB
- 格式：VST（古筝依赖“琴引擎”，笛子和二胡VST仅支持32位宿主）

#### GarageBand世界乐器包

![](https://help.apple.com/assets/5C5305B90946229E49AD76CA/5CDC50D8680CE2A6027CA366/zh_CN/e29692186a711f5f58b83ec02642aec5.png)

中国传统乐器：古筝、琵琶、二胡；日本传统乐器：日本筝、太鼓

GarageBand内置了很多的采样乐器。之所以单独提到民乐，是因为桌面平台的免费民乐插件普遍是32位插件，目前已经很难找到能运行它们的宿主了。在iOS演奏似乎是目前零成本民乐音源的唯一解决方案。好在GarageBand内置的乐器深度支持滑动、3D Touch等iOS特性，即使屏幕很小，演奏起来仍然十分的方便。

- 解压后体积：琵琶二胡体积未知，古筝31MB，日本筝和太鼓52MB
- 格式：GarageBand内置乐器

---

## 合成器

合成器不像采样乐器那样回放声音，而是通过电路或者算法创造、修饰声音。合成器一般直接凭空合成自然界不存在的声音波形，也有一些合成方法，例如波表合成和粒子合成，会分析一小段声音的采样作为出发点来合成声音波形。总得来说，合成器占用的存储空间要比同样质量的采样乐器小很多。

本文会以发声原理而不是音色来界定采样乐器与合成器的界限。例如，用录制模拟(analog)合成器采样的方法复刻的虚拟乐器，会归到采样乐器分类，而用算法模拟(simulate)其模拟(analog)电路的方法复刻的虚拟乐器，则会归到合成器分类。

- [ ] User Friendly
	- [ ] Surge XT
	- [ ] kHs ONE
	- [ ] ODIN II
	- [ ] TAL Noisemaker
	- [ ] Exakt Lite - FM
- [ ] Old School Patches (but not user friendly)
	- [ ] Dexed - FM
	- [ ] OB-XD
	- [ ] Tyrell Nexus 6 & Zebralette & Beatzille
- [ ] Modular
	- [ ] [Cardinal](https://github.com/DISTRHO/Cardinal)
	- [ ] Votage Modular Nucleus


#### [Alchemy](https://support.apple.com/kb/PH27371?locale=zh_CN&viewlocale=zh_CN)

![](https://help.apple.com/assets/5C5305B90946229E49AD76CA/5CDC505D0946222E0E787609/zh_CN/b2cb390e59ef98a033cca2cbf638d565.png)

Alchemy原本是Logic Pro X内置的口碑非常好的合成器。

> Alchemy 具有加法、频谱、粒子合成和再合成，采样及虚拟模拟引擎。您可以分析导入的样本，并使用其中一种或多种合成方法处理它们。Alchemy 汇集了大量样本映射、循环及编组工具，可让您轻松创建包含几百个样本和层的乐器。如果想创建纯合成音，加法、频谱和虚拟模拟合成引擎即提供所需的全部功能，其能力和便利程度可比拟甚至超过许多独立乐器。

它的简化版本随GaragBand向iOS用户免费提供。使用与Logic版本同样的合成引擎，更加简化的操控，简约而不简单，作为苹果第一方出品的虚拟乐器，Alchemy吃透了iOS的滑动、3D Touch、重力感应等等与硬件结合的交互方式，只用非常精简的旋钮就可以表现出丰富的演奏表情。

- 格式：GarageBand内置乐器

#### [Europa](https://www.reasonstudios.com/en/reason/instruments/europa)

![](https://a.phcdn.se/static-live/img/reason/europa.ed32da5583cd.png)

Reason内置的广受好评的波表合成器

在iOS上的[Reason Compact](https://apps.apple.com/us/app/reason-compact-make-music/id1253419004)注册Reason账号，即可同时免费获得桌面平台Reason Lite的授权。

移动平台的Europa遵循简化版免费+内购解锁操控的付费模式，桌面则是直接就拿到全功能的版本。另外还有一个全功能的[在线网页版的Europa](https://www.reasonstudios.com/europa-player)，可以直接在Chrome内核的浏览器中玩。

- 格式：Rack Extension（支持桌面和iOS）、在线网页

#### [Thor](https://www.reasonstudios.com/en/reason/instruments/thor)

Reason的另一个内置合成器，以非常强大的效果调整空间为特色。甚至可以不用他的合成引擎，单独当作效果器来使用。

通过在移动版新建账号的方式免费获取桌面平台Reason Lite，就可以获得内置的Thor。

不过Thor没有出现在移动平台的[Reason Compact](https://apps.apple.com/us/app/reason-compact-make-music/id1253419004)中，ReasonStudios单独提供了买断制的iPad版独立Thor。

- 格式：Rack Extension（桌面可免费获取）、iOS App（付费）

#### [Minimoog Model D](https://apps.apple.com/cn/app/minimoog-model-d-synthesizer/id1339418001)

1970年诞生的世界上第一款便携式合成器。Moog将其经典的模拟电路数字化制作了iOS版本。免费+内购模式

- 格式：iOS App

#### [AudioKit Synth One](https://apps.apple.com/cn/app/id1371050497)

![](http://audiokitpro.com/images/ak2.gif)

> [https://apps.apple.com/cn/story/id1439010275](https://apps.apple.com/cn/story/id1439010275)
> 
> 在众多合成器 App 中，性能出众的《AudioKit Synth One Synthesizer》格外引人注目。这不仅是因为它具备超过 300 套预设、多种滤波器和混响效果，也是因为这款 App 开源且完全免费。
> 
> 作为世界级的开发项目，《AudioKit Synth One Synthesizer》是全球各地程序员和音乐制作人的智慧结晶，Kanye West、Rihanna 等知名音乐人也位列其中。

- 格式：iOS App

#### [Mikro Prism](https://www.native-instruments.com/zh/products/komplete/synths/mikro-prism/)

NI相当有特色的"Modal Bank"合成器——Reaktor Prism 的阉割版。免费版与收费版使用相同的声音合成引擎，简化了操控。

- 格式：Reaktor

#### [Socalabs 8-BIT Treats](https://www.tracktion.com/products/8bit-treats)

掌机风格的8BIT合成器

> emulations of some of the most iconic chips including the Ricoh A203 (Nintendo), PAPU (Gameboy), MOS Technology SID (Commodore 64, 128 & MAX) and TI SN76489 (Sega, BBC etc)

- 格式：VST、AU

#### [Noisetar](https://static.kvraudio.com/i/b/noisetar_au_vst_colours1.png)

一个非常适合制造氛围音效的噪音合成器

- 格式：VST、AU
