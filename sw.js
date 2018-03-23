self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        return cache.addAll([
          'https://draichi.github.io/portfolio',
          'https://draichi.github.io/portfolio/dist/index.js',
          'https://draichi.github.io/portfolio/dist/style.css'
        ]);
      })
  );
  console.log("sw installed!!!");
});
self.addEventListener('activate', function() {
  console.log("sw activate");
});
self.addEventListener('fetch', event => {
  event.respondWith(async function() {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;
    return fetch(event.request);
  }());
});