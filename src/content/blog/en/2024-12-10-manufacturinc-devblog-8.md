---
layout: post
title:  "Manufactur'inc DevBlog #8 - November summary and Manufactur'inc future"
tags: gamedev steam devblog manufacturinc
categories: gamedev
pubDate: '2024-12-10'
heroImage: '../../../assets/manufacturinc-hero.png'
---

[This post was originally published on Steam](https://store.steampowered.com/news/app/2146380/view/519699278946371779)

**Devblog history**
1. [09/2023 - #1 - Who? What? Where? When?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. [10/2023 - #2 - Automation isn't just about gameplay](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)
3. [12/2023 - #3 - Logistics](https://store.steampowered.com/news/app/2146380/view/3883856311467351828)
4. [12/2023 - #4 - Events, events everywhere](https://store.steampowered.com/news/app/2146380/view/3883856311496283654)
5. [02/2024 - #5 - Your mission for this week, should you choose to accept it...](https://store.steampowered.com/news/app/2146380/view/4160833394874745089)
6. [04/2024 - #6 - How to balance and create content behind the scenes?](https://store.steampowered.com/news/app/2146380/view/4194615462179930723)
7. [10/2024 - #7 - Lessons learned from the Steam Next Fest](https://store.steampowered.com/news/app/2146380/view/4529024222460953609)
8. **12/2024 - #8 - November summary and Manufactur'inc future**  (Here !)

Hey there!

I usually post my monthly summaries as threads on [Bluesky](https://bsky.app/profile/elanis.eu/post/3l6paeuomba2f) or [Mastodon](https://mastodon.gamedev.place/@Elanis/113322267008349043), but today I had lots to write and to share with the Steam community, so here I am!

# November

As stated late October with [Manufactur'inc 7th DevBlog](https://store.steampowered.com/news/app/2146380/view/4529024222460953609), I felt really overwhelmed by the Steam Next fest and didn't know what to do. Eventually, I had to rest and not touch the game for a month and a half. It's not great marketing-wise to not update the game or write this DevBlog earlier, but it was healthier for me and the game's future.

After [updating Alchemistry early November](https://store.steampowered.com/news/app/1730540/view/4449088504440292200) (I wrote most of the update on November 9th but published 10 days later), I decided I would slow down and work only on the projects when I felt like working, so I spent my free time relaxing on some other things such as Factorio: Space Age DLC, yep 😁

I also spent my time on non-IT things such as this cute Lego set:
![](/assets/img/2024-12-10_lego_set.jpg)

Eventually, I feel better and am back working on all the projects at a better pace. But, I didn't write a single addition line of code on Manufactur'inc. So, what's next?

# Manufactur'inc future

As some of you already know, I was supposed to release the game on January 13th, but it won't be released on that date, I canceled my plans.
Here's what I planned for the future:
- Updating the demo until we have a good UI/UX, all the main game features but not all the content
- Preparing the Early Access content
- Publishing a release date announcement along with a definitive trailer (a temporary one will probably be published in the meantime)
- Release the game

That means the game as it exists today will continue to live and evolve, and I will release it if and only if I still feel okay working on it until it's stable enough.

*"When ?"*, will be your next question, I'm sure. To be honest: I don't know, in 3 months? 6? a year?
It will totally depend on how I feel mentally in the next few months.

Let's see what's left from Devblog #7 list:
To be considered "stable", here's the list of things I expect to do (some are already Work-In-Progress in the future 0.3.3 update):
- Improve server performances:
	- ~~Make the simulation run faster on the server (WIP)~~
	- ~~Stop trying to automatically link the machines and storage and automatically do that when moving/building/deleting (WIP, Breaking change)~~
	- ~~Limit how much offline time can be calculated at login (WIP)~~
	- Maybe rewrite the whole factory simulation system with another and faster programming language (I'd prefer to avoid this, but can if needed)
- Prevent factory size from growing exponentially by:
	- Making market prices dynamic (the more the player base buys something, the more its price increases; the more player base sells something, the more its price decreases)
	- Add energy management 
	- Add staff management 
- Make various (needed) quality-of-life improvements
- Make various server optimizations to make it lighter on the server CPU/database (and faster for the player)
- Fix both Linux and MacOS versions (the MacOS version is not sure since the bug is not in my hands but in the Webkit team's hands :/)
- Make more contracts and make them different from the existing ones
- Improve the current "tech tree" to prevent everyone from needing the same resource and selling the same one, as well as some balance
- Manual linking/resource choice for a storage slot to complete the optimization listed in the first bullet point

As you can see, 0.3.3 already fixed the "most urgent stuff" but there's still plenty of (cool) work on the game!

# Conclusion

To conclude, I want to thank every single person who tested the game, gave feedback, followed or wishlisted the Steam page, shared the game, translated the game, ... You are the people motivating me and helping me to make this game.

If you want to follow my gamedev journey you can:
- Follow/Wishlist the Steam Page to see these DevBlogs
- [Join Dysnomia's Discord](https://discord.com/invite/c8aARey)
- [Follow me on Bluesky](https://bsky.app/profile/elanis.eu)
- [Follow me on Twitch](https://www.twitch.tv/elanis42) where I sometimes do game development live (in French, but I answer English questions!)

And don't forget to wishlist and share the game with your friends: this is a great way to help me achieve this game I'm dreaming of!

Thanks for reading this DevBlog, and see you soon!
Elanis