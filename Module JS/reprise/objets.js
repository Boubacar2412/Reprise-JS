

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

function Personne(n,p,a){
    this.prenom = p;
    this.nom = n;
    this.age = a;
}

let Bouba = new Personne("Diallo", "Boubacar",22);

alert("je suis " + Bouba.nom + " "+ Bouba.prenom + " "+ " agé de "+ Bouba.age + " "+ "ans");

