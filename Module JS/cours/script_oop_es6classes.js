"use strict";

// Class expression
// const PersonEx = class {

// };

// Class declaration
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods will added to .prototype of Person
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    // else alert("Not a valide fullName");
  }

  static hey() {
    console.log(this);
    console.log("hey there 👋🏽");
  }
}

Person.hey();
// amad.hey();

Person.prototype.greet = function () {
  console.log(`Hey my name is ${this.firstName}`);
};

const amad = new Person("Amadou Ly", 1990);
console.log(amad.__proto__ === Person.prototype);
amad.greet();

console.log(amad);

const mamadoubah = new Person("Mamadou bah", 1999);

// 1. Classes are not hoisted
// 2. Classes are first class citizen
// 3. Classes ared executed in strict mode

const account = {
  owner: "Amad",
  mouvements: [200, 300, 400],

  get latest() {
    return this.mouvements.slice(-1).pop();
  },

  set latest(mov) {
    this.mouvements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.latest);

const str = "Hello";

console.log(Array.from(str));
const array = new Array();
// array.from();

Number.parseFloat();
// Object.keys();

// account.keys()
