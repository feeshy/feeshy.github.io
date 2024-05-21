---
layout: post
title: 能在搜索引擎旁展示相关结果的剪藏插件
date: 2024-03-08
last_modified_at: 2024-03-27
tags:
  - appinn
  - web-clipper
  - 浏览器插件
redirect_from:
  - https://meta.appinn.net/t/topic/53644
  - /lists/web-clipper-search-intergrations
---
这篇文章将对比类似印象笔记·剪藏的浏览器插件，收录的标准是，能在Google、百度等搜索引擎的搜索结果页面旁边的空白区域，显示同一关键词的剪藏查询结果。

![](https://user-images.githubusercontent.com/1576687/104394411-88407580-5581-11eb-8b9a-c4bbce154515.png)

## 笔记类工具

笔记剪藏的优势：极高的编辑自由度

|          | [印象笔记](https://www.yinxiang.com)                  | [Joplin](https://joplinapp.org)                                                                                    | [Tiddlywiki](https://tiddlywiki.com/)                                                                                                                                    |
| -------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 年费       | 0,￥98~￥298四档[^1]                                  | 0,€29,€59<br>可接入自己云存储                                                                                              | 0<br>可接入自己云存储                                                                                                                                                            |
| 客户端      | 全平台<br>免费限2台                                      | 全平台                                                                                                                | 全平台第三方客户端<br>                                                                                                                                                            |
| 离线使用     | 会员                                                | 支持                                                                                                                 | 支持                                                                                                                                                                       |
| 剪藏源      | 浏览器<br>移动端<br>微信<br>微博<br>得到<br>邮箱                | 浏览器<br>API<br>邮箱                                                                                                   | API<br>第三方浏览器[插件1](https://github.com/tiddly-gittly/Browser-Extension-Tiddlywiki-Collector)/[插件2](https://clipper.website/)                                              |
| 在搜索引擎旁展示 | Google<br>必应[^2]<br>百度<br>360                     | [第三方插件](https://joplin-utils.rxliuli.com/zh/joplin-search-integration/)实现：<br>Google<br>Duckduckgo<br>必应[^2]<br>百度 | [第三方脚本](https://github.com/linonetwo/tiddlywiki-search-tw5-and-search-engine-at-once-user-script)实现：<br>Google<br>StartPage<br>DuckDuckGo<br>Ecosia<br>必应&Bing[^2]<br>百度 |
| 全文搜索     | 是                                                 | 是                                                                                                                  | 是                                                                                                                                                                        |
| AI分析     | ￥168与￥218限次<br>￥298不限次                            | 第三方插件                                                                                                              | 第三方插件                                                                                                                                                                    |
| 重新排版     | 阅读视图<br>富文本                                       | markdown                                                                                                           | markdown<br>wikitext                                                                                                                                                     |
| 编辑自由度    | 全文                                                | 全文                                                                                                                 | 全文                                                                                                                                                                       |
| 特色       | 大而全                                               | 免费版限制少                                                                                                             | free<br>自定义上限高                                                                                                                                                           |
| 缺点       | 免费版每月60MB上传流量<br>新功能只会增加新的会员档位<br>标价水分高<br>数据导出困难 | 移动端不支持剪藏                                                                                                           | 上手难度高                                                                                                                                                                    |

[^1]: 印象笔记会员标价水分很高，而且经常搞活动，不建议原价购买。参考入手价：1年6折，3年4.5折，10年2.5折。另外edu邮箱认证首年可3折体验¥298档会员

[^2]: 必应指`cn.bing.com`，Bing指`www.bing.com`

## 书签类工具

书签剪藏的优势：可能接入对网页内容的AI分析，限制编辑自由度也提高了标注效率

|          | [MEMEX](https://memex.garden)             | [Pinbox](https://withpinbox.com/)         | [Cubox](https://cubox.pro/)[^3]                   | [Knower](https://knower.info) |
| -------- | ----------------------------------------- | ----------------------------------------- | ------------------------------------------------- | ----------------------------- |
| 年费       | 0,$60,$120                                | 0,神秘[^4]                                  | 0,￥98,￥198                                        | 0,￥89                         |
| 客户端      | 全平台                                       | iOS/Android                               | 全平台                                               | 无                             |
| 离线使用     | 支持                                        | ×                                         | ×                                                 | ×                             |
| 剪藏源      | 浏览器<br>移动端                                | 浏览器<br>移动端<br>微信                          | 浏览器<br>移动端<br>快捷指令<br>微信(会员)<br>邮箱(会员)<br>API(会员) | 浏览器                           |
| 在搜索引擎旁展示 | Google<br>Duckduckgo<br>Bing[^2]<br>Brave | Google<br>必应[^2]<br>多吉<br>百度<br>360<br>搜狗 | Google<br>Duckduckgo<br>Bing[^2]<br>百度            | Google<br>必应[^2]<br>百度        |
| 全文搜索     | 是                                         | 是                                         | 会员                                                | 是                             |
| AI分析     | 免费与$60档限次，接入自己的API可解除<br>$120不限次          | 暂无                                        | ￥98档30次/月<br>￥198档600次/月                          | 免费                            |
| 重新排版     |                                           |                                           | 阅读视图                                              | 阅读视图                          |
| 编辑自由度    | 标注                                        | 仅标题和备注                                    | 标注                                                | 标注<br>全文(会员)                  |
| 特色       | YouTube时间线标注<br>历史记录同步<br>收藏集共享           | 新标签页<br>书签快捷键<br>自动化规则<br>收藏集共享           | 历史记录同步<br>自动化规则                                   | 可视化分析(词云、树形图)                 |
| 缺点       | 免费版每月剪藏限25条                               | 无标注功能                                     | 桌面客户端不支持离线运行                                      | 无客户端<br>数据导出困难                |

[^3]: 楼主的Cubox邀请码w3aKqjGNa

[^4]: Pinbox会员定价不注册不给看，第三方平台看到的价格是几十元