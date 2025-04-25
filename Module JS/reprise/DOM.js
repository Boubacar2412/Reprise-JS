
/*
Le DOM (Document Object Model) est une interface de 
programmation qui permet aux langages comme JavaScript
 d'accéder et de manipuler les éléments HTML et CSS d'une page web. 
 Lorsqu'une page est chargée, le navigateur crée automatiquement 
 un objet appelé document qui représente toute la structure de la page.
  Grâce à cet objet, on peut utiliser différentes méthodes et propriétés
   JavaScript pour rendre la page dynamique : modifier du texte, ajouter ou supprimer des éléments, 
   changer des styles, réagir à des événements, etc.
*/


// 1. Par ID
let titre = document.getElementById("titre");
console.log("Par ID :", titre.textContent);

// 2. Par balise
let listes = document.getElementsByTagName("li");
console.log("Par balise :", listes[0].textContent);

// 3. Par classe
let textes = document.getElementsByClassName("texte");
console.log("Par classe :", textes[1].textContent);

// 4. Par sélecteur CSS
let premierTexte = document.querySelector(".texte");
console.log("querySelector :", premierTexte.textContent);

let tousLesTextes = document.querySelectorAll(".texte");
console.log("querySelectorAll (nombre) :", tousLesTextes.length);

// 5. Par attribut name
let zone = document.getElementsByName("zone")[0];
console.log("Par name :", zone.textContent);

// récupérer le contenu textuel

let contenir = document.getElementById("titre").textContent += "et suis beau";
alert(contenir);

// modification du contenu d'un élément HTML

let mod = document.getElementById("titre").style.color = "red";

// 1. Modifier le texte d'un élément
let titre1 = document.getElementById("titre");
titre1.textContent = "Bienvenue sur le DOM !";

// 2. Modifier le style d’un élément
titre.style.color = "blue";
titre.style.textTransform = "uppercase";

// 3. Modifier le texte du deuxième paragraphe
let paragraphes = document.getElementsByClassName("texte");
paragraphes[1].textContent = "Paragraphe modifié par JS";