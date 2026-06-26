/* Homestead — service worker: makes the game installable and fully playable offline.
   Bump CACHE_VERSION whenever you want every client to drop its old cache. */
const CACHE_VERSION = 'homestead-v3';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
  './art/player.png',
  './art/player-walk1.png',
  './art/player-walk2.png',
  './art/player-back.png',
  './art/player-back-walk1.png',
  './art/player-back-walk2.png',
  './art/player-side.png',
  './art/player-side-walk1.png',
  './art/player-side-walk2.png',
  './art/cat.png',
  './art/fisher.png',
  './art/hamu.png',
  './art/louie.png',
  './art/david.png',
  './art/sukie.png','./art/koya.png','./art/cybele.png','./art/mary.png','./art/alicia.png',
  './art/aria.png','./art/jeannie.png','./art/althea.png','./art/edward.png','./art/anthony.png',
  './art/natalie.png','./art/amand.png','./art/jacy.png','./art/paco.png',
  './art/tile-grass.png','./art/tile-cobble.png','./art/tile-stone.png','./art/tree-a.png'
];

// Precache the app shell + art so the very first offline launch works.
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then((c) => c.addAll(CORE).catch(() => {}))   // tolerate a missing asset rather than failing install
      .then(() => self.skipWaiting())
  );
});

// Drop caches from older versions.
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;   // let cross-origin (CDN/audio) go straight to network

  // The page itself: network-first so deploys show up online, cache fallback when offline.
  if (req.mode === 'navigate' || req.destination === 'document') {
    e.respondWith(
      fetch(req)
        .then((res) => { caches.open(CACHE_VERSION).then((c) => c.put('./index.html', res.clone())); return res; })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Everything else (art, icons, manifest): cache-first for instant loads, fetch + cache on a miss.
  e.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => cached))
  );
});
