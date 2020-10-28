/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { registerRoute } from 'workbox-routing/registerRoute';

import { cleanupOutdatedCaches } from 'workbox-precaching';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { skipWaiting, clientsClaim } from 'workbox-core';

import CONFIG from './globals/config';

skipWaiting();
clientsClaim();

// const webpCache = [
//   './images/drink-placeholder.webp',
//   './images/food-placeholder.webp',
//   './images/loading.webp',
//   './images/no-data.webp',
//   './images/placeholder.webp',
//   './images/heros/hero-image_2.webp',
//   './images/icons/ic_fill_form.webp',
// ];
precacheAndRoute(
  [
    ...self.__WB_MANIFEST,
    {
      url: './images/drink-placeholder.webp',
      revision: 1,
    },
    {
      url: './images/food-placeholder.webp',
      revision: 1,
    },
    {
      url: './images/loading.webp',
      revision: 1,
    },
    {
      url: './images/no-data.webp',
      revision: 1,
    },
    {
      url: './images/placeholder.webp',
      revision: 1,
    },
    {
      url: './images/heros/hero-image_2.webp',
      revision: 1,
    },
    {
      url: './images/icons/ic_fill_form.webp',
      revision: 1,
    },
    {
      url: './images/heros/hero-image_2-small.jpg',
      revision: 1,
    },
    {
      url: 'https://fonts.googleapis.com/css2?family=Asap:wght@400;700&family=Black+And+White+Picture&display=swap',
      revision: 1,
    },
  ],
);

registerRoute(
  new RegExp('https://fonts.gstatic.com/'),
  new StaleWhileRevalidate({
    cacheName: 'font-cache',
    plugins: [

      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);
registerRoute(
  new RegExp('https://cdnjs.cloudflare.com/'),
  new StaleWhileRevalidate({
    cacheName: 'icon-cache',
    plugins: [

      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);

registerRoute(
  new RegExp(`${CONFIG.IMAGE_URL}`),
  new StaleWhileRevalidate({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);

registerRoute(
  new RegExp(`${CONFIG.BASE_URL}`),
  new StaleWhileRevalidate({
    cacheName: 'api-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30,
      }),
    ],
  }),
);
cleanupOutdatedCaches();
