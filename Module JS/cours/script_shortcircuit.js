"use strict";

const heroescoffee = {
  name: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
  numGuests: 100,
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

// USE ANY data type , return ANY data type
//shortcircuit
console.log(3 || "Amadou"); // 3
console.log(2 || 0); //2
console.log(true || "0"); // true
console.log("" || "0"); // "0"
console.log(undefined || null); // null

// let number = 3 || 'ousmane'

console.log(0 || undefined || "" || "" || null); // 0 - null - Hello

const guests1 = heroescoffee.numGuests || 10;
const guest2 = heroescoffee.numGuests ? heroescoffee.numGuests : 10;

function presModern(name = "Unknown", numguests = "0") {
  console.log(`Restaurant ${name} with ${numguests} places available`);
}

function presBeforeES6(name, numguests) {
  name = name || "Unknown";
  numguests = numguests || "0";
  console.log(`Restaurant ${name} with ${numguests} places available`);
}

presModern();
presModern("Heroes coffee", 100);

// Operateur && de court circuitage
console.log(0 && "Amadou");
console.log(7 && "Amadou");
console.log(7 && "");

console.log(" " && undefined && "" && "" && null);

const isDirty = false;
const cleanUp = function () {
  console.log("Im cleaning the dirty place");
};

// if (isDirty) {
//   cleanUp();
// }

isDirty && cleanUp();

const levelOfFuel = 0;

const startCar = function () {
  console.log(`Fuel is at ${levelOfFuel} %, ... car starting`);
};

levelOfFuel && startCar();
