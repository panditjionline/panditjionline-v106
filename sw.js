// Pandit Ji Online — Instant-Update Native Code-Split Service Worker (v122)
// Active ONLY on live production domain (panditjionline.online); self-unregisters on local/preview hosts
const CACHE_NAME = 'panditjionline-v122';
const IS_LIVE_PROD_HOST = /^(?:www\.)?panditjionline\.online$/i.test(self.location.hostname || '');
const PRECACHE_ASSETS = [
  '/pandit-shashank-sharma.jpg',
  '/pandit-photo.jpg',
  '/pandit-avatar-96.webp',
  '/app-icon.svg',
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
      .then((cache) =>
        Promise.all(
          PRECACHE_ASSETS.map((assetUrl) =>
            fetch(assetUrl, { cache: 'no-cache' })
              .then((res) => {
                if (!res || res.status !== 200) return;
                const ct = (res.headers.get('content-type') || '').toLowerCase();
                if (ct.includes('text/html')) return;
                return cache.put(assetUrl, res);
              })
              .catch(() => {})
          )
        )
      )
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
    url.pathname === '/ai-catalog.json' ||
    url.pathname === '/llms.txt' ||
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

  const isImageAsset = /\.(jpg|jpeg|png|webp|gif|svg|ico)$/i.test(url.pathname);
  const isCodeAsset = /\.(js|mjs|ts|tsx|jsx|css)$/i.test(url.pathname);
  const isNonHtmlAsset = isImageAsset || isCodeAsset;

  // 1. Dedicated Image Handler: Cache-First with strict non-HTML guard — NEVER falls back to index.html
  if (isImageAsset) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cachedResponse) => {
          const cachedType = cachedResponse
            ? (cachedResponse.headers.get('content-type') || '').toLowerCase()
            : '';
          const validCached = cachedResponse && cachedResponse.status === 200 && !cachedType.includes('text/html');
          if (validCached) {
            return cachedResponse;
          }
          if (cachedResponse) {
            cache.delete(event.request).catch(() => {});
          }
          return fetch(event.request)
            .then((networkResponse) => {
              if (!networkResponse || networkResponse.status !== 200) {
                return new Response(null, { status: networkResponse ? networkResponse.status : 404 });
              }
              const contentType = (networkResponse.headers.get('content-type') || '').toLowerCase();
              if (contentType.includes('text/html')) {
                return new Response(null, { status: 404, statusText: 'Image Not Found' });
              }
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => new Response(null, { status: 404, statusText: 'Offline Image' }));
        })
      )
    );
    return;
  }

  // 2. Strict Network-First (bypassing HTTP disk cache) for index.html & all navigations; cache fallback only offline
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

  // 3. Immutable hashed Vite chunks (/assets/*) & fonts: Cache-First
  const isCacheFirstStatic =
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/deities/') ||
    url.pathname.startsWith('/og-card/') ||
    /\.(woff2?|ttf)$/i.test(url.pathname);

  if (isCacheFirstStatic) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            const cachedType = (cachedResponse.headers.get('content-type') || '').toLowerCase();
            if (!(isNonHtmlAsset && cachedType.includes('text/html'))) {
              return cachedResponse;
            }
            cache.delete(event.request).catch(() => {});
          }
          return fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                const contentType = (networkResponse.headers.get('content-type') || '').toLowerCase();
                if (isNonHtmlAsset && contentType.includes('text/html')) {
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

  // 4. Per-route SEO JSON fragments (/seo-chunks/*.json) & other static assets: Stale-While-Revalidate
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cachedResponse) => {
        const networkPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const contentType = (networkResponse.headers.get('content-type') || '').toLowerCase();
              if (isNonHtmlAsset && contentType.includes('text/html')) {
                return new Response('', { status: 404, statusText: 'Not Found' });
              }
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => cachedResponse || new Response('', { status: 404, statusText: 'Offline' }));

        if (cachedResponse) {
          const cachedType = (cachedResponse.headers.get('content-type') || '').toLowerCase();
          if (!(isNonHtmlAsset && cachedType.includes('text/html'))) {
            event.waitUntil(networkPromise.catch(() => {}));
            return cachedResponse;
          }
        }
        return networkPromise;
      })
    )
  );
});
