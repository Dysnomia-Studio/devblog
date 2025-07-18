---
layout: post
title:  "How to setup official controller configration with Steam Input ?"
tags: blogpost gamedev steam
categories: gamedev
pubDate: '2022-10-29'
updatedDate: '2023-12-24'
heroImage: '../../../assets/default-header.png'
description: "A small tutorial on how to set up an official controller configuration based on your or a community-created one."
---

It's a thing that I had to do while updating [Alchemistry](https://store.steampowered.com/app/1730540/Alchemistry/) to be Steam Deck compatible, and [documentation](https://partner.steamgames.com/doc/features/steam_controller) wasn't helping me, because there are plenty of use cases.

So here we are, here's a small tutorial on how to set up an official controller configuration based on your or a community-created one.

# Create your configuration (Steam Deck or Big Picture version)

To access controller configuration, click this icon:
![](/assets/img/2022-10-29-deck-edit-config-1.webp)

Then, edit the selected layout (if it doesn't exist, choose your favorite one in the templates).
![](/assets/img/2022-10-29-deck-edit-config-2.webp)

Then, correctly map buttons to game features.
![](/assets/img/2022-10-29-deck-edit-config-buttons.webp)

At this moment, you can try your configuration locally and check that everything is fine. You can modify the configuration in-game by pressing the **Steam** button and choosing **controller settings**.

Finally, share the configuration with the community:
![](/assets/img/2022-10-29-deck-edit-config-menu.webp)
![](/assets/img/2022-10-29-deck-edit-config-share.webp)

Now, everyone can use your configuration. If you want to easily share the workshop link (which will be useful for future configuration), you can access it using the **Layout Details** option.
![](/assets/img/2022-10-29-deck-edit-config-link.webp)

# Create your configuration (Steam Desktop version)

You can follow the same steps to create a configuration using a Steam desktop, to access configuration, open overlay, and click on "Controller configuration".
![](/assets/img/2022-10-29_steam-desktop-overlay.webp)

# Set your configuration as the official configuration

Go to your **Steamworks Partner** account, then to **App Admin**, then to **Application > Steam Input**. Select your configuration type as "Custom Configuration (Hosted on Workshop)".

![](/assets/img/2022-10-29_steamworks-input-config-type.webp)

Then click on the **Add custom configuration button** and write your workshop ID into the popup.

![](/assets/img/2022-10-29_steamworks-input-config-popup.webp)

You can now choose the branches you want to apply this configuration for:

![](/assets/img/2022-10-29_steamworks-input-config-settings.webp)

And finally, you can publish changes. And here we are!

![](/assets/img/2022-10-29_result.webp)