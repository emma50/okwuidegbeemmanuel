// Install and activate: populating your cache

const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};


// Recovering failed request
// and cache network request

const putInCache = async (request, response) => {
  const cache = await caches.open("v1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
  // First try to get the resource from the cache
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // Next try to use (and cache) the preloaded response, if it's there
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info("using preload response", preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }

  // Next try to get the resource from the network
  try {
    const responseFromNetwork = await fetch(request);
    // response may be used only once
    // we need to save clone to put one copy in cache
    // and serve second one
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    // when even the fallback response is not available,
    // there is nothing we can do, but we must always
    // return a Response object
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};

// Enable navigation preload
const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

//  Install 
self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
      "/",
      '/images/emmanuel-new-image.jpg',
      '/skills/hard-skills/aws.svg',
      '/skills/hard-skills/chai.svg',
      '/skills/hard-skills/chakra-ui.svg',
      '/skills/hard-skills/css.svg',
      '/skills/hard-skills/expressjs.svg',
      '/skills/hard-skills/firebase.svg',
      '/skills/hard-skills/git.svg',
      '/skills/hard-skills/github.svg',
      '/skills/hard-skills/html.svg',
      '/skills/hard-skills/javascript.svg',
      '/skills/hard-skills/jest.svg',
      '/skills/hard-skills/material-ui.svg',
      '/skills/hard-skills/mocha.svg',
      '/skills/hard-skills/mongodb.svg',
      '/skills/hard-skills/nextjs.svg',
      '/skills/hard-skills/nodejs.svg',
      '/skills/hard-skills/nyc.svg',
      '/skills/hard-skills/postgresql.svg',
      '/skills/hard-skills/react-testing-library.svg',
      '/skills/hard-skills/reactjs.svg',
      '/skills/hard-skills/redis.svg',
      '/skills/hard-skills/redux.svg',
      '/skills/hard-skills/sass.svg',
      '/skills/hard-skills/tailwindcss.svg',
      '/skills/hard-skills/travis-ci.svg',
      '/skills/hard-skills/typescript.svg',
      '/skills/hard-skills/vercel.svg',
      '/skills/hard-skills/zod.svg',
      '/skills/soft-skills/collaboration.svg',
      '/skills/soft-skills/communication.svg',
      '/skills/soft-skills/problem-solving.svg',
      '/favicon.ico',
    ]),
  );
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(enableNavigationPreload());
});

//  Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      preloadResponsePromise: event.preloadResponse,
      fallbackUrl: "/images/emmanuel-new-image.jpg",
    }), 
  );
});



