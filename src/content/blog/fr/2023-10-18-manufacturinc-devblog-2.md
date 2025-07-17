---
layout: post
title:  "Manufactur'inc DevBlog #2 - L'automatisation ne concerne pas seulement le gameplay"
tags: gamedev steam devblog manufacturinc
categories: gamedev
pubDate: '2023-10-18'
heroImage: '../../../assets/manufacturinc-hero.png'
---

[Ce post a été originellement publié sur Steam](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)

**Historique du DevBlog**
1.  [09/2023 - #1 - Qui ? Quoi ? Où ? Quand ?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2.  **10/2023 - #2 - L'automatisation ne concerne pas seulement le gameplay** (Ici !)
[/olist]

Bonjour !

Bienvenue sur ce deuxième devblog de **Manufactur'inc** !
Si vous n'avez pas lu le premier et que vous voulez en savoir plus sur le jeu, vous pouvez [le lire ici](https://store.steampowered.com/news/app/2146380/view/7184986051960660929) !

Aujourd'hui, nous allons parler d'*automatisation*, mais pas celle que vous pourrez mettre en place dans le jeu, nous allons parler de la façon dont j'automatise mes propres process/outils pour me faciliter la vie afin de **sortir des mises à jour plus rapidement** et **tester automatiquement des parties entières du jeu**.

Comme je l'ai dit dans le premier devblog, je suis ici pour vulgariser les choses. J'espère partager des morceaux de ma vie de développeur avec tout le monde ici sans entrer dans les détails techniques :)

# Mises à jour automatiques

Une chose qui m'a fait perdre *beaucoup* de temps sur mon premier jeu, c'est la publication des mises à jour. Vous n'imaginez pas à quel point c'est pénible de construire manuellement un jeu pour 3 systèmes d'exploitation (Windows, MacOS, Linux) et deux architectures chacun (32bits/64bits, sauf pour MacOS qui n'a que cette dernière).

Donc, quelque chose que j'ai mis en place il y a 3 ans avec [Exortion](https://store.steampowered.com/app/1299430/Extortion/) était de créer automatiquement les 5 builds sur un serveur à chaque fois que j'allais "sauvegarder mon code" sur celui-ci.

Cela a réduit le temps que je consacrais à la sortie d'une mise à jour de plus d'une heure à ~15 minutes : télécharger 5 fichiers .zip depuis mon serveur, les envoyer sur Steam et itch, déclencher la mise à jour de Steam, et c'est parti !

Vous avez envie de dire "C'est cool" ?
Oui, mais certaines améliorations étaient encore possibles !

Un an plus tard, j'utilisais [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD) pour pousser automatiquement vers les serveurs Steam et [Butler](https://itch.io/docs/butler/) pour pousser automatiquement vers itch.io.

Qu'est-ce qu'il me reste à faire maintenant ? Appuyer sur le bouton "release", et écrire une belle annonce de mise à jour !

Voici donc ce que cela donne pour la démo de [Exortion](https://store.steampowered.com/app/1299430/Extortion/) par exemple, plutôt cool non ? 😁

![](/assets/img/2023-10-18-manufacturinc-devblog-2_CI.png)

Bien sûr, Manufactur'inc dispose déjà de cette automatisation, dès le premier jour de développement (et c'est vraiment cool de l'avoir !) :

![](/assets/img/2023-10-18-manufacturinc-devblog-2_CI_2.png)

# Tests automatisés

Un autre sujet important qui a pris beaucoup de temps dans les actions répétitives était les tests. Pouvoir re-tester toutes les fonctionnalités d'un jeu avant une mise à jour est quelque chose de presque impossible à faire manuellement (et on ne parle même pas du temps passé !).

L'automatisation des tests est quelque chose de courant dans mon domaine d'origine (le développement web) et j'ai voulu l'appliquer à mes jeux également, cela permet d'éviter beaucoup de bugs (pas tous, malheureusement !) et de tester des dizaines de fois plus vite qu'un humain, tout en étant plus fiable !

Alors, comment et qu'est-ce que je teste ? Je fais deux types de tests :
- Des tests spécifiques à une fonctionnalité (appelés tests unitaires)
- Tests "globaux" (appelés "end-to-end")

### Tests unitaires

Un bon exemple de **test unitaire** est cette partie de l'interface utilisateur :  
![](/assets/img/2023-10-18-manufacturinc-devblog-2_UI_Unit_Test.png)

Je dois vérifier que le numéro s'affiche correctement, par exemple

"123" s'affiche comme "123"
"1230" s'affiche comme "1.23K"
"1200001" est affiché comme "1.2M"
et ainsi de suite

Ainsi, j'ai donc écrit de nombreuses règles à ce sujet, et à chaque fois que je lance des tests, ils vérifient que c'est correct ! Ainsi, si jamais je modifie le système parce que j'ai besoin d'avoir "P" après "K" (=1 000), "M" (=1 000 000), "G" (=1 000 000 000), "T" (=1 000 000 000), je peux être sûr que je n'ai pas accidentellement cassé quoi que ce soit !

### Les tests End-to-end

Pour ce qui est des tests **end-to-end**, je vais tester un scénario du début à la fin, par ex :
- Se connecter au jeu
- Placer un bâtiment
- Vérifier que la ressource X est générée
- Aller dans l'onglet des contrats
- Vérifier que nous avons réussi à contacter Y (parce qu'il nous a demandé de construire ce bâtiment)
- et ainsi de suite

Si vous voulez voir à quoi cela ressemble pour [Alchemistry](https://store.steampowered.com/app/1730540/Alchemistry/) vous pouvez regarder une vidéo [ici](https://cloud.dysnomia.studio/f/52ec625f17684a2284b6/) (Désolé, je ne peux pas l'intégrer sur Steam !).
Ou un autre exemple sympa pour Extortion :
![](/assets/img/2023-10-18-manufacturinc-devblog-2_Extortion_Test.gif)

Les outils de test et d'administration ont été mes priorités depuis l'annonce du jeu (c'est pourquoi j'en parle ici). Ces outils me permettront de travailler plus facilement et plus rapidement à l'avenir (et j'en aurai besoin, puisque je serai seul sur ce projet !), ils sont donc une priorité.

# Conclusion

J'espère que vous avez aimé ce petit tour d'horizon des coulisses du développement de mes jeux !
Si vous pensez que des choses pourraient être améliorées, vous pouvez ajouter un commentaire sous cet article et je serais ravi d'en parler ! Vous pouvez également [rejoindre le discord de Dysnomia](https://discord.com/invite/c8aARey) pour que nous puissions en parler !

Si vous souhaitez me suivre ailleurs et obtenir plus qu'une mise à jour mensuelle sur l'état du jeu, vous pouvez:
- [Rejoindre le Discord de Dysnomia](https://discord.com/invite/c8aARey)
- [Me suivre sur Tiktok](https://www.tiktok.com/@elanis42) (j'essaierai de poster autant que possible ici, mais ca prend beaucoup de temps !)
- [Suivez-moi sur Twitch](https://www.twitch.tv/elanis42) où je fais parfois du développement de jeux en live.
- [Suivez-moi sur mastodon](https://mastodon.gamedev.place/@Elanis)
- [Suivez mon nouveau compte Bluesky !](https://bsky.app/profile/elanis.eu)

Merci d'avoir lu ce second devblog, et bon week-end !
Elanis