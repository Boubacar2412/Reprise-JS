// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Amad",
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log("Me", me);
// console.log("Friend", friend);

//Primitive types
let lastName = "Diallo"; // 001a
let oldLastName = lastName;
lastName = "Sow"; // 001b

console.log(lastName, oldLastName);

//Reference types
const fatoumata = {
  // Callstack : 001c -> 002a / Heap : 002a -> { ... }
  firstName: "Fatoumata",
  lastName: "Camara",
  age: 27,
};

const marriedFatoumata = fatoumata; // marriedFatoumata -> 001c [002a]
marriedFatoumata.lastName = "Bangoura";

console.log("Before marriage", fatoumata);
console.log("After marriage", marriedFatoumata);

// fatoumata = {}; // 002b

// Copying objects
const fatoumata2 = {
  firstName: "Fatoumata",
  lastName: "Camara",
  age: 27,
  hobby: ["Dancing", "cooking"], // 002d
};

const fatoumataCopy = Object.assign({ school: "Gamal" }, fatoumata2);
fatoumataCopy;

fatoumataCopy.lastName = "Bangoura";
fatoumataCopy.hobby.push("Cinema");
console.log("Before marriage", fatoumata2);
console.log("After marriage", fatoumataCopy);
