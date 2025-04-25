
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


// les méthodes de l'obejet "Document"
let titre = document.getElementById("gros_titre");

alert(titre);

let nb_tab = document.getElementsByTagName("h1");

alert("le nombre de paragraphe est : " + nb_tab.length);

