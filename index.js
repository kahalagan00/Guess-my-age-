"use strict";
import figures from "./figures.js";

/**
 * Author: Joshmar Morales
 */

const MAX_MOBILE_WIDTH = 768; // In pixels

const startGame = function () {
  displayMainImage();
  displayCurrentYear();
  displayBirthYear();
  displayAttempts(`Attempts: ${tries}`);
  displayHighScore();
  console.log(realAnswer); // To debug and see answers in console :)
};

const resetGame = function () {
  changeTitle("What is my age?", BASE_TEXT_COLOR);
  tries = 10;
  win = false;
  birthYear = generateRandomBirthYear();
  currentAge = currentYear - birthYear;
  document.querySelector(".guess").value = "";
  displayStatusInput(defaultPlaceholder, BASE_COLOR);
  displayAttempts(`Attempts: ${tries}`);
  displayCurrentYear();
  displayBirthYear();
  displayMainImage();

  clientWidth = document.documentElement.clientWidth;
  mainImageContainer.style.transform =
    clientWidth <= 1000 ? `translateX(0)` : `translateX(50%)`;
  figureContainer.style.transform =
    clientWidth <= 1000 ? `translateX(0)` : `translateX(-50%)`;
  showInformation(false);
  console.log(`currentAge = ${currentAge}`); // To debug and see answers in console :)
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

  mainImage.src = `./assets/figures/century${century}/${centuryGroup[personIndex].name}/pfp.jpg`;

  // console.log(`Src = ${mainImage.src}`);
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

const displayStatusInput = function (message, color = "white") {
  guessBox.value = "";
  guessBox.placeholder = message;
  guessBox.style.backgroundColor = color;
};

const displayAttempts = function (message) {
  attemptEl.textContent = message;
  attemptEl.style.color = tries > 0 ? "green" : "red";
};

const changeTitle = function (message, color) {
  title.textContent = message;
  title.style.color = color;
};

let clientWidth = document.documentElement.clientWidth;

const checkAnswer = function () {
  const guess = Number(guessBox.value);

  if (tries > 0 && !win) {
    if (guess <= 0) {
      displayStatusInput("Positive", NEUTRAL_COLOR);
    } else if (guess === currentAge) {
      changeTitle("EXCELLENT!!! You got it right 🥳", WINNING_COLOR);
      displayStatusInput("Correct!", POSITIVE_COLOR);

      // Show figure name and description
      if (clientWidth > MAX_MOBILE_WIDTH) {
        mainImageContainer.style.transform = `translateX(0)`;
        figureContainer.style.transform = `translateX(0)`;
      } else {
        mainImageContainer.style.transform = `translateY(0)`;
        figureContainer.style.transform = `translateY(0)`;
      }

      setTimeout(() => {
        showInformation(true);
      }, 250);

      // Game winning variable
      win = true;
      console.log(`Client width = ${clientWidth}`);
    } else if (guess < currentAge) {
      displayStatusInput("Older", NEGATIVE_COLOR);
      tries--;
    } else if (guess > currentAge) {
      displayStatusInput("Younger", NEGATIVE_COLOR);
      tries--;
    }
  }

  if (tries === 0) {
    displayStatusInput("Lose", false);
    changeTitle("Game Over 🥲", LOSING_COLOR);
  }

  if (tries === 0 || win) {
    if (tries > highScore) {
      highScore = tries;
    }
    displayHighScore();
  }

  displayAttempts(`Attempts: ${tries}`);
};

// Globals
const WINNING_COLOR = "green";
const LOSING_COLOR = "red";
const NEGATIVE_COLOR = "#eb879c";
const POSITIVE_COLOR = "#87eba4";
const NEUTRAL_COLOR = "#FFFF6E";
const BASE_COLOR = "white";
const BASE_TEXT_COLOR = "black";

const date = new Date();
const currentYear = date.getFullYear();
const title = document.querySelector(".main-title");
const mainImageContainer = document.querySelector(".answer-divide__img-divide");
const mainImage = document.querySelector(".figure-photo");
const figureContainer = document.querySelector(".answer-divide__figure-divide");
const figureName = document.querySelector(".figure-name");
const figureDescription = document.querySelector(".figure-description");
const submitBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".reset");
const guessBox = document.querySelector(".guess");
const defaultPlaceholder = guessBox.dataset.placeholder;
const attemptEl = document.querySelector(".attempts");

let highScore = 0;
let win = false;
let tries = 10;
let birthYear = generateRandomBirthYear();
let currentAge = currentYear - birthYear;
let realAnswer = `answer: ${currentAge}`;

// Event listeners
submitBtn.addEventListener("click", checkAnswer);

guessBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

resetBtn.addEventListener("click", resetGame);

startGame();

window.addEventListener("resize", function () {
  // console.log(window.innerWidth);
  mainImageContainer.style.transform =
    window.innerWidth <= 1000 ? `translateX(0)` : `translateX(50%)`;
  figureContainer.style.transform =
    window.innerWidth <= 1000 ? `translateX(0)` : `translateX(-50%)`;
});
