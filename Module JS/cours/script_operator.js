// Arithmetique operator
const birthYear = 2000;
const currentYear = 2024;

const amadouAge = currentYear - birthYear;
const aodAge = currentYear - 1998;

console.log((aodAge * 2) / 2, amadouAge ** 2);
console.log("Amadou", 12 + 4, true);

const firstName = "Amadou";
const lastName = "Ly";

console.log(typeof firstName + " " + lastName);

// Assignement Operator
let x = 10 + 5;

x += 10; // x = x + 10
x -= 10; // x = x - 10
x *= 10; // x = x * 10
x /= 10; // x = x / 10
x %= 10; // x = x % 10

// Partie Arithmetique
x++; // x = x+1
++x; // x = x+1

x--; // x = x-1
--x; // x = x-1

// Comparison operator
console.log(aodAge > amadouAge);
console.log(aodAge < amadouAge);
console.log(aodAge <= amadouAge);
console.log(aodAge >= amadouAge);
console.log(aodAge == amadouAge);
console.log(aodAge === amadouAge);
