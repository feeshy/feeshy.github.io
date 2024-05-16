---
layout: home
---

## 草稿

``` dataview
table without id link(file.link, title) as 标题, file.folder as 分类, file.day as 日期
from "_obsidian" or "lists/_drafts" or "music/_drafts" or "poetry/_drafts" or "prose/_drafts" or "smzdm/_drafts" or "tech/_drafts" where file.day
sort max(file.day,last_modified_at) desc
```

## 最近编辑

``` dataview
table without id link(file.link, title) as 标题, file.day as 发表, max(file.day,last_modified_at) as 更新
from "" where file.day
sort last_modified_at desc limit 7
```

## 分类

### 汇编

``` dataview
table without id link(file.link, title) as 标题, file.day as 发表, max(file.day,last_modified_at) as 更新
from "lists/_posts" where file.day
sort file.day desc
```

### 技术

``` dataview
table without id link(file.link, title) as 标题, file.day as 发表, max(file.day,last_modified_at) as 更新
from "tech/_posts" where file.day
sort file.day desc
```

### 音乐

``` dataview
table without id link(file.link, title) as 标题, file.day as 发表, max(file.day,last_modified_at) as 更新
from "music/_posts" where file.day
sort file.day desc
```

### 种草

``` dataview
table without id link(file.link, title) as 标题, file.day as 发表, max(file.day,last_modified_at) as 更新
from "smzdm/_posts" where file.day
sort file.day desc
```

### 胡思乱想

``` dataview
table without id link(file.link, title) as 标题, file.day as 发表, max(file.day,last_modified_at) as 更新
from "prose/_posts" where file.day
sort file.day desc
```

### 诗

``` dataview
table without id link(file.link, title) as 标题, file.day as 发表, max(file.day,last_modified_at) as 更新
from "poetry" where file.day
sort file.day desc
```
