// 0. 接管页面控制权
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// 1. 预缓存规则
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// =========================================================================
// 2. 子 PWA 独立作用域避让规则
// =========================================================================
workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/compact-phones/') ||
        url.pathname.startsWith('/ingress-tools/') ||
        url.pathname.startsWith('/ppi-calc/') ||
        url.pathname.startsWith('/simple-image-stitcher/'),
    new workbox.strategies.NetworkOnly()
);

// =========================================================================
// 3. 运行时全自动缓存路由
// =========================================================================

// 【网页切片字体】使用 CacheFirst 策略
workbox.routing.registerRoute(
    /\/assets\/OpenFont\//,
    new workbox.strategies.CacheFirst({
        cacheName: 'feeshy-fonts-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 365 * 24 * 60 * 60,
                maxEntries: 999
            })
        ]
    })
);

// 【图片与对象 SVG】使用 CacheFirst 策略
workbox.routing.registerRoute(
    ({ request, url }) => request.destination === 'image' || /\.(?:svg)$/i.test(url.pathname),
    new workbox.strategies.CacheFirst({
        cacheName: 'feeshy-images-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 365 * 24 * 60 * 60,
                maxEntries: 200
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
);

// 【CSS & JS 核心资产】使用 Stale-While-Revalidate 策略
workbox.routing.registerRoute(
    ({ request }) => request.destination === 'style' || request.destination === 'script',
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'feeshy-assets-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 365 * 24 * 60 * 60,
                maxEntries: 100
            })
        ]
    })
);

// 【文章 HTML 页面】使用 Network First 策略
workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst({
        cacheName: 'feeshy-pages-cache',
        networkTimeoutSeconds: 2,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 24 * 60 * 60,
                maxEntries: 200
            })
        ]
    })
);

// =========================================================================
// 4. 旧版本历史遗留缓存清理
// =========================================================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => {
                        const validCaches = [
                            'feeshy-fonts-cache',
                            'feeshy-images-cache',
                            'feeshy-assets-cache',
                            'feeshy-pages-cache'
                        ];
                        return name.startsWith('feeshy') && !validCaches.includes(name);
                    })
                    .map((name) => caches.delete(name))
            );
        })
    );
});