---
layout: post
title: Obsidian插件折腾记录
date: 2024-03-02
last_modified_at: 2024-04-18
tags:
  - obsidian
  - appinn
  - 折腾记录
redirect_from:
  - https://meta.appinn.net/t/topic/53296
toc: true
---

之前我是轻度的[Obsidian](https://obsidian.md)用户，最近把[幕布](https://mubu.com/)上的笔记都迁移过来了，准备把Obsidian当成主力笔记。折腾了一下，目前的插件方案是这样的：

## 内置同步

虽然直接把Obsidian本地库放在网盘中就能同步（纯桌面可以用任意网盘，iOS与桌面可以用iCloud），但Android平台的网盘客户端很难兼顾同步与续航。如果涉及Android，那么就只存在Obsidian软件内同步这项选择。

Obsidian官方的内置同步服务要每月花费8美金，这使得许多用户会选择以下两个第三方的内置同步方案：[remotely-save](https://obsidian.md/plugins?id=remotely-save) \| [remotely-sync](https://obsidian.md/plugins?id=remotely-secure)

- 两插件同源。remotely-save原作者fyears在2022年~2023年有一年半没更新，于是sboesen fork了一个新的分支remotely-sync进行维护，2024年初fyears归来，目前两个项目平行更新
- 支持OneDrive / Dropbox / S3 / WebDAV。WebDAV不建议用免费版坚果云，这两个插件目前的同步方式不是很科学，会消耗大量请求次数。
- 首次安装后需要进入插件授权云端存储，以及配置自动同步间隔。
- 默认仅同步笔记库，建议勾选“同步配置文件夹”以同步插件和主题。目前配置文件夹只支持增量同步，不支持删除，如果想要卸载插件或者主题，需要在云端和每一台设备分别删除插件文件夹。

另外，如果更看重版本管理，还可以使用git同步插件[obsidian-git](https://obsidian.md/plugins?id=obsidian-git)。我现在就是用这个插件打通了从Obsidian到GitHub Pages的流程。

## 杂七杂八

- [Auto Link Title](https://obsidian.md/plugins?id=obsidian-auto-link-title) - 粘贴URL，自动获取网页标题
- [Advanced Tables](https://obsidian.md/plugins?id=table-editor-obsidian) - 所见即所得的表格编辑器
- [Mermaid Tools](https://obsidian.md/plugins?id=mermaid-tools) - 用文本绘制流程图
- [File Cleaner Redux](https://obsidian.md/plugins?id=file-cleaner-redux) - 文件清理器，可以清除未被引用的附件、空文件、大文件、过期文件
- [Open with VS Code](https://obsidian.md/plugins?id=open-vscode) - 直接在VS Code中打开当前库，处理博客的代码部分，再配合 obsidian-git 上传到GitHub Pages
- [五种Obsidian<->Zotero联动方案](zotero#obsidian)

## 大纲笔记

以下两个插件可以在Obsidian中获得类似Workflowy、幕布的编辑体验

- [Outliner](https://obsidian.md/plugins?id=obsidian-outliner) - 列表编辑增强，将`Tab`、`Enter`，`Ctrl+A`、`Ctrl+Shift+↑/↓`等操作修改为workflowy相同的效果，还支持列表的拖拽排序
- [Heading Shifter](https://obsidian.md/plugins?id=obsidian-heading-shifter) - 用`Tab`、`Shift+Tab`调整标题等级，推荐自己再绑定`alt+1~6`的快捷键

以下两个第三方插件可以为大纲笔记渲提供额外的视图。需要修改文件头，建议配合核心插件“模板”使用

- [Enhancing Mindmap](https://obsidian.md/plugins?id=obsidian-enhancing-mindmap) - 为大纲笔记启用树形视图，替代[幕布](https://mubu.com)
   ![](https://user-images.githubusercontent.com/18719494/124454742-63ec8580-ddbb-11eb-8da0-7cd44f38a225.gif)
- [Kanban](https://obsidian.md/plugins?id=obsidian-kanban) - 为大纲笔记启用看板视图，当成低配Trello来使用。这个插件的特色是每个md文件都可以作为一个独立的看板，并且没有引入过多的自定义语法，源文件的可读性很高。如果你只是用看板进行任务管理，更看重自动化，而且能接受一个库只有一个看板，则推荐尝试其他看板插件。
   ![](https://github.com/mgmeyers/obsidian-kanban/raw/main/src/docs/Assets/Screen%20Shot%202021-09-16%20at%2012.58.22%20PM.png)

## 任务管理

- [Task Progress Bar](https://obsidian.md/plugins?id=obsidian-task-progress-bar) - 为层级任务显示进度条
  ![](https://github.com/Quorafind/Obsidian-Task-Progress-Bar/raw/master/media/example.gif)
- [Tasks](https://obsidian.md/plugins?id=obsidian-tasks-plugin) - 轻松为待办事项添加日期，支持emoji或dataview两种语法标准
- [Tasks Calendar Wrapper](https://obsidian.md/plugins?id=tasks-calendar-wrapper) - 在侧面板标签页按日期集中显示库中的全部待办事项（依赖Tasks）
   ![](https://github.com/Leonezz/obsidian-tasks-calendar-wrapper/raw/master/imgs/quick_entry.png)
- [Cardboard](https://obsidian.md/plugins?id=tasks-calendar-wrapper) - 用看板的形式显示库中的全部待办事项。与[Kanban](https://obsidian.md/plugins?id=obsidian-kanban)的区别是，Cardboard更专注于任务管理的功能，看板完全自动生成，但每个库只能有一个看板
  ![](https://github.com/roovo/obsidian-card-board/raw/main/images/dateBoard.png?raw=true)

## 主题

最后推荐几个依赖[Style Settings](https://obsidian.md/plugins?id=obsidian-style-settings)插件的增强主题：

- 内置了多种配色方案，支持彩虹文件列表与彩虹标题，以及简洁且清晰的表格隔行配色
	- [Chime](https://github.com/Bluemoondragon07/chime-theme)<br>![](https://github.com/Bluemoondragon07/chime-theme/raw/main/Screenshots/Showcase.png)
	- [Blue Topaz](https://github.com/PKM-er/Blue-Topaz_Obsidian-css)<br>![](https://raw.githubusercontent.com/PKM-er/Blue-Topaz_Obsidian-css/master/preview_Blue%20Topaz.png)
- 动效比较好看
	- [Maple](https://github.com/subframe7536/obsidian-theme-maple)<br>![](https://github.com/subframe7536/obsidian-theme-maple/raw/main/img/screenshot_source.webp)
