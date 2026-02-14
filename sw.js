const cacheName = 'loja-baby-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker Ativo!');
});

self.addEventListener('fetch', (event) => {
  // Necessário para o PWA ser instalável
});


