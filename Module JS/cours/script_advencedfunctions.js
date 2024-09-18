"use Strict";

const bookings = [];

const createBooking = function (
  flightNum = "DF000",
  numPassenger = 1,
  price = numPassenger * 10
) {
  //ES5 WAY TO DO DEFAULT VALUES
  //   flightNum = flightNum || "DF000";
  //   numPassenger = numPassenger || "0";
  //   price = price || "$ 0";

  const booking = {
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", undefined, 200);

const flight = "LH123";
const amad = {
  name: "Amadou Ly",
  passport: 47546345466,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 47546345466) {
    console.log("CheckedIn");
  } else {
    console.log("Wrong passport !");
  }
};

checkIn(flight, amad);

console.log(flight); // LH123
console.log(amad); // 'Amadou Ly' / 47546345466

// flightNum = flight
passenger = amad;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100_000_000);
};

newPassport(amad);

checkIn("LH123", amad);
