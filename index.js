"use strict";
import figures from "./figures.js";

/*
  Author: Joshmar Morales
  Last updated: April 26, 2024
*/

const showInformation = (win) => {
  if (win) {
    figureName.classList.remove("hidden");
    figureDescription.classList.remove("hidden");
  } else {
    figureName.classList.add("hidden");
    figureDescription.classList.add("hidden");
  }
};

const displayMainImage = () => {
  const personIndex = Math.trunc(Math.random() * 3);
  let century;
  let centuryGroup;

  // JOSHMAR DEBUG AND CHANGE
  // The century needs to match with the calculated age
  century = Math.floor((birthYear - 1) / 100) + 1;

  switch (century) {
    case 1:
      centuryGroup = figures.peopleInCentury1;
      break;

    case 2:
      centuryGroup = figures.peopleInCentury2;
      break;

    case 3:
      centuryGroup = figures.peopleInCentury3;
      break;

    case 4:
      centuryGroup = figures.peopleInCentury4;
      break;

    case 5:
      centuryGroup = figures.peopleInCentury5;
      break;

    case 6:
      centuryGroup = figures.peopleInCentury6;
      break;

    case 7:
      centuryGroup = figures.peopleInCentury7;
      break;

    case 8:
      centuryGroup = figures.peopleInCentury8;
      break;

    case 9:
      centuryGroup = figures.peopleInCentury9;
      break;

    case 10:
      centuryGroup = figures.peopleInCentury10;
      break;

    case 11:
      centuryGroup = figures.peopleInCentury11;
      break;

    case 12:
      centuryGroup = figures.peopleInCentury12;
      break;

    case 13:
      centuryGroup = figures.peopleInCentury13;
      break;

    case 14:
      centuryGroup = figures.peopleInCentury14;
      break;

    case 15:
      centuryGroup = figures.peopleInCentury15;
      break;

    case 16:
      centuryGroup = figures.peopleInCentury16;
      break;

    case 17:
      centuryGroup = figures.peopleInCentury17;
      break;

    case 18:
      centuryGroup = figures.peopleInCentury18;
      break;

    case 19:
      centuryGroup = figures.peopleInCentury19;
      break;

    case 20:
      centuryGroup = figures.peopleInCentury20;
      break;

    case 21:
      centuryGroup = figures.peopleInCentury21;
      break;

    default:
      centuryGroup = figures.peopleInCentury1;
      break;
  }

  mainImage.src = `./century${century}/${centuryGroup[personIndex].name}/pfp.jpg`;

  figureName.textContent = centuryGroup[personIndex].name;

  figureDescription.textContent = centuryGroup[personIndex].description;
};

const displayHighScore = () => {
  document.querySelector(".highscore").textContent = `${highScore}`;
};

const displayCurrentYear = () => {
  document.querySelector(".current-year").textContent = `${currentYear}`;
};

const displayBirthYear = () => {
  document.querySelector(".born-year").textContent = birthYear;
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

const displayInputBox = (color) => {
  document.querySelector(".guess").style.backgroundColor = color;
};

const date = new Date();
const currentYear = date.getFullYear();
const mainImage = document.querySelector(".figure-photo");
const figureName = document.querySelector(".figure-name");
const figureDescription = document.querySelector(".figure-description");
let highScore = 0;
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
      displayInputBox("#2dff54");
      showInformation(true);
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
    displayInputBox("red");
  }

  if (tries === 0 || win) {
    if (tries > highScore) {
      highScore = tries;
    }
    displayHighScore();
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
  displayBirthYear();
  displayMainImage();
  displayInputBox("white");
  showInformation(false);
  console.log(`answer: ${currentAge}`); // Uncomment to debug and see answers in console :)
});

displayMainImage();
displayCurrentYear();
displayBirthYear();
displayAttempts(`Attempts: ${tries}`);
displayHighScore();
console.log(`answer: ${currentAge}`); // Uncomment to debug and see answers in console :)
