---
layout: post
title: FFmpeg中的硬件加速编码器
date: 2020-08-14
last_modified_at: 2022-01-28
tags:
  - appinn
  - 网络黄页
  - ffmpeg
  - 编码
redirect_from: https://meta.appinn.net/t/topic/18299
toc: true
---
注意：本帖讨论的是**硬编**，**不是**硬解

使用下面的命令可以列出 ffmpeg 中所有的编码器

```
ffmpeg -encoders
```

这个帖子整理一下ffmpeg中支持GPU硬件加速的编码器。

如果你的GPU支持硬件加速，则可以使用非默认的编码器来提高转码速度。就我本人在笔记本平台Intel低压U的使用经验，ffmpeg在开启核显硬件加速后可以降低30%的CPU占用，并且节约70%~80%的转码时间。

## 三大桌面GPU厂商以及苹果的硬件编、解码器进化历程表

在下面的三组表格中，可以查询到自己GPU硬件支持的编码格式：

- [Intel](https://en.wikipedia.org/wiki/Intel_Quick_Sync_Video#Hardware_decoding_and_encoding)
- [AMD](https://en.wikipedia.org/wiki/Unified_Video_Decoder#Format_support)
- [Nvidia](https://developer.nvidia.com/video-encode-decode-gpu-support-matrix)
- Apple Silicon
  - M1: H.264, HEVC
  - M1 Pro/M1 Max: H.264, HEVC, ProRes

看起来Intel的核显虽然3D性能一直拉跨，硬件编码器却一直给得非常厚道，某些特殊编码的视频渲染似乎是得独显核显全都要才能最大化效率

## Windows

（版本：ffmpeg 5.0）

<table>
    <tr>
        <td><b></b></td>
        <td><b>默认编码器</b></td>
        <td><b>AMD硬件加速</b></td>
        <td><b>Intel硬件加速</b></td>
        <td><b>Nvidia硬件加速</b></td>
    </tr>
    <tr>
        <td><b>H.264/AVC</b></td>
        <td>libx264</td>
        <td>h264_amf</td>
        <td>h264_qsv</td>
        <td>h264_nvenc<br>nvenc<br>nvenc_h264</td>
    </tr>
    <tr>
        <td><b>H.265/HEVC</b></td>
        <td>libx265</td>
        <td>hevc_amf</td>
        <td>hevc_qsv</td>
        <td>hevc_nvenc<br>nvenc_hevc</td>
    </tr>
    <tr>
        <td><b>MJPEG</b></td>
        <td>mjpeg</td>
        <td></td>
        <td>mjpeg_qsv</td>
        <td></td>
    </tr>
    <tr>
        <td><b>MPEG-2</b></td>
        <td>mpeg2video</td>
        <td></td>
        <td>mpeg2_qsv</td>
        <td></td>
    </tr>
    <tr>
        <td><b>VP8</b></td>
        <td>libvpx</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><b>VP9</b></td>
        <td>libvpx-vp9</td>
        <td></td>
        <td>vp9_qsv</td>
        <td></td>
    </tr>
</table>

对比本表格与上面的硬件支持表格，可以发现Intel比较新的GPU硬件上支持VP8编码，但ffmpeg for Windows软件上并没有做适配

## macOS (Intel & Apple Silicon)

（版本：ffmpeg 5.0）

<table>
    <tr>
        <td><b></b></td>
        <td><b>默认编码器</b></td>
        <td><b>Intel硬件加速</b></td>
        <td><b>Apple Silicon硬件加速</b></td>
    </tr>
    <tr>
        <td><b>H.264/AVC</b></td>
        <td>libx264<br>libopenh264</td>
        <td>h264_videotoolbox</td>
        <td>h264_videotoolbox</td>
    </tr>
    <tr>
        <td><b>H.265/HEVC</b></td>
        <td>libx265</td>
        <td>hevc_videotoolbox</td>
        <td>hevc_videotoolbox</td>
    </tr>
    <tr>
        <td><b>VP8</b></td>
        <td>libvpx</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td><b>VP9</b></td>
        <td>libvpx-vp9</td>
        <td>?</td>
        <td>?</td>
    </tr>
    <tr>
        <td><b>ProRes</b></td>
        <td>prores<br>prores_aw<br>prores_ks</td>
        <td></td>
        <td>prores_videotoolbox</td>
    </tr>
</table>

[ffmpeg5.0更新](https://9to5linux.com/ffmpeg-5-0-lorentz-released-with-new-encoders-decoders-muxers-and-more)说是新增了VP9和ProRes的硬件加速，不过我安装的1月17号的build只找到了ProRes

## Linux (x86)

（版本：ffmpeg 4.3）

<table>
    <tr>
        <td><b></b></td>
        <td><b>默认编码器</b></td>
        <td><b>AMD硬件加速</b></td>
        <td><b>Intel硬件加速</b></td>
        <td><b>Nvidia硬件加速</b></td>
    </tr>
    <tr>
        <td><b>H.264/AVC</b></td>
        <td>libx264</td>
        <td>h264_vaapi<br>h264_omx</td>
        <td>h264_vaapi</td>
        <td>h264_nvenc<br>nvenc<br>nvenc_h264</td>
    </tr>
    <tr>
        <td><b>H.265/HEVC</b></td>
        <td>libx265</td>
        <td>?hevc_vaapi</td>
        <td>hevc_vaapi</td>
        <td>hevc_nvenc<br>nvenc_hevc</td>
    </tr>
    <tr>
        <td><b>MJPEG</b></td>
        <td>mjpeg</td>
        <td></td>
        <td>mjpeg_vaapi</td>
        <td></td>
    </tr>
    <tr>
        <td><b>MPEG-2</b></td>
        <td>mpeg2video</td>
        <td></td>
        <td>mpeg2_vaapi</td>
        <td></td>
    </tr>
    <tr>
        <td><b>VP8</b></td>
        <td>libvpx</td>
        <td></td>
        <td>vp8_vaapi</td>
        <td></td>
    </tr>
    <tr>
        <td><b>VP9</b></td>
        <td>libvpx-vp9</td>
        <td></td>
        <td>vp9_vaapi</td>
        <td></td>
    </tr>
</table>

注：ffmpeg对于Intel GPU有完整的VAAPI支持，而对于AMD GPU的支持是不完整的：

> https://trac.ffmpeg.org/wiki/Hardware/VAAPI
>
> H.264 encode is working on GCN GPUs, but is still incomplete. No other codecs are supported by Mesa for encode yet.
> 
> Encoding and interlacing support in Mesa are incompatible because of the data layout in GPU memory. By default, frames are separated into fields and interlaced video is supported but encoding is not. Set the environment variable VAAPI_DISABLE_INTERLACE to 1 to be able to use the encoder (but without any interlaced video support.

不过考虑到ffmpeg的官方Wiki并不是实时更新，我也不确定最新的AMD GPU在最新的Linux驱动下是不是已经支持HEVC硬件加速编码了

## 树莓派

树莓派并不是一个设计来转码的设备，其GPU的硬件编码器部分只支持非4K分辨率的H.264视频

<table>
    <tr>
        <td><b></b></td>
        <td><b>默认编码器</b></td>
        <td><b>树莓派硬件加速</b></td>
    </tr>
    <tr>
        <td><b>H.264/AVC</b></td>
        <td>libx264</td>
        <td>h264_omx</td>
    </tr>
</table>