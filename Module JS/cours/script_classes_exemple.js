"use strict";

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (fullName, birthYear, school, level) {
  PersonProto.init.call(this, fullName, birthYear);
  this.school = school;
  this.level = level;
};

StudentProto.introduce = function () {
  console.log(
    `My name is ${this.fullName} and I study at ${this.school} in ${this.level}`
  );
};

const kerfala = Object.create(StudentProto);
kerfala.init("Kerfala Soumah", 2010, "UFG", "Terminal");
kerfala.introduce();
kerfala.calcAge();
