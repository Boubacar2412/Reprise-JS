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
// const sugar = 10;

// // Passer des parametres a une fonction
// // Retourner une valeur depuis une fonction
// function fruitProcessor(apples, oranges) {
//   const juice = `Mixing ${apples} apples and ${oranges} oranges and ${sugar}g of sugar to make juice`;
//   return juice;
// }

// const cocktailAppleOrange = fruitProcessor(5, 3);

// console.log(cocktailAppleOrange);

// function declaration et function expression
// DECLARATION
const age = calcAge(1991);

function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(age); // Affiche 46

//EXPRESSION
function calcAge2(birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2); // Affiche 46

//IMMEDIATLY INVOQUED FUNCTION EXPRESSION
(function (birthYear) {
  return 2037 - birthYear;
})(1997);

// ARROW FUNCTION : FONCTION flechee

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); // Affiche 46

const personalPresentation = `Je m'appele Amadou lY ET J'AI ${((birthYear) =>
  2037 - birthYear)(1998)}`;

const yearUntilRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

console.log(yearUntilRetirement(1991));

const sugar = 10;

function cutFruitPieces(fruit) {
  console.log(`Eppluchage des fruits `);
  console.log(`Sechage des des fruits `);
  return fruit * 8;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Mixing ${applePieces} apples pieces and ${orangePieces} oranges pieces and ${sugar}g of sugar to make juice`;
  return juice;
}

const cocktailAppleOrange = fruitProcessor(5, 3);

console.log(cocktailAppleOrange);

function returnValue() {
  const value = "Hello";
  return value;
}

function noReturnValue() {
  const value = "Hello";
  return undefined; // CELA CE FAIT AUTOMATIQUEMENT PAR JS
}

console.log(returnValue());
console.log(noReturnValue());

const fn1 = function () {
  console.log("hello 2");
};

const fn2 = fn1;
const fn3 = fn2;

fn1();
fn2();
fn3();
