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

const arr = [7, 8, 9];
const [a, b, c] = arr;
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const badNewArr2 = [1, 2, a, b, c];

console.log(badNewArr);

const newArr = [1, 2, ...arr]; // (7,8,9)

console.log(newArr[0], newArr[1], newArr[2], newArr[3], newArr[4]);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

console.log(newArr); // Different

const newMenu = [...heroescoffee.mainMenu, "Riz basmatic au poulet"];
console.log(newMenu);

// copy array
let mainMenuCopy = [...heroescoffee.mainMenu];
// mainMenuCopy = heroescoffee.mainMenu // Not a copy

// Merge arrays
const completeMenu = [...heroescoffee.mainMenu, ...heroescoffee.startMenu];
completeMenu;

//  Iterables : Arrays, Stings, Maps and Sets but not Objects
const str = "Amad";
const letters = [...str, " ", "L"];

letters;

// console.log(letters.join(""));

console.log(...str, " ", "L");

// console.log(`${..str}`)

// ARGUMENTS
// const ingredients = [
//   "Farine/Pate Pizza",
//   "Sauce Tomate Mozzarela",
//   "Viande Hachee",
// ];
// heroescoffee.orderPizza(...ingredients);

// const ingredients = [
//   prompt("Chooze your ingredients for the pizza ! Ingredient 1"),
//   prompt("Chooze your ingredients for the pizza ! Ingredient 2"),
//   prompt("Chooze your ingredients for the pizza ! Ingredient 3"),
// ];

// heroescoffee.orderPizza(ingredients[0], ingredients[1], ingredients[2]);
// heroescoffee.orderPizza(...ingredients);

// REST
const heroescoffeeKaloum = {
  founded: 2019,
  location: "Kaloum",
  ...heroescoffee,
  founder: "Diallo",
};

heroescoffeeKaloum;

const heroescoffeeMatam = { ...heroescoffee };
// const heroescoffeeMatam = heroescoffee;

heroescoffeeMatam.name = "Heroes coffe Matam";
console.log(heroescoffee);
console.log(heroescoffeeMatam);
