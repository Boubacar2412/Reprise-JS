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
