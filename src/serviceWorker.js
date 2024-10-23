export default function registerServiceWorker() {
  const workerUrl = `${import.meta.env.BASE_URL}serviceWorker.js`; // Ensure this is correct

  navigator.serviceWorker
    .register(workerUrl)
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}
