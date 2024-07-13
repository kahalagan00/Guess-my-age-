"use strict";
import figures from "./figures.js";

/**
 * Author: Joshmar Morales
 */

const startGame = function () {
  displayMainImage();
  displayCurrentYear();
  displayBirthYear();
  displayAttempts(`Attempts: ${tries}`);
  displayHighScore();
  // console.log(realAnswer); // Uncomment to debug and see answers in console :)
};

const resetGame = function () {
  tries = 10;
  win = false;
  birthYear = generateRandomBirthYear();
  currentAge = currentYear - birthYear;
  document.querySelector(".guess").value = "";
  displayStatus("");
  displayStatusInput(defaultPlaceholder, NEUTRAL_COLOR);
  displayAttempts(`Attempts: ${tries}`);
  displayEnding("");
  displayCurrentYear();
  displayBirthYear();
  displayMainImage();
  showInformation(false);
  // console.log(realAnswer); // Uncomment to debug and see answers in console :)
};

const showInformation = function (win) {
  if (win) {
    figureName.classList.remove("hidden");
    figureDescription.classList.remove("hidden");
  } else {
    figureName.classList.add("hidden");
    figureDescription.classList.add("hidden");
  }
};

const displayMainImage = function () {
  const personIndex = Math.trunc(Math.random() * 3);
  let century;
  let centuryGroup;
  const figureGroup = [...figures];

  century = Math.floor((birthYear - 1) / 100) + 1;

  centuryGroup = figureGroup[century - 1];

  mainImage.src = `./century${century}/${centuryGroup[personIndex].name}/pfp.jpg`;

  figureName.textContent = centuryGroup[personIndex].name;

  figureDescription.textContent = centuryGroup[personIndex].description;
};

const displayHighScore = function () {
  document.querySelector(".highscore").textContent = `${highScore}`;
};

const displayCurrentYear = function () {
  document.querySelector(".current-year").textContent = `${currentYear}`;
};

const displayBirthYear = function () {
  document.querySelector(".born-year").textContent = birthYear;
};

const generateRandomBirthYear = function () {
  return Math.trunc(Math.random() * currentYear) + 1;
};

const displayStatus = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayStatusInput = function (message, color = "white") {
  guessBox.placeholder = message;
  guessBox.style.backgroundColor = color;
};

const displayAttempts = function (message) {
  document.querySelector(".attempts").textContent = message;
  document.querySelector(".attempts").style.color = tries > 0 ? "green" : "red";
};

const displayEnding = function (message) {
  document.querySelector(".ending").textContent = message;
};

const checkAnswer = function () {
  const guess = Number(guessBox.value);

  if (tries > 0 && !win) {
    if (guess <= 0) {
      displayStatus("Enter a positive number please.");
      displayStatusInput("Enter a positive number please.", NEGATIVE_COLOR);
    } else if (guess === currentAge) {
      displayStatus("EXCELLENT!!! You got it right 🥳");
      displayStatusInput("Right answer", POSITIVE_COLOR);
      showInformation(true);
      win = true;
    } else if (guess < currentAge) {
      displayStatus("I am older than that! ⬆️");
      displayStatusInput("Wrong answer", NEGATIVE_COLOR);
      tries--;
    } else if (guess > currentAge) {
      displayStatus("I am younger than that! ⬇️");
      displayStatusInput("Wrong answer", NEGATIVE_COLOR);
      tries--;
    }
  }

  if (tries === 0) {
    displayStatus("You ran out of attempts...");
    displayStatusInput("No more attempts", false);
  }

  if (tries === 0 || win) {
    if (tries > highScore) {
      highScore = tries;
    }
    displayHighScore();
    displayEnding("Please press the reset button to restart the game");
  }

  displayAttempts(`Attempts: ${tries}`);
};

// End of functions

const NEGATIVE_COLOR = "#eb879c";
const POSITIVE_COLOR = "#87eba4";
const NEUTRAL_COLOR = "white";

const date = new Date();
const currentYear = date.getFullYear();
const mainImage = document.querySelector(".figure-photo");
const figureName = document.querySelector(".figure-name");
const figureDescription = document.querySelector(".figure-description");
const submitBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".reset");
const guessBox = document.querySelector(".guess");
const defaultPlaceholder = guessBox.dataset.placeholder;
let highScore = 0;
let win = false;
let tries = 10;
let birthYear = generateRandomBirthYear();
let currentAge = currentYear - birthYear;
let realAnswer = `answer: ${currentAge}`;

submitBtn.addEventListener("click", checkAnswer);

guessBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

resetBtn.addEventListener("click", resetGame);

startGame();
