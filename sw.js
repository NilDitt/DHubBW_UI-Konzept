const CACHE_NAME = "dhbwdash-v1";
const CORE = [
  "/",
  "/index.html",
  "/404.html",
  "/manifest.webmanifest",
  "/UpdateLogo 1.png",
  // core pages
  "/dashboard_overview/code.html",
  "/files_management/code.html",
  "/calendar_and_deadlines/code.html",
  "/mensa-detailansicht/code.html",
  "/polls_management/code.html",
  "/groups_directory/code.html",
  "/karteikarten/code.html",
  "/frage_&_antwort_plattform/code.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CORE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req).then((cached) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          const copy = networkRes.clone();
          caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(req, copy))
            .catch(() => {});
          return networkRes;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
