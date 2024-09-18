const secureBooking = function () {
  let passengerCount = 0;

  // other variables

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const secureBooking2 = function () {
  let passengerCount = 0;

  // other variables

  function booker() {
    // throught the scope chain
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
};
let passengerCount = 1000;
const booker = secureBooking();

booker();
booker();
booker();

const mall = function (name, superfice, priceBym2) {
  console.log(
    `${name}Mall is ${superfice} m2 and affordable for ${priceBym2}$/m2`
      .padStart(this.length + 1, "==")
      .padEnd(this.length + 1, "==")
  );

  let malOwner = "Ouas";

  return function (shopName, shopSuperfice) {
    return {
      shopName,
      shopSuperfice,
      mall: name,
      priceBym2,
      shopPrice: shopSuperfice * priceBym2,
    };
  };
};

const conakryMallRent = mall("Conakry", 6500, 300);

console.log(conakryMallRent("M7P", 500));

console.dir(conakryMallRent);

// Exemple 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };

  // f(); // variable look up on the scope chain
};

const a = 10;

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46
console.dir(f);

h();
f(); //
console.dir(f);

// Exemple 2
const boardPassenger = function (n, waitTime) {
  const perGroup = Math.floor(n / 3);

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, waitTime * 1000);

  console.log(`Will start boarding in ${waitTime} sec`);
};

boardPassenger(30, 3);
