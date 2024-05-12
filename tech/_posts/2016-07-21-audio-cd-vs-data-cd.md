---
layout: post
title: 700MB的CD是如何存储80分钟的音乐的？
date: 2016-07-21
last_modified_at: 2016-10-12
tags:
  - 编码
  - 知乎
  - 科普
redirect_from:
  - https://www.zhihu.com/question/48749285/answer/112433648
---

> [知乎提问](https://www.zhihu.com/question/48749285/answer/112433648)：一张CD的容量只有700MB，但80分钟的16bit 44.1khz规格的PCM音频的占用空间在807.5MB左右，请问是如何塞进去的？

___

想当然了，以为80MIN和700MB是可以换算的关系。

查了下维基[^wiki]，其实这两个规格是针对音频CD和数据CD两种用途分别计算的容量：

> ![](https://upload.wikimedia.org/wikipedia/commons/a/ae/Disk-structure2.svg)
> 
> - 音频CD的码流是**2352** byte/sector X 75 sector/s = 176400 byte/s，完全符合PCM音频的要求； 
> - 数据CD则是在每个sector中预留304个byte做纠错，于是码流降到了**2048** byte/sector X 75 sector/s = 153600 byte/s  

两种CD后面还会经过一系列的编码、纠错处理，不过处理方式就不再有差别了。

所以**一张可装80MIN音频的CD，因为多预留了一层纠错机制的关系，只能存入700MB的数据**。如果将80分钟的PCM音频以文件的形式封装并刻录成数据CD，就不是一张CD能装下的了。标准的CD播放机也不能识别这样的CD。

[^wiki]: [Compact Disc Digital Audio - Wikipedia](https://en.wikipedia.org/wiki/Compact_Disc_Digital_Audio#Technical_specifications)