---
layout: post
title:  "Comment installer la démo Steam d'un jeu ainsi que le jeu sur un même compte Steam ?"
tags: blogpost gamedev steam
categories: gamedev
pubDate: '2022-04-09'
updatedDate: '2023-12-24'
heroImage: '../../../assets/default-header.png'
---

#### Recuperez l'appId de votre démo

Vous pouvez récuperer cet id via steamworks, ou via [Steamdb](https://steamdb.info) en utilisant la barre de recherche, dans les resultats vous obtenez:

![](/assets/img/2022-04-09_steamdb-demo-appid.webp)

#### Ouvrez la console steam

Afin d'ouvrir la console steam, tapez [steam://open/console](steam://open/console) dans votre barre d'adresse de votre navigateur

#### Installer la démo de jeu via une ligne de commande

Tapez `app_install DEMO_ID` en remplacant *DEMO_ID* par votre app id, par exemple `app_install 1766570`.

#### Amusez vous !

Vous devriez maintenant avoir le jeu et la démo dans votre bibliothque steam (et la demo sera mis à jour automatiquement comme un jeu standard).

![](/assets/img/2022-04-09_steam_demo+game.webp)