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
