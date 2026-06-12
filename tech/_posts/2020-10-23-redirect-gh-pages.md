---
layout: post
title: GitHub Pages 重定向的实现
date: 2020-10-23
last_modified_at: 2026-06-05
tags:
  - github-pages
  - 重定向
  - 折腾记录
toc: true
description: GitHub Pages 等静态托管服务无法使用服务端 301/302 重定向，本文介绍可在此类平台上使用的多种客户端重定向替代方案：HTML meta 标签、JavaScript 跳转、404 页面路由重构，以及 Service Worker 拦截。
---
GitHub Pages没有开放可配置的服务器端301、302重定向，只能用其他替代方式实现页面重定向。我们可以采用以下几种跳转策略（这些方法同样适用于其他缺乏路由控制的静态托管服务）：

## 场景一：从本页跳转到任意URL

> 小明在多个平台上发布文章，包括自己的博客、微博、知乎等。为了方便访客找到所有内容，他希望将这些文章整合到自己的GitHub Pages。小明只需为每个外部文章创建一个重定向页面，并将该页面的 URL 指向原始文章，即可将外部文章加入网站的文章列表中。访客访问重定向页面时会被自动引流到原始文章。如果使用了Jekyll等静态网站生成器，这些重定向页面还能享受到自动索引功能。

### HTML文件通用方法

- **meta刷新标签**：在 HTML 页面的 `<head>` 部分添加 `<meta>` 元素，设置 `http-equiv="refresh"`，并在 `content` 属性中设定跳转时间和新 URL。
    
- **js跳转**：
    
    - `window.location.href`: 直接设置新的 URL。
        
    - `location.replace()`: 与 `window.location.href` 类似，但它会替换当前页面的历史记录，访客无法通过后退按钮返回重定向页。
        
- **正文a标签**：在正文渲染一个指向目标URL的超链接，供访客手动点击。作为前两种方式失效时的备选方案。
    
> 对搜索引擎的爬虫来说，js 跳转的效果可能不是那么稳定[^1]，因此一般不建议单独使用，建议至少结合 HTML 标签以确保兼容性。

[^1]: [研究Technical SEO的正确姿势实例 - JS跳转试验 - 极诣数字营销](https://maxket.com/technical-seo-js-redirect/)

### Jekyll模板跳转

我的Jekyll主题[less-style-please](https://github.com/feeshy/less-style-please)内置了重定向页面的模板，在需要跳出的文章头部声明：

```yaml
---
layout: redirect
redirect_to: /newdir/newpage
---
```

即可自动调用上述三种跳转方式：

1. 利用meta刷新标签重定向
    
2. 利用javascript重定向
    
3. 在正文前渲染一个指向所设定URL的超链接。即使前两种方式都失效，用户依旧可以手动点击
    

> 具体实现上，meta刷新通过修改 `/_includes/head.html` 实现，js跳转与添加a标签通过修改 `/_layouts/head.html` 实现。

## 场景二：从站内旧URL跳转到新页

> 小明为了更好地组织内容，决定对部分博客文章重命名。但他此前已经在其他平台发布了指向旧 URL 的链接。由于无法修改外部链接，他需要一种机制确保访客点击旧链接后依然能访问文章内容。

### Jekyll Redirect From插件

Jekyll官方有一款利用meta刷新标签跳转的插件[Jekyll Redirect From](https://github.com/jekyll/jekyll-redirect-from)，在新文章头部声明：

```yaml
---
redirect_from: /olddir/oldpage
---
```

按理声明后即可实现自动跳转。但不知是插件本身的bug还是GitHub Pages权限问题，经过GitHub Actions在线编译后，插件的确在旧URL位置自动生成了HTML文件，但头部并未出现原本应自动生成的meta刷新标签。

目前这种方法仍需结合前文方式修改Jekyll模板的 `/_includes/head.html` ，才能在GitHub Pages实现自动跳转。

## 场景三：目录重命名后的批量重定向

> 小明为了更好地组织内容，将部分目录进行了重命名。例如，将名为 "aaaa" 的目录重命名为 "bbbb"。这导致了目录下所有网页的 URL 也发生了变化。单页跳转相对容易配置，但如果涉及整个目录的结构调整，逐一修改将是一项耗时费力的工作。此时可以采用以下两种批量处理方案。

### 利用404页面降级跳转

在代码库根目录建立一个 `404.html`，利用js跳转来曲线救火：

```javascript
window.onload=function() {
    var url = window.location.href
    switch (true) {
        case url.includes('/aaaa'):
            window.location.replace(url.replace('/aaaa', '/bbbb'))
            break
    }
}
```

以后每次改目录名，只需在脚本中新增一个case。这种方法的缺点是对搜索引擎爬虫不太友好，且访客会短暂看到404页面，体验存在割裂感。

### 利用 Service Worker 客户端拦截

为了解决404页面的延迟感并提升体验，可以引入 Service Worker。Service Worker 可以在浏览器端拦截网络请求，相当于在访客本地建立了一个代理。当访客请求旧目录下的 URL 时，Service Worker 会截获该请求并直接返回重定向响应。

在你的 Service Worker 脚本（如 `sw.js`）中监听 `fetch` 事件：

```javascript
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    if (url.pathname.startsWith('/aaaa/')) {
        const newUrl = url.href.replace('/aaaa/', '/bbbb/');
        event.respondWith(Response.redirect(newUrl, 302));
    }
});
```

**优点**：生效后，跳转在客户端无感完成，无需经过404页面，过渡非常平稳。

**缺点**：访客必须至少成功访问过一次网站，触发 Service Worker 的注册与激活，拦截才能生效。因此，它对初次访问的搜索引擎爬虫依然无效。通常建议与方案 A（404跳转）结合使用，以兼顾用户访问体验与基础页面的可用性。