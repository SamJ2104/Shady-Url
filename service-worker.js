const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    'index.html',
   'manifest.json',
   'icon.png',
   'app.js',
   "styles.css"
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
