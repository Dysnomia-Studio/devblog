---
layout: post
title:  "Manufactur'inc DevBlog #7 - Lessons learned from the Steam Next Fest"
tags: gamedev steam devblog manufacturinc
categories: gamedev
---

[This post was originally published on Steam](https://store.steampowered.com/news/app/2146380/view/4529024222460953609)

**Devblog history**
1. [09/2023 - #1 - Who? What? Where? When?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. [10/2023 - #2 - Automation isn't just about gameplay](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)
3. [12/2023 - #3 - Logistics](https://store.steampowered.com/news/app/2146380/view/3883856311467351828)
4. [12/2023 - #4 - Events, events everywhere](https://store.steampowered.com/news/app/2146380/view/3883856311496283654)
5. [02/2024 - #5 - Your mission for this week, should you choose to accept it...](https://store.steampowered.com/news/app/2146380/view/4160833394874745089)
6. [04/2024 - #6 - How to balance and create content behind the scenes?](https://store.steampowered.com/news/app/2146380/view/4194615462179930723)
7. **10/2024 - #7 - Lessons learned from the Steam Next Fest**  (Here !)

Hi everyone!

As many of you know, Manufactur'inc participated in the Steam Next Fest last week, and the demo has been out for two weeks.
I think it's time to make a summary of what happened and what will happen in the future.

This DevBlog will be cut into 3 parts:
- First we will share **figures about the Steam Next Fest**, because as you may know, I love stats, graphs, and figures
- Then we will talk about **how overwhelmed and exhausted I felt during the next fest, and why**.
- Finally, we will talk about the **future of the game**

For those who didn't play the game demo: I had and still have some major bugs in the game which handicapped the demo growth. A new patch is in development as I write these lines. Why didn't I release this earlier? 
Well: busy schedule, mental health, lots of reasons, and some of them will be explained here :)

# Next Fest Figures

Let's share some figures about the game demo:

![](/assets/img/2024-10-22_demo_global_figures.png)

As you can see, more than **2.5k people** added the game demo to their accounts. And more than **1.6k people** played it. The median played time is caused by this server bug as well as a "too minimalistic" tutorial.

But if you look at the average time played and other stats, there are still hundreds of people who enjoyed the game and even **dozens who played more than a few hours**!

![](/assets/img/2024-10-22_demo_playtime.png)

Another view on the stats I have, are the Concurrent players and Daily Active users!
Here are the concurrent players, from SteamDB (updated every 10 minutes), and from my server (updated every minute):

![](/assets/img/2024-10-22_demo_steamdb_ccu.png)
![](/assets/img/2024-10-22_demo_grafana_ccu.png)

Finally, the Daily Active Users, compared to the daily wishlists and followers.
**For a comparison, a normal day is 2-5 wishlists, and I gained 800 in 14 months up to the Next Fest, on the follower side, it was 70 followers in 14 months**

![](/assets/img/2024-10-22_demo_daily_stats.png)

Doing more than x2 in wishlists is what I expected with a stable game, so I won't lie, I'm really happy with these figures.
Want another mind-blowing figure? How much visibility do you think Next Fest gives? The answer: tons

![](/assets/img/2024-10-22_demo_impressions_visits.png)

Last but not least, I tried having an automated livestream despite it wasn't featured anymore. And I was positively surprised it was watched that much!
We can estimate around **11k people watched the stream during the week**, and here are the concurrent viewers' stats (the gap in the middle is a crash of the machine that was streaming during the night 😅).

![](/assets/img/2024-10-22_demo_livestream.png)

# My mental health

I talked about it on multiple occasions (on Discord, on Bluesky, and in the release notes here), this week has been *really* overwhelming emotionally.
**Firstly**, I didn't expect that many people to try out the demo in the first days.
**Secondly**, because I had lots of feedback ... and bugs to fix. **Don't get me wrong**, I am really thankful to everyone who tried the game and gave feedback, but it was a lot for "my solo myself" to work on everything at the same time (despite taking days off work for this purpose).
**Lastly**, there were some performance issues on the serverside part of the game where factory simulation would become really, really long with the biggest factories, and that's basically what focused my attention for the main part of the week. This is one of the main issues I will have to spend time working on ... and will impact/change some core processes of the game (I will talk about it in the next section).

Eventually, by Thursday, I had to take some time off working on the game because I felt worse and worse. Don't worry: now, I feel better and am back working on the game, but since it's a free-time project, I will be working on this only during my evenings and weekends so the updates will take some time.

So, **for the game dev and other creators around here, I have something to tell**, <ins>never go past your limit</ins>: burnout comes easily. It's the second time in my (short) gamedev life I feel burnout is close to my door and avoid it by just accepting to let go.
And secondly, <ins>never forget why you're creating</ins>: I sometimes forget that I mainly create for players AND me to have fun. Have fun by playing, and working on the games. I love having "technical fun", this is my drive here, so let's not forget that :)

# The game future

Now that the low-key depressing/very serious part is done, let's discuss the game's future!

The game was supposed to be released in around 3 months, let's face it: I am not sure I will be able to meet this deadline. And I'd prefer changing the release date if this means I have a more stable and mature game to release.

To be considered "stable", here's the list of things I expect to do (some are already Work-In-Progress in the future 0.3.3 update):
- Improve server performances:
	- Make the simulation run faster on the server (WIP)
	- Stop trying to automatically link the machines and storage and automatically do that when moving/building/deleting (WIP, Breaking change) 
	- Limit how much offline time can be calculated at login (WIP)
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

Once all of this is stable, I can announce a release date, and focus on the last Early access features:
- Ecological and ethical decisions
- Automatic buy/sell resources
- More content (contracts, resources, machines, ...)
- More community-wide features to enhance the MMO side
- Maybe target more platforms than Steam?

But **don't worry about the demo**, it will be updated along these milestones. Because I **need your input and feedback**!
Note that the demo will stay up, even when the game is released. The difference between both game versions will be the game content size. The demo will have fewer contracts, resources, and machines. And probably a low staff size limit.

# Conclusion

I am done with this seventh DevBlog. If you want to read more about the game, you can read the other DevBlog as well as:
- [Join Dysnomia's Discord](https://discord.com/invite/c8aARey)
- [Follow me on Bluesky](https://bsky.app/profile/elanis.eu)
- [Follow me on Twitch](https://www.twitch.tv/elanis42) where I sometimes do game development live (in French, but I answer English questions!)

And don't forget to wishlist and share the game with your friends: this is a great way to help me achieve this game I'm dreaming of!

Thanks for reading this DevBlog, and see you soon!
Elanis