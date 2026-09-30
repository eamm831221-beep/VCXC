const CACHE_NAME = 'vcxc-cache-v1';
const ASSETS = [
  '../index.html',
  '../css/styles.css',
  'app.js',
  'https://i.postimg.cc/LXkqg9Dk/fondo.png',
  'https://i.postimg.cc/d0vkfb03/SIN-FONDO.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
