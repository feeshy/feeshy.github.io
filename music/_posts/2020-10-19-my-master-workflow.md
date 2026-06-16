---
layout: post
title: 我的混音总线信号流
date: 2020-10-19
last_modified_at: 2021-01-26
tags:
  - 混音
  - 知乎
  - 折腾记录
redirect_from:
  - https://www.zhihu.com/question/417045936/answer/1532203357
  - /tech/my-master-workflow
toc: true
---

> 这套master[^1]处理思路，是在制作 _Sleepwalker, Wanderer_ 这首歌时慢慢摸索出的：提响度不等于简单地提gain。只有先削弱对于成品价值不大的声音，才能获得更多提gain的headroom——这种想法应该既存在于混音的过程中，也存在于混音完成后的master阶段。

[^1]:在混音工程的总线做master仅仅适用于不找外人做master的情况，否则请将整体响度问题交给母带师来解决，别重复master两遍

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" height="48" src="https://music.163.com/outchain/player?type=2&id=2061038847&auto=0&height=32"></iframe>

## Mid/Side EQ

低频的Mid/Side比例是音箱响度和单声道响度的最大制约因素。我的总线模板EQ会默认开着高通，Mid通道的频率通常设定在人耳的听觉极限附近（20Hz左右），有时也会设定在Bass最低那个音的基频，Side通道则可设的稍高一些（我一般定在50~150Hz之间的某个位置）。砍掉Side通道的低频后，如果觉得低频量感变少，亦可在Mid通道加一个略微抬升的LoShelf。

混音的高频一般不会存在超出听觉范围的信号，如果从某些途径引入了超出听觉上限的高频，那么记得再开一个20kHz左右的低通。

当预先知道成品歌曲只会在某些特定的场景播放时，还可以把扬声器的频响特性纳入总线EQ的考虑范围——例如为铃声、抖音等精确瞄准手机外放的歌曲做混音时，就可以用“先把鼓和贝斯的分轨用Saturator推高几个dB，再在总线上把100Hz以下的低频切掉”的奇技淫巧来制造变态的响度。

由于人耳的[掩蔽效应](https://baike.baidu.com/item/%E6%8E%A9%E8%94%BD%E6%95%88%E5%BA%94)，我们在以低电平混音时，可能会不自觉地补偿低频和高频，提升响度之后才会发现低频和高频混的过于丰满。多余的低频可以被Limiter压限，多余的高频如果放任不管，听感会加倍地刺激。因此视具体工程，偶尔我会在总线的M通道开一个HiShelf和/或Bell来降低刺激感，也有助于提升立体声分离度。

![](https://pic2.zhimg.com/80/v2-b148337bf1715c63b1ad6eb815b33fab_720w.jpg)

![](https://pic1.zhimg.com/80/v2-4459734ee449e93b08a9188b489c553a_720w.jpg)

## Compressor

总线压缩应该工作在非常“慢”且“轻”的状态。通常设定很慢的Attack来保留完整的瞬态（瞬态交给后面的Limiter来处理），而Release设置一个不太长的、配合音乐节奏的适当长度。

如果压缩器支持给Detection Signal加EQ的话（不是给湿信号加EQ！），可以用高通或者带通对Detection Signal中低频的节拍信息做一定的衰减，只留下人耳对响度最敏感的频段来触发压缩器——同样是为了让压缩变“慢”，减弱低频鼓点造成中频sucking的现象。

设置非常低的Ratio，比较高的Threshold和极大的Knee，在歌曲最吵闹的段落一边观察Gain Reduction一边调整参数，留心动态的损失，尽量避免出现人耳能够察觉的压缩感。

![](https://pic1.zhimg.com/80/v2-d8f4eb286f5919701e4618de3b6aa553_720w.jpg)

![](https://pic4.zhimg.com/80/v2-f61b1676923bd138248fa3943edda595_720w.jpg)

如果歌曲的动态比较复杂，可以使用有Mid/Side处理或者Mulbiband分频功能的压缩器。

注意总线压缩只是作为一种补充，不该也不能代替混音时的分轨压缩。

## Multiband Limiter

经过前面的两个步骤，我们在原有混音的基础上又释放了一些headroom，接下来就是提Gain的重头戏了。

我比较喜欢用Multiband Limiter，分频处理能够大大缓解sucking现象，允许推出更高的增益。

一般有鼓的音乐可以按照 低频的Threshold > 中频的Thresh > 高频的Thresh 来设定，具体数值因目标响度而定。注意在最吵的段落观察Gain Reduction。追求最大限度地保留动态，或者追求一般的流行、摇滚，或者刻意追求很平很没感情的特殊效果，不同的目标可接受的GR上限也是不一样的。

![](https://pic2.zhimg.com/80/v2-d23c07367b2a2179da0c49021c85814c_720w.jpg)

## ISP Limiter

真峰值压限是为了防止发生在数字电路没有削波而在模拟电路有削波的情况。

## Loudness Meter

峰值电平常常与我们所感知的响度有很大的差别。广播行业会用[一套心理声学的方法](https://zhuanlan.zhihu.com/p/51224355)来评估一段音频的响度。混音和master也可以借用这个标准。

## 演示中用到的插件

以上演示用到四个免费插件，都在我的[免费音频插件推荐](/lists/free-audio-plugins)中有介绍

- [Ozone EQ](https://www.native-instruments.com/en/products/izotope/ozone-11-eq/)
- [TDR Kotelnikov](https://www.tokyodawn.net/tdr-kotelnikov/)
- [Limiter No.6](https://www.tokyodawn.net/vladg-limiter-n6/)
- [Youlean Loudness Meter](https://youlean.co/youlean-loudness-meter/)