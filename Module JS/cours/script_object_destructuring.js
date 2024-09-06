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
};

const option = {
  time: "22:30",
  adress: "Caonstantin carrefour immeuble Ding",
  mainIdx: 2,
  starterIdx: 2,
};

heroescoffee.orderDelivery(option);

heroescoffee.orderDelivery({
  adress: "Caonstantin carrefour immeuble Ding",
  mainIdx: 2,
});

const { openinHours, categories, name } = heroescoffee;

const {
  name: restaurantName,
  openinHours: hours,
  categories: tags,
} = heroescoffee;

// const restaurantName = heroescoffee.name

// console.log(name);
// console.log(openinHours);
// console.log(categories);

console.log(restaurantName);
console.log(hours);
console.log(tags);

// Default values
const { menu = [], startMenu: starter = [], mainMenu: main } = heroescoffee;
console.log(menu);
console.log(starter);
console.log(main);

// Mutation de variable
let a = 111;
let b = 999;

const obj = {
  a: 23,
  b: 7,
  c: 14,
};

({ a, b } = obj);

console.log(a);
console.log(b);

// Nested destructuration
const {
  sat: { open: o, close: c },
} = openinHours;

// console.log(sat);
