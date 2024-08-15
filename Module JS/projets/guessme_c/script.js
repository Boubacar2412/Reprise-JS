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

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".number").textContent = secretNumber;

const message = document.querySelector(".message");
const check = document.querySelector(".check");

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "Pas de nombre 🛑";
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Nombre correct!";
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = "📉 Trop grand !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥 Vous avez perdu !";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      message.textContent = "📈 Trop petit !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥 Vous avez perdu !";
    }
  }
});
