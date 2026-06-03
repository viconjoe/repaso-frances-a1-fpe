const CACHE_NAME = "repaso-frances-a1-v3.2.4";

const CORE_ASSETS = [
  "./",
  "./index.html",
  "./data-frances-a1.js",
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
  "./assets/audio/bonjour.m4a",
  "./assets/audio/bonsoir.m4a",
  "./assets/audio/au-revoir.m4a",
  "./assets/audio/merci-beaucoup.m4a",
  "./assets/audio/excusez-moi.m4a",
  "./assets/audio/je-mappelle.m4a",
  "./assets/audio/jhabite-a.m4a",
  "./assets/audio/je-suis-espagnol.m4a",
  "./assets/audio/je-suis-etudiant.m4a",
  "./assets/audio/je-travaille.m4a",
  "./assets/audio/je-cherche-du-travail.m4a",
  "./assets/audio/je-voudrais.m4a",
  "./assets/audio/combien-ca-coute.m4a",
  "./assets/audio/addition-sil-vous-plait.m4a",
  "./assets/audio/ou-est-la-gare.m4a",
  "./assets/audio/a-gauche.m4a",
  "./assets/audio/a-droite.m4a",
  "./assets/audio/je-vais-prendre-le-bus.m4a",
  "./assets/audio/jai-rendez-vous.m4a",
  "./assets/audio/il-est-neuf-heures.m4a",
  "./assets/audio/aujourdhui.m4a",
  "./assets/audio/demain.m4a",
  "./assets/audio/lundi.m4a",
  "./assets/audio/il-pleut.m4a",
  "./assets/audio/il-fait-chaud.m4a",
  "./assets/audio/mon-cahier.m4a",
  "./assets/audio/votre-adresse.m4a",
  "./assets/audio/un-kilo-de-pommes.m4a",
  "./assets/audio/je-ne-comprends-pas.m4a",
  "./assets/audio/pouvez-vous-repeter.m4a",
  "./assets/audio/parler-plus-lentement.m4a",
  "./assets/audio/pouvez-vous-maider.m4a",
  "./assets/audio/jai-un-entretien.m4a",
  "./assets/audio/je-suis-disponible-demain.m4a",
  "./assets/audio/cest-bien-cette-adresse.m4a",
  "./assets/audio/je-voudrais-un-cafe.m4a",
  "./assets/audio/un-billet-sil-vous-plait.m4a",
  "./assets/audio/je-vais-a-la-pharmacie.m4a",
  "./assets/audio/la-salle-est-a-gauche.m4a",
  "./assets/audio/je-dois-partir.m4a",
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
