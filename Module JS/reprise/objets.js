

 // création d'ojet littéral
let Petit = {
    nom : "Diallo",
    prenom : "Boubacar",
    age : 22,
    presentation : function (){
        return  "Nom :" + this.nom +
                 "\n Prenom : " + this.prenom + 
                 "\n Age : " + this.age;

    }

}
alert(Petit.presentation());


 // création d'ojets avec le mot clé new
 let moi = new Object();
 moi.nom = "diallo";
 moi.prenom ="boubacar";
 moi.id = function (){
    alert(this.prenom +" "+ this.nom) ;
 }

 let modification = moi;
 modification.nom = "Sow";

alert(moi.id());

// création d'ojets avec une fonction constructrice

function Labe(n,p,a){
    this.prenom = p;
    this.nom = n;
    this.age = a;
}

let Bouba = new Labe("Diallo", "Boubacar",22);

alert("je suis " + Bouba.nom + " "+ Bouba.prenom + " "+ " agé de "+ Bouba.age + " "+ "ans");


// Avec le mot clé new

let maman = new Object();
maman.nom = "Diallo";
maman.prenom = "Mamadou Hawa";
maman.presentation = function (){
    alert("ma mère s'appelle" + " "+ this.nom + " "+ this.prenom);


}


alert(maman.presentation());



// Avec un objet litteral 

let mum = {
    nom : "bah",
    prenom : "Mamadou",
    presentation : function (){
        alert("ma mère s'appelle" + " "+ this.nom + " "+ this.prenom);
}
}

alert(mum.presentation());


// Avec fonction constructrice 

function nene(n,p){
    this.nom = n;
    this.prenom = p;

}

let biro = new nene("Sow","Hawa");

alert("ma mère s'appelle" + " "+ biro.nom + " "+ biro.prenom);
