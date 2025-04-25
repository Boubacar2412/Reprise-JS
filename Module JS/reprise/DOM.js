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

// --- RÉCUPÉRATION DES ÉLÉMENTS HTML ---

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

// --- MODIFICATIONS D'ÉLÉMENTS ---

// Ajouter du texte à un élément
titre.textContent += " et suis beau";
alert(titre.textContent);

// Modifier le style
titre.style.color = "blue";
titre.style.textTransform = "uppercase";

// Modifier le texte d’un paragraphe
textes[1].textContent = "Paragraphe modifié par JS";

// --- CRÉATION ET INSERTION D'ÉLÉMENTS HTML ---

// 1. Ajouter un paragraphe à la fin du body
let paragrapheAjoute = document.createElement("p");
paragrapheAjoute.textContent = "Je suis un paragraphe ajouté dynamiquement.";
document.body.appendChild(paragrapheAjoute);

// 2. Ajouter un <li> à la fin de la liste
let nouvelleListe = document.querySelector("ul");
let liAjoute = document.createElement("li");
liAjoute.textContent = "Élément 3 ajouté avec JS";
nouvelleListe.appendChild(liAjoute);

// 3. Ajouter un sous-titre <h2> avant la liste
let sousTitre = document.createElement("h2");
sousTitre.textContent = "Liste modifiée :";
document.body.insertBefore(sousTitre, nouvelleListe);

// 4. Créer un bouton pour ajouter des messages
let bouton = document.createElement("button");
bouton.textContent = "Ajouter un message";
document.body.appendChild(bouton);

// 5. Zone pour insérer les messages
let zoneMessage = document.createElement("div");
document.body.appendChild(zoneMessage);

// 6. Événement clic sur le bouton
bouton.addEventListener("click", function () {
  let msg = document.createElement("p");
  msg.textContent = "Message ajouté en cliquant !";
  zoneMessage.appendChild(msg); 
});

// --- insertBefore() : insérer un élément avant un autre ---

// 1. Insérer un <li> avant "Élément 2"
let liInsereAvant = document.createElement("li");
liInsereAvant.textContent = "Élément inséré avant Élément 2";
let referenceLi = nouvelleListe.children[1]; // Élément 2
nouvelleListe.insertBefore(liInsereAvant, referenceLi);

// 2. Insérer un paragraphe avant la div[name="zone"]
let paragrapheAvantZone = document.createElement("p");
paragrapheAvantZone.textContent = "Paragraphe inséré avant la zone nommée.";
let referenceZone = document.getElementsByName("zone")[0];
let parentZone = referenceZone.parentNode;
parentZone.insertBefore(paragrapheAvantZone, referenceZone);

// --- SUPPRESSION D'ÉLÉMENTS AVEC remove() ---

// Supprimer le premier paragraphe avec la classe "texte"
let paragrapheASupprimer = document.querySelector(".texte");
if (paragrapheASupprimer) {
  paragrapheASupprimer.remove();
}

// --- REMPLACEMENT D'ÉLÉMENTS AVEC replaceChild() ---

// 1. Créer un nouveau titre <h1>
let nouveauTitre = document.createElement("h1");
nouveauTitre.textContent = "Titre remplacé dynamiquement !";

// 2. Sélectionner l’ancien titre à remplacer
let ancienTitre = document.getElementById("titre");

// 3. Remplacer l’ancien titre par le nouveau
if (ancienTitre && ancienTitre.parentNode) {
  ancienTitre.parentNode.replaceChild(nouveauTitre, ancienTitre);
}

