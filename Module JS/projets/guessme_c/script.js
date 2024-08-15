"use strict";

// document.querySelector(".message").textContent = "Nombre juste 🏆";

// const score = document.querySelector(".score");
// const secretNumber = document.querySelector(".number");
// const guess = document.querySelector(".guess");

// guess.value = 20;

// score.textContent = 0;
// secretNumber.textContent = 12;

// const again = document.querySelector(".again");
// again.addEventListener("click", function () {
//   document.querySelector(".message").textContent = "Nombre juste 🏆";
// });

// function handler() {
//     console.log("Hello !!");
//   }

//   handler();

const number = Math.trunc(Math.random() * 20 + 1);

document.querySelector(".number").textContent = number;

const message = document.querySelector(".message");
const check = document.querySelector(".check");

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess && guess !== 0) {
    message.textContent = "Pas de nombre 🛑";
  }
});
