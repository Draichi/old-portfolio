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
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});