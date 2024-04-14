"use strict";

const displayCurrentYear = () => {
  document.querySelector(".current-year").textContent = `${currentYear}`;
};

const displayBirthYear = (message) => {
  document.querySelector(".born-year").textContent = message;
};

const generateRandomBirthYear = () => {
  return Math.trunc(Math.random() * currentYear) + 1;
};

const displayStatus = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayAttempts = (message) => {
  document.querySelector(".attempts").textContent = message;
  document.querySelector(".attempts").style.color = tries > 0 ? "green" : "red";
};

const displayEnding = (message) => {
  document.querySelector(".ending").textContent = message;
};

const date = new Date();
const currentYear = date.getFullYear();
let win = false;
let tries = 10;
let birthYear = generateRandomBirthYear();
let currentAge = currentYear - birthYear;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (tries > 0 && !win) {
    if (guess <= 0) {
      displayStatus("Enter a non-zero positive number please.");
    } else if (guess === currentAge) {
      displayStatus("EXCELLENT!!! You got it right 🥳");
      win = true;
    } else if (guess < currentAge) {
      displayStatus("I am older than that! ⬆️");
      tries--;
    } else if (guess > currentAge) {
      displayStatus("I am younger than that! ⬇️");
      tries--;
    }
  }

  if (tries === 0) {
    displayStatus("You ran out of attempts...");
  }

  if (tries === 0 || win) {
    displayEnding("Please press the reset button to restart the game");
  }

  displayAttempts(`Attempts: ${tries}`);
});

document.querySelector(".reset").addEventListener("click", function () {
  tries = 10;
  win = false;
  birthYear = generateRandomBirthYear();
  currentAge = currentYear - birthYear;
  document.querySelector(".guess").value = "";
  displayStatus("");
  displayAttempts(`Attempts: ${tries}`);
  displayEnding("");
  displayCurrentYear();
  displayBirthYear(birthYear);
  console.log(`answer: ${currentAge}`);
});

displayCurrentYear();
displayBirthYear(birthYear);
displayAttempts(`Attempts: ${tries}`);
console.log(`answer: ${currentAge}`);
