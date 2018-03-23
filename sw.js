self.addEventListener('install', function() {
  console.log("sw installed");
});
self.addEventListener('activate', function() {
  console.log("sw activate");
});