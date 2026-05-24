const CACHE_NAME = "repaso-frances-a1-v2.8";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/icons/icon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/pictogramas/comprender.svg",
  "./assets/pictogramas/evidencia.svg",
  "./assets/pictogramas/practicar.svg",
  "./assets/pictogramas/privacidad.svg",
  "./assets/pictogramas/responder.svg",
  "./assets/audio/audio-manifest.json",
  "./assets/audio/listen-01-saludo-clase.mp3",
  "./assets/audio/listen-02-heure-cours.mp3",
  "./assets/audio/listen-03-achat-pommes.mp3",
  "./assets/audio/listen-04-bus-gare.mp3",
  "./assets/audio/listen-05-repeter.mp3",
  "./assets/lang/fr-a1-content.json",
  "./assets/lang/language-pack-template.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;

      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
