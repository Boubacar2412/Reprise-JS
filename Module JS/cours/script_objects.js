const amadou = {
  1: "test",
  true: "isAdult",
  "number of friends": 12,
  firstName: "Amadou",
  lastName: "Ly",
  age: 2024 - 1998,
  job: "Teacher",
  students: ["Fadima", "Alpha", "Oumar", "Boubacar"],
};

console.log(Boolean(0));

const obj = new Object();

obj;

console.log(amadou.job);

const nbrFr = "number of friends";

obj.name = "Obj";
obj[obj.name + amadou.firstName] = "Mon object a moi";
obj;

if (obj.age) {
  console.log(obj.age);
} else {
  obj.age = 18;
}

obj;

const amadou2 = {
  firstName: "Amadou",
  lastName: "Ly",
  birthYear: 1991,
  age: 2024 - 1998,
  job: "Teacher",
  students: ["Fadima", "Alpha", "Oumar", "Boubacar"],
  hasDriverLicence: true,
  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge() {
    return 2024 - this.birthYear;
  },
};

amadou2.calcAge();
amadou2["calcAge"]();
amadou2["students"];

console.log("amadou.calcAge : ", amadou2.calcAge());

const firstName = "Oumar";
const age = 25;
const job = "DEV";

const person = {
  firstName: firstName,
  age: age,
  job: job,
};

const person2 = {
  firstName,
  age,
  job,
};

console.log(person);
console.log(person2);
