const weekdays = ["mon", "tue", "wed", "thursday", "fri", "sat", "sun"];

const openinHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // H24
    close: 24,
  },
};
const heroescoffee = {
  [openinHours]: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
  numGuests: null, // "" , false
  openinHours, // 1/ Es6 enhance object literal
  order(starterIdx, mainIdx) {
    return [this.startMenu[starterIdx], this.mainMenu[mainIdx]];
  },
  orderDelivery({
    time: deliveryTime = "20:00",
    starterIdx = 1,
    adress,
    mainIdx = 1,
    coursierId = 0,
  }) {
    console.log(
      `Order received! ${this.startMenu[starterIdx]} and ${this.mainMenu[mainIdx]} will be delivered to ${adress} at ${deliveryTime}`
    );
  },
  orderPizza: (ing1, ing2, ing3) =>
    console.log(`Here is your delicious Pizza with ${ing1}, ${ing2}, ${ing3}`),
};

const ordersSet = new Set([
  "Pizza",
  "Pasta",
  "Poulet",
  "Pizza",
  "Athieke",
  "Garba",
]);

console.log(ordersSet.size);
console.log(ordersSet);

console.log(new Set("Amadou Ousmane Diallo"));

console.log(ordersSet.has("Pizza")); // equivalent a include sur les Array
console.log(ordersSet.has("Couscous"));

ordersSet.add("Choukouya");
ordersSet.add("Choukouya");

console.log(ordersSet);

ordersSet.delete("Garba");
console.log(ordersSet);
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

// Exemple
let staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Delivery guy"];
const staffUnique = new Set(staff);

staffUnique;
staff = [...staffUnique];

staff;

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Delivery guy"]).size
);

console.log(new Set("Je suis tres content d'etres la avec vous").size);
