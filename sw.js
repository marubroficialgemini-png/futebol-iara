const CACHE_NAME = 'iara-futebol-v1';
const ASSETS = [
  './',
    './index.html',
      './manifest.json',
        './icons/icon-192.png'
        ];

        self.addEventListener('install', (e) => {
          e.waitUntil(
              caches.open(CACHE_NAME).then((cache) => {
                    return cache.addAll(ASSETS);
                        })
                          );
                          });

                          self.addEventListener('activate', (e) => {
                            e.waitUntil(self.clients.claim());
                            });

                            self.addEventListener('fetch', (e) => {
                              e.respondWith(
                                  caches.match(e.request).then((response) => {
                                        return response || fetch(e.request);
                                            })
                                              );
                                              });
                                              