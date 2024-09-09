"use strict";

const heroescoffee = {
  name: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],

  openinHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // H24
      close: 24,
    },
  },
  order(starterIdx, mainIdx) {
    return [this.startMenu[starterIdx], this.mainMenu[mainIdx]];
  },
  orderDelivery({
    time: deliveryTime = "20:00",
    starterIdx = 1,
    adress,
    mainIdx = 1,
    coursierId = 0,
  }) {
    console.log(
      `Order received! ${this.startMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${adress} at ${deliveryTime}`
    );
  },
  orderPizza(ing1, ing2, ing3) {
    console.log(`Here is your delicious Pizza with ${ing1}, ${ing2}, ${ing3}`);
  },
};

// 1) REST WITH DESTRUCTURING
//SPREAD OPERATOR (a droite de l'operateur d'assignation)
const arr = [1, 4, 5, ...[10, 30, 40]];
arr;

//REST PATTERN (a gauche de l'operateur d'assignation)
const [a, b, ...others] = arr;
console.log(a);
console.log(b);
console.log(others);

const [salade, d, ...otherFood] = [
  ...heroescoffee.startMenu,
  ...heroescoffee.mainMenu,
];

otherFood;

// Objects
const { sat, ...otherWeekDays } = heroescoffee.openinHours;
sat;
otherWeekDays;

// 2) REST WITH FUNCTIONS
const addArguments = function () {
  console.log(arguments);

  let acc = 0; // 25
  for (let index = 0; index < arguments.length; index++) {
    acc += arguments[index];
  }
  console.log(acc);
};

const addRest = function (...numbers) {
  console.log(numbers);

  numbers.reduce(function (acc, number) {
    return acc + number; // 12 => 25 => 26 => ... => 40
  }, 0);
};

// add(2, 3); // 5
// add(1, 2, 3); // 6
addRest(12, 13, 1, 2, 3, 4, 5); //
addArguments(12, 13, 1, 2, 3, 4, 5); //

const orderPizzaSpread = function (ing1, ing2, ing3) {
  console.log(ing1);
  console.log(ing2);
  console.log(ing3);
};
const orderPizzaRest = function (ing1, ing2, ...ings) {
  console.log(ing1);
  console.log(ing2); // ... is REST PARAMETERS
  console.log(ings);
};

const ingredients = [
  "Farine/Pate Pizza",
  "Sauce Tomate Mozzarela",
  "Viande Hachee",
];

orderPizzaSpread(...ingredients); // ... IS SPREAD Arguments
orderPizzaRest("Viande poulet", "Fromage", "Tomates", "Oeufs", "Olives");
