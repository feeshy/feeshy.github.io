---
layout: home
---
## 汇编

``` dataview
TABLE WITHOUT ID link(file.link, title) as 标题, file.day as 发表 , max(file.day,last_modified_at) as 更新
from "lists"
sort file.day DESC
```

## 技术

``` dataview
TABLE WITHOUT ID link(file.link, title) as 标题, file.day as 发表 , max(file.day,last_modified_at) as 更新
from "tech"
sort file.day DESC
```

## 音乐

``` dataview
TABLE WITHOUT ID link(file.link, title) as 标题, file.day as 发表 , max(file.day,last_modified_at) as 更新
from "music"
sort file.day DESC
```

## 种草

``` dataview
TABLE WITHOUT ID link(file.link, title) as 标题, file.day as 发表 , max(file.day,last_modified_at) as 更新
from "smzdm"
sort file.day DESC
```

## 胡思乱想

``` dataview
TABLE WITHOUT ID link(file.link, title) as 标题, file.day as 发表 , max(file.day,last_modified_at) as 更新
from "prose"
sort file.day DESC
```

## 诗

``` dataview
TABLE WITHOUT ID link(file.link, title) as 标题, file.day as 发表 , max(file.day,last_modified_at) as 更新
from "poetry"
sort file.day DESC
```
