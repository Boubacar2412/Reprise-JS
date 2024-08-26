"use strict";

let score = 0;
let timeLeft = 30;
let timerId;
let moleTimerId;
let lastHole;

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function showMole() {
  const holes = document.querySelectorAll(".hole");
  const mole = randomHole(holes).querySelector(".mole");
  mole.classList.remove("hidden");
  moleTimerId = setTimeout(() => {
    mole.classList.add("hidden");
    if (timeLeft > 0) {
      showMole();
    }
  }, Math.random() * 1000 + 400); // Durée aléatoire entre 400ms et 1400ms
}

function whackMole() {
  if (!this.classList.contains("hidden")) {
    score++;
    document.getElementById("score").textContent = score;
    this.classList.add("hidden");
  }
}

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = score;
  document.getElementById("time-left").textContent = timeLeft;
  clearTimeout(moleTimerId);
  clearInterval(timerId);
  showMole();
  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById("time-left").textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerId);
      clearTimeout(moleTimerId);
      alert("Jeu terminé! Votre score est de " + score);
    }
  }, 1000);
}

document.getElementById("start-btn").addEventListener("click", startGame);

const moles = document.querySelectorAll(".mole");
moles.forEach((mole) => mole.addEventListener("click", whackMole));
