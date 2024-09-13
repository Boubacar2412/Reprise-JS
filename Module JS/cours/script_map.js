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

const heroesPlaza = new Map();

heroesPlaza
  .set("categories", ["Italian", "Pizzeria", "Indien", "Fast food"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open 😃")
  .set(false, "We are closed 😔");

console.log(heroesPlaza.get("categories"));
console.log(heroesPlaza.get(true));
console.log(heroesPlaza.get(1));

const time = 23;

console.log(
  heroesPlaza.get(
    time > heroesPlaza.get("open") && time < heroesPlaza.get("close")
  )
);

console.log(heroesPlaza.has("categories")); // equivalent with object hasOwnProperty
console.log(heroesPlaza.has(1));

// heroesPlaza.clear();

heroesPlaza;
heroesPlaza.delete("categories");
heroesPlaza;

console.log(heroesPlaza.size);
const arr = [];
heroesPlaza.set(arr, "Test");

arr.push(1);

console.log(heroesPlaza);

console.log(heroesPlaza.get(arr));

// heroesPlaza.set(document.querySelector("h1"), "Heading");

// console.log(heroesPlaza.get(document.querySelector("h1")));

const question = new Map([
  ["question", "What is the best programming language in the world ?"],
  [1, "Language C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct answer 🎉"],
  [false, "Incorrect. Try again !"],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(heroescoffee));

const heroescoffeeMap = new Map(Object.entries(heroescoffee));

heroescoffeeMap;

console.log(question.get("question"));

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer)); //

// Convert map to array
console.log([...question]);

console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
