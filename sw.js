self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('exonova-cache').then((cache) => {
      return cache.addAll([
        '/exonova-/',                   // home page of your repo
        '/exonova-/offline.html',       // offline page
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match('/exonova-/offline.html');
    })
  );
});
