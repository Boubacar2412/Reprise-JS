"use strict";

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// const transformer = function (str, fnTransform) {
//   console.log(`Transformed by ${fnTransform.name}`);
//   return fnTransform(str);
// };

// const ex1 = transformer("JavaScript is the best language !", upperFirstWord);
// const ex2 = transformer("JavaScript is the best language !", oneWord);

// console.log(ex1);
// console.log(ex2);

// const high5 = function (name, idx, arr) {
//   console.log(`👋🏽 ${arr}`);
// };

// document.body.addEventListener("click", high5);

// const names = ["Amad", "Ousmane", "Billo"];

// names.forEach(high5);

// const forEachCours = function (callbackfn) {
//   for (let i = 0; i < names.length; i++) {
//     callbackfn(names[i]);
//   }
// };

// forEachCours(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// const greeterHey = greet("Ciao"); // function (name) {console.log(`${greeting} ${name}`);};
// greeterHey("Amadou");
// greeterHey("Oumar");

// greet("Hello")("Ousmane");
// greetArrow("Bonjour")("Mamadou");

const airGuinea = {
  airline: "Air Guinea",
  iataCode: "AG",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.iataCode}${flightNum}`);
    this.bookings.push({
      flight: this.iataCode + flightNum,
      name,
    });
  },
};

airGuinea.book(235, "Amadou Ly");
airGuinea.book(745, "Oumar Diallo");

nimbaAsia = {
  airline: "Nimba Asia",
  iataCode: "NA",
  bookings: [],
};

const book = airGuinea.book;

book.call(nimbaAsia, 123, "Idiatou Touré");
book.call({ iataCode: "AA", bookings: [] }, 234, "Mory");

// Apply
const flightData = [556, "Janus"];
book.apply(nimbaAsia, flightData);

// Bind
const bookBinded = book.bind({ iataCode: "AA", bookings: [] }, 656);
bookBinded("Amad");

const nimbaAsiaBook767 = book.bind(nimbaAsia, 767);
nimbaAsiaBook767("Ousmane");

const nimbaAsia767BookBinta = book.bind(nimbaAsia, 767, "Binta");

nimbaAsia767BookBinta();
