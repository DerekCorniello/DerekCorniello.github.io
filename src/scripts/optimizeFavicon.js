// favicon optimization instructions
// 1. create a 32x32px favicon.ico file
// 2. create a 180x180px apple-touch-icon.png
// 3. create a 192x192px android-chrome-192x192.png
// 4. create a 512x512px android-chrome-512x512.png

// add to index.html head:
// <link rel="icon" href="/favicon.ico" sizes="any">
// <link rel="icon" href="/favicon.svg" type="image/svg+xml">
// <link rel="apple-touch-icon" href="/apple-touch-icon.png">
// <link rel="manifest" href="/site.webmanifest">

// site.webmanifest example:
// {
//   "name": "derek's space",
//   "short_name": "derek's space",
//   "icons": [
//     {
//       "src": "/android-chrome-192x192.png",
//       "sizes": "192x192",
//       "type": "image/png"
//     },
//     {
//       "src": "/android-chrome-512x512.png",
//       "sizes": "512x512",
//       "type": "image/png"
//     }
//   ],
//   "theme_color": "#000000",
//   "background_color": "#000000",
//   "display": "standalone"
// }
