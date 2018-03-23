self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        cache.addAll([
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
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request, {cache: "force-cache"});
        }
      })
  );
});