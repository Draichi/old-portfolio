self.addEventListener('install', function(event) {
  console.log("sw installed");
  event.waitUntil(
    caches.open('static')
      .then(function(cache) {
        cache.addAll([
          '/portfolio',
          '/portfolio/dist/index.js',
          '/portfolio/index.html',
          '/portfolio/dist/style.css'
        ]);
      })
  );
});
self.addEventListener('activate', function() {
  console.log("sw activate");
});