---
layout: post
title: "March 2023 - Monthly Summary"
tags: monthly-summary
categories: monthly-summary
pubDate: '2023-04-02'
heroImage: '../../../assets/default-header.png'
ogMastodonUrl: https://mastodon.gamedev.place/deck/@Elanis/110129139522011534
ogTwitterUrl: "deleted"
---
It's monthly #summary time ! March was a light month, but still, here's what I did:

Not a lot of things done this month for users, but mostly to make my days easier.
A fun technical result was this automatic canvas test for my next (unannounced) game.

#gamedev #indieDev

![](/assets/img/202303-summaries/001/Coverage.png)

<hr />

As explained last month, I organized #NotAGameJam, on the french programming Discord server "Not a Name"

We had 7 submissions, we gave multiple rewards including my own games (Alchemistry, Extortion) and a few known games as well

There will probably be a 3rd edition next year !

![](/assets/img/202303-summaries/002/nag.png)

<hr />

Speaking about Not a Name, we updated our gamedev resources page last month, adding new items the community listed in the last year: https://hub.notaname.fr/game-dev/ressources

<hr />

You might notice now, I love stats !
I did add a new module to my personal assistant to be able to query Discord servers stats and show this on Grafana: https://github.com/L-U-M-E-N/lumen-module-notabot-stats/

![](/assets/img/202303-summaries/004/nab_stats.png)

<hr />

I recently noticed I had a biiig table on achieve.games database, an audit system about StarCraft 2 achievements was bugged and storing a copy of each achievement each hour for 2 years instead of only storing changes

39M rows instead of less than 10k, 13 GB instead of few MB

<hr />

There was still some work to improve alerting and monitoring on my new infrastructure as well as updating softwares (prometheus, sonarqube).
And I'm now pretty used to updating using Dependabot (it also updates my kubernetes yaml!)

I closed 96/109 PR from dependabot this month

![](/assets/img/202303-summaries/006/prom_pr.png)

<hr />

And this is it for March !

Do you want to follow my day-to-day projects or other months' summaries ?
You can follow this account, or join my discord server here: https://discord.gg/c8aARey

And here's february summary: https://blog.dysnomia.studio/blog/en/2023-02-summaries/