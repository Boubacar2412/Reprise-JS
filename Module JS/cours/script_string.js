const airline = "Air Guinee";

const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(plane.length);

console.log("B737"[3]);
console.log("B737".length);

console.log(plane.indexOf("A"));
console.log(airline.indexOf("e"));
console.log(airline.lastIndexOf("e"));

console.log(airline.indexOf("Guinee"));

console.log(airline.slice(4));

console.log(airline.toLowerCase());
console.log("Air Guinee".toUpperCase());

const formatPassengerName = (passenger) => {
  const passengerLower = passenger.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};

console.log(formatPassengerName("aMAdoU"));
console.log(formatPassengerName("OUSMANE"));
console.log(formatPassengerName("sama"));

//Check email
const passengerEmail = "hello@ous.com";
const loginEmail = " Hello@ous.Com ";

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();

// console.log(trimedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
const normalisedEmail1 = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

// replacing
const priceGNF = "4.000.000 GNF";
const priceCFA = priceGNF.replace("GNF", "XOF").replaceAll(".", " ");

console.log(priceCFA);

const announcement =
  "All passenger are called to bording door 23. Boarding door 23!";

console.log(announcement.replace(/door/g, "gate"));

console.log(announcement.includes("door"));
console.log(announcement.startsWith("Al"));
console.log(announcement.endsWith("23!"));

console.log("a+very+nice+day".split("+"));
console.log("Amadou Ly".split(" "));

const [firstName, lastName] = "Amadou Ly".split(" ");

console.log(firstName);
console.log(lastName);

`${firstName} ${lastName}`;

const newName = ["Mr", "Amadou", "Ly".toUpperCase()].join(" ");
console.log(newName);

const passenger = "n'dilamo ousmane samory toure";

const capitalizeName = function (name) {
  const chunks = name.split(" ");
  const chunksUpper = [];

  for (const chunk of chunks) {
    chunksUpper.push(chunk[0].toUpperCase() + chunk.slice(1));
  }

  return chunksUpper;
};

const normalizedName = capitalizeName(passenger).join(" ");
console.log(normalizedName);

//Padding
const message = "Go to gate 23!";

console.log(message.padStart(2, "+").padEnd(2, "+"));
// console.log(message.padEnd(25, "+_*"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last4Digit = str.slice(-4);
  const maskedPart = last4Digit.padStart(str.length, "*");

  // Add spaces every 4 characters
  // return maskedPart.replace(/(.{4})/g, "$1 ").trim();

  let result = "";

  for (let i = 0; i < maskedPart.length; i++) {
    if (i > 0 && i % 4 === 0) {
      result += " ";
    }
    result += maskedPart[i];
  }

  return result;
};

maskCreditCard(4337876386487348);
console.log(maskCreditCard("76386487348"));

//Repeat
const message2 = "Bad weather...All departure delayed... ";

console.log(message2.repeat(5));

const planesInline = function (n) {
  console.log(`There are  ${n} [planes in line ${"✈️".repeat(n)}]`);
};

planesInline(5);
planesInline(4);
planesInline(3);
planesInline(1);
