const age = 23;
age >= 18
  ? console.log("Je peux aller en boite 🔥")
  : age > 53
  ? console.log("Je suis trop vieux pour ca !")
  : console.log("Je suis trop jeune pour sortir la nuit");

if (age >= 18) {
  console.log("Je peux aller en boite 🔥");
  // Possible de mettre beaucoup d'instructions
  //   console.log("Je peux aller en boite");
  //   console.log("Je peux aller en boite");
  //   console.log("Je peux aller en boite");
  //   console.log("Je peux aller en boite");
  //   console.log("Je peux aller en boite");
  //   console.log("Je peux aller en boite");
} else if (age > 53) {
  console.log("Je suis trop vieux pour ca !");
} else {
  console.log("Je suis trop jeune pour sortir la nuit");
}

console.log(`I like to drink ${age > 18 ? "wine 🍷" : "water 💧"} `);

let scoreAmoureux = 12;
let stte;
if (scoreAmoureux > 20) {
  stte = "Je suis romantique";
} else {
  stte = "Je ne suis pas romantique";
}

`Je suis ${scoreAmoureux > 20 ? "Romantique" : "Non Rmantique"}`;
