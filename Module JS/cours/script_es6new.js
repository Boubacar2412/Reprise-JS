"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openinHours = {
  [weekdays[3]]: {
    open: 12,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // H24
    close: 24,
  },
  mon: {},
};

const heroescoffee = {
  name: "Heroes Coffee",
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
heroescoffee.openinHours &&
  heroescoffee.openinHours.mon &&
  console.log(heroescoffee.openinHours.mon.open);

if (heroescoffee.openinHours && heroescoffee.openinHours.mon)
  console.log(heroescoffee.openinHours.mon.open);

console.log(heroescoffee.openinHours?.mon?.open);

const days = ["mon", "tue", "wed", "thursday", "fri", "sat", "sun"];

for (const day of days) {
  console.log(day);
  const open = heroescoffee.openinHours[day]?.open;
  const close = heroescoffee.openinHours[day]?.close;

  console.log(
    `on ${day} we ${
      open ? `open in ${open} and close at ${close}` : "we are closed"
    }`
  );
}

const properties = Object.keys(openinHours);
console.log(properties);
let openStr = `our restaurant ${heroescoffee.name} is open on ${properties.length} days: `;

for (const day of Object.keys(openinHours)) {
  console.log(day);
}

for (const time of Object.values(openinHours)) {
  console.log(time);
  //   openStr += `${time.open}, ${time.close} `;
}

const obj = {
  name: "Amadou", // entree
  age: 12,
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  console.log(value);
}

// console.log(openStr);

for (const [day, time] of Object.entries(openinHours)) {
  openStr += `${day} : {${time.open}, ${time.close}} `;
}

console.log(openStr);
