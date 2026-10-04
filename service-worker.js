/* Cache the complete local build without a remote Workbox runtime. */
importScripts('precache-manifest.b5b48117674274f7bb8a9af0e69c7fdf.js');
const CACHE = 'win7-simu-offline-' + self.__offlineBuildRevision;
const localURL = path => new URL(path, self.registration.scope).href;
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        const assets = self.__precacheManifest.slice();
        await Promise.all(Array.from({ length: 8 }, async () => {
            while (assets.length) {
                const asset = assets.pop();
                const response = await fetch(localURL(asset.url), { cache: 'reload' });
                if (!response.ok) throw new Error('Cannot cache ' + asset.url);
                await cache.put(localURL(asset.url), response);
            }
        }));
    })());
});
self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        for (const name of await caches.keys()) {
            if (name !== CACHE && (name.startsWith('win7-simu') || name === 'pdfjs')) await caches.delete(name);
        }
        await self.clients.claim();
    })());
});
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.registration.scope)) return;
    event.respondWith((async () => {
        const cache = await caches.open(CACHE);
        const url = new URL(event.request.url);
        if (url.href === self.registration.scope) url.pathname += 'index.html';
        return await cache.match(url.href, { ignoreSearch: true }) || fetch(event.request);
    })());
});
