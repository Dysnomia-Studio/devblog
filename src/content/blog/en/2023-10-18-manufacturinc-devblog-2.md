---
layout: post
title:  "Manufactur'inc DevBlog #2 - Automation isn't just about gameplay"
tags: blogpost gamedev steam devblog manufacturinc
categories: gamedev
pubDate: '2023-10-18'
heroImage: '../../../assets/manufacturinc-hero.png'
description: "Let's talk about automation, but behind the scenes."
ogSteamUrl: "https://store.steampowered.com/news/app/2146380/view/3737483611565199154"
---

**Devblog history**
1.  [09/2023 - #1 - Who? What? Where? When?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. 10/2023 - #2 - Automation isn't just about gameplay**  (Here !)

Hello!

Welcome to this second DevBlog of **Manufactur'inc**!
If you didn't read the first one and want to know about the game, you can [read it here](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)!

Today, we're going to talk about *automation*, but not the one you will be able to set in the game, we will talk about how I automate my own stuff to make my life easier to **release update faster** and **automatically test whole parts of the game**.

As I presented in the first DevBlog, I'm here to vulgarize things. I hope to share pieces of my developer life with everyone here without going into technical details :)

# Auto-updates

Something that made me lose *a lot* of time on my first game was releasing updates. You can't imagine how it's a pain to manually build a game build for 3 Operating systems (Windows, MacOS, Linux) and two architectures each (32bits/64bits, except for MacOS which only has the latter).

So, something I set up 3 years ago with [Exortion](https://store.steampowered.com/app/1299430/Extortion/) was to automatically create all 5 builds on a server every time I was going to "save my code" on the server.

It reduced the time I dedicated to releasing an update from 1+ hour to ~15 minutes: download 5 .zip files from my server, upload to Steam and itch, trigger Steam update, and here we go!

"That's cool" you would like to say?
Yes, but some improvements were still possible!

One year later, I was using [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD) to automatically push to Steam servers and [Butler](https://itch.io/docs/butler/) to push to itch.io automatically.

What do I still have to do now? Press the release button, and write a nice update announcement!

So here's what it looks like now for [Exortion's](https://store.steampowered.com/app/1299430/Extortion/) demo for example, pretty cool no ? 😁

![](/assets/img/2023-10-18-manufacturinc-devblog-2_CI.png)

Of course, Manufactur'inc already has this, from day one of development (and that's really cool to have !):

![](/assets/img/2023-10-18-manufacturinc-devblog-2_CI_2.png)

# Automated testing

Another important topic that took up a lot of time in repetitive actions was testing. Being able to re-test every feature of a game before updating is something almost impossible when done manually (and we're not even talking about the time spent !).

Automated testing is something common in my original development field (web development) and I wanted to bring this to my games as well, it easily prevents tons of bugs (not all, unfortunately !) and can test dozens of times faster than a human does, while being less error-prone!

So, how and what do I test? I do two kinds of tests:
- Feature specific tests (called unit tests)
- "Global" test (called end-to-end)

### Unit tests

A good example of **unit test** is about this part of UI:  
![](/assets/img/2023-10-18-manufacturinc-devblog-2_UI_Unit_Test.png)

I have to test that the number is displayed correctly, e.g.

"123" is displayed as "123"
"1230" as "1.23K"
"1200001" as "1.2M"
and so on

So, I write lots of rules about this, and every time I run tests, it will check that this is okay! So, if ever I modify the system because I need to have "P" after "K" (=1 000), "M" (=1 000 000), "G" (=1 000 000 000), "T" (=1 000 000 000 000), I can be sure I didn't accidentally break anything!

### End-to-end tests

As for **end-to-end** tests, I will test a scenario from start to end, e.g:
- Login to the game
- Place a building
- Check that resource X is generating
- Go to the contracts tab
- Check that we succeed contact Y (because it asked to construct this building)
- and so on

If you want to see what it looks like for [Alchemistry](https://store.steampowered.com/app/1730540/Alchemistry/) you can watch a video [here](https://cloud.dysnomia.studio/f/52ec625f17684a2284b6/) (Sorry, I can't embed it on Steam !).
Or another cool example of Extortion:
![](/assets/img/2023-10-18-manufacturinc-devblog-2_Extortion_Test.gif)

End-to-end testing and administration tools have been both my main focus since the game announcement (hence why I'm talking about this here). Those tools will both make me work easier and faster in the future (and I will need this since I will be solo on this project !).

# Conclusion

I hope you liked this little behind-the-scene of game development!
If you think things could be improved, you can add a comment under this post and I'd love to talk about it! You can also [join Dysnomia's discord](https://discord.com/invite/c8aARey) so we can talk about this!

If you are interested to follow me elsewhere and get more than a monthly update about the game state, you can:
- [Join Dysnomia's Discord](https://discord.com/invite/c8aARey)
- [Follow me on Tiktok](https://www.tiktok.com/@elanis42) (I will try to post as much as I can here, but it takes a lot of time !)
- [Follow me on Twitch](https://www.twitch.tv/elanis42) where I sometimes do game development live
- [Follow me on mastodon](https://mastodon.gamedev.place/@Elanis)
- [Follow my new and shiny Bluesky account!](https://bsky.app/profile/elanis.eu)

Thanks for reading this second DevBlog, and have a nice weekend!
Elanis