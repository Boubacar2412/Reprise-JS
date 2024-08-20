"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

const openModal = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === " ") {
    if (modal.classList.contains("hidden")) {
      openModal();
    } else {
      closeModal();
    }
  }
});
