// Joobiraa service worker: makes the site installable and keeps it usable on weak connections.
// Pages: network first (fresh prices and timers), cached copy if offline.
// CSS/JS/images/fonts: cached copy first, refreshed in the background.
// The real app must never cache API responses (bids, payments) here.
const CACHE = 'joobiraa-v3';
const SHELL = [
    './', 'index.html', 'auctions.html', 'winners.html', 'bid.html', 'my-bids.html', 'account.html', 'faq.html', 'login.html',
    'css/style.css', 'js/boot.js', 'js/script.js', 'js/data.js',
    'assets/icons/icon-192.png', 'assets/pay/telebirr.webp', 'assets/pay/cbe.webp'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
    e.waitUntil(caches.keys()
        .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
        .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
    const req = e.request;
    if (req.method !== 'GET') return;

    if (req.mode === 'navigate') {
        e.respondWith(fetch(req)
            .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
            .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html'))));
        return;
    }

    e.respondWith(caches.match(req).then(cached => {
        const fresh = fetch(req).then(res => {
            if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
            return res;
        }).catch(() => cached);
        return cached || fresh;
    }));
});
