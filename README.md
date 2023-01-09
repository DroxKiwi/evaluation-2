# Evaluation-2
Évaluation d'entraînement - Créer un site web avec HTML, CSS et le Framework Bootstrap

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
### Voici le code HTML associé :
```html
        <!-- resizable fait référence à la div envoyé à la fonction makeresizableDiv -->
      <div class="resizable">
          <!-- rezizers est le conteneur du bouton sur lequel on clique pour ajuster la div -->
        <div class="resizers">
            <!-- side fait référence au bouton lui même -->
          <div class="resizer side">
          </div>
        </div>
      </div>
```
### Voici le code css associé : 
```css
.resizable {
  background-image: url("../images/screen3.png");
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
  border: 10px solid orange;
  box-sizing: border-box;
}

.resizable .resizers .resizer{
  width: 100px;
  height: 100px;
  border-radius: 20%;
  background: rgb(255, 121, 121);
  border: 5px solid red;
  position: absolute;
}

.resizable .resizers .resizer.side {
  right: -5px;
  top: 50%;
  cursor: e-resize;
}
```

---
> - src/images

### Il contient les images utilisées pour le site
---
> - vendor

### Il est vide, mais par habitude je créé toujours ce dossier, il est sensé contenir les élements dispensables lors du téléchargement du projet depuis Github.

### Les fichiers hors de /vendor et /src sont le README.md que vous lisez actuellement et le fichier .odt qui vous sert pour l'évaluation

---
Merci d'avoir lu le README.md 

***Fredj Corentin***

***corentinfredj.dev@gmail.com***