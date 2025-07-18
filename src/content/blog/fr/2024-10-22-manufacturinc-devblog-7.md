---
layout: post
title:  "Manufactur'inc DevBlog #7 - Leçons tirées de la Steam Next Fest"
tags: gamedev steam devblog manufacturinc
categories: gamedev
pubDate: '2024-10-22'
heroImage: '../../../assets/manufacturinc-hero.png'
description: "Partageons des chiffres, parlons de santé mentale et de l'avenir du jeu."
---

[Ce post a été originellement publié sur Steam](https://store.steampowered.com/news/app/2146380/view/4529024222460953609)

**Historique du Devblog**
1. [09/2023 - #1 - Qui ? Quoi ? Où ? Quand ?](https://store.steampowered.com/news/app/2146380/view/7184986051960660929)
2. [10/2023 - #2 - L'automatisation ne concerne pas seulement le gameplay](https://store.steampowered.com/news/app/2146380/view/3737483611565199154)
3. [12/2023 - #3 - La logistique](https://store.steampowered.com/news/app/2146380/view/3883856311467351828)
4. [12/2023 - #4 - Evenements et festivités](https://store.steampowered.com/news/app/2146380/view/3883856311496283654)
5. [02/2024 - #5 - Votre mission si toutefois vous l'acceptez...[](https://store.steampowered.com/news/app/2146380/view/4160833394874745089)
6. [04/2024 - #6 - L'équilibrage et la création des contenu du jeu](https://store.steampowered.com/news/app/2146380/view/4194615462179930723)
7. **10/2024 - #7 - Leçons tirées de la Steam Next Fest**  (Ici!)

Bonjour à tous !

Comme beaucoup d'entre vous le savent, Manufactur'inc a participé à la Steam Next Fest la semaine dernière, et la démo est sortie depuis deux semaines.
Je pense qu'il est temps de faire un résumé de ce qui s'est passé et de ce qui se passera dans le futur.

Ce DevBlog sera découpé en 3 parties :
- Tout d'abord, nous partagerons des **chiffres sur la Steam Next Fest**, car comme vous le savez peut-être, j'aime les stats, les graphiques et les chiffres.
- Ensuite, nous parlerons de **du fait que je me suis senti dépassé et épuisé pendant la Next Fest, et pourquoi**.
- Enfin, nous parlerons de **l'avenir du jeu**.

Pour ceux qui n'ont pas joué à la démo du jeu : J'avais et j'ai encore quelques bugs majeurs dans le jeu qui ont handicapé la croissance de la démo. Un nouveau patch est en cours de développement au moment où j'écris ces lignes. Pourquoi n'ai-je pas publié ce jeu plus tôt ?

Eh bien : emploi du temps chargé, santé mentale, beaucoup de raisons, et certaines d'entre elles seront expliquées ici :)

# Les chiffres de la Next Fest

Commençons par partager quelques chiffres sur la démo:

![](/assets/img/2024-10-22_demo_global_figures.png)

Comme vous pouvez le constater, plus de **2500 personnes** ont ajouté la démo du jeu à leur compte. Et plus de **1600 personnes** y ont joué. Le temps de jeu médian est dû à ce bug du serveur ainsi qu'à un tutoriel « trop minimaliste ».

Mais si vous regardez le temps de jeu moyen et d'autres statistiques, il y a encore des centaines de personnes qui ont apprécié le jeu et même des **dizaines qui ont joué plus de quelques heures** !

![](/assets/img/2024-10-22_demo_playtime.png)

Une autre vue sur les statistiques que j'ai, sont les joueurs simultanés et les utilisateurs actifs quotidiens !
Voici les joueurs simultanés, tirés de SteamDB (mise à jour toutes les 10 minutes), et tirés de mon serveur (mise à jour toutes les minutes) :

![](/assets/img/2024-10-22_demo_steamdb_ccu.png)
![](/assets/img/2024-10-22_demo_grafana_ccu.png)

Enfin, les utilisateurs actifs quotidiens (DAU), comparés aux listes de souhaits et aux followers.
**A titre de comparaison, une journée normale compte 2 à 5 ajouts en liste de souhaits, et j'en ai gagné 800 en 14 mois jusqu'à la Next Fest, du côté des followers, c'était 70 followers en 14 mois**.

![](/assets/img/2024-10-22_demo_daily_stats.png)

Faire plus que x2 dans les listes de souhaits est ce que j'attendais d'un jeu stable, donc je ne mentirai pas, je suis vraiment satisfait de ces chiffres.
Vous voulez un autre chiffre époustouflant ? Quelle visibilité pensez-vous que Next Fest donne ? La réponse : beaucoup

![](/assets/img/2024-10-22_demo_impressions_visits.png)

Enfin, j'ai essayé d'avoir un livestream automatisé malgré le fait qu'il n'était plus mis en avant. Et j'ai été positivement surpris qu'il soit autant regardé !
On peut estimer qu'environ **11000 personnes ont regardé le stream pendant la semaine**, et voici les statistiques des spectateurs simultanés (le trou au milieu est un crash de la machine qui diffusait le stream pendant la nuit 😅).

![](/assets/img/2024-10-22_demo_livestream.png)

# Ma santé mentale

J'en ai parlé à plusieurs reprises (sur Discord, Bluesky, et un peu dans les release notes ici), cette semaine a été *très* éprouvante emotionnellement.

**Tout d'abord**, je ne m'attendais pas à ce qu'autant de personnes testent le jeu dès les premiers jours.
**Ensuite**, car j'ai eu beaucoup de retours ... et de bugs à corriger. **Attention**, je suis extrêmement reconnaissant à tous ceux qui ont testé le jeu et qui m'ont fait des retours. Mais c'était beaucoup pour le "petit dev solo" que je suis (et ce malgré que j'avais pris des jours de congés pour couvrir l'évènement).
**Enfin**, il y avait (et a toujours) des problèmes de performance côté serveur de jeu, ce qui rends la simulation de l'usine parfois très longue pour les plus grosses usines, et c'est ce qui a capté le plus gros de mon attention sur la semaine. Au delà des solutions techniques, il faut aussi que je revois une partie du coeur du gameplay afin d'empêcher tout ça de se reproduire (j'en parlerai plus bas).   

Au final, arrivé au Jeudi, j'ai du prendre du temps pour moi et me reposer, parce que je me sentais de plus en plus mal avec la semaine qui s'écoulait. Ne vous inquietez pas: je vais mieux maintenant, et je suis de retour sur le jeu. Mais étant donné que c'est un jeu fait dans mon temps libre, je ne travaillerai dessus que pendant mes soirées et week-end, donc les mises à jour prendront un peu de temps.

Donc, **pour tous les gamedev et autres créateurs qui me lisent**, <ins>ne dépassez jamais votre limite</ins>: le burnout arrive très facilement. C'est la seconde fois dans ma (courte) vie de gamedev que je sens que si je ne lâchais pas prise, j'y tomberai.
Et ensuite, <ins>n'oubliez jamais pourquoi vous créez</ins>: j'oublie parfois que je créé ces jeux pour que les joueurs ET moi-même nous amusons. Que ce soit en jouant, ou en développant. Le "fun technique" c'est ce qui me guide, et il ne faut jamais que je l'oublie.

# Le futur du jeu

Maintenant que la partie un peu déprimante et très serieuse est passée, parlons du futur du jeu!

Il était prévu que le jeu sorte dans environ 3 mois, mais soyons réalistes: je ne suis pas sûr que je respecterai cette deadline. Et je prefere sortir un jeu plus tard si ca signifie qu'il sera plus stable et complet.

Pour être considéré comme « stable », voici la liste des choses que j'attends (certaines sont déjà en cours de réalisation dans la future mise à jour 0.3.3) :
- Améliorer les performances du serveur :
	- Rendre la simulation plus rapide sur le serveur (WIP)
	- Arrêter d'essayer de lier automatiquement les machines et le stockage et le faire automatiquement lors d'un déplacement/construction/suppression (WIP, Breaking change) 
	- Limiter le temps hors ligne qui peut être calculé lors de la connexion (WIP)
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

Une fois que tout cela sera stable, je pourrai annoncer une date de sortie et me concentrer sur les dernières fonctionnalités de l'accès anticipé :
- Décisions écologiques et éthiques
- Achat/vente automatique de ressources
- Plus de contenu (contrats, ressources, machines, ...)
- Plus de fonctionnalités communautaires pour améliorer le côté MMO
- Peut-être viser d'autres plateformes que Steam ?

Mais **ne vous inquiétez pas pour la démo**, elle sera mise à jour au fur et à mesure des étapes. Parce que j'ai **besoin de votre avis et de vos commentaires** !
Notez que la démo restera en ligne, même lorsque le jeu sortira. La différence entre les deux versions du jeu sera la taille du contenu du jeu. La démo aura moins de contrats, de ressources et de machines. Et probablement une limite de personnel basse.

# Conclusion

J'en ai fini avec ce septième DevBlog. Si vous voulez en savoir plus sur le jeu, vous pouvez lire les autres DevBlogs ainsi que.. :
- [Rejoindre le Discord de Dysnomia](https://discord.com/invite/c8aARey)
- [Suivez-moi sur Bluesky](https://bsky.app/profile/elanis.eu)
- [Suivez-moi sur Twitch](https://www.twitch.tv/elanis42) où je développe parfois le jeu en direct.

Et n'oubliez pas d'ajouter en liste de souhaits et de partager le jeu avec vos amis : c'est un excellent moyen de m'aider à réaliser ce jeu !

Merci d'avoir lu ce DevBlog, et à bientôt !
Elanis