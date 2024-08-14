// console.log("Diarra souleve sa 1 repetition 🏋🏾");
// console.log("Diarra souleve sa 2 repetition 🏋🏾");
// console.log("Diarra souleve sa 3 repetition 🏋🏾");
// console.log("Diarra souleve sa 4 repetition 🏋🏾");
// console.log("Diarra souleve sa 5 repetition 🏋🏾");
// console.log("Diarra souleve sa 6 repetition 🏋🏾");
// console.log("Diarra souleve sa 7 repetition 🏋🏾");
// console.log("Diarra souleve sa 8 repetition 🏋🏾");
// console.log("Diarra souleve sa 9 repetition 🏋🏾");
// console.log("Diarra souleve sa 10 repetition 🏋🏾");

for (let rep = 1; rep <= 100; rep++) {
  console.log(`Diarra souleve sa ${rep} repetition 🏋🏾`);
}

// for (initialisation; condition; mise à jour) {
//   // Code à exécuter
// }

// initialisation
let i = 0;

for (; i < 10; ) {
  // Code à exécuter
  console.log("Iteration", i);
  // mise à jour
  i++;
}

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i > 0; i++) {
//   console.log(i);
// }

// Iteration sur les tableaux

const amadou = {
  firstName: "Amadou",
  lastName: "Ly",
  age: 2024 - 1998,
  job: "Teacher",
  students: ["Fadima", null, ["Oumar"], "Boubacar", true, 23],
};

// amadou.students[0]
// amadou.students[1]
// amadou.students[2]
// amadou.students[3]
const types = [];

for (let i = 0; i < amadou.students.length; i++) {
  console.log(amadou.students[i]);
  // types[i] = typeof amadou.students[i]
  types.push(typeof amadou.students[i]);
}

types;

const years = [1991, 2007, 1969, 2012];
const currentYear = 2024;
const ages = [];

const calcAge = function (birthYear) {
  return currentYear - birthYear;
};

for (let i = 0; i < years.length; i++) {
  ages.push(calcAge(years[i]));
}

console.log(ages);

// continue and break
for (let i = 0; i < amadou.students.length; i++) {
  if (typeof amadou.students[i] === "object") break;
  console.log(amadou.students[i]);
}

const students = ["Fadima", null, ["Oumar"], "Boubacar", true, 23];

for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}
