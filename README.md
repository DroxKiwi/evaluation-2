# Evaluation-1
Évaluation d'entraînement - Créer un site web avec HTML, CSS et le Framework Bootstrap

## Constitution du site

### Le site est très simple, constitué de 2 dossiers, premièrement ***/src*** constitué de ***/css***, ***/html***, ***/js*** et ***/images***. Le second dossier est ***/vendor***
---
> - src/css

Il contient le fichier ***index.scss*** et les créations automatiques ***index.css.map*** et ***index.css*** que fournit l'outil Live Sass

---
> - src/html

Il contient les fichiers ***index.html*** (accueil du site), ***histoire.html***, ***visiter.html*** et ***apropos.html***
---
> - src/js

Il contient le fichier ***index.js*** qui est utilisé uniquement pour la page ***histoire.html***. Le fichier contient les fonction 
---
```js
function returnIndexFromId(id){}
// Elle retourne l'index d'un identifiant, pour exemple si l'on donne "col-7" la fonction renvoie "7"

function changeArticle(e){}
// Elle prend un "event" en paramètre, supprime le contenu de la balise "article" et ajoute "active" a la classe du bouton en lien avec la variable "event" reçu pour qu'il apparaisse sélectionné

function createNewArticle(index){}
// En fonction du paramètre "index" reçu elle renvoi un élement "div" qui a pour enfant les élements de l'article à afficher
```
---
> - src/images

Il contient les images utilisées pour le site
---
> - vendor

Il est vide, mais par habitude je créé toujours ce dossier, il est sensé contenir les élements dispensables lors du téléchargement du projet depuis Github.

### Les fichiers hors de /vendor et /src sont le README.md que vous lisez actuellement et le fichier .odt qui vous sert pour l'évaluation

---
Merci d'avoir lu le README.md 

***Fredj Corentin***

***corentinfredj.dev@gmail.com***