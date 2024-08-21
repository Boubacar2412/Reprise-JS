// Game variables
let score = 0;
let timeLeft = 30;
let timerId;
let moleTimerId;
let lastHole;

// Function to randomly select a hole
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

// Function to randomly show a mole
function showMole() {
  const holes = document.querySelectorAll(".hole");
  const mole = randomHole(holes).querySelector(".mole");
  mole.classList.remove("hidden");
  moleTimerId = setTimeout(() => {
    mole.classList.add("hidden");
    if (timeLeft > 0) {
      showMole();
    }
  }, Math.random() * 1000 + 400); // Mole stays up for a random time between 400ms to 1400ms
}

// Function to start the game
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
      alert("Game Over! Your score is " + score);
    }
  }, 1000);
}

// Function to handle mole clicks
function whackMole() {
  if (!this.classList.contains("hidden")) {
    score++;
    document.getElementById("score").textContent = score;
    this.classList.add("hidden");
  }
}

// Event listener for the start button
document.getElementById("start-btn").addEventListener("click", startGame);

// Add event listeners to all moles
const moles = document.querySelectorAll(".mole");
moles.forEach((mole) => mole.addEventListener("click", whackMole));
