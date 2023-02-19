![Tweetflight](https://user-images.githubusercontent.com/449385/218269463-b2c95682-4870-445a-947f-79ff60a08f03.svg)

# Tweetflight (static version)

Tweetflight was a project that launched ten years ago, to accompany the Brightly single "Preflight Nerves", from the album Beginnings & Endings.

It was a web experiment and music video (a sort of Twitter karaoke) that went so far beyond its humble beginnings, opened so many doors for me, and is still the thing I've made that I'm most proud of.

Tweetflight would grab tweets, in real time, that matched up to the lyrics of the song. [With the announcement that Twitter is shutting down free access to their API](https://twitter.com/TwitterDev/status/1621026986784337922) this site is now an archive, using a final collection of static tweets over and over. All good things must come to an end, and I'm really glad the ride lasted as long as it did.

You can still find [the original code](https://github.com/superhighfives/tweetflight-archive), while this static version is powered by [Vite](https://vitejs.dev/).

<img width="680" alt="tweetflight.wearebrightly.com" src="https://user-images.githubusercontent.com/449385/216725918-172e0ed2-2ac0-49be-8018-af5ee138f756.png">

## Getting started

```
npm install
npm run dev
```

## Deployment

It outputs a static build in the `dist` folder, which can be deployed wherever you like. By default this set up uses [Cloudflare Pages](https://pages.cloudflare.com/).

```
npm deploy
```

## API

Currently the static tweets are in the `/public/scripts/controllers/main.js` file, but could be loaded in externally. The data format expected is an array of objects with the following properties:

```js
var tweets = [
  {
    id: 1,
    line: 'It was dark',
    time: 1, // this is the second the lyric should display, and at 120bpm as refers to the current bar of the song
    tweet: {
      text: 'I spooked him big time cuz it was dark and he was hiding on the side of the driveway lol',
      link: 'http://twitter.com/2464935918/status/1621427369213935616',
      username: 'miztifying',
      created_at: '2023-02-03 08:36:24 +0000',
    },
  },
  // ...
]
```
