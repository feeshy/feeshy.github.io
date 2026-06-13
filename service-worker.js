// =========================================================================
// 1. 核心配置（必须放在最前面，确保后续所有缓存和控制权都应用此规则）
// =========================================================================

// 设置缓存名称命名空间
workbox.core.setCacheNameDetails({
    prefix: 'feeshy',
    precache: 'precache'
});

// 接管页面控制权
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// =========================================================================
// 2. 预缓存规则
// =========================================================================
workbox.precaching.precacheAndRoute(self.__precacheManifest);

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
        networkTimeoutSeconds: 3,
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxAgeSeconds: 60 * 24 * 60 * 60,
                maxEntries: 200
            })
        ]
    })
);

// =========================================================================
// 4. 清理不在白名单的缓存
// =========================================================================
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => {

                        const validRuntimeCaches = [
                            'feeshy-fonts-cache',
                            'feeshy-images-cache',
                            'feeshy-assets-cache',
                            'feeshy-pages-cache'
                        ];
                        if (validRuntimeCaches.includes(name)) {
                            return false;
                        }

                        if (name.includes('feeshy-precache')) {
                            return false;
                        }

                        return true;

                    })
                    .map((name) => caches.delete(name))
            );
        })
    );
});