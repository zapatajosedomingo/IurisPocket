const CACHE_NAME = 'iurispocket-v1';

const ARCHIVOS = [
  '/IurisPocket/',
  '/IurisPocket/index.html',
  '/IurisPocket/Constitucion_Panama.html',
  '/IurisPocket/Codigo_Civil_Panama.html',
  '/IurisPocket/Codigo_Procesal_Civil_Panama.html',
  '/IurisPocket/Codigo_Penal_Panama.html',
  '/IurisPocket/Codigo_Procesal_Penal_Panama.html',
  '/IurisPocket/Codigo_Comercio_Panama.html',
  '/IurisPocket/Codigo_Judicial_Panama.html',
  '/IurisPocket/Codigo_Administrativo_Panama.html',
  '/IurisPocket/Codigo_Familia_Panama.html',
  '/IurisPocket/Codigo_Trabajo_Panama.html',
  '/IurisPocket/Codigo_Agrario_Panama.html',
  '/IurisPocket/Codigo_Fiscal_Panama.html',
  '/IurisPocket/Codigo_Electoral_Panama.html',
  '/IurisPocket/Ley_Ambiente_41_1998.html',
  '/IurisPocket/Ley_Arrendamiento_93_1973.html',
  '/IurisPocket/Ley_Propiedad_Horizontal_284_2022.html',
  '/IurisPocket/Ley_Sociedades_Anonimas_32_1927.html',
  '/IurisPocket/Diccionario_Juridico_Elemental_Cabanellas.html',
  '/IurisPocket/manifest.json',
  '/IurisPocket/icon-192.png',
  '/IurisPocket/icon-512.png'
];

// Instalación: guarda todos los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

// Activación: elimina cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: sirve desde caché, sin internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
