
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

