---
layout: post
title:  "Manufactur'inc DevBlog #6 - L'équilibrage et la création des contenu du jeu"
tags: gamedev steam devblog manufacturinc
categories: gamedev
pubDate: '2024-04-21'
heroImage: '../../../assets/manufacturinc-hero.png'
---

[Ce post a été originellement publié sur Steam](https://store.steampowered.com/news/app/2146380/view/4194615462179930723)

**Historique du Devblog**
1. [09/2023 - #1 - Qui ? Quoi ? Où ? Quand ?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. [10/2023 - #2 - L'automatisation ne concerne pas seulement le gameplay](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)
3. [12/2023 - #3 - La logistique](https://store.steampowered.com/news/app/2146380/view/3883856311467351828)
4. [12/2023 - #4 - Evenements et festivités](https://store.steampowered.com/news/app/2146380/view/3883856311496283654)
5. [02/2024 - #5 - Votre mission si toutefois vous l'acceptez...[](https://store.steampowered.com/news/app/2146380/view/4160833394874745089)
6. **04/2024 - #6 - L'équilibrage et la création des contenu du jeu**  (Ici!)

Bonjour à vous, futurs entrepreneurs !

Comme je l'ai expliqué à plusieurs reprises [Discord](https://discord.com/invite/c8aARey), [Bluesky](https://bsky.app/profile/elanis.eu), et [Mastodon](https://mastodon.gamedev.place/@Elanis), je suis actuellement en train de rénover ma maison et j'ai participé à la GDC, c'est pourquoi j'ai sauté le mois de mars pour le DevBlog et j'ai ralenti le développement durant cette période.  
Mais me voici de retour avec un tout nouveau DevBlog ! Je continuerai de moins travailler que d'habitude pendant la fin du mois d'avril et le début du mois de mai, mais mon temps libre reviendra à la normale à la fin du printemps et pendant l'été !  
Travailler sur ce jeu pendant mon temps libre est une situation instable, mais heureusement, j'aime beaucoup travailler dessus ! :)  
  
Revenons maintenant au sujet de ce DevBlog : Aujourd'hui, je vais vous parler d'un outil d'administration que je développe depuis quelques mois maintenant, et qui va m'aider à construire le jeu, en particulier lors de la préparation de nouvelles mises à jour de contenu pendant la phase d'accès anticipé et par la suite !

**Pourquoi construire cet outil ?**

Vous pourriez vous demander pourquoi j'ai besoin de construire cet outil puisqu'il en existe probablement d'autres sur le marché ou que je pourrais travailler sans lui.
C'est une bonne question.

Je construis cet outil pour de multiples raisons :
1. Il s'agit d'un outil spécifique au jeu, je n'ai donc pas trouvé d'outil similaire sur internet.
2. J'aime automatiser et simplifier de nombreux processus, le but étant d'avoir une expérience fluide et facile lors de la création de contenu pour mes projets. Je voulais me débarrasser des "choses ennuyeuses" et me concentrer sur la création de plus de contenu dans un laps de temps équivalent.
3. Je souhaitais un outil qui m'aide à voir les éléments existants (objets, équipements, recettes, contrats,...) afin de ne pas créer d'éléments en double, de les garder cohérents et de les équilibrer sans trop de problèmes.

C'est donc pour cela que j'ai créé cet outil ! (WIP)

![](/assets/img/2024-04-21-manufacturinc-devblog-6-admin-equipments.png)

Comme vous pouvez le voir, ce n'est pas aussi joli que l'interface du jeu, mais ce n'est pas vraiment important puisque le seul utilisateur sera probablement moi. Je préfère me concentrer sur une bonne expérience utilisateur, comme sur cet écran :

![](/assets/img/2024-04-21-manufacturinc-devblog-6-admin-recipes.png)

Il est en développement actif avec un autre outil qui peut appliquer l'équilibrage au serveur de jeu en direct, et le jeu lui-même bien sûr.

Et pour ceux qui me suivent depuis longtemps, vous savez que ce n'est pas le seul outil que j'ai créé pour mes jeux, puisque j'ai également construit un outil de traduction pour mes jeux les plus anciens il y a quelques années.

![](/assets/img/2024-04-21-manufacturinc-devblog-6-admin-translatool.png)

C'est bien sûr un investissement en temps, mais cela me permet d'ajouter de nouvelles métadonnées d'objets/équipements en quelques minutes.  
Ce qu'il reste à faire ensuite, ce sont les graphismes ... et c'est un tout autre sujet.  

En utilisant ces outils, je pourrai me concentrer sur l'écriture de nouvelles fonctionnalités, l'amélioration de l'expérience utilisateur, et tout simplement l'amélioration du jeu lui-même.  
Si vous êtes curieux de connaître les autres outils que j'utilise pour améliorer ma productivité sur Manufactur'inc et mes jeux précédents, je vous suggère de lire [le 2nd DevBlog de Manufactur'inc a propos de l'automatisation](https://store.steampowered.com/news/app/2146380/view/3737483611565199154).  
  
Si vous avez aimé ce DevBlog, vous pouvez **lire les autres** et **les partager avec vos amis**.  
  
Et pour ne pas rater les suivants, suivez le Hub du jeu, en utilisant le bouton "Follow" sur la page Steam.  
Et si vous êtes intéressés, je serais également heureux que vous mettiez le jeu en liste de souhaits.  

![](/assets/img/steam-wishlist-button.gif)

Si vous souhaitez me suivre ailleurs et obtenir plus qu'une mise à jour mensuelle sur l'état du jeu, vous pouvez le faire :
- [Rejoindre le Discord de Dysnomia](https://discord.com/invite/c8aARey)
- [Me suivre sur Tiktok](https://www.tiktok.com/@elanis42) (j'essaierai de poster autant que possible ici, mais cela prend beaucoup de temps !)
- [Suivez-moi sur Twitch](https://www.twitch.tv/elanis42) où je fais parfois du développement de jeux en direct.
- [Suivez-moi sur mastodon](https://mastodon.gamedev.place/@Elanis)
- [Suivez-moi sur Bluesky](https://bsky.app/profile/elanis.eu)

Merci d'avoir lu ce DevBlog, et à bientôt !
Elanis