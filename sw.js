self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        return cache.addAll([
          '/portfolio',
          '/portfolio/dist/index.js',
          '/portfolio/dist/style.css'
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
    return fetch(event.request, {cache: "default"});
  }());
});