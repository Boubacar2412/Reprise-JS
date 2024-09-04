// Hoisting with variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = "Amadou";
let job = "Teacher";
const year = 1991;

// Hoisting with functions

console.log(addDecl);
// console.log(addExpr);
// console.log(addArrow);

console.log(addDecl(1, 2));
// console.log(addExpr(1, 2));
// console.log(addArrow(1, 2));

function addDecl(a, b) {
  return a + b;
}

let addExpr = function (a, b) {
  return a + b;
};

let addArrow = (a, b) => a + b;

// Example

let numProducts = 10;
if (!numProducts) deleteShoppingCart();

function deleteShoppingCart() {
  console.log("All products deleted!");
  numProducts = 0;
}

// var setTimeout = {};
// var location = {};
var x = 1;
let y = 2;
const z = 3;

// window.setTimeout(() => {
//   console.log("1 seconde ecoule");
// }, 1000);

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
