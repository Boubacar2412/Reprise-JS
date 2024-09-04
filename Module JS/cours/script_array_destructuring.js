"use strict";

const heroescoffee = {
  name: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
  order(starterIdx, mainIdx) {
    return [this.startMenu[starterIdx], this.mainMenu[mainIdx]];
  },
};

// const arr = [1, 3, 4];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x);
// console.log(y);
// console.log(z);

// arr;

let [first, , third, fourth] = heroescoffee.categories;

console.log(first);
// console.log(second);
console.log(third);
console.log(fourth);

// const temp = first;
// first = fourth;
// fourth = temp;

[fourth, first] = [first, fourth]; // ["Americaine", "Guineenne"]

console.log(first);
console.log(fourth);

const [starterOrder, mainOrder] = heroescoffee.order(1, 0);

// console.log(order);

// const starterOrder = order[0];
// const mainOrder = order[1];

console.log(starterOrder);
console.log(mainOrder);

// Nested Destructuring
const nestedArray = [1, 2, 3, [4, 6, 7]];
const [i, , , [, k, j]] = nestedArray;

console.log(i);
console.log(j);
console.log(k);

// Default values
const [p = 0, q = 0, r = "default"] = [];
console.log(p);
console.log(q);
console.log(r);
