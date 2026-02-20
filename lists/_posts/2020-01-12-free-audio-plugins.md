---
layout: post
title: 免费音频效果插件推荐
date: 2020-01-12
last_modified_at: 2025-02-16
tags:
  - VST
  - AUv3
  - 混音
redirect_from:
  - https://meta.appinn.net/t/topic/13311
  - /sounds/free_audio_plugins.html
  - /tech/free_audio_plugins.html
toc: true
custom_head: <style>img{max-width:320px;max-height:240px;border-radius:5px;padding:2.5px;filter:drop-shadow(-2.5px 2.5px 5px rgba(0,0,0,.5))}</style>
---

> 音频宿主是一种能够加载和运行各种音频插件的软件环境，它可以是具备多轨录音、音频编辑和混音等功能的数字音频工作站（DAW），也可以只专注于特定功能（如合成器或效果器）。插件是运行在宿主软件中的扩展程序，主要分为效果类插件、虚拟乐器类插件和工具类插件。

本文介绍了百余款可免费获取的音频效果插件，涵盖各种常用效果类型，如压缩、均衡、延迟、混响、失真等。笔者结合自身短期试用或长期使用的感受，对每款插件进行了简单的介绍和点评，着重突出了其特色功能和适用场景。

关于插件兼容性的说明：

- 未特别标注的插件通常支持 Windows/macOS 平台的 VST2、VST3 和 AU 格式。
- 如果插件有其他支持或不支持的平台/格式，将会在介绍中特别注明Rack Extension、LV2、iOS等关键词，请善用Ctrl+F查找。
- 本文不关注各插件是否提供 AAX 格式。

## Multi Effects

#### [Kilohearts Essentials](https://kilohearts.com/products/kilohearts_essentials)

![](https://kilohearts.com/resources/media_dynamic/offers/kilohearts_essentials/spotlight.jpg)

kilohearts生态系统的免费插件包，提供30多款简洁、美观的效果插件——包括多达5种滤波器，非常适合音色设计。除了各大常见DAW使用的插件格式，还提供适合Reason的[Rack Extension](https://www.reasonstudios.com/shop/bundle/kilohearts-toolbox/)。

以上免费效果除了单独使用，还可作为「Snapin」模块，载入另售的[Phase Plant](https://kilohearts.com/products/phase_plant)合成器、[Multipass](https://kilohearts.com/products/multipass)分频处理系统、[Snap Heap](https://kilohearts.com/products/snap_heap)机架系统，进行组合与调制。

#### [MFreeFXBundle](https://www.meldaproduction.com/MFreeFxBundle)

MeldaProduction的免费插件包，内含30多种插件。提供一些很实用的小功能，例如输入音高自动换算频率、自由绘制LFO波形等。

![](https://www.meldaproduction.com/webtemp/imagecache/screenshots/MTremolo00.v1.jpg)

#### [Analog Obsession](https://analogobsession.com)

![](https://analogobsession.com/wp-content/uploads/2023/04/HOME-1536x734.png)

Analog Obsession专注于开发受经典硬件EQ、压缩、染色失真、通道条启发的音频插件，并为其添加超采样、MS处理、侧链输入等现代实用功能。目前已发布数十款插件，全部免费下载（如果觉得好用，[请在patreon.com支持他](https://www.patreon.com/analogobsession)）

#### Airwindows Consolidated

![](https://bedroomproducersblog.com/wp-content/uploads/2024/05/Airwindows-Consolidated.jpg)

作者Chris Johnson是音乐制作行业很有名的开发者，发布过近400款开源的音频效果插件，Consolidated将其生涯开发的全部效果，汇集在一个插件中。支持三大桌面系统的[VCV Rack](https://github.com/baconpaul/airwin2rack/releases/tag/Nightly)与[CLAP/VST3/AU/LV2](https://github.com/baconpaul/airwin2rack/releases/tag/DAWPlugin)格式

#### [Surge Effects Bank](https://surge-synthesizer.github.io/)

Surge合成器的内置效果，也作为一个单独的插件提供，方便加载在其他音轨使用。提供27种算法，还包括一个Airwindows开源算法的精选合集，实际可用的效果总数有80多种。

#### [Finisher Micro](https://www.ujam.com/fin-micro/)

![](https://static.kvraudio.com/i/b/fin-micro-gui.jpg)

简约的25in1插件，集成了滤波器、失真、箱体模拟、混响、Shimmer、延迟、Chorus、Vibrato、Flanger、Phaser等等效果。仅需单一旋钮即可控制插件内部的多个参数

## Dynamic

### Compressor / Expander

> 两篇比较好的关于硬件压缩器的科普，分别来自：[@huang jiayi](https://zhuanlan.zhihu.com/p/104533883)以及[@midifan](https://www.midifan.com/modulenews-detailview-31558.htm)

#### [TDR Kotelnikov](https://www.tokyodawn.net/tdr-kotelnikov/)

![](https://www.tokyodawn.net/wp-content/uploads/2018/06/Kotelnikov_1.png)

一款功能完善、音色中性的后反馈压缩。内置了能同时工作的峰值压缩和RMS压缩，可通过PEAK CREST旋钮控制两种模式的比例；另有Stereo Sensitivity参数允许压缩模式在Stereo与Dual Mono之间平滑过渡。

#### [ZL Compressor](https://zl-audio.github.io/plugins/zlcompressor)

![](https://zl-audio.github.io/images/zlcompressor/dark_crop.jpg)


全场景适用的动态效果器。集成向下/向上的压缩/扩展四种动态处理模式，Clean/Classic/Optical/Vocal四种压缩风格。高效的Lookahead算法与最高8倍过采样。类似TDR Kotelnikov，可对侧链信号进行均衡、立体声链接度等高级处理。

#### [DC1A](https://klanghelm.com/contents/products/DC1A)

![](https://static.kvraudio.com/i/b/dc1a3.jpg)

极致易用的压缩。控制精简，功能却没有妥协，提供平行压缩、侧链高通（DEEP开关）、RMS压缩（RELAXED开关）、Dual Mono、Expander（NEGATIVE开关）等实用功能

#### [OTT](https://xferrecords.com/freeware) / [Cramit](https://sixthsample.com/cramit/)

![](https://i.redd.it/hdf04fsrjhx81.jpg)
![](https://static.kvraudio.com/i/b/cramit-v1_2_0-live.png)

深受电子音乐人喜爱的多频段双向压缩（压缩高电平、提升低电平），界面直观易用。Cramit还在压缩的基础上集成了7种音染模型。

#### [KolinMB](https://www.patreon.com/posts/kolinmb-85062886)

![](https://media.plugins4free.com/img/KolinMB_2.jpg)

电子管风格多频段压缩

#### [MJUC jr.](https://klanghelm.com/contents/products/MJUCjr) / [Supercharger](https://www.native-instruments.com/zh/products/komplete/effects/supercharger/)

![](https://static.kvraudio.com/i/b/mjucjr.jpg)
![](https://static.kvraudio.com/i/b/supercharger.png)

两款染色强烈的电子管风格压缩，旋钮不多易上手

#### [ADHD Leveling Tool](https://audiotools.se/downloads/leveling-tool/)

![](https://usercontent.one/wp/audiotools.se/wp-content/uploads/edd/2018/04/levelingTool131.png)

顺滑的光学风格压缩，相比原版LA-2A多了Attack、Release调节，还内置了染色与过载功能

#### [Fetish](https://www.patreon.com/posts/51962024)

![](https://media.plugins4free.com/img/FETISH_2.jpg)

激烈的FET风格压缩。可以通过sidechain EQ调节压缩器对于不同频率的灵敏度

### Limiter

#### [LoudMax](https://loudmax.blogspot.com/)

![](https://static.kvraudio.com/i/b/lm_screenshot.1631827969.png)

声音很干净的真峰值限幅器。支持VST2、VST3、AU、LADSPA、Winamp格式

#### [Wave Breaker](https://pressplay-music.com/wave-breaker/)

![](https://static.kvraudio.com/i/b/screenshot-2023-06-25-at-09-23-31.png)

有着完善图形化显示的限幅器，直观展示动态变化。

#### [Limiter №6](https://www.tokyodawn.net/vladg-limiter-n6/)

![](https://vladgsound.files.wordpress.com/2014/08/limiter6-env1.jpg)

功能强大的总线限幅器，内置了可以按需开启的RMS压缩、峰值限幅、高频限幅、削波、真峰值限幅5个模块，每个模块还可选择多种工作模式。支持 VST2 for Windows / macOS，不过由于开发年代久远没有签名，[macOS安装流程较麻烦](https://www.osirisguitar.com/2020/04/01/how-to-make-unsigned-vsts-work-in-macos-catalina/)

### Gate

#### [Bob Perry Gate 2](https://www.bobperry-audio.com/shop/bob-perry-gate-2/) / [kHs Gate](https://kilohearts.com/products/gate)

![](https://www.bobperry-audio.com/wp-content/uploads/Screenshot-2021-01-02-at-12.11.30.png)
![](https://kilohearts.com/resources/media_dynamic/offers/gate/screenshot.jpg)

两款支持Sidechain输入的门限器。放在鼓组send音轨混响之后，即可组合经典的80年代gated reverb效果。

- Bob Perry: VST / AU / AAX
- kHs: VST / AU / AAX / Snapin / [Rack Extension](https://www.reasonstudios.com/shop/browse/?developer=Kilohearts%20AB)

#### [Denoiser Classic](https://bertomaudio.com/denoiser-classic.html)

![](https://img.youtube.com/vi/6EQ9hPg4bcU/maxresdefault.jpg)

多频段噪声门插件，支持全桌面系统包括Linux

### Transient Shaper

瞬态修饰器，可用于强调或减弱鼓、打击乐、钢琴、吉他等乐器的瞬态。

#### [Transpire](https://web.archive.org/web/20190926213601/http://sonic.supermaailma.net/plugins)

![](https://raw.githubusercontent.com/Sonic-Anomaly/Sonic-Anomaly-JSFX/master/Plugins/transpire_gfx/bg.png)

采用非线性的工作方式，这意味着低电平瞬态相对高电平瞬态受到的影响更强，有利于突显较小的细节，同时不会使大的音头过载。与传统的同类效果相比，Transpire处理的打击乐轨道听起来会更加稳定和可控。只支持Windows上的VST2与JSFX格式

#### [kHs Transient Shaper](https://kilohearts.com/products/transient_shaper)

![](https://kilohearts.com/resources/media_dynamic/offers/transient_shaper/screenshot.jpg)

支持侧链输入的Transient Shaper，在部分场景很实用。例如在叠加 Bass 音色时，我可以先用支持 Transient/ Sustain 分离处理的 EQ 处理一轨 Bass，仅保留其全频段的瞬态音头以及延音部分的高频。随后，将该信号作为侧链输入到另一轨 Bass 的 Transient Shaper 中，从而精准地切除后者的音头。支持Windows / macOS

## Color

### Pre-Amp / Saturation / Distortion

#### [Saturation Knob](https://www.softube.com/saturationknob/) / [Heatwave](https://slatedigital.com/heatwave-saturation-plugin/) / [MoMa](https://www.patreon.com/posts/100041804)

![](https://i.imgur.com/p1yyHEY.png)
![](https://slatedigital.com/wp-content/uploads/2023/11/HEATWAVE-GUI.webp)
![](https://bedroomproducersblog.com/wp-content/uploads/2024/03/moma-bpb.jpg)

三款极简操控的Saturator，可以作为为混音注入「mojo」的万金油使用

#### [IVGI](https://klanghelm.com/contents/products/IVGI)

![](https://static.kvraudio.com/i/b/ivgi.jpg)

一款可调性丰富的Saturator，ASYM MIX参数决定过载的「压缩感」与「透明度」，Response旋钮控制过载的频率响应

#### [BritPre](https://www.patreon.com/posts/britbundle-79798060) / [PHOENIX LT](https://www.shatteredglassaudio.com/product/115) / [PreBOX & Distox](https://analogobsession.com/color-preamp-saturation/) / [BPB Dirty Filter Plus](https://bpb.gumroad.com/l/dirtyfilterplus)

![](https://media.plugins4free.com/img/AO-BritPre_2.jpg)
![](https://www.shatteredglassaudio.com/assets/images/phoenix-lt-detail-image.jpg)
![](https://media.plugins4free.com/img/PreBOX_3.jpg)
![](https://media.plugins4free.com/img/Distox_3.jpg)
![](https://bedroomproducersblog.com/wp-content/uploads/2022/11/dirty-filter-plus.png)

几款内置了低通/高通滤波器或EQ的饱和&失真效果，广泛适用于各种音频素材

- BritPre: 1960年代英式调音台模拟
- Phoenix LT: 模拟了一种含有两个12AU7三极管的前级放大电路
- PreBOX: 11合1前级模拟
- Distox: 7合1运放过载和电子管过载模拟，干湿平行处理
- Dirty Filter Plus: 电子管、303、Lo-fi、量化失真4合1，mix平行处理

#### [Airwindows Tape](https://www.airwindows.com/tape/) / [FerricTDS](https://varietyofsound.wordpress.com/vst-effects/) / [Chow Tape Model](https://github.com/jatinchowdhury18/AnalogTapeModel)

![](https://varietyofsound.files.wordpress.com/2021/09/ferrictdsmkii.png)
![](https://raw.githubusercontent.com/jatinchowdhury18/AnalogTapeModel/master/Plugin/Screenshots/full_gui.png)

磁带染色合集

- Airwindows: 界面简陋（无截图）
- FerricTDS: 仅支持VST2 for Windows
- ChowTapeModel: 支持全系统，包括[iOS](https://apps.apple.com/us/app/chowtapemodel/id1557806564)

#### [FetDrive](https://www.patreon.com/posts/51962024)

![](https://media.plugins4free.com/img/FetDrive_2.jpg)

一款受FET压缩启发设计的过载效果

#### [FuzzPlus 3](https://www.audiodamage.com/pages/free-and-legacy)

![](https://static.kvraudio.com/i/b/fuzzplus3.png)

有现代Tone Control功能的Fuzz效果插件

#### [Trash Lite](https://www.izotope.com/en/products/trash/trash-lite.html)

![](https://www.izotope.com/storage-cms/images/_aliases/ab_audio_player_1280w_2x/5/5/5/3/1023555-2-eng-GB/50fa15c83642-iZotope-Trash-web-03-Trash-module-2x.png.webp)

可调性极高的失真效果，免费功能包括可自由调整混合比例的四个Waveshaper，支持桌面和iOS

#### [BPB Bassaturator](https://bpb.gumroad.com/l/bassaturator)

![](https://bedroomproducersblog.com/wp-content/uploads/2024/11/bpb-bassaturator-artwork.jpg)

专为增强低频而设计的EQ+多模式饱和失真

#### [FRESH AIR](https://slatedigital.com/fresh-air/) / [Roth-AIR](https://www.kvraudio.com/product/roth-air-by-rothmann)

![](https://slatedigital.com/wp-content/uploads/2024/09/TypeSDC-Card-ProductFresh-Air-300x280.png)
![](https://static.kvraudio.com/i/s/hi-res-layout-kvr.png)

两款提升高频空气感的工具，因可调参数少而简单易用

### Guitar Amp & Pedal Simulator

#### [Neural Amp Modeler](https://www.neuralampmodeler.com/users)

![](https://static.wixstatic.com/media/aada5f_163c6346cc4e46a28d501cc6374f1163~mv2.png)

开源的神经网络箱模生态系统，由加载器与模型组成：

- 加载器
	- 免费插件
		- [Neural Amp Modeler](https://www.neuralampmodeler.com/users)
		- [NAM Universal](https://wavemind.net/software)
		- [TONOCRACY](https://tonocracy.com)
		- [GigFast Lite](https://apps.apple.com/us/app/gigfast-lite-neural-amp-suite/id6503917233): iOS / macOS
		- [Transistor Legacy Virtual](https://ghostnoteaudio.uk/products/transistor-legacy-plugin): 对自家七款单块效果器的数字化
	- 单块
		- [NAM Player](https://www.dimehead.de)
		- [Ample](https://www.polyeffects.com/polyeffects/p/ample)
- 模型
	- 社区
		- [ToneHunt](https://tonehunt.org/models)
		- [Github](https://github.com/pelennor2170/NAM_models)
		- [Facebook群组](https://www.facebook.com/groups/5669559883092788)
	- 训练工具
		- [TONEZONE3000](https://www.tonezone3000.com)
		- [NAM trainer](https://colab.research.google.com/github/sdatkinson/NAMTrainerColab/blob/main/notebook.ipynb)

#### [AmpliTube CS](https://ikmultimedia.com/products/amplitube5cs/) / [TONEX CS](https://ikmultimedia.com/products/tonex/#tonexcs)

![](https://www.ikmultimedia.com/products/tonex/images/1.0/GUI_tonex_at5/AT5.5/AmpliTube5_TONEX_2022-09-29_at_10.jpg)

免费+内购模式的一站式吉他效果。AmpliTube采用电路模拟技术，CS版可免费使用其中的42个主要吉他和贝斯装备，包括10个单块FX，5个箱头，6个箱体（带有4个可选扬声器），3个可移动麦克风，6个房间和6个机架FX；TONEX采用机器学习技术，CS版可免费使用其中的20个官方音色模型以及从ToneNET中自选20个用户创建的音色模型。PC/macOS/iOS全平台支持。

#### [Guitar Rig Player](https://www.native-instruments.com/en/products/komplete/guitar/guitar-rig-7-player/)

![](https://www.native-instruments.com/typo3temp/pics/img-ce-guitar-rig-7-player-product-page-02-gui-020180659b19243beebaa86f9e976cd1-d.jpg)

免费版包括2款箱模，15款单块效果，以及9种路由、调制、Sidechain工具。

#### [BYOD](https://github.com/Chowdhury-DSP/BYOD)

![](https://github.com/Chowdhury-DSP/BYOD/raw/main/manual/screenshots/full_gui.png)

Build Your Own Distortion，自定义程度非常高，内置了20余种过载/失真/法兹等单块效果，以及箱模和调制类效果。PC/Linux/macOS/iOS全平台支持。

#### [Ace](https://www.shatteredglassaudio.com/product/103)

![](https://static.kvraudio.com/i/b/ace.png)

一款美式Tweed风格吉他音箱带箱体模拟。模拟了一款1950年代的Fender Champ Combo 5W音箱，12AX6前级+6V6GT后级的配置。

#### NA [Crunck V2](https://www.nembriniaudio.com/products/crunck-v2-guitar-amplifier) & [单块模拟](https://www.nembriniaudio.com/collections/pedals-tools/)

![](https://www.nembriniaudio.com/cdn/shop/files/NACrunckV2_640x.jpg)

Nembrini Audio出品的若干吉他音箱与单块模拟，均支持桌面和iOS

- [Crunck V2](https://www.nembriniaudio.com/products/crunck-v2-guitar-amplifier): 英式Crunch失真吉他音箱带箱体模拟
- [Big Stuff](https://www.nembriniaudio.com/collections/pedals-tools/products/big-stuff-harmonic-distortion-sustain): Big Muff Pie 法兹单块模拟
- [Black Distortion](https://www.nembriniaudio.com/collections/pedals-tools/products/black-distortion): Proco RAT 单块模拟
- [Clon Minotaur](https://www.nembriniaudio.com/collections/pedals-tools/products/clon-minotaur-transparent-overdrive): Klon Centaur 过载单块模拟
- [808 Overdrive Pro](https://www.nembriniaudio.com/collections/pedals-tools/products/808-overdrive-pro): TS808 过载单块模拟

#### Analog Obsession 箱模 & 单块模拟

![](https://img.audiofanzine.com/images/u/product/normal/analog-obsession-ahead-347829.png)
![](https://media.plugins4free.com/img/PEDALz_2.jpg)
![](https://i.imgur.com/yiJV2n4.png)

- [AHEAD](https://www.patreon.com/posts/ahead-107404959): 四合一的吉他箱头模拟
- [PEDALz](https://www.patreon.com/posts/pedalz-54136573): 五合一的吉他单块模拟
	- DODOD: DOD 250
	- GUNNER: Marshall Guv'nor
	- OVERDIVER: BOSS SD1
	- PIGPIE: Big Muff Pie
	- ZUPAA: Supa Fuzz
- [KABIN](https://www.patreon.com/posts/kabin-43454405): 一款通用的吉他箱体模拟，并非是基于某些经典型号箱体的IR

#### [Ignite Amps 箱模 & 单块模拟](http://www.igniteamps.com/)

![](https://www.igniteamps.com/images/software/ignite-amps-emissary2-software.jpg)
![](https://www.igniteamps.com/images/software/ignite-amps-nadir2-software.jpg)
![](https://www.igniteamps.com/images/software/ignite-amps-libra-software.jpg)

- [Emissary](http://www.igniteamps.com/#emissary): 一款很吃CPU的吉他箱头，提供双通道和三种电子管模拟，无内置箱体模拟
- [Pro F.E.T](http://www.igniteamps.com/#profet): 一款High Gain吉他失真
- [NadIR](http://www.igniteamps.com/#nadir): 双通道IR卷积插件，预置了许多吉他箱体的脉冲响应文件
- [Libra](https://www.igniteamps.com/#libra): 八通道IR卷积插件，预置了许多吉他箱体的脉冲响应文件

#### [Boogex](https://www.voxengo.com/product/boogex/)

![](https://static.kvraudio.com/i/b/voxengo_boogex_screenshot_gray.1668070104.jpg)

一款多合一的吉他效果器和音箱模拟，内置了EQ、前级失真、箱体IR、混响等模块。

## EQ

#### [ZL Equalizer 2](https://zl-audio.github.io/zh-cn/plugins/zlequalizer2/) / [TDR Nova](https://www.tokyodawn.net/tdr-nova/)

![](https://camo.githubusercontent.com/9ebb04451d183b137ef8d4944fd738a19e65652c06797779713b4a12e18d4e6c/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d31786e55475273334e76574c2d324d5a326938726730673062556e47364d534f32)
![](https://www.tokyodawn.net/wp-content/uploads/2018/11/Seite-1-Kopie-1-1.png)

两款免费动态EQ。关于[多段压缩与动态均衡的区别](https://www.izotope.com/en/learn/multiband-compressors-vs-dynamic-eqs.html)。

- ZL Equalizer：可能是2026年我们能免费用到的最强大的EQ。支持 6 种滤波器结构、8 种滤波器类型、5 种立体声模式、7 种可变斜率和多达 24 个频段。每个频段均支持独立的动态EQ设置，以及独立的M/S或L/R处理。还提供冲突频率检测、均衡匹配等实用功能。
- TDR Nova：纯粹、高效的动态EQ。功能上是ZL Equalizer的子集，但界面更美观。

#### [Ozone Equalizer](https://www.native-instruments.com/en/products/izotope/ozone-12-eq/)

![](https://www.izotope.com/storage-cms/images/5/7/1/9/1019175-1-eng-GB/d151ee76f603-Screenshot-12-Ozone-EQ-on-stereo-buss.jpeg)

支持立体声、Mid/Side，以及类似Eventide SplitEQ的Transient/Sustain模式

#### [TDR VOS SlickEQ](https://www.tokyodawn.net/tdr-vos-slickeq/) / [Luftikus](https://www.kvraudio.com/product/luftikus-by-lkjb)

![](https://www.tokyodawn.net/wp-content/uploads/2014/06/SlickEQ_purple_flat.jpg) ![](https://static.kvraudio.com/i/b/luftikus_screenshot.png)

SlickEQ是一个简单易用的高通滤波和三段EQ，并有多个可选的Proportional Q模型和音染模式。Luftikus是一款复刻Maag EQ4风格的EQ插件，五段固定频率+一段高频增亮。旋钮不多，节省操作。

#### [Rare & RareSE](https://www.patreon.com/posts/90832098)

![](https://analogobsession.com/wp-content/uploads/2023/10/Rare_Bundle.png)

经典的Pultec EQP‑1A被动式均衡器的数字化复刻版。

- Rare: 在原版Pultec的基础上额外添加一级EQ前增益。只提供立体声工作模式
- RareSE: 在Rare的基础上增加了L/R和M/S工作模式

> 可以参考以下中文资料学习被动式均衡器的使用方法：[Logic Pro的中文说明](https://support.apple.com/zh-cn/guide/logicpro/lgcp137f13da/mac)、[CrossRoadsStudio的视频解说](https://www.bilibili.com/video/BV1rX4y1f7Ej)

#### [PTEq-X](https://www.kvraudio.com/product/pteq-x-by-ignite-amps)

![](https://static.kvraudio.com/i/b/pteq-x.1512992240.jpg)

在一个插件里复刻了三个经典的Pultec硬件均衡器：HL3C、EQP-1A、MEQ-5。

## Delay

#### [HY-Delay4 Free](https://hy-plugins.com/product/hy-delay4)

![](https://hy-plugins.com/wp-content/uploads/delay4_freecover.jpg)

音色干净的数字延迟。涵盖了一个基础款数字延迟所应具备的全部功能：立体声偏移、高低通、EQ、Ping Pong模式、Ducking（并且支持用sidechain信号来控制ducking）

#### [Deelay](https://sixthsample.com/deelay/)

![](https://static.kvraudio.com/i/b/normalmode-a.png) 

强大且易用的万金油延迟，支持feedback回路滤波、延迟时间调制、磁带wow & flutter、失真、ducking、混响、反向延迟、shimmer等功能。

免费版提供11种失真算法：saturation, asymmetrical, clip, tube, rectify, crackly, lightning, amp, bumpy, razor, pixelated；美中不足的是，滤波器的resonance不可调，无法做出较激烈的Self-Oscillation效果。

另有售价€30的[Platinum Edition](https://sixthsample.com/deelay-pe/)，提供更多失真算法，滤波器可调Q值，以及移频延迟、移调延迟等扩展模式。

#### [Spaceship Delay](https://www.musicalentropy.com/SpaceshipDelay.html)

![](https://static.kvraudio.com/i/b/screenshot-4.png)

支持feedback回路滤波、过载、延迟时间调制、周边效果等功能的延迟效果，可以制造从温暖的过载回声到眩晕的Self-Oscillation回声效果。提供普通低通高通滤波器以及复刻自MS-20、Meeblip等经典合成器的滤波器。

#### [GSi Varispeed](https://www.genuinesoundware.com/?a=showproduct&b=47) / [NastyDLA](https://varietyofsound.wordpress.com/vst-effects/) / [PSP stepDelay](https://www.pspaudioware.com/products/psp-stepdelay) / [Airwindows TapeDelay](https://www.airwindows.com/tapedelay/) & [TapeDelay2](https://www.airwindows.com/tapedelay2/)

![](https://www.genuinesoundware.com/Products/VariSpeed/img/VariSpeed.png)
![](https://varietyofsound.files.wordpress.com/2010/10/nastydla1.png)
![](https://www.pspaudioware.com/assets/products/psp_stepdelay_freebie.jpg)
![](https://blog.landr.com/_next/image/?url=https%3A%2F%2Fblog-api.landr.com%2Fwp-content%2Fuploads%2F2024%2F05%2F02-Airwindows-TapeDelay2.png&w=1440&q=75)

磁带延迟大合集

- [GSi Varispeed](https://www.genuinesoundware.com/?a=showproduct&b=47): 复刻Copicat IC400磁带延迟机的变速效果，由于过于忠于原版，而既不能显示延迟时间，也不支持tempo sync。提供3种磁带头
- [NastyDLA](https://varietyofsound.wordpress.com/vst-effects/): 仅支持VST2 for Windows
- [PSP stepDelay](https://www.pspaudioware.com/products/psp-stepdelay): 功能相对全面的磁带风格延迟
- [Airwindows TapeDelay](https://www.airwindows.com/tapedelay/) & [TapeDelay2](https://www.airwindows.com/tapedelay2/): 声音不错但界面简陋，不支持tempo sync

#### [Full Bucket Brigade Delay](https://www.fullbucket.de/music/fbdelay.html)

![](https://www.fullbucket.de/music/images/fbdelay.jpg)

一款温暖的BBD延迟（Bucket Brigade Device），支持时间调制以及feedback回路滤波的Self-Oscillation

#### [Valhalla Freq Echo](https://valhalladsp.com/shop/delay/valhalla-freq-echo/) / [Moon Echo](https://www.audiothing.net/effects/moon-echo/)

![](https://static.kvraudio.com/i/b/valhallafreqecho.png)
![](https://www.audiothing.net/wp-content/uploads/2024/06/Moon-Echo-GUI.jpg)

内置了Frequency Shifter模块的延迟插件。既可用作一般的延迟，也可当作眩晕的跑调延迟来使用

#### [HZ Delay](https://higherhz.com/hz-delay/)

![](https://higherhz.com/wp-content/uploads/2022/03/hz-delay-plugin-gui.webp)

内置以复杂方式串并联的3条delay line，可以做出复杂律动、延迟+合唱、混响等效果。

![](https://higherhz.com/wp-content/uploads/2022/03/hz-delay-signal-flow-diagram.webp)

#### [Lagrange](https://ursadsp.com/#lagrange)

![](https://static.kvraudio.com/i/b/piglizards.png) 

基于粒子引擎，兼具延迟与混响特点的空间效果。

#### [Spirals](https://daniel-gergely.itch.io/spirals) / [Diffuse](https://daniel-gergely.itch.io/diffuse)

![](https://img.itch.zone/aW1nLzE2NzE0NzA0LnBuZw==/original/Z4MML%2F.png)
![](https://img.itch.zone/aW1nLzEyNTYyNTk0LnBuZw==/original/hJZl%2FN.png)

两款兼具延迟/混响/shimmer特点的空间类效果。前者操控更接近传统的空间类效果，后者探索可能性更大、更有实验气息

## Chorus / Flanger

#### [Baby Audio Freebies](https://babyaud.io/freebies)

![](https://images.squarespace-cdn.com/content/v1/561e2985e4b08862a3496b82/795ab135-e799-44a2-b152-c46acacdaa57/Baby+Audio+Best+Free+VST+Plugins+2025+Line-Up.png?format=1500w)

Baby Audio提供的若干个免费效果，操作简洁。全平台支持（包括iOS）

- Magic Dice: 随机参数的空间类效果
- Pitch Drift: 模拟原声乐器轻微跑调的效果，相比普通LFO调制的Vibrato多了些随机性
- Beat Slammer: 激进的压缩效果，适合需要「pumping」感的音轨使用
- Magic Switch: 罗兰Juno风格的合唱
- Warp: 音频变速效果

#### [Space Modulator](https://valhalladsp.com/shop/modulation/valhalla-space-modulator/)

![](https://static.kvraudio.com/i/b/valhallaspacemod.jpg)

可调空间比较大的现代风格调制效果，能做出Flanger/Chorus/Reverb等感觉

#### [Multiply](https://acondigital.com/products/multiply/)

![](https://cms.acondigital.com/uploads/large_multiply_7d0b388e42.png)

高品质的现代风格立体声合唱，对于拓宽声音有非常好的效果

#### [SVEP](https://klevgrand.com/products/svep)

![](https://img.klevgrand.se/ui_images/ui_svep.jpg)

操作简洁的Phaser/Flanger/Chorus，支持Windows/macOS/iOS

#### [Modul 8](https://senderspike.wordpress.com/2020/04/07/modul-8/)

![](https://senderspike.files.wordpress.com/2020/04/fx02_gui.png)

有两个独立LFO的复古风格Chorus/Flanger

## Reverb

### Algorithm

#### [DReverb Lite](https://stone-voices.ru/vst/dreverb_lite) / [Verberate Basic 2](https://acondigital.com/products/verberate-basic) / [Atmospheres](https://zaksound.com/atmospheres/)

![](https://static.kvraudio.com/i/b/d_reverb_lite.png) ![](https://static.kvraudio.com/i/b/verberate-basic-2-en.png) ![](https://zaksound.com/wp-content/uploads/2024/03/atmospheres-plugin.webp)

一些旋钮数量精简的混响，操作简单易上手。

#### [Dragonfly Reverb](https://github.com/michaelwillis/dragonfly-reverb)

![](https://github.com/michaelwillis/dragonfly-reverb/raw/master/collage.png)

开源的湿冷风格混响，UI直观，可调性丰富。提供Room/Hall/Plate/Early Reflection四种算法。有着空间感强烈的反射声和相对潮湿混浊的Tail，比较适合鼓、打击乐以及音效设计。支持LV2 for Linux

#### [epicPLATE / epicCLOUDS](https://varietyofsound.wordpress.com/vst-effects/)

![](https://varietyofsound.wordpress.com/wp-content/uploads/2023/09/epicplatemkii.png)
![](https://varietyofsound.wordpress.com/wp-content/uploads/2023/12/epicclouds.png)

前者是一个复古的金属板混响，明亮的感觉很适合用在人声和打击乐上，带Gate和Drive功能。后者是一个氛围感混响。均仅支持VST2 for Windows

#### [TAL-Reverb-4](https://tal-software.com/products/tal-reverb-4)

![](https://tal-software.com/images/products/tal-reverb-402.jpg)

高密度金属板混响，带Ducking功能（可用Sidechain输入触发），另外内置了调制、移调、降采样等模块。支持三大桌面平台，包括Linux

#### [OldSkoolVerb](https://www.voxengo.com/product/oldskoolverb/)

![](https://static.kvraudio.com/i/b/voxengo_oldskoolverb_screenshot_gray.1686410836.jpg)

温暖的七八十年代老式数字混响

#### [BPB Dirty Spring](https://bedroomproducersblog.com/free-download/#dirty-spring)

![](https://bedroomproducersblog.com/wp-content/uploads/2022/02/dirty-spring.png)

弹簧混响+Bitcrusher

#### [PSP PianoVerb](https://www.pspaudioware.com/products/psp-pianoverb)

![](https://www.pspaudioware.com/assets/products/pianoverb-freebie.png)

模型使用了A(55Hz)～G#(103.8Hz)的12根钢琴琴弦作为混响材质，相比普通的混响多了些音调的感觉

#### [Supermassive](https://valhalladsp.com/shop/reverb/valhalla-supermassive/)

![](https://static.kvraudio.com/i/b/supermassive-gui.jpg)

可塑性极强的调制类延迟/混响效果，目前已经更新到21种算法，涵盖从稀薄的空间延迟效果到混沌的太空混响效果。

#### [CloudSeed](https://github.com/ValdemarOrn/CloudSeed)

![](https://bedroomproducersblog.com/wp-content/uploads/2011/05/cloud-seed-vst.jpg)

可以囊括天空和星系的超现实混响，适合设定很长很长的Decay。[可调参数繁多](https://ghostnoteaudio.uk/pages/cloud-seed-user-guide)，上手有难度，好在开发者提供了几个预设，方便快速开始。CloudSeed的内核开源，有众多版本：

- [Cloud Seed VST](https://github.com/ValdemarOrn/CloudSeed/tree/legacy-v1): 原始版本，仅支持VST2 for Windows，存在部分宿主无法正确显示GUI的bug
- [Cloud Seed AU & VST3](https://github.com/HolyBimBam/CloudSeed_AU_VST3): AU & VST3 for macOS
- [Aether](https://github.com/Dougal-s/Aether): LV2 for Linux
- [CloudReverb](https://github.com/xunil-cloud/CloudReverb): VST3 for Windows/Linux/macOS
- [Cloud Seed 2](https://ghostnoteaudio.uk/products/cloudseed): 原作者的重制版，支持VST & AU for Windows/macOS，售价$44，可以无限期全功能试用（类似Reaper）
- [DaisyCloudSeed](https://github.com/erwincoumans/DaisyCloudSeed): Daisy Patch 硬件DSP版
- [DaisyCloudSeed](https://github.com/GuitarML/DaisyCloudSeed): Terrarium 单块版

#### [RAUM](https://www.native-instruments.com/en/products/komplete/effects/raum/)

![](https://www.native-instruments.com/typo3temp/pics/img-ce-komplete-start-relaunch-product-relaunch-page-06b-effects-838b1372e92c543faaaf124501c3e282-d.jpg)

提供Room、Hall、超现实三种风格的算法，较长的混响时间下也有不错的声音品质。旋钮数量恰到好处，可调性较高的同时，也没有像CloudSeed那样参数多到离谱，兼顾了易用性。

#### [Astronaut Free](https://shift-line.com/astronautplugin)

![](https://optim.tildacdn.com/tild3730-6636-4333-a535-333965626361/-/format/webp/Astronaut_Plugin_12s.png)

极简控制，效果却不简单的超现实类混响。算法源于广受好评并且更新了五代的单块以及Eurorack效果器，插件版继承了硬件版的精简旋钮，并新增了用XY-Pad混合四种算法的功能。免费版无法保存自定义预设，可无限制使用其中的5种算法：Skynet 1, Skynet 2, Shimdown, Clean Crush, White Noise——其中Skynet算法听起来很有Eventide Blackhole的味道。花费$15购买高级版可解锁预设保存系统以及额外的6种混响算法。

#### [Solaris](https://www.kvraudio.com/product/solaris-by-adam-szabo)

![](https://static.kvraudio.com/i/b/solaris.png)

一款Shimmer混响。仅支持VST for Windows

### Convolution

#### [Convology XT](https://impulserecord.com/project/convology-xt-plugin/)

![](https://static.kvraudio.com/i/b/cvxt.jpg)

一款脉冲响应混响，免费版内置了70多种IR

#### [Magic7](https://www.wavealchemy.co.uk/product/magic7/)

![](https://www.wavealchemy.co.uk/wp-content/uploads/2024/11/Magic7_Screenshot1.jpg)

对经典的 Bricasti Model 7 机架混响的复刻，内置了原版的11类234种预设

## Filter / Tremolo / Panner / Gate Sequencer

#### [HY-Filter4 Free](https://hy-plugins.com/product/hy-filter4/)

![](https://hy-plugins.com/wp-content/uploads/fiter4free.jpg)

调制自由度很高的滤波器，免费版支持SVF、3BP两种滤波模式，LFO、2DLFO、随机、包络跟随、XY Control五种调制源。

#### [Frohmager](https://www.ohmforce.com/frohmager)

![](https://cdn.prod.website-files.com/5de9e08758e6cb77bd570e7a/6203d0048a754a1e8d7d6642_Screenshot_frohmager%402x.png)

低通滤波器，支持 ADSR、包络跟随、LFO 调制源单独或组合使用，支持宏控制。

#### [TAL-Filter-2](https://tal-software.com/products/tal-filter) / [Flux Mini 2](https://www.caelumaudio.com/CaelumAudio/?Page=FluxMini2) / [PANFLOW](https://audiomodern.com/shop/plugins/panflow/)

![](https://tal-software.com/images/products/tal-filter-2-new.jpg) ![](https://static.kvraudio.com/i/b/png.png) ![](https://static.kvraudio.com/i/b/panflow_ui_001.png)

三个允许自由绘制LFO波形的滤波器/tremolo/panner。
- TAL filter调制Filter/Volume/Pan
- Flux Mini 2调制Filter/Volume，支持包括iOS的全平台。
- Panflow仅调制Pan，支持包括iOS的全平台。

#### [PechenegTremolo](https://pechenegfx.blogspot.com/2014/11/the-plugin-pecheneg-tremolo.html) / [HY-TP2](https://bedroomproducersblog.com/2018/01/11/hy-plugins-tp2/)

![](https://static.kvraudio.com/i/b/1.1421681575.png) ![](https://bedroomproducersblog.com/wp-content/uploads/2018/01/hy-tp2-screenshot-1.jpg)

两个Tremolo/Panner。前者允许无极调整LFO波形的类型、相位、对称性，十分适合通过自动化给声音增加一些变化；后者允许独立调整LFO Depth和Pan Width

#### AUDIOMODERN [FILTERSTEP](https://audiomodern.com/shop/plugins/filterstep/) / [GATELAB](https://audiomodern.com/shop/plugins/gatelab/) / 

![](https://static.kvraudio.com/i/b/filterstep-ipad.png) ![](https://static.kvraudio.com/i/b/gatelab_ui_001.png) ![](https://kilohearts.com/resources/media_dynamic/offers/trance_gate/screenshot.jpg)

三款使用Sequencer调制的效果

- FILTERSTEP: 调制滤波器，支持随机生成，Windows/macOS/iOS全平台
- GATELAB: 调制音量，支持随机生成，Windows/macOS/iOS全平台
- kHs Trance Gate: 调制音量，Gate的ADSR可调，支持丰富的桌面格式，包括Reason的Rack Extension

#### [HY-ESG](https://sellfy.com/bedroomproducersblog/p/hy-esg/)

![](https://bedroomproducersblog.com/wp-content/uploads/2021/02/bpb-hy-esg.png)

可调制的欧几里得节奏Gate Sequencer

## Lo-fi

#### [SnareBuzz](https://www.wavesfactory.com/product/snarebuzz/)

![](https://www.wavesfactory.com/img/freebies/free-audio-plugins/snarebuzz.png)

原本用途是给军鼓添加共振噪音来增加高频质感，实际应用并不限于军鼓

#### [Vinyl](https://www.izotope.com/en/products/vinyl.html)

![](https://www.izotope.com/storage-cms/images/_aliases/multi_column_1280w_2x/6/7/7/1/251776-1-eng-GB/65459b3eb8d1-02-vinyl-on-drums.png.webp)

老式黑胶唱机效果

#### [Chow Tape Model](https://github.com/jatinchowdhury18/AnalogTapeModel)

![](https://raw.githubusercontent.com/jatinchowdhury18/AnalogTapeModel/master/Plugin/Screenshots/full_gui.png)

模拟了一台Sony TC-260磁带录音机。全平台全格式支持，包括iOS。

#### [Tape Cassette 2](http://caelumaudio.com/CaelumAudio/?Page=TapeCassette2)

![](https://i.imgur.com/KjwNeDR.png)

另一个磁带效果。支持Windows/macOS/iOS的VST3和AUv3，不支持VST2。

#### [Krush](https://www.tritik.com/product/krush/)

![](https://cdn.tritik.com/uploads/krush_v1.2.3_dark-2048x863.png)

可调制的Bitcrusher

#### [Fracture](https://glitchmachines.com/products/fracture/) / [Hysteresis](https://glitchmachines.com/products/hysteresis/)

![](https://glitchmachines.com/wp-content/uploads/2017/10/Hysteresis_UI-1-scaled.jpg)

两款工业风格的glitch效果，前者的定位是一个buffer，后者定位是一个延迟

#### [Lost Samplers](https://superflydsp.com/index.php/lost-sampler-freeware/) / [Lost Vinyls](https://superflydsp.com/index.php/lost-vinyls-freeware/) / [Lost Tapes](https://superflydsp.com/index.php/lost-tapes-freeware/)

![](https://superflydsp.com/wp-content/uploads/2023/03/LostSamplers.png)

低比特数字噪音、黑胶噪音、磁带噪音。支持win/macOS/Linux，不支持VST2

#### [Driftmaker](https://puremagnetik.com/products/driftmaker-delay-disintegration-device)

![](https://cdn.shopifycdn.net/s/files/1/1561/5265/products/Driftmaker_Screenshot_1200x.png?v=1676303185)

磁带噪音延迟

## Others

#### [kHs Reverser](https://kilohearts.com/products/reverser)

![](https://kilohearts.com/resources/media_dynamic/offers/reverser/screenshot.jpg)

音频反向器，与普通延迟串联即可制作反向延迟效果。

#### kHs [Pitch Shifter](https://kilohearts.com/products/pitch_shifter) & [Frenquency Shifter](https://kilohearts.com/products/frequency_shifter)

![](https://kilohearts.com/resources/media_dynamic/offers/pitch_shifter/screenshot.jpg)![](https://kilohearts.com/resources/media_dynamic/offers/frequency_shifter/screenshot.jpg)

简约的移调/移频插件。除了常见的格式还提供[Rack Extension](https://www.reasonstudios.com/shop/browse/?developer=Kilohearts%20AB)

#### [MFreqShifter](https://www.meldaproduction.com/MFreqShifter)

![](https://www.meldaproduction.com/webtemp/imagecache/screenshots/MFreqShifter00.v1.jpg)

内置了Delay模块的移频器。既可用作一般的Frequency Shifter，也可当作眩晕的跑调延迟来使用

#### [KeroVee](https://www.kvraudio.com/product/kerovee-by-g200kg) / [MAutoPitch](https://www.meldaproduction.com/MAutoPitch)

![](https://static.kvraudio.com/i/b/kerovee160.png) ![](https://www.meldaproduction.com/webtemp/imagecache/screenshots/MAutoPitch00.v1.jpg)

两款免费自动修音插件

#### [PaulXStretch](https://sonosaurus.com/paulxstretch/)

![](https://sonosaurus.com/paulxstretch/assets/images/paulxstretch_screenshot.png)

一个非常适合声音设计的时间拉伸工具，能够在不改变音色的基础上大幅拉伸其持续时间

#### [Emergence 0.3](https://daniel-gergely.itch.io/emergence)

![](https://i.imgur.com/zLvWirk.png)

含4条独立stream的实时粒子处理器，提供LFO和随机调制

#### [Ozone Imager 2](https://www.izotope.com/en/products/ozone-imager.html)

![](https://www.izotope.com/storage-cms/images/_aliases/image_default_1280w_2x/6/9/8/9/209896-1-eng-GB/e2bc260f49eb-free-imager-lissajous.png.webp)

调整音源的立体声宽度，或者将单声道源拓宽为立体声。

#### [Goodhertz Loudness](https://goodhertz.com/loudness/)

![](https://static.goodhertz.co/statics/store/artifacts/gen/screencaps/goodhertz-loudness-3.11-full-en_shadow.png)

响度表&声像表，支持简体中文界面

#### [ZL Splitter](https://github.com/ZL-Audio/ZLSplitter)

![](https://camo.githubusercontent.com/2721ed650edc00a39f8e719e14b64b0f529ea3dc7e2182f0cc2afa61a50c88e3/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3161676d4d4644354256796c624a4f72355a4a6d5038646f66374c6b43586c6878)

音频平行处理工具，支持按照L/R、M/S、频率、瞬态、电平五种方式对音轨进行分离处理。
