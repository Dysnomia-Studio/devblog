---
layout: post
title:  "Manufactur'inc DevBlog #3 - La logistique"
tags: gamedev steam devblog manufacturinc
categories: gamedev
pubDate: '2023-12-23'
heroImage: '../../../assets/manufacturinc-hero.png'
---

[Ce post a été originellement publié sur Steam](https://store.steampowered.com/news/app/2146380/view/3883856311467351828)

**Historique du DevBlog**
1. [09/2023 - #1 - Qui ? Quoi ? Où ? Quand ?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. [10/2023 - #2 - L'automatisation ne concerne pas seulement le gameplay](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)
3. **12/2023 - #3 - La logistique** (Ici !)

Bonjour à tous, entrepreneurs en herbe !  
  
Bienvenue dans ce troisième DevBlog de **Manufactur'inc** ! Comme vous l'avez sans doute remarqué, deux mois se sont déjà écoulés depuis le précédent. Mais ne vous inquiétez pas, il y en aura deux en décembre (le prochain dans une semaine !).  
  
Le sujet de ce troisième DevBlog est une pierre angulaire du gameplay : la gestion des ressources.

# Historique du système

## L'ancien système

Jusqu'en novembre, il y avait une première version du gameplay qui me permettait de travailler, d'essayer des fonctionnalités et de jouer. Voici comment cela fonctionnait : il y avait un stockage global des ressources - comme vous pouvez en trouver dans la plupart des jeux de gestion/stratégie - ce qui signifie que si vous aviez une scie, elle prendrait des bûches de bois dans le stockage global et produirait des planches dans ce pool de stockage global, sans aucun délai de transport.

## Quoi améliorer ?

C'était une bonne et facile manière de développer mais... pas la meilleure idée en termes de gameplay et de fun. J'ai donc décidé de retravailler complètement cette partie du jeu pendant ma semaine de vacances début novembre.  
Cela a pris *un peu plus* de temps que prévu, car je n'ai pas eu une première version fonctionnelle avant la fin du mois de novembre, et j'ai encore quelques cas de figure non fonctionnels au moment où j'écris ces lignes.

## Pourquoi est-ce si long ?

Le développement est long car Manufactur'inc est et sera un jeu multijoueur et en temps réel. Cela signifie que lorsque vous vous connectez au jeu, il devra recalculer ce qui s'est passé pour votre industrie depuis la dernière session. Qu'il s'agisse d'une heure... ou d'une année entière. Je dois donc introduire quelques "raccourcis de calcul" pour pouvoir simuler ces grandes durées par exemple "répéter ce modèle de production X fois". En bref : il s'agit d'une grosse charge de travail et elle est complexe !

# Mais quel est ce nouveau système ?

Ce nouveau système présente deux différences majeures par rapport au précédent :  

*  J'introduis une notion de stockage "local" : chaque outil et chaque "entrepôt" dispose de son propre stockage interne. Cela signifie que nous vérifierons ce stockage pour savoir si nous pouvons produire une ressource (si l'emplacement de sortie est plein ou si vous n'avez pas le matériau d'entrée, vous ne pouvez pas produire !)
*  Il y aura également des transits de ressources entre les équipements. Lorsque votre scie a besoin de produire des planches, elle devra d'abord apporter des rondins de bois depuis le stockage approprié, attendre qu'ils arrivent, produire, puis extraire les planches du stockage de sortie jusqu'à leur destination.


# Tests

Je n'entrerai pas dans les détails techniques, mais comme indiqué dans le [second devblog](https://store.steampowered.com/news/app/2146380/view/3737483611565199154), j'écris des tests automatisés pour la plupart des systèmes du jeu. Celui-ci n'est pas différent ; j'ai écrit **des tonnes** de tests pour ce système, y compris des tests ciblés ainsi que des simulations d'usines complètes (en particulier celle que vous aurez à la fin du premier tutoriel !).

![](/assets/img/2023-12-23-manufacturinc-devblog-3-tests.png)

# Ok, c'est cool, mais est-ce que tu as des visuels ? !

Oui ! Bien que la majeure partie du travail se fasse en coulisses, j'ai quelques images à partager, en particulier ce GIF de la première version de l'animation du client du jeu représentant la simulation :

![](/assets/img/2023-12-23-manufacturinc-devblog-3-final-transfer.gif)

Et si vous êtes curieux de savoir comment il a évolué au fil du temps :

1. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-1.gif)
2. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-2.gif)
3. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-3.gif)
4. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-4.gif)
5. ![](/assets/img/2023-12-23-manufacturinc-devblog-3-step-5.gif)

# Conclusion

Voilà pour ce Devblog ! Vous avez aimé ce petit tour d'horizon des coulisses ?  
  
Si vous avez des questions sur le jeu, vous pouvez créer un commentaire sous cet article et je serais ravi d'en parler, ou peut-être même d'écrire un futur DevBlog sur le sujet !  
Vous pouvez également [rejoindre le discord de Dysnomia](https://discord.com/invite/c8aARey) pour que nous puissions en parler !  
  
Si vous souhaitez me suivre ailleurs et obtenir plus qu'une mise à jour mensuelle sur l'état du jeu, vous pouvez le faire :  
- [Rejoindre le Discord de Dysnomia](https://discord.com/invite/c8aARey)
- [Me suivre sur Tiktok](https://www.tiktok.com/@elanis42) (j'essaierai de poster autant que possible ici, mais cela prend beaucoup de temps !)
- [Suivez-moi sur Twitch](https://www.twitch.tv/elanis42) où je fais parfois du développement de jeux en direct.
- [Suivez-moi sur mastodon](https://mastodon.gamedev.place/@Elanis)
- [Suivez-moi sur Bluesky](https://bsky.app/profile/elanis.eu)

Merci d'avoir lu ce DevBlog, et bon week-end !
Elanis