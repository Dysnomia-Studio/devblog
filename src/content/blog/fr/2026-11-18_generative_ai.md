---
layout: post
title: "L'IA générative."
tags: blogpost gamedev web devblog
categories: misc
pubDate: '2026-11-18'
heroImage: '../../../assets/bubbles-hero.jpg'
---

*Bon.* J'ai écrit plusieurs versions de cet article, j'ai hésité pendant un an avant de me lancer. Mais parlons de l'IA générative, de ma (non-)utilisation de celle-ci, et des raisons qui motivent ce choix.

**TLDR si vous ne voulez pas tout lire :** La plupart des gens me classeraient dans la catégorie des *anti-IA générative*, même si ça manque de nuance. Aucun de mes projets (jeux, sites web, lib open source, etc.) ne contient de contenu généré par l'IA. J'ai testé l'outil à plusieurs reprises et j'ai décidé de ne pas m'en servir dans la vie de tous les jours.  
En toute transparence : il y a eu une seule expérience de traduction avec l'IA générative (sur la page Steam de Manufactur'inc) qui a été supprimée lorsque je m'en suis souvenu en rédigeant cet article.

**Avant toutes choses**, si vous comptez :
- Me dire de tester *ce* modèle parce qu'il prouvera que j'ai tort et que, en réalité, l'IA est géniale
- Me dire que je ne suis pas assez pur pour être votre genre d'"anti-GenAI"

Abstenez-vous, j'ai déjà eu plus que ma part de débats en ligne sur le sujet 😅

Bon, maintenant, on peut parler en détail de *montre d'un geste vague* tout ça.  

Pour vous donner un peu de contexte, je suis passionné par le développement et tout ce qui touche à la tech depuis plus d'une décennie ; c'est mon hobby qui est devenu mon métier (et mon activité préférée). De plus, et c'est important ici, j'adore automatiser les choses. Et pour finir, la qualité et la maintenabilité des logiciels sont devenues deux aspects très importants pour moi ces dernières années.

Cette introduction étant faite, quels sont mes problèmes avec l'IA générative ?

## Le Droit, la Morale et l'Ecologie

Ce sont les trois grands thèmes qui constituent les problèmes habituels liés à cette technologie. Je pense qu'ils pourraient être résolus, au prix de modèles plus coûteux et d'une qualité de sortie moindre, mais ça ne sera pas possible sans une réglementation stricte.

- **Le Droit :** Eh bien, les modèles sont entraînés à partir de contenus volés. Les droits d'auteur n'ont pas été respectés. Si c'est justifiable pour de la recherche, ça ne l'est pas du tout dans les applications commerciales.
- **La Morale :** Par où commencer ? L'esclavage pour trier les données, la destruction de livres très anciens, l'utilisation à des fins militaires, l'imposition d'"agendas" ou d'opinions dans les modèles… Je pourrais continuer pendant des heures.
- **L'Ecologie :** C'est en fait probablement le problème le plus facile à résoudre : il faut cesser de construire des datacenters pour pas cher, qui utilisent des sources d'énergie polluantes, des systèmes de refroidissement (pas cher aussi) utilisant de l'eau au lieu de nombreuses solutions bien meilleures (d'un point de vue écologique), …

## Problèmes dans ma vie quotidienne

- **Coût du matériel :** Je redoute le jour où je devrai changer ma RAM ou mon GPU. Même si je pourrai probablement me le permettre financièrement grâce à mon travail, ça va me coûter très cher pour un équipement qui sera sans doute moins bien que celui que j'ai actuellement
- **Le forcing sur l'IA partout :** Laissez simplement le choix aux gens. Si votre technologie est si géniale, elle s'imposera d'elle-même (spoiler : ça ne sera pas le cas).

## Mes propres expérimentations

Comme je l'ai dit dans le TLDR, j'ai testé l'IA générative (et je continue de le faire une ou deux fois par an), pourquoi ? Parce que je veux avoir un point de vue technique. Si le résultat est bon, je ne l'utiliserai quand même pas, mais je serai en mesure de savoir ce qui marche ou non.  
Encore une fois, spoiler : j'ai essayé et c'est décevant. Je me suis fixé deux règles lorsque je teste cette technologie : aucune sortie ne se retrouve dans mes projets et je ne paie jamais rien (j'ai essayé : ChatGPT en 2022-2025, Microsoft Copilot en 2024-2026, GitHub Copilot en 2025, Proton Lumo en 2025-2026, et un peu de Claude en 2026).

- **Génération de code :** Je me suis vite rendu compte que, si je voulais garantir une bonne qualité de code et un bon niveau de maintenabilité, ça allait me coûter cher, tant en argent qu'en temps. Ça n'en vaut donc pas la peine.
- **Review de code :** J'ai notamment essayé ça au travail (parce que, disons, j'y étais un peu obligé) ; il y a beaucoup de faux positifs (soit des erreurs totales, mais c'est rare, soit simplement des erreurs de contexte). En fin de compte, ma position pour l'instant est la suivante : je continue à utiliser Sonarqube pour mes projets et ça sera largement suffisant ; là encore, ça ne vaut pas le temps et/ou l'argent dépensés.
- **Traductions :** Ce n'est pas mal, c'est probablement le meilleur résultat de tous mes tests. Ça pourrait sans doute fonctionner, avec une relecture humaine, et le retour sur investissement est au rendez-vous. Mais pour les raisons idéologiques évoquées précédemment, je ne l'utiliserai pas.
- **Vérification/review des textes marketing :** C'était le test le plus gros et le plus récent : j'ai rédigé plusieurs textes marketing et j'ai essayé de faire en sorte que le modèle les relise, les compare et m'indique le meilleur d'entre eux. Il me donnait trop raison.  
Quand j'ai demandé à des humains de se prononcer sur les mêmes textes, leurs commentaires étaient *bien plus* intéressants et me donnaient plus de pistes d'améliorations.
- **Moteur de recherche :** Euh, bon, j'ignore systématiquement l'AI overview de Google. Le bon (?) vieux trio continue de me sauver : StackOverflow, GitHub Issues et Reddit. Et ça va droit au but, contrairement aux réponses très verbeuses de l'IA.

Dans l'ensemble, je ne suis pas convaincu que, même sans les problèmes idéologiques évoqués dans les chapitres précédents, je l'utiliserais.

## Que nous révèlent les recherches ?

Les recherches tendent à me donner raison : on ne gagne en rapidité qu'au détriment de la qualité. Si on tente de compenser cette perte de qualité, on revient à la case départ (voire pire). Voir par exemple l'étude de Harvard de 2026 à ce sujet.  
De plus, les recherches montrent que ça a un impact négatif considérable sur les capacités des individus. Pour faire court : les gens deviennent plus cons lorsqu'ils l'utilisent.

## Le machine learning reste cool

Oui, je continue de penser (malgré tout ça) que le machine learning est une technologie cool. Ça a apporté son aide dans de nombreux domaines au cours de ses 40+ ans d'existence, et continuera probablement à le faire. Pensez au *protein folding*, à l'ingénierie des matériaux, à l'OCR et à bien d'autres trucs de ce genre.  
Et en même temps, les LLM vendus comme de l'"IA générative" sont une véritable plaie. Une plaie pour moi, une plaie pour la société, une plaie pour tout le monde, sauf pour Nvidia et les poches de quelques personnes qui se remplissent d'argent en ce moment, jusqu'à ce que la bulle éclate (espérons-le).

## Moi? Un artiste?

J'ai l'impression que c'est un titre pompeux que je ne mérite pas, mais je pense que ce n'est pas si faux que ça, et que c'est une bonne raison pour ne pas utiliser la genai. J'adore créer, j'adore apprendre, et tout ça me passionne. Et ça, et uniquement ça, peut être une simple justification pour ne pas l'utiliser.

## Conclusion

Je ne l'utiliserai pas dans un avenir proche.  
Et honnêtement, j'écris cet article parce que je commence à me sentir menacé dans mon travail. Non pas que je pense que l'IA générative puisse créer ce que je crée, elle en est incapable. Mais j'ai peur que trop de gens le pensent, et qu'à terme, les logiciels de bonne qualité soient purement et simplement remplacés par du slop.

En attendant, essayez de soutenir les créateurs humains qui vous entourent. Ceux qui créent des choses sont géniaux, et si vous créez vous-même quelque chose, n'importe quoi, même petit, vous êtes génial vous aussi.

---

*Image d'en-tête : Picture by neelam279*