

let tab = ["bouba", "diallo", 22];

let tab1 = new Array("bouba", "diallo", 22);

alert(tab1[2]);

tab[8] = "foot";

alert(tab[8]);

alert(tab.length);

let p = " ";

for(var i=0; i<tab1.length; i++){
    p+= "position numero" + (i+1) + " : " + tab1[i] + "\n";
}
alert(p);

// les méthodes de l'objet Array

let ajout = tab.push("valeurAjouter");

alert(ajout);

let sup = tab.pop();
alert(sup);


