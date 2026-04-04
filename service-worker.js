const CACHE_NAME = 'iurispocket-v1';

const ARCHIVOS = [
  '/',
  '/index.html',
  '/Constitucion_Panama.html',
  '/Codigo_Civil_Panama.html',
  '/Codigo_Procesal_Civil_Panama.html',
  '/Codigo_Penal_Panama.html',
  '/Codigo_Procesal_Penal_Panama.html',
  '/Codigo_Comercio_Panama.html',
  '/Codigo_Judicial_Panama.html',
  '/Codigo_Administrativo_Panama.html',
  '/Codigo_Familia_Panama.html',
  '/Codigo_Trabajo_Panama.html',
  '/Codigo_Agrario_Panama.html',
  '/Codigo_Fiscal_Panama.html',
  '/Codigo_Electoral_Panama.html',
  '/Ley_Ambiente_41_1998.html',
  '/Ley_Arrendamiento_93_1973.html',
  '/Ley_Propiedad_Horizontal_284_2022.html',
  '/Ley_Sociedades_Anonimas_32_1927.html',
  '/Diccionario_Juridico_Elemental_Cabanellas.html',
  '/manifest.json'
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
