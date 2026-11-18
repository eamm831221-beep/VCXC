const CACHE_NAME = 'vcxc-cache-v8';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://i.postimg.cc/d0vkfb03/SIN-FONDO.png',
  'https://i.postimg.cc/d0vkfb03/SIN-FONDO.png',
  'https://bienestar.gob.mx'
];

// Instala el Service Worker y guarda los recursos en la memoria caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activa el Service Worker y limpia versiones viejas de caché
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Sirve la aplicación desde la caché local cuando el brigadista está offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

});
