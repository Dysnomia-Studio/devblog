---
layout: post
title: "June 2025 - Monthly Summary"
tags: monthly-summary
categories: monthly-summary
pubDate: '2025-07-14'
heroImage: '../../../assets/default-header.png'
ogMastodonUrl: https://mastodon.gamedev.place/@Elanis/114850729177454220
ogBlueskyUrl: https://bsky.app/profile/elanis.eu/post/3ltvyrsrbmc2o
---

🧵 1/10 - Monthly summary #30, June 2025

30th already 😮
This month we have: a big performance update, I'm becoming an ol' gamedev, and proof I'm a NERD!

Let's start with this short but satisfying update on Manufactur'inc demo: https://store.steampowered.com/news/app/2146380/view/823709285684876048

#solodev #indiegamedev

<hr />

🧵 2/10

This demo was released in October and had huge server performance issues, mainly caused by the factory simulation algorithm trying to catch up on the player's offline time at login.
I finally did some detailed profiling and found that 90% of this was caused ... by 2 Array.find()

![](/assets/img/202506-summaries/profiling_1.png)
![](/assets/img/202506-summaries/profiling_2.png)

<hr />

🧵 3/10

Long story short, once replaced by a hashmap (and even if this hashmap is rebuilt pretty often), the performance gap is pretty impressive! (Up to 11 times improvements).
While pushing this update, I also added the new in-game minimap, developed for last month's PoC
https://bsky.app/profile/elanis.eu/post/3lqmqesy47k2e

<hr />

🧵 4/10

June was also the 9th anniversary of the first line of code of my oldest - serious - game project named Galactae (an Ogame-like web browser-based scifi management game). While the game didn't receive any serious updates in the last 5 years, I still work on the lore once in a while!

![](/assets/img/202506-summaries/rise_of_daroleans_prologue.png)

<hr />

🧵 5/10

While waiting for my students to do their projects - and ask questions - I spent some time setting up OpenTelemetry on my various web apps. I now have metrics to see near-real-time activity on my websites! 😁

![](/assets/img/202506-summaries/grafana_opentelemetry.png)

<hr />

🧵 6/10

On various other topics:
- The infra was still unstable in early June (still don't know what happened at my provider)
- It has some software updates as usual
- I'm done with teaching for 2025 and will have more time for my projects :) 

<hr />

🧵 7/10

Oh, and proofs I'm a nerd? Well, firstly, my Discord server now has a tag to show it!
https://discord.com/invite/c8aARey

![](/assets/img/202506-summaries/discord_tag.png)

<hr />

🧵 8/10

Also, I couldn't resist the urge to finish my Lego cherry blossom tree house last month :)
https://bsky.app/profile/elanis.eu/post/3lrgsqb4kr22u

<hr />

🧵 9/10

Last news for the month, I announced that one of my websites will sunset in September because it's not really used anymore (and weighs a lot on my server, 154M rows table takes some space 😅)
https://bsky.app/profile/elanis.eu/post/3lria5oiqa22r

<hr />

🧵 10/10

That's already the end of my thread. If you want to follow my developer journey, you can follow this account, join us on Discord at https://discord.gg/c8aARey, and wishlist my games on Steam (see my profile description). This means a lot to me :)

Thanks for reading!

<hr />

Last month's summary: https://blog.dysnomia.studio/blog/en/2025-05-summaries/