"use strict";

const weekdays = ["mon", "tue", "wed", "thursday", "fri", "sat", "sun"];

const char = [
  ["ridon", "roues", "pedales"],
  ["volant", "roues", "moteur"],
  ["manivelle", "ailes", "moteur"],
];

const charMachines = [];

for (const [i, machine] of char.entries()) {
  const charObj = {};

  machine.forEach((char) => {
    charObj[char] = "uninitialized";
  });

  charMachines[i] = charObj;
}

charMachines;

const openinHours = {
  [weekdays[3]]: {
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
};

openinHours;

const heroescoffee = {
  [openinHours]: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
  numGuests: null, // "" , false
  openinHours, // 1/ Es6 enhance object literal
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
  orderPizza: (ing1, ing2, ing3) =>
    console.log(`Here is your delicious Pizza with ${ing1}, ${ing2}, ${ing3}`),
};

const menu = [...heroescoffee.mainMenu, ...heroescoffee.startMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(i);
  console.log(el);
}

const students = [
  { name: "Isma", age: 19 },
  { name: "Ous", age: 18 },
  { name: "Mmad", age: 17 },
  { name: "Ous", age: 18 },
  { name: "Fatou", age: 18 },
];

for (const student of students.entries()) {
  console.log(student);
}

console.log(heroescoffee);
