const etu1 = "Fadima";
const etu2 = "Amadou";
const etu3 = "Oumar";
const etu4 = "Boubacar";

const students = ["Fadima", "Amadou", "Oumar", "Boubacar"];

console.log(students);

const years = new Array(1991, 1984, 2008, 2020);

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);

console.log(students.length);

// recuperer le dernier element d'un tableau
console.log(students[students.length - 1]);

// Modification d'un tableau
students[1] = "Alpha";
students[4] = "Idiatou";
console.log(students);
console.log(students.length);

// Interdit pour const
// students = ["Ousmane", "Mamadou"];

const fullName = "Amadou";
const amadou = [fullName, "Ly", 2024 - 1993, "Teacher", students];

console.log(amadou);
console.log(amadou.length);

// push
students.push("Fatoumata");
students.push("Diarra");

// const push = function (value) {
//   students[students.length] = value;
// };
// push("Diarra")

console.log(students.push("a", "b", "c"));
console.log(students);

// Pop remove element
console.log(students.pop());
console.log(students.pop());
const poppedElement = students.pop();

students.unshift("Ousmane", "Binta");
console.log(students);

students.shift();
console.log(students);

console.log(students.indexOf("Oumar"));

console.log(students.includes("Kerfala"));
console.log(students.includes("Binta"));

if (students.includes("Binta")) {
  console.log("La classe continet un etudiabt binta");
}
