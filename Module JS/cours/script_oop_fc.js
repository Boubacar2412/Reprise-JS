"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2024 - this.birthYear);
  //   };
};

const amad = new Person("Amadou", 1990);
const oumar = new Person("Oumar", 2000);
const conte = new Person("Amadou", 1999);

const binta = {
  firstName: "Binta",
  birthYear: 1999,
};

console.log(amad);
oumar;
conte;

binta;

console.log(amad instanceof Person);
console.log(oumar instanceof Person);
console.log(conte instanceof Object);
console.log(binta instanceof Object);

// What happen when we use the "new" operator to call a constructor function
// 1 - new empty object {} is created
// 2 - function is called, with this = {}
// 3 - {} is linked to the prototype {__proto__ : Person.prototype}
// ...
// 4 - {} is returned automtically by the function (which is no necessarly empty)

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

console.log(Person.prototype);

amad.calcAge();
conte.calcAge();
oumar.calcAge();

console.log(amad.__proto__ === Person.prototype);
console.log(amad.__proto__ === Person.__proto__);
console.log(Person.__proto__);

console.log(Person.prototype.isPrototypeOf(amad));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(Person.__proto__.isPrototypeOf(Person));
console.log(amad.__proto__.isPrototypeOf(oumar));

// .prototypeOfLynkedObject

Person.prototype.species = "Homo Sapiens";
console.log(amad.species, oumar.species, conte.species);
console.log(amad.hasOwnProperty("firstName"));
console.log(amad.hasOwnProperty("species"));
