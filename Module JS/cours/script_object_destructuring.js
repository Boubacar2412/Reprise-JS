"use strict";

const heroescoffee = {
  name: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
  order(starterIdx, mainIdx) {
    return [this.startMenu[starterIdx], this.mainMenu[mainIdx]];
  },
};
