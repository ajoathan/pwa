var cacheName = 'hello-world-page';
var filesToCache = [
	'/pwa/',
	'/pwa/index.html',
	'/pwa/hello-world.css',
	'/pwa/main.js'
];

self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] Install');

	e.waitUntil(caches.open(cacheName)
	.then(function(cache) {
		console.log('[ServiceWorker] Caching app shell');
		return cache.addAll(filesToCache);
	}));
});

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');

	e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
	console.log(event.request.url);
	event.respondWith(caches.match(event.request)
	.then(function(response) {
		return response || fetch(event.request);
	}));
});

