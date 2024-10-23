// public/serviceWorker.js

const CACHE_NAME = "my-app-cache-v1";
const CACHE_ASSETS = [
  "/",
  "index.html",
  "style.css", // Include your CSS files
  "main.js",
  "App.js",
  "dashboard/app",
  // Include your main JavaScript file
  // Add other assets you want to cache, like images or fonts
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching app shell");
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Activate event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Removing old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
    if(!navigator.onLine){
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Serve from cache
      }
      
      return fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response; // Return the fetched response
        });
      });
    })
  );
}
});

