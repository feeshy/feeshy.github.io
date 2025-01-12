---
layout: post
title: 编曲、混音阶段保留动态余量的技巧
date: 2025-01-12
tags:
  - 混音
  - 折腾记录
toc: false
---
> 记录我在2024年关于编曲、混音阶段保留动态余量的看法，相比2021年[^2021]有了更进一步的理解。

[^2021]: [我的混音总线信号流 - 浮鲜](/tech/my-master-workflow)

提升歌曲的响度不仅仅是母带处理的问题，还在很大程度上与音频的具体内容有关。在编排与混音阶段，如何为各个音轨分配频率、声场、动态，会对歌曲的动态余量（headroom）产生重大影响。只有先削弱对于成品价值不大的声音，才能获得更多的提升响度的空间。

## 频率分布

在提升响度前做减法，往往比事后做加法更有效。通过合理的频率分布，我们可以确保混音的清晰度和层次感，从而无需追求过高的电平。

### 高通和低通滤波

对于实录音轨，通常可以使用高通滤波器（HP）来削除基频以下的轰隆杂音，使用低通滤波器（LP）屏蔽超出人耳听觉范围的超高频噪音。

### 避让重叠频率

有句话说得好——混音良好的作品，单独听每一个分轨反而是很难听的。

这提醒我们，做分轨EQ时，不仅要听solo，还要保留一定的全局视角。当不同乐器轨道的频率相冲突时，我们应当保留每个乐器最核心的特征频率[^cheatsheet]，同时适当地衰减不太重要的频率。

[^cheatsheet]: [Sweetwater | Musical Instrument Frequency Cheatsheet](https://www.sweetwater.com/insync/music-instrument-frequency-cheatsheet/)

<object data="https://s3.amazonaws.com/ssipublic/musicfrequencycheatsheet.pdf" type="application/pdf" width="100%"></object>

### 使用失真类效果增强谐波

上文我们提到使用滤波器和EQ进行减法混音。那么如果某个乐器在混音中不够突出，是否只需反过来将其特征频段的电平抬高几个dB呢？不尽然，抬EQ只是其中一种手段。

另一种方法是使用失真类效果。例如，在Kick音轨上，可以使用削波器（Clipper）；在Bass或人声轨道上，适合使用饱和器（Saturator）；而在其他乐器轨道，也可以选择过载（Overdrive）、失真（Distortion）、法兹（Fuzz）或放大器模拟（Amp Simulation）等效果。 

人耳具备根据泛音脑补基频的能力，而失真类效果可以为音频添加高次谐波，从而即便在较低的电平下，仍然能使分轨保持一定的清晰度。

## 声场分布

空间定位也是提升混音层次感与区分度的重要环节。人耳对声源的定位主要遵循相位差和声级差两种原理：

其中，低频的定位主要依赖相位差信息。但在使用音箱或者单声道回放时，不同声道的低频相位差可能导致低频振幅抵消，从而降低响度，这与我们追求响度的初衷相悖。

而中高频的定位则主要受声级差影响。在常见的立体声混音中，「Pan」推子的主要作用就是调整左右声道的声级差。

### 将乐器摆放在声场中

由此，声场摆放的原则变得明朗——

- 对于重要的音轨（例如主旋律人声），自然将其应摆放在中心享受主角待遇；
- 低频音轨也应置于中央，以避免出现低频相位差；
- 起辅助作用的中频、高频轨道（如hi-hat、吉他、合声、延迟与混响效果等），则可将其分布到整个立体声或者环绕声声场中，通过不同的空间摆位形成区分。

### M/S处理

即使已经将低频轨道摆在中央，我们在为其添加混响（Reverb）、乒乓延迟（Ping Pong Delay）、合唱（Chorus）等立体声效果时，仍然可能在无意中制造低频的声道差异，从而影响混音在音箱和单声道情况下的响度。

在低频音轨使用立体声效果时，如果效果本身提供了「Bass Mono」选项，通常可勾选启用；如果效果提供了EQ或滤波选项，也可以设置一个截止频率位于中频的高通滤波器（通常几百Hz），以滤除过于「潮湿」的低频。

此外，还可在总线轨道应用一个M/S EQ，将Mid通道的高通截止频率设定在接近人耳听觉极限的位置（约20Hz），而Side通道的高通频率稍高（例如50~150Hz之间的某个位置）；切除Side通道的低频后，如果觉得低频量感不足，还可在Mid通道上设置轻微的低频提升（LoShelf）。

例如在这个项目中，我在Bass与Tom轨道大量使用了Eventide的Blackhole混响，以营造迷离的氛围，最后又通过M/S处理将浑浊的低频收紧。

<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4028171195/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=1545109972/transparent=true/" seamless><a href="https://feeshy.bandcamp.com/album/illusory-beats">Illusory Beats by feeshy</a></iframe>

## 峰值分布

「峰值分布」是我自创的说法，字面意思乍一看可能不太直观。具体而言，它是许多不同方法的概括，旨在将过于集中的瞬时音量峰值分散到时间的维度上，以减小电平的波动。

### 使用切分强调律动

有节拍的现代音乐的电平峰值通常出现在底鼓（Kick）的音头。在编曲环节，如果风格允许，可以多设计一些切分音和反拍。这不仅有助于强调歌曲的律动，也能减少电平的起伏。

此外，在混音时，用Side-chain Compressor或者Gate Sequencer将Pad或Bass音轨的长音切成反拍，也是一个我屡试不爽的技巧。 

<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4028171195/size=small/bgcol=333333/linkcol=4ec5ec/artwork=none/track=4014187950/transparent=true/" seamless><a href="https://feeshy.bandcamp.com/album/illusory-beats">Illusory Beats by feeshy</a></iframe>

### ADSR避让

如果使用虚拟乐器，可以调整ADSR来实现不同乐器的包络避让；在混音过程中，则可以运用侧链压缩（Side-chain Compressor）的技巧。

以我最近编混的一个项目为例，合成键盘（Synth Keyboard）与小鼓（Tom）的重音完全重叠。为了解决这个问题，我为合成键盘设置了相对缓慢的起始时间（Attack），以突出小鼓的打击感。同时反过来将合成键盘的音频作为侧链输入（Sidechain Input），来压缩小鼓的Decay，从而在不影响清晰度的前提下，降低了两者重叠时的峰值电平。