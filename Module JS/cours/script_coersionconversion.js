// Type Conversion => conversion manuelle
// On ne peut faire des conversion que pour number, string et boolean

const inputYear = "1991";
const inputYear_ = Number(inputYear); // conversion
console.log(inputYear_ + 1);

// inputYear;
// inputYear_;

// NaN = not a number
console.log(Number("Amadou"));
console.log(String(23), 23);

// Type Coersion => conversion automatique par JS
console.log("I'm" + 30);
console.log("I'm" + String(30));

console.log("20" - 30);
console.log("ama" - 30);

console.log("20" * 30);
console.log("qaaa" * 30);

let n = "1" + 1;
n = n - 1;
