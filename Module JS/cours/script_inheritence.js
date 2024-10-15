"use strict";

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

// Student.prototype = Object.create(Person.prototype)

class Student extends Person {
  constructor(fullName, birthYear, school, level) {
    // Always has to happens first
    super(fullName, birthYear);
    this.school = school;
    this.level = level;
  }

  introduce() {
    console.log(
      `My name is ${this.fullName} and I study at ${this.school} in ${this.level}`
    );
  }

  calcAge() {
    console.log(`Im a student and I have ${2024 - this.birthYear} years old`);
  }
}

const mory = new Student("Mory Koulibaly", 2000, "NimbaHub", "JS OOP");

mory.introduce();
mory.calcAge();
