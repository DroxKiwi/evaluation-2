# Evaluation-2
Évaluation d'entraînement - Dynamiser vos sites web avec Javascript 

## Constitution du site

### Le site est très simple, constitué de 2 dossiers, premièrement ***/src*** constitué de ***/css***, ***/html***, ***/js*** et ***/images***. Le second dossier est ***/vendor***
---
> - src/css

### Il contient le fichier ***index.scss*** et les créations automatiques ***index.css.map*** et ***index.css*** que fournit l'outil Live Sass

---
> - src/html

### Il contient les fichiers ***index.html*** (accueil du site), ***histoire.html***, ***visiter.html***, ***apropos.html*** et ***js.html***
---
> - src/js

### Il contient le fichier ***index.js*** qui est utilisé uniquement pour la page ***histoire.html***. Le fichier contient les fonction :
```js
function returnIndexFromId(id){}
// Elle retourne l'index d'un identifiant, pour exemple si l'on donne "col-7" la fonction renvoie "7"

function changeArticle(e){}
// Elle prend un "event" en paramètre, supprime le contenu de la balise "article" et ajoute "active" a la classe du bouton en lien avec la variable "event" reçu pour qu'il apparaisse sélectionné

function createNewArticle(index){}
// En fonction du paramètre "index" reçu elle renvoi un élement "div" qui a pour enfant les élements de l'article à afficher
```

### Il contient aussi le fichier ***resizable.js*** qui sert à faire fonctionner la page ***js.html***. Le fichier contient la fonction :
```js
function makeResizableDiv(div){}
// Elle prend une div en paramètre et modifie sa taille en fonction de la position de la souris.
```
### Voici le code HTML associé à une telle fonction :
```html
        <!-- resizable fait référence à la div envoyé à la fonction makeresizableDiv -->
      <div class="resizable">
          <!-- rezizers est le conteneur du code HTML embarqué au sein de l'elèment ajustable en taille et de l'elèment sur lequel on clique pour ajuster la taille de la div en question (la bande grise dans l'exemple du site) -->
        <div class="resizers">

          <!-- Ici on embarque le code HTML au sein de l'elèment ajustable en taille -->
          <div class="container-fluid filtred">
            ... code ...
          </div>

            <!-- side fait référence au bouton lui même -->
          <div class="resizer side">
          </div>
        </div>
      </div>
```
### Voici le code css associé (pour l'exemple en particulier du site) : 
```css
.filtred{
  position: fixed;
  z-index: 0;
}

.resizable {
  background-image: url("../images/daviddangers.jpg");
  background-attachment: fixed;
  //background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //background: transparent;
  width: 100px;
  height: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
}

.resizable .resizers{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.resizable .resizers .resizer{
  width: 1px;
  height: 100%;
  border-radius: 0%; 
  border: 10px solid rgba(89, 89, 89, 0.338);
  position: absolute;
}

.resizable .resizers .resizer.side {
  right: -5px;
  top: 0%;
  cursor: e-resize;
}
```
- **Dans l'exemple du site on se sert de ce code pour créer un filtre qui modifie l'arrière plan lorsque on le tire sur la droite. Mais il est tout à fait possible d'obtenir un carrée qui aurait quatre "resizer" à chaque coin et qu'on pourrait modifier dans toutes les directions**

- **Pour détailler un peu plus l'exemple du site, j'ai trois elèments. Un premier qui est le body du code HTML est qui a un background-image définit avec un z-index de -1. Le second est l'elèment ajustable en taille qui a un z-index supérieur. Le dernier est le code HTML de la page lui même qui donc a un z-index supérieur à l'elèment ajustable. Lorsque qu'on étire l'elèment ajustable, les elèment du code HTML sont toujours au dessus en terme d'index, mais le background-image change puisque celui de l'elèment ajustable a un index supérieur à celui du body**

---
> - src/images

### Il contient les images utilisées pour le site
---
> - vendor

### Il est vide, mais par habitude je créé toujours ce dossier, il est sensé contenir les élements dispensables lors du téléchargement du projet depuis Github.

### Les fichiers hors de /vendor et /src sont le README.md que vous lisez actuellement et le fichier .odt qui vous sert pour l'évaluation

---
Voici les documentations utilisées :

[Documentation Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

[Documentation JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)

[Documentation HTML](https://developer.mozilla.org/fr/docs/Web/HTML)

[Documentation CSS](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)

---
Merci d'avoir lu le README.md 

***Fredj Corentin***

***corentinfredj.dev@gmail.com***