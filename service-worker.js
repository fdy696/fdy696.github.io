/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "75587a355029d3425cb697c587362dbc"
  },
  {
    "url": "accumulate/chinese.html",
    "revision": "5b9bf0d39c7918845114f5b2a071b3fc"
  },
  {
    "url": "accumulate/index.html",
    "revision": "9333fe159879949f0dc16ae1e9376269"
  },
  {
    "url": "accumulate/japan.html",
    "revision": "dd5ebbf7838f7e96de6ef172cda39673"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3920df8af0d6a45700149de180ce649c"
  },
  {
    "url": "assets/css/0.styles.63ce3f22.css",
    "revision": "9bb6b9f88c684f84f2eb3ace755e382e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.681e8485.js",
    "revision": "fa360a36e6d12c963522bd7dccffe9af"
  },
  {
    "url": "assets/js/11.95b30cde.js",
    "revision": "c80e1206b393add434df9cf0a2a814c4"
  },
  {
    "url": "assets/js/12.b251dd46.js",
    "revision": "1ac0ac7c25bf6f2bc5ec8e6377bf41dc"
  },
  {
    "url": "assets/js/2.2a66faa9.js",
    "revision": "4f3dfbc6dd07e548bcad92f27530dcaf"
  },
  {
    "url": "assets/js/3.9375cff1.js",
    "revision": "ad8a441e31a7e66d7eb512ac3041b9f7"
  },
  {
    "url": "assets/js/4.9d255fb8.js",
    "revision": "7e5b8116a7d34452d7362acaf4a1c5b8"
  },
  {
    "url": "assets/js/5.1a871595.js",
    "revision": "804b87a83cc136f52d0eb526f247d9e8"
  },
  {
    "url": "assets/js/6.1bde1ea1.js",
    "revision": "8809e082158c32705ebcb4a03ed9b906"
  },
  {
    "url": "assets/js/7.95aff4d5.js",
    "revision": "871516cf8fb8ec7e118db117ee4e53c5"
  },
  {
    "url": "assets/js/8.e5c2ef5b.js",
    "revision": "a9b7fd8260dd0aca590924cb7150e23f"
  },
  {
    "url": "assets/js/9.c0e37516.js",
    "revision": "026b9092c050412b2bef4a42d68da666"
  },
  {
    "url": "assets/js/app.77ec8563.js",
    "revision": "0c62cfb290d999d9438ab65abb8a75b0"
  },
  {
    "url": "backbone/index.html",
    "revision": "63ef24c81c228896e0305829d66c172f"
  },
  {
    "url": "guide.html",
    "revision": "999d7daedf7b1d97b041f0e97c17e394"
  },
  {
    "url": "index.html",
    "revision": "35070baa5748807d01ab2b6f777516cf"
  },
  {
    "url": "others/index.html",
    "revision": "1f62fdd73a4389ef1efbb872f66e42a2"
  },
  {
    "url": "others/lifeup.html",
    "revision": "7e0f19c5ee01b303adbabc46a17a15e0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
