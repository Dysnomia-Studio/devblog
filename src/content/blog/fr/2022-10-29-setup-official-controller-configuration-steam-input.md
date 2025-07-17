---
layout: post
title:  "Comment mettre en place une configration officielle de contrôleurs Steam Input ?"
tags: gamedev steam
categories: gamedev
---

C'est une problématique que j'ai recontré en mettant à jour [Alchemistry](https://store.steampowered.com/app/1730540/Alchemistry/) afin qu'il soit compatibile avec le Steam Deck et je n'ai pas trouvé [documentation](https://partner.steamgames.com/doc/features/steam_controller) très claire, notamment à cause du nombre varié de cas d'utilisations.

Donc, nous voici avec un petit tutoriel sur comment mettre en place une configuration officielle sur votre jeu en se basant sur une configuration faite par vous même, ou sur une configuration de la communauté.

# Crééz votre configuration (Steam Deck ou Big Picture)

Pour accéder aux paramètres de manettes, cliquez sur cette icone:
![](/assets/img/2022-10-29-deck-edit-config-1.webp)

Ensuite, editez la configuration selectionnée (si aucune n'existe, choisissez parmis les templates de Valve).
![](/assets/img/2022-10-29-deck-edit-config-2.webp)

Ensuite, paramétres les boutons afin d'accéder à vos fonctionnalités:
![](/assets/img/2022-10-29-deck-edit-config-buttons.webp)

Une fois fait, vous pouvez essayez votre configuration en local en lancant le jeu. Vous pouvez changer la configuration en étant en jeu en cliquant sur le bouton **Steam** puis **controller settings**.

Enfin, vous pouvez partager votre configuration avec la communauté:
![](/assets/img/2022-10-29-deck-edit-config-menu.webp)
![](/assets/img/2022-10-29-deck-edit-config-share.webp)

Maintenant que la configuration est publique, chacun peut l'utiliser, et si vous souhaitez la partager facilement, vous pouvez le faire via le lien workshop accessible via l'option "Détails".
![](/assets/img/2022-10-29-deck-edit-config-link.webp)

# Crééz votre configuration (version PC)

Les étapes sont très semblables à la version Steam Deck. Pour accéder au configurateur, ouvrez l'overlay Steam en jeu, et cliquez sur "Controller configuration".
![](/assets/img/2022-10-29_steam-desktop-overlay.webp)

# Publier la configuration officielle

Allez sur votre compte **Partenaires Steamworks**, puis dans **App Admin**, et enfin dans **Application > Steam Input**. Selectionnez votre type de configuration pour qu'il soit "Custom Configuration (Hosted on Workshop)".

![](/assets/img/2022-10-29_steamworks-input-config-type.webp)

Ensuite, cliquez sur **Add custom configuration button** et indiquez l'id workshop de votre configuration dans la popup.

![](/assets/img/2022-10-29_steamworks-input-config-popup.webp)

Vous pouvez maintenant choisir notamment les branches impactées par cette configuration:

![](/assets/img/2022-10-29_steamworks-input-config-settings.webp)

Enfin, vous pouvez publier vos modifications, et tout est okay !

![](/assets/img/2022-10-29_result.webp)