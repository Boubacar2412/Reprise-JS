"use strict";

// Class expression
// const PersonEx = class {

// };

// Class declaration
class Person {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // Methods will added to .prototype of Person
  calcAge() {
    console.log(2024 - this.birthYear);
  }
}

Person.prototype.greet = function () {
  console.log(`Hey my name is ${this.firstName}`);
};

const amad = new Person("Amad", 1990);
console.log(amad.__proto__ === Person.prototype);
amad.greet();

// 1. Classes are not hoisted
// 2. Classes are first class citizen
// 3. Classes ared executed in strict mode
