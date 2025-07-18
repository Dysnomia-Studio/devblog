---
layout: post
title:  "Comment créer une catégorie Twitch pour votre jeu ?"
tags: blogpost gamedev twitch
categories: gamedev
pubDate: '2023-09-10'
updatedDate: '2023-12-24'
heroImage: '../../../assets/default-header.png'
description: "Vous êtes vous déjà demandé comment ajouter votre jeu en tant que catégorie Twitch ?\nCet article est ici pour vous y guider !"
---

**Vous êtes vous déjà demandé comment ajouter votre jeu en tant que catégorie Twitch ?**
Cet article est ici pour vous y guider !

Tout d'abord, vous avez besoin de savoir [comme indiqué dans la documentation Twitch](https://help.twitch.tv/s/article/adding-a-game-and-box-art-to-the-directory), vous ne pouvez pas ajouter directement votre jeu sur Twitch. Ils utilisent un service appelé [IGDB](https://www.igdb.com) créé par Amazon, dans le but de créer une base de donnée publique des jeux vidéos.

Afin de créer votre jeu sur IGDB, il vous faudra vous **connecter avec Twitch**, puis aller dans [Games > Add Game](https://www.igdb.com/games/new).

![](/assets/img/2023-09-10_AddGame_Empty.png)

Vous pouvez ensuite remplir chaque champ de text ou d'envoi de fichier et cliquer sur "Next" jusqu'a arriver à la dernière page ou vous pourrez créer sur "Create Game". Par exemple, pour mon jeu [Manufactur'inc](https://store.steampowered.com/app/2146380/Manufactur_inc/):

![](/assets/img/2023-09-10_AddGame_Filled_1.png)  
![](/assets/img/2023-09-10_AddGame_Filled_2.png)  
![](/assets/img/2023-09-10_AddGame_Filled_3.png)  

En allant dans [Profile > "Your changes"](https://www.igdb.com/karma_hunters/changes), vous pouvez voir le statut de votre contribution:

![](/assets/img/2023-09-10_YourChanges_Pending.png)

Ensuite, vous n'avez plus qu'a attendre que la communauté ou les administrateurs valident vos changements.

Quand ceux-ci sont validés, vous pourrez voir dans "Your changes" ou dans vos notifications l'approbation.

![](/assets/img/2023-09-10_YourChanges_Validated.png)  
![](/assets/img/2023-09-10_IGDB_Notif.png)  

Et vous devriez être en capacité de voir votre catégorie Twitch maintenant ! 🎉

![](/assets/img/2023-09-10_Twitch_Category.png)

L'étape suivante sera de revendiquer votre catégorie sur Twitch.

Allez dans la [Twitch Developer Console](https://dev.twitch.tv/console), créez votre organisation si elle n'existe pas, notez que vous pouvez revendiquer votre jeu directement de cette page.

![](/assets/img/2023-09-10_Twitch_Create_Org.png)

Si vous avez déjà une organisation, vous pouvez revendiquer votre jeu après avoir changé de console active. 

![](/assets/img/2023-09-10_Twitch_Add_Game.png)
![](/assets/img/2023-09-10_Twitch_Add_Game_2.png)

Ensuite, votre requête sera traitée par Twitch sous une semaine.
Quand ce sera accepté, vous serez en capacité de recupérer des statistiques à propos de votre jeu, personnaliser vos catégories, et bien plus encore !
