// Pandit Ji Online — Instant-Update Native Code-Split Service Worker (v107)
// Active ONLY on live production domain (panditjionline.online); self-unregisters on local/preview hosts
const CACHE_NAME = 'panditjionline-v107';
const IS_LIVE_PROD_HOST = /^(?:www\.)?panditjionline\.online$/i.test(self.location.hostname || '');
const PRECACHE_ASSETS = [
  '/favicon.ico',
  '/favicon-48x48.png',
  '/favicon-96x96.png',
  '/pwa-192x192.png',
  '/apple-touch-icon.png'
];

self.addEventListener('message', (event) => {
  if (event && event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', (event) => {
  if (!IS_LIVE_PROD_HOST) {
    self.skipWaiting();
    return;
  }
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  if (!IS_LIVE_PROD_HOST) {
    event.waitUntil(
      caches.keys()
        .then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
        .then(() => self.registration.unregister())
        .catch(() => {})
    );
    return;
  }
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => caches.open(CACHE_NAME).then((cache) => cache.delete('/manifest.json').catch(() => {})))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (!IS_LIVE_PROD_HOST) return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || event.request.method !== 'GET') return;

  // Never intercept dynamic APIs, XML feeds, admin manifests, or dev paths
  if (
    url.pathname === '/sw.js' ||
    url.pathname === '/manifest.json' ||
    url.pathname === '/middleware.js' ||
    url.pathname === '/admin-control.js' ||
    url.pathname === '/admin-download-manifest.json' ||
    url.pathname === '/seo-data.json' ||
    url.pathname === '/feed.xml' ||
    url.pathname === '/sitemap.xml' ||
    url.pathname === '/robots.txt' ||
    url.pathname === '/ads.txt' ||
    url.pathname.startsWith('/og-svg/') ||
    url.pathname.startsWith('/api/') ||
    url.pathname.startsWith('/src/') ||
    url.pathname.startsWith('/@') ||
    url.pathname.startsWith('/node_modules/')
  ) {
    return;
  }

  // 1. Strict Network-First (bypassing HTTP disk cache) for index.html & all navigations; cache fallback only offline
  const isHtmlNav =
    event.request.mode === 'navigate' ||
    url.pathname === '/' ||
    url.pathname === '/index.html' ||
    url.pathname === '/404.html';

  if (isHtmlNav) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        fetch(event.request, { cache: 'no-store' })
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cache.match(event.request).then((res) => res || caches.match('/')))
      )
    );
    return;
  }

  const isCodeAsset = /\.(js|mjs|ts|tsx|jsx|css)$/i.test(url.pathname);

  // 2. Immutable hashed Vite chunks (/assets/*), optimized deity WebPs, static OG JPGs & icons: Cache-First
  const isCacheFirstStatic =
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/deities/') ||
    url.pathname.startsWith('/og-card/') ||
    /\.(webp|jpg|jpeg|png|gif|svg|ico|woff2?|ttf)$/i.test(url.pathname);

  if (isCacheFirstStatic) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            const cachedType = (cachedResponse.headers.get('content-type') || '').toLowerCase();
            if (!(isCodeAsset && cachedType.includes('text/html'))) {
              return cachedResponse;
            }
          }
          return fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const contentType = (networkResponse.headers.get('content-type') || '').toLowerCase();
                if (isCodeAsset && contentType.includes('text/html')) {
                  return new Response('', { status: 404, statusText: 'Not Found' });
                }
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => cachedResponse || new Response('', { status: 404, statusText: 'Offline' }));
        })
      )
    );
    return;
  }

  // 3. Per-route SEO JSON fragments (/seo-chunks/*.json) & other static assets: Stale-While-Revalidate
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cachedResponse) => {
        const networkPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const contentType = (networkResponse.headers.get('content-type') || '').toLowerCase();
              if (isCodeAsset && contentType.includes('text/html')) {
                return new Response('', { status: 404, statusText: 'Not Found' });
              }
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cachedResponse || new Response('', { status: 404, statusText: 'Offline' }));

        if (cachedResponse) {
          const cachedType = (cachedResponse.headers.get('content-type') || '').toLowerCase();
          if (!(isCodeAsset && cachedType.includes('text/html'))) {
            event.waitUntil(networkPromise.catch(() => {}));
            return cachedResponse;
          }
        }
        return networkPromise;
      })
    )
  );
});
