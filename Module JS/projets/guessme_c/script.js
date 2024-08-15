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

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hightScore = 0;

const message = document.querySelector(".message");
const check = document.querySelector(".check");

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input
  if (!guess) {
    message.textContent = "Pas de nombre 🛑";
    //player wins
  } else if (guess === secretNumber) {
    message.textContent = "🎉 Nombre correct!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > hightScore) {
      hightScore = score;
      document.querySelector(".highscore").textContent = hightScore;
    }
    // guess is too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = "📉 Trop grand !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥 Vous avez perdu !";
    }
    //guess is too low
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

const again = document.querySelector(".again");
again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Commencez à deviner..";
});
