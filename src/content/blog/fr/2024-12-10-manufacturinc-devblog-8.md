---
layout: post
title:  "Manufactur'inc DevBlog #8 - Résumé mensuel de novembre et le futur de Manufactur'inc"
tags: blogpost gamedev steam devblog manufacturinc
categories: gamedev
pubDate: '2024-12-10'
heroImage: '../../../assets/manufacturinc-hero.png'
description: "Parlons de ce à quoi ressemblait mon mois de novembre ainsi que des prochaines étapes pour Manufactur'inc"
---

[Ce post a été originellement publié sur Steam](https://store.steampowered.com/news/app/2146380/view/4529024222460953609)

**Historique du Devblog**
1. [09/2023 - #1 - Qui ? Quoi ? Où ? Quand ?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. [10/2023 - #2 - L'automatisation ne concerne pas seulement le gameplay](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)
3. [12/2023 - #3 - La logistique](https://store.steampowered.com/news/app/2146380/view/3883856311467351828)
4. [12/2023 - #4 - Evenements et festivités](https://store.steampowered.com/news/app/2146380/view/3883856311496283654)
5. [02/2024 - #5 - Votre mission si toutefois vous l'acceptez...](https://store.steampowered.com/news/app/2146380/view/4160833394874745089)
6. [04/2024 - #6 - L'équilibrage et la création des contenu du jeu](https://store.steampowered.com/news/app/2146380/view/4194615462179930723)
7. [10/2024 - #7 - Leçons tirées de la Steam Next Fest](https://store.steampowered.com/news/app/2146380/view/4529024222460953609)
8. **12/2024 - #8 - Résumé mensuel de novembre et le futur de Manufactur'inc**  (Ici!)

Bonjour à toutes et à tous !

J'ai l'habitude de poster mes résumés mensuels dans des threads sur [Bluesky](https://bsky.app/profile/elanis.eu/post/3l6paeuomba2f) ou [Mastodon](https://mastodon.gamedev.place/@Elanis/113322267008349043), mais aujourd'hui j'avais beaucoup de choses à écrire et à partager avec la communauté sur Steam, alors me voici !

# Novembre

Comme indiqué fin octobre dans le [7e devblog de Manufactur'Inc](https://store.steampowered.com/news/app/2146380/view/4529024222460953609), je me suis senti vraiment dépassé par la Steam Next fest et je ne savais pas quoi faire ensuite. Finalement, j'ai dû me reposer et ne pas toucher au jeu pendant un mois et demi. Ce n'était pas super d'un point de vue marketing de ne pas mettre à jour le jeu ou de ne pas écrire ce DevBlog plus tôt, mais c'était plus sain pour moi et pour l'avenir du jeu.

Après [avoir mis à jour Alchemistry début novembre](https://store.steampowered.com/news/app/1730540/view/4449088504440292200) (j'ai écrit la majeure partie de la mise à jour le 9 novembre mais je l'ai publiée 10 jours plus tard), j'ai décidé de ralentir et de ne travailler que sur les projets pour lesquels j'avais envie de travailler, j'ai donc passé mon temps libre à me détendre sur d'autres choses ... comme le DLC de Factorio : Space Age, oui 😁

J'ai aussi passé mon temps sur des choses non-liées à l'informatique comme cette magnifique construction Lego :
![](/assets/img/2024-12-10_lego_set.jpg)

Finalement, je me sens mieux et je travaille à nouveau sur tous les projets à un meilleur rythme. Mais je n'ai pas écrit une seule ligne de code supplémentaire sur Manufactur'inc. Alors, quelle est la suite ?

# L'avenir de Manufactur'inc

Comme certains d'entre vous le savent déjà, je devais sortir le jeu le 13 janvier, mais il ne sortira pas à cette date, j'ai revu mes plans.
Voici ce que j'ai prévu pour l'avenir :
- Mise à jour de la démo jusqu'à ce que nous ayons une bonne interface utilisateur, toutes les fonctionnalités principales du jeu mais pas tout le contenu.
- Préparer le contenu de l'early access
- Publication d'une date de sortie et d'un trailer définitif (une trailer temporaire sera probablement publié entre-temps)
- Sortie du jeu

Cela signifie que le jeu tel qu'il existe aujourd'hui continuera à vivre et à évoluer, et que je le sortirai si et seulement si je me sens encore capable de travailler dessus jusqu'à ce qu'il soit suffisamment stable.

*« Quand ? »*, sera votre prochaine question, j'en suis sûr. Pour être honnête : je ne sais pas, dans 3 mois ? 6 ? un an ?
Cela dépendra totalement de la façon dont je me sentirai mentalement dans les prochains mois.

Voyons ce qu'il reste de la liste du Devblog #7 :
Pour être considéré comme « stable », voici la liste des choses que j'espère faire (certaines sont déjà en cours de réalisation dans la future mise à jour 0.3.3) :
- Améliorer les performances du serveur :
	- ~~Rendre la simulation plus rapide sur le serveur (WIP)~~
	- ~~Arrêter d'essayer de lier automatiquement les machines et le stockage et le faire automatiquement lors d'un déplacement/construction/suppression (WIP, Breaking change)~~ 
	- ~~Limiter le temps hors ligne qui peut être calculé lors de la connexion (WIP)~~
	- Peut-être réécrire tout le système de simulation de l'usine avec un autre langage de programmation plus rapide (je préfère éviter cela, mais je peux le faire si nécessaire)
- Empêcher la taille de l'usine de croître de manière exponentielle en.. :
	- Rendant les prix du marché dynamiques (plus les joueurs achètent quelque chose, plus son prix augmente ; plus les joueurs vendent quelque chose, plus son prix diminue)
	- Ajoutant une gestion de l'énergie 
	- Ajoutant une gestion du personnel 
- Améliorations variées de "Quality of Life"
- Optimisation du serveur pour alléger la charge sur le processeur et la base de données du serveur (ce qui accélérera les temps de reponses pour le joueur)
- Corriger les versions Linux et MacOS (la version MacOS n'est pas sûre car le bug n'est pas entre mes mains mais entre celles de l'équipe de Webkit :/)
- Créer plus de contrats et les rendre différents de ceux qui existent déjà.
- Améliorer l'arbre technologique actuel pour éviter que tout le monde ait besoin de la même ressource et vende la même, ainsi qu'un peu d'équilibrages.
- Lien manuel et choix de ressources manuels pour un emplacement de stockage pour compléter l'optimisation listée dans le premier point.

Comme vous pouvez le voir, la 0.3.3 a déjà corrigé les « choses les plus urgentes » mais il y a encore beaucoup de travail (cool) sur le jeu !

# Conclusion

Pour conclure, je tiens à remercier toutes les personnes qui ont testé le jeu, qui ont donné leur avis, qui ont suivi la page Steam, qui ont partagé le jeu, qui ont traduit le jeu, ... Vous êtes les personnes qui me motivent et m'aident à réaliser ce jeu.

Si vous voulez suivre mon parcours de gamedev, vous pouvez :
- Suivre/Wishlist la page Steam pour voir ces DevBlogs
- [Rejoindre le Discord de Dysnomia](https://discord.com/invite/c8aARey)
- [Suivez-moi sur Bluesky](https://bsky.app/profile/elanis.eu)
- [Suivez-moi sur Twitch](https://www.twitch.tv/elanis42) où je développe parfois le jeu en direct.

Et n'oubliez pas d'ajouter en liste de souhaits et de partager le jeu avec vos amis : c'est un excellent moyen de m'aider à réaliser ce jeu !

Merci d'avoir lu ce DevBlog, et à bientôt !
Elanis