"use strict";

const heroescoffee = {
  name: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
  numGuests: null, // "" , false
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

const guests1 = heroescoffee.numGuests || 10;
const guestCorrect = heroescoffee.numGuests ?? 10;

console.log(guests1);
console.log(guestCorrect);

const rest1 = {
  name: "Carteno",
  numGuests: 0,
};

const rest2 = {
  name: "Zoomo",
  owner: "Kerfala",
};

// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;

// OR Assignement operator -> assign une valeur a une variable si celle ci est falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest2.numGuests);
console.log(rest1.numGuests);

rest1.owner &&= "<Anonyme>";
rest2.owner &&= "<Anonyme>";

console.log(rest2.owner);
console.log(rest1.owner);
