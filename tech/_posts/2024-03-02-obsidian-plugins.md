---
layout: post
title: 实用 Obsidian 插件推荐
date: 2024-03-02
last_modified_at: 2026-04-12
tags:
  - obsidian
  - appinn
  - 折腾记录
redirect_from:
  - https://meta.appinn.net/t/topic/53296
toc: true
description: 个人在用的 Obsidian 插件记录，覆盖同步、编辑器增强、任务管理与主题等内容，包含幕布与 Workflowy 的替代插件、Zotero 联动方案。
---
<details><summary>关于Obsidian</summary>
<p><a href=https://obsidian.md target="_blank" rel="noopener noreferrer">Obsidian</a> 是一款支持Markdown语法、本地存储的笔记软件，其特色在于其双向链接功能和灵活的插件系统，可以帮助用户以非线性的方式组织和管理知识。简而言之，Obsidian 可以看作是增强版的个人知识库，它可以让用户将知识碎片连接起来，形成一个庞大的知识网络，并通过插件扩展其功能，实现多种用途。</p>
</details>

将主力笔记软件从幕布转移到 Obsidian 两年后，折腾插件的热情逐渐退去，留下的都是真正用得顺手的工具。以下插件经过了我两年的日常使用和检验，算是我个人常用且觉得确实好用的推荐：

## 文档库管理

### 笔记同步

虽然直接把Obsidian本地库放在网盘中就能同步（纯桌面可以用任意网盘，iOS与桌面可以用iCloud），但网盘同步只做文件覆盖，缺乏文本级的冲突合并。在多端同时修改或离线编辑时，极易导致内容覆盖或产生冲突副本。因此，要保障数据一致性，Obsidian 软件内同步仍是首选。

Obsidian官方的内置同步服务要每月花费8美金，这使得许多用户会选择以下的同步方案：

- [Remotely Save](https://obsidian.md/plugins?id=remotely-save) \| [Remotely Sync](https://obsidian.md/plugins?id=remotely-secure) - 支持 Dropbox / OneDrive / WebDAV / S3。两插件同源。remotely-save 原作者 fyears 在2022年~2023年有一年半没更新，于是 sboesen fork 了一个新的 remotely-sync 进行维护，2024年初 fyears 归来，目前两个项目平行更新
- [Nutstore Sync](https://obsidian.md/plugins?id=nutstore-sync) - 坚果云 WebDAV 的请求数限制比较严格，使用前两个插件很容易突破限制导致封禁。这款 Nutstore Sync 插件是坚果云官方开发的，优化了同步逻辑，理论上可以大幅度减少请求数。
- [Obsidian Git](https://obsidian.md/plugins?id=obsidian-git) - 更严谨的版本管理与多端同步。但它的价值远不止于此，例如，我现在就是靠它打通了[从Obsidian到GitHub](https://github.com/feeshy/feeshy.github.io?tab=readme-ov-file#readme)的路由，从而实现了直接用Obsidian发布博客的工作流。
- [Self-hosted LiveSync](https://obsidian.md/plugins?id=obsidian-livesync) - 支持 CouchDB / 对象存储 / WebRTC。最好的同步体验依赖 CouchDB，可实现近乎实时的同步。但 Fly.io 取消了免费政策、有免费额度的 IMB Coudant 对个人用户风控非常严格（我使用国内发卡行的 VISA / AMEX 均没有注册成功）。目前国内用户如果想要获得最佳同步体验，通常需要通过 VPS 或 NAS 中的 Docker 自行部署数据库。

### 其他内容同步/导入

- [Cubox](https://obsidian.md/plugins?id=cubox-sync) - Cubox 是一款网页剪藏服务。订阅会员可通过这个插件调用它的 API，将剪藏的网页正文或标注同步至 Obsidian。
- [Weread](https://obsidian.md/plugins?id=obsidian-weread-plugin) - 同步微信读书的书籍元信息、高亮划线、笔记、书评、热门划线。
- [Obsidian 同步/导入 Zotero 笔记的五种方案](/tech/zotero#obsidian)

### 附件整理

- [Image Converter](https://obsidian.md/plugins?id=image-converter) - 图片处理工具，粘贴图片时自动转化为更高压缩率的格式。有效缓解粘贴大量无损PNG截图导致的仓库体积膨胀问题
- [File Cleaner Redux](https://obsidian.md/plugins?id=file-cleaner-redux) - 文件清理器，可以清除未被引用的附件、空文件、大文件、过期文件

## 编辑器

- [Link Embed](https://obsidian.md/plugins?id=obsidian-link-embed) - 粘贴URL，自动获取网页预览
- [Advanced Tables](https://obsidian.md/plugins?id=table-editor-obsidian) - 所见即所得的表格编辑器
- [Mermaid Tools](https://obsidian.md/plugins?id=mermaid-tools) - 可视化的mermaid流程图代码片段预设
- [Google Photos](https://obsidian.md/plugins?id=google-photos) - 在笔记中插入来自Google Photos照片库的图片
- [Open vault in VS Code](https://obsidian.md/plugins?id=open-vscode) - 调用VS Code打开当前库，用更专业的工具处理Obsidian不擅长的代码编辑工作
- [Calctex](https://obsidian.md/plugins?id=calctex) - 自动计算LaTeX语法书写的数学表达式

### 大纲笔记（替代幕布与 Workflowy）

- [Outliner](https://obsidian.md/plugins?id=obsidian-outliner) - 列表编辑快捷键增强，模拟幕布的核心交互。将`Tab`、`Enter`，`Ctrl+A`、`Ctrl+Shift+↑/↓`等操作修改为workflowy相同的效果，还支持列表的拖拽排序
- [Heading Shifter](https://obsidian.md/plugins?id=obsidian-heading-shifter) - 用`Tab`、`Shift+Tab`调整标题等级，推荐自己再绑定`alt+1~6`的快捷键
- [Zoom](https://obsidian.md/plugin?id=obsidian-zoom) - 可以钻入标题或者列表的内部码字，隐藏其他无关的区块
- [Enhancing Mindmap](https://obsidian.md/plugins?id=obsidian-enhancing-mindmap) - 为大纲笔记启用树形视图，替代[幕布](https://mubu.com)
   ![](https://user-images.githubusercontent.com/18719494/124454742-63ec8580-ddbb-11eb-8da0-7cd44f38a225.gif)

### 看板

- [Kanban](https://obsidian.md/plugins?id=obsidian-kanban) - 为大纲笔记启用看板视图，当成低配Trello来使用。这个插件的特色是每个md文件都可以作为一个独立的看板，并且没有引入过多的自定义语法，源文件的可读性很高。如果你只是用看板进行任务管理，更看重自动化，而且能接受一个库只有一个看板，则推荐尝试其他看板插件。

## 任务管理

- [Task Genius](https://obsidian.md/plugins?id=obsidian-task-progress-bar) - 强大的项目与任务管理插件。提供清单、树形、日历、看板视图，可为多层级任务显示进度条。另有不依赖obsidian的独立桌面端正在内测。
  ![](https://github.com/taskgenius/taskgenius-plugin/raw/master/media/fluent-light.png)
## 主题

最后推荐几个依赖[Style Settings](https://obsidian.md/plugins?id=obsidian-style-settings)插件的增强主题：

- 内置了多种配色方案，支持彩虹文件列表与彩虹标题，以及简洁且清晰的表格隔行配色
	- [Chime](https://github.com/Bluemoondragon07/chime-theme)<br>![](https://github.com/Bluemoondragon07/chime-theme/raw/main/Screenshots/Showcase.png)
	- [Blue Topaz](https://github.com/PKM-er/Blue-Topaz_Obsidian-css)<br>![](https://raw.githubusercontent.com/PKM-er/Blue-Topaz_Obsidian-css/master/preview_Blue%20Topaz.png)
- 动效比较好看
	- [Maple](https://github.com/subframe7536/obsidian-theme-maple)<br>![](https://github.com/subframe7536/obsidian-theme-maple/raw/main/img/screenshot_source.webp)
