"use strict";

// Declaration d'une fonction
function logger() {
  console.log("=============");
  console.log("Mon nom est Amadou");
  console.log("=============");
}

// Invoquer, Executer, Appeler
logger();
logger();
logger();

// Accessible a l'interieur de la fonction fruitProcessor
const sugar = 10;

// Passer des parametres a une fonction
// Retourner une valeur depuis une fonction
function fruitProcessor(apples, oranges) {
  const juice = `Mixing ${apples} apples and ${oranges} oranges and ${sugar}g of sugar to make juice`;
  return juice;
}

const cocktailAppleOrange = fruitProcessor(5, 3);

console.log(cocktailAppleOrange);
