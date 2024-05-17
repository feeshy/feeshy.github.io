---
layout: post
title: Github Pages重定向的实现
date: 2020-10-23
last_modified_at: 2024-04-12
tags:
  - github-pages
  - 重定向
  - 折腾记录
toc: true
---

Github Pages没有开放可配置的301、302重定向，只能用其他替代方式实现页面重定向。对搜索引擎的爬虫来说，[js跳转的效果可能不是那么稳定](https://maxket.com/technical-seo-js-redirect/)，如果能使用HTML标签，最好还是用HTML标签。

## 从本页跳转到任意URL

> 小明在多个平台上发布文章，包括自己的博客、微博、知乎等。为了方便访客找到所有内容，他希望将这些文章整合到自己的Github Pages。小明只需为每个外部文章创建一个重定向页面，并将该页面的 URL 指向原始文章，便可以将所有外部文章添加到网站的文章列表中，当访客访问重定向页面时，他们也将被自动重定向到原始文章。如果使用了Jekyll等静态网站生成器，重定向页面还可以享受到静态生成器的自动索引功能。

### HTML文件通用方法

- meta刷新标签：在 HTML 页面的 `<head>` 部分中添加一个 `<meta>` 元素，并将其 `http-equiv` 属性设置为 `refresh`，并设置 `content` 属性的值为重定向时间和新 URL。
- js跳转
	- window.location.href: 使用 `window.location.href` 属性来设置新的 URL。
	- location.replace(): 与 `window.location.href` 类似，但它会替换当前页面的历史记录，因此用户无法通过后退按钮返回到原始页面。
- 正文a标签：建立一个指向目标URL的超链接，用户手动点击

### Jekyll模板跳转

我的Jekyll主题[less-style-please](https://github.com/feeshy/less-style-please)内置了重定向页面的模板，在需要跳出的文章头部声明：

``` yaml
---
layout: redirect
redirect_to: /newdir/newpage
---
```

即可调用以下三种跳转方式：

- 利用meta刷新标签重定向
- 利用javascript重定向
- 在正文前渲染一个指向所设定URL的超链接。即使前两种方式都失效的情况下，用户依旧可以手动点击

meta刷新通过修改 `/_includes/head.html` 实现，js跳转与添加a标签通过修改 `/_layouts/head.html` 实现

## 从站内旧URL跳转到本页

> 小明为了更好地组织内容，决定对部分博客文章进行重命名。然而，小明此前已经在多个其他网站和平台发布了这些文章的链接，这些链接指向了文章的原始 URL。由于他无法修改这些外部链接，小明担心访客点击这些链接后会无法访问文章内容。

### Jekyll Redirect From插件

Jekyll官方有一款利用meta刷新标签跳转的插件[Jekyll Redirect From](https://github.com/jekyll/jekyll-redirect-from)，在新文章声明：

``` yaml
---
redirect_from: /olddir/oldpage
---
```

按理如此声明后就应当实现自动跳转。但不知是插件本身的bug，还是GitHub Pages权限问题，经过Github Actions的在线编译，插件的确在旧URL的位置自动生成了HTML文件，但HTML头部并没有出现原本应该自动生成的meta刷新标签。

还是需要按照上面的方式修改 `/_includes/head.html` ，才能实现GitHub Pages的自动跳转。

### 利用404页面批量重定向

> 小明为了更好地组织内容，将部分目录进行了重命名。例如，将名为 "aaaa" 的目录重命名为 "bbbb"。这导致了目录下所有网页的 URL 也发生了变化，需要一一进行修改。如果小明手动修改每个文件的 URL，这将是一项非常耗时费力的工作。假设 "aaaa" 目录下有数百个文件，那么小明需要花费大量时间才能完成所有文件的修改。

在repo的根目录建立一个404.html，用js跳转来曲线救火：

``` JavaScript
window.onload=function() {
    var url = window.location.href
    switch (true) {
        case url.includes('/aaaa'):
            window.location = url.replace('/aaaa', '/bbbb')
            break
}
```

以后每次改目录名就在下面新添一个case就好了。

不过这种方法有一个比较大的缺点，就是对搜索引擎的爬虫不太友好。


