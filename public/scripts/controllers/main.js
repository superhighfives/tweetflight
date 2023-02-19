;(function () {
  'use strict'

  function debounce(func, wait, immediate) {
    var timeout

    return function executedFunction() {
      var context = this
      var args = arguments

      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }

      var callNow = immediate && !timeout

      clearTimeout(timeout)

      timeout = setTimeout(later, wait)

      if (callNow) func.apply(context, args)
    }
  }

  var tweets = [
    {
      id: 1,
      line: 'It was dark',
      time: 1,
      tweet: {
        text: 'It was dark af and raining cats and dogs 30 mins ago. Now the sun is out, like nothing happened 🙄',
        link: 'http://twitter.com/296385792/status/1623613492153536512',
        username: 'arinaquina',
        created_at: '2023-02-09 09:23:16 +0000',
      },
    },
    {
      id: 2,
      line: 'In the car park',
      time: 2,
      tweet: {
        text: 'We are tweeting from the hotel that’s the subject of a far right protest in Knowsley, Liverpool. We are trapped in the car park, surrounded by hundreds of far-right protestors who have broken through police cordons.',
        link: 'https://twitter.com/Care4Calais/status/1624154372341915648',
        username: 'Care4Calais',
        created_at: '2023-02-10 21:12:00 +0000',
      },
    },
    {
      id: 3,
      line: 'I heard a lark ascending',
      time: 3,
      tweet: {
        text: 'Last time I heard a lark ascending was 10 days ago looking at this sunset over the Lakes. I then had Down Ampney going through my head and the words',
        link: 'https://twitter.com/MBRoberts4004/status/1412658398877859842',
        username: 'MBRoberts4004',
        created_at: '2021-07-07 07:23:00 +0000',
      },
    },
    {
      id: 4,
      line: 'And you laughed',
      time: 4,
      tweet: {
        text: 'you took everything from me, and you laughed!',
        link: 'http://twitter.com/1460520458688679940/status/1621424383310036992',
        username: 'finaldances',
        created_at: '2023-02-03 08:24:32 +0000',
      },
    },
    {
      id: 5,
      line: 'And in my bones',
      time: 5,
      tweet: {
        text: 'yo i hateeeee this white man with my heart and my soul and in my bones bro',
        link: 'http://twitter.com/898581302588342272/status/1618751302523289600',
        username: 'shandem_',
        created_at: '2023-01-26 23:22:40 +0000',
      },
    },
    {
      id: 6,
      line: "I guess I've always known",
      time: 6,
      tweet: {
        text: "MS is a good person in her heart I guess i've always known that",
        link: 'http://twitter.com/1480286667504295936/status/1620000601382998017',
        username: 'unrunre',
        created_at: '2023-01-30 10:06:56 +0000',
      },
    },
    {
      id: 7,
      line: 'There was a spark exploding',
      time: 7,
      tweet: {
        text: 'There was a spark exploding as I rode my bike down the boulevard',
        link: 'https://twitter.com/bikelustcomics/status/344976822737444864',
        username: 'bikelustcomics',
        created_at: '2013-06-13 01:37:45 +0000',
      },
    },
    {
      id: 8,
      line: 'In the dry bark',
      time: 8,
      tweet: {
        text: 'In the dry bark I hope this gets on tweet flight.',
        link: 'https://twitter.com/B_VDP91/status/332817304402419712',
        username: 'B_VDP91',
        created_at: '2013-05-10 12:20:25 +0000',
      },
    },
    {
      id: 10,
      line: 'you look sick',
      time: 9.5,
      tweet: {
        text: 'Hey you look sick as hell!!!',
        link: 'http://twitter.com/1510843841171148800/status/1621418451544817666',
        username: 'vcideer',
        created_at: '2023-02-03 08:00:58 +0000',
      },
    },
    {
      id: 12,
      line: 'We are everything',
      time: 10.5,
      tweet: {
        text: 'The reality is, we are NOTHING without Jesus. But, we are EVERYTHING in Him.',
        link: 'http://twitter.com/2468184649/status/1622895729030070272',
        username: 'momwhopray',
        created_at: '2023-02-07 09:51:08 +0000',
      },
    },
    {
      id: 13,
      line: 'And all my clothes',
      time: 14.5,
      tweet: {
        text: 'I only have 2 months left to get my car and all my clothes for this trip😭',
        link: 'http://twitter.com/3247251199/status/1622726150945402880',
        username: 'si_aa19',
        created_at: '2023-02-06 22:37:17 +0000',
      },
    },
    { id: 14, line: 'Well baby they were thrown', time: 15.5, tweet: null },
    {
      id: 15,
      line: 'Into the sea',
      time: 16.5,
      tweet: {
        text: "i'ma look back, i'ma look back to the future in fact, let me examine the progress, the demons that tried to suffocate the road to success, i'ma look forward into the sea oblivious sea i call 'history', thunderous waves that rage destroying the maze of memories, i wanna see.",
        link: 'https://twitter.com/skizyric/status/1624348019037704192',
        username: 'skizyric',
        created_at: '2023-02-1 10:02:03 +0000',
      },
    },
    { id: 16, line: 'God I felt it when you left me', time: 17.5, tweet: null },
    {
      id: 17,
      line: 'It hit me hard',
      time: 18.5,
      tweet: {
        text: 'ever since that day havent watched a single grammy show 😭😭 it hit me hard fbsbdbabdb',
        link: 'http://twitter.com/1442802198396739589/status/1622888858504273921',
        username: 'tksoIo',
        created_at: '2023-02-07 09:23:50 +0000',
      },
    },
    {
      id: 18,
      line: 'In the car park',
      time: 19.5,
      tweet: {
        text: 'New kicks. I was so excited to wear them that I put them on in the car park.',
        link: 'https://twitter.com/dancondon89/status/1624715670402260998',
        username: 'dancondon89',
        created_at: '2023-02-12 10:22:38 +0000',
      },
    },
    {
      id: 19,
      line: 'Cause I was always looking',
      time: 20.5,
      tweet: {
        text: 'Mine did that cause I was always looking up abs exercises',
        link: 'https://twitter.com/BlueTurfGreenQB/status/1515465678626574339',
        username: 'BlueTurfGreenQB',
        created_at: '2022-04-17 12:02:50 +0000',
      },
    },
    {
      id: 20,
      line: 'For a spark',
      time: 21.5,
      tweet: {
        text: "ill take what i can get, 'cause im too damp for a spark",
        link: 'http://twitter.com/1599870224332906502/status/1623068515573039104',
        username: 'PeterBParkerBot',
        created_at: '2023-02-07 21:17:43 +0000',
      },
    },
    { id: 21, line: "we can't lose", time: 23, tweet: null },
    {
      id: 23,
      line: 'we never won',
      time: 24,
      tweet: {
        text: 'i went to a bunch of home games last year when i worked downtown and we never won a game smh i might b bad luck to the team smh',
        link: 'http://twitter.com/489737543/status/1623369693053730817',
        username: 'HollywoodTintz',
        created_at: '2023-02-08 17:14:30 +0000',
      },
    },
    {
      id: 25,
      line: "I'm going to make it anyway",
      time: 27,
      tweet: {
        text: "Me at the start of a paper: “Lol this argument is a stretch, but I'm going to make it anyway.” Me at the end of a paper: “Wow I am absolutely correct about this, there can be no debate.”",
        link: 'https://twitter.com/LissaJoStewart/status/1472621019668127747',
        username: 'LissaJoStewart',
        created_at: '5:33 PM · Dec 19, 2021 2021-12-19 17:33:16 +0000',
      },
    },
    { id: 27, line: "I'm going to fake it baby", time: 29, tweet: null },
    {
      id: 29,
      line: 'I feel it now',
      time: 32.5,
      tweet: {
        text: 'I think maybe I was numb to it last year, but you know I feel it now more than ever.',
        link: 'http://twitter.com/284752180/status/1622737659599679492',
        username: 'Cool_J13',
        created_at: '2023-02-06 23:23:01 +0000',
      },
    },
    {
      id: 30,
      line: 'I feel it now',
      time: 33.5,
      tweet: {
        text: 'Yall know how they say that when you hit your mid 20s, its like a switch flips? I feel it now',
        link: 'http://twitter.com/3129288110/status/1622788278108975104',
        username: 'MaiaArising',
        created_at: '2023-02-07 02:44:10 +0000',
      },
    },
    {
      id: 31,
      line: 'I feel it now',
      time: 34.5,
      tweet: {
        text: "just tried liqer for the first time i don't even feel a thing i think i have a high alcohlo tolerinse oh poop i feel it now",
        link: 'http://twitter.com/1563677477347930112/status/1622747096330956802',
        username: 'xXfortnite7Xx',
        created_at: '2023-02-07 00:00:31 +0000',
      },
    },
    {
      id: 32,
      line: 'I feel it now',
      time: 35.5,
      tweet: {
        text: 'I am happiest when I feel the presence of the Holy Spirit, and I feel it now.',
        link: 'http://twitter.com/1482100083999055878/status/1622834208002523136',
        username: 'onlyvanya',
        created_at: '2023-02-07 05:46:40 +0000',
      },
    },
  ]

  angular.module('tweetflight').controller('MainCtrl', [
    '$scope',
    '$http',
    function ($scope, $http) {
      var getTweets, requestAnimationFrame, setBarTime, setLyricSplit
      document.ontouchmove = function (e) {
        return e.preventDefault()
      }
      requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame
      window.requestAnimationFrame = requestAnimationFrame
      $scope.ready = function () {
        return $scope.lyricsLoaded
      }
      $scope.start = function () {
        return ($scope.playing = true)
      }
      $scope.replay = function () {
        return location.reload()
      }
      setBarTime = function (lyric) {
        return (lyric.time = 6.4 * lyric.time - 6.4)
      }
      setLyricSplit = function (lyric) {
        var pattern
        if (lyric.tweet) {
          pattern = new RegExp('^(.*)(' + lyric.line + ')(.*)$', 'im')
          return (lyric.processed = lyric.tweet.text.match(pattern))
        }
      }

      getTweets = function () {
        $scope.status = 'Fetching tweets...'

        var lyric, _i, _len, _ref, _results
        $scope.lyrics = tweets
        _ref = $scope.lyrics
        _results = []
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          lyric = _ref[_i]
          setBarTime(lyric)
          _results.push(setLyricSplit(lyric))
        }
        return _results
      }

      return getTweets()
    },
  ])

  angular.module('tweetflight').directive('preflight', function () {
    return {
      restrict: 'E',
      template: `
      <div id='stage'>
        <video preflight-video class="preflight video" preload playsinline>
          <source ng-src="{{ video }}.mp4"  type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
          <source ng-src="{{ video }}.webm" type="video/webm; codecs=vp8,vorbis">
          <source ng-src="{{ video }}.ogv"  type="video/ogg; codecs=theora,vorbis">
        </video>
        <ul class="tweets">
          <li ng-repeat="lyric in lyrics" ng-controller="LyricController" ng-class="lyricClass()" lyric>
            <div class='innerLyric'>
              <div ng-show="lyric.tweet" class="meta">
                <span class="date">{{lyric.tweet.created_at | timeAgo}}</span>
              </div>
              <div class="line">
                <span ng-show="lyric.tweet" class="tweet start">{{lyric.processed[1] | swapSymbols}}</span>
                {{lyric.line}}
                <span ng-show="lyric.tweet" class="tweet end">{{lyric.processed[3] | swapSymbols}}</span>
              </span>
              <div ng-show="lyric.tweet" class="link">
                <a class="tweet-link" href="{{lyric.tweet.link}}" target="blank">
                  <span class="ss-icon ss-social">twitter</span>&nbsp;{{lyric.tweet.username}}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      `,
      replace: true,
      scope: {
        video: '@',
      },
      link: function (scope, element, attr) {},
    }
  })

  angular.module('tweetflight').directive('preflightVideo', function () {
    return function (scope, elem, attrs) {
      var video
      video = elem[0]
      scope.$watch('$parent.playing', function () {
        if (scope.$parent.playing) {
          return video.play()
        }
      })
      scope.$watch('$parent.lyrics', function () {
        if (scope.$parent.lyrics) {
          setTimeout(function () {
            scope.lyrics = scope.$parent.lyrics
            scope.$parent.lyricsLoaded = true
            return scope.$parent.$apply()
          }, 2000)
        }
      })
      return elem.bind('play', function () {
        var nextLyricId, watchForChanges
        nextLyricId = 0
        scope.visibleLyrics = []
        watchForChanges = function () {
          var currentTime, nextLyric
          if (scope.lyrics != null) {
            currentTime = video.currentTime
            nextLyric = scope.lyrics[nextLyricId]
            if (currentTime > nextLyric.time) {
              scope.currentLyric = nextLyric
              scope.currentLyric.visible = true
              scope.$apply()
              nextLyricId++
            }
            if (scope.lyrics.length > nextLyricId) {
              return window.requestAnimationFrame(watchForChanges)
            } else {
              return setTimeout(function () {
                scope.$parent.ended = true
                return scope.$parent.$apply()
              }, 12000)
            }
          }
        }
        return window.requestAnimationFrame(watchForChanges)
      })
    }
  })

  angular.module('tweetflight').controller('LyricController', [
    '$scope',
    function ($scope) {
      return ($scope.lyricClass = function () {
        return {
          visible: $scope.lyric.visible,
          'no-tweet': !$scope.lyric.tweet,
          'transition-height': true,
        }
      })
    },
  ])

  angular.module('tweetflight').directive('lyric', function () {
    return function (scope, element, attrs) {
      setTimeout(function () {
        return element.height(0)
      }, 0)
      return scope.$watch('lyric.visible', function (isVisible) {
        var lyricHeight
        if (isVisible) {
          var makeLyricHeight = function () {
            lyricHeight = element.find('.innerLyric').height()
            element.height(lyricHeight)
          }
          makeLyricHeight()
          angular.element(window).bind('resize', debounce(makeLyricHeight, 500))
        }
      })
    }
  })

  angular.module('tweetflight').filter('timeAgoInWords', function () {
    return function (input) {
      if (input) {
        return moment(input).from(Date.now())
      }
    }
  })

  angular.module('tweetflight').filter('timeAgo', function () {
    return function (input) {
      if (input) {
        return moment(input, 'YYYY-MM-DD HH:mm:ss Z').format('MMM D h:mma')
      }
    }
  })

  angular.module('tweetflight').filter('swapSymbols', function () {
    return function (input) {
      if (input) {
        return input.replace('&amp;', '&')
      }
    }
  })
}).call(this)
