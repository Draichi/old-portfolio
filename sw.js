var cacheName = 'static';
var filesToCache = [
  'https://draichi.github.io/portfolio/index.html',
  'https://draichi.github.io/portfolio/dist/index.js',
  'https://draichi.github.io/portfolio/dist/style.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keyList => {
        return Promise.all(keyList.map(key => {
          if (key !== cacheName) return caches.delete(key);
        }));
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});