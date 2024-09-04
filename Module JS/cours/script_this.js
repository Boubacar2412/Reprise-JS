"use strict";
// console.log(this); // window

// function calcAge(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined em strict mode et window em non strict mode
// }

// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this); // window
// };

// calcAgeArrow(1991);

// const amad = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // amad
//     console.log(2037 - this.year);
//   },
// };

// amad.calcAge();

// const fatoumata = {
//   year: 2002,
// };

// fatoumata.calcAge = amad.calcAge;
// fatoumata.calcAge();

// const f = amad.calcAge;
// f();

// var firstName = "Ousmane";

// const amad = {
//   year: 1991,
//   firstName: "Amad",

//   calcAge: function () {
//     console.log(this); // amad
//     console.log(2037 - this.year);

//     // Solution 1 with extra variable self
//     // const self = this; // self or that

//     // const isMillenial = function () {
//     //   console.log("isMillenail", self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2 with arrow function
//     const isMillenial = () => {
//       console.log("isMillenail", this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// amad.calcAge();
// console.log(this);

// function fn() {
//   "use strict";
//   console.log("scope fn", this);
//   const fnArrow = () => {
//     console.log("scope fnArrow", this);
//   };
//   fnArrow();

//   function fnInner() {
//     console.log("scope fnInner", this);
//   }
//   fnInner();
// }

// fn();

function addDecl(a, b) {
  console.log(arguments);
  return a + b;
}

let addExpr = function () {
  console.log(arguments);

  return arguments[0] + arguments[1];
};

let addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addDecl(1, 8, 3, 4, 5, 6, 7, 8, 9, 10);
addExpr(1, 2);
addArrow(1, 2);
