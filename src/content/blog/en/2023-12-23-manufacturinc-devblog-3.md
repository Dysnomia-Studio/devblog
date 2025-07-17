---
layout: post
title:  "Manufactur'inc DevBlog #3 - Logistics"
tags: gamedev steam devblog manufacturinc
categories: gamedev
---

[This post was originally published on Steam](https://store.steampowered.com/news/app/2146380/view/3883856311467351828)

**Devblog history**
1. [09/2023 - #1 - Who? What? Where? When?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. [10/2023 - #2 - Automation isn't just about gameplay](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)
3. **12/2023 - #3 - Logistics**  (Here !)

Greetings, fellow entrepreneurs!  
  
Welcome to this third DevBlog of **Manufactur'inc**! As you probably noticed, it's already been two months since the previous one. But don't worry, there will be two in December (next one in a week!).  
  
The subject of this third DevBlog is a cornerstone of the gameplay: resources management.  

# History and proof or concept

## The old system

Until November, there was a proof of concept of the gameplay allowing me to work, try features, and play. Here's how it worked: it has a global resource storage - like you can find in most management/strategy games - meaning if you had a saw, it would take wood logs from global storage and produce planks to this global storage pool, without any transportation delay.

## The rework

This was a good and easy proof of concept but ... not the best idea in terms of gameplay and fun. So, I decided to completely rework this part of the game during my holidays week in early November.  
It took *a bit* more than expected, because I didn't have a first working version before the end of November, and still have some nonworking edge cases at the moment I write these lines.

## Why does it take so long?

It takes a long time to develop because Manufactur'inc is and will be a multiplayer and real-time game. This means when you log in to the game, it will have to recalculate what has been happening for your industry since last session. Whether it be an hour ... or a full year. So I have to introduce some shortcuts to be able to simulate these big durations as "repeating this pattern X times". Basically: it's a complex workload!

# But, what is this new system?

This new system has two major differences from the previous one:  

*  I am introducing "local" storage: each tool and each "warehouse" has its internal storage. It means we will check this storage to know if we can produce a resource (if the output slot is full or if you don't have the input material, you can't produce!).
*  There will also be some resource transit between equipments. When your saw needs to produce planks, it will first need to bring some wood logs from the relevant storage, wait for them to come, produce, and then extract planks from output storage to the destination.


# Tests

I won't go into technical details, but as presented in the [second devblog](https://store.steampowered.com/news/app/2146380/view/3737483611565199154), I write automated tests for most of the game systems. This one is not different; I've been writing **tons** of tests for this system, including some targeted tests as well as some complete factory simulations (especially the one you will have by the end of the first tutorial!).

![](/assets/img/2023-12-23-manufacturinc-devblog-3-tests.png)

# Okay, that's cool, but do you have visuals ?!

Yes! While most of the work is behind the scenes, I have some visuals to share, especially this GIF of the first version of game client animation representing the simulation:

![](/assets/img/2023-12-23-manufacturinc-devblog-3-final-transfer.gif)

And if you're curious how it evolved during time:


1. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-1.gif)
2. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-2.gif)
3. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-3.gif)
4. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-4.gif)
5. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-5.gif)

# Conclusion

Here we are for this Devblog! Did you like this little behind-the-scenes?  
  
If you have questions about the game, you can add a comment under this post and I'd love to talk about it, or maybe even write a future DevBlog on this subject!
You can also [join Dysnomia's discord](https://discord.com/invite/c8aARey) so we can talk about this!  
  
If you are interested to follow me elsewhere and get more than a monthly update about the game state, you can:
- [Join Dysnomia's Discord](https://discord.com/invite/c8aARey)
- [Follow me on Tiktok](https://www.tiktok.com/@elanis42) (I will try to post as much as I can here, but it takes a lot of time !)
- [Follow me on Twitch](https://www.twitch.tv/elanis42) where I sometimes do game development live
- [Follow me on mastodon](https://mastodon.gamedev.place/@Elanis)
- [Follow me on Bluesky](https://bsky.app/profile/elanis.eu)

Thanks for reading this DevBlog, and have a nice weekend!
Elanis