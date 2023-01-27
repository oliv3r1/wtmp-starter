//author: Oliver

const minNumber = 1;
const maxNumber = 100;
const maxGuesses = 10;

let startTime;
let endTime;
let totalGuesses;

let randomNumber =
  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

let computerGuess = -1;
let guessHistory = [];

const checkGuess = () => {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
    startTime = new Date();
  }
  guesses.textContent += `${userGuess} `;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    playerGuesses = guesses.textContent;
    endTime = new Date();
    setGameOver();
  } else if (guessCount === maxGuesses) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    endTime = new Date();
    totalGuesses = guessCount;
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
};

guessSubmit.addEventListener("click", function () {
  checkGuess();
  computerPlayer();
});

const setGameOver = () => {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
  const elapsedTime = (endTime - startTime) / 1000;
  const elapsedTimeParagraph = document.createElement("p");
  elapsedTimeParagraph.textContent = `Time Used: ${elapsedTime} seconds`;
  document.querySelector(".resultParas").appendChild(elapsedTimeParagraph);

  if (lastResult.textContent === "Congratulations! You got it right!") {
    const guessesParagraph = document.createElement("p");
    guessesParagraph.textContent = `Your guesses: ${guessCount}`;
    document.querySelector(".resultParas").appendChild(guessesParagraph);
  }
};

const resetGame = () => {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

const computerPlayer = () => {
  //range of possible numbers
  let min = minNumber;
  let max = maxNumber;

  //number of guesses
  let guessCount = 0;

  guessCount = 0;
  guessHistory = [];
  randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  // while the guess is not correct
  while (computerGuess !== randomNumber) {
    // increment the number of guesses
    guessCount++;
    computerGuess = Math.floor(Math.random() * (max - min + 1)) + min;
    // save the guess to the history
    guessHistory.push(computerGuess);
    if (computerGuess === randomNumber) {
      console.log(`It took the computer ${guessCount} guesses.`);
      console.log(`Computer guess history: ${guessHistory}`);
      break;
    } else if (computerGuess < randomNumber) {
      min = computerGuess + 1;
    } else {
      max = computerGuess - 1;
    }
  }
};

//week3
//1
let password = "hello";
let input = "";

document.addEventListener("keydown", (event) => {
  input += event.key;
  checkPassword();
});

const checkPassword = () => {
  if (input === password) {
    alert("Cheats activated!");
    input = "";
  }
};
//2
document.addEventListener("dblclick", (event) => {
  let x = event.clientX;
  let y = event.clientY;
  console.log("Double-click at x: " + x + ", y: " + y);
});
//3
let touch = document.createElement("div");
touch.innerHTML = "<span style='color: white;'>Click me!</span>";

touch.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch") {
    console.log("Touch detected");
  }
});
document.body.appendChild(touch);
//4
let idleTime = 0;
let message = document.createElement("div");
message.innerHTML = "Hurry up!";
message.style.display = "none";
message.style.backgroundColor = "red";
document.body.appendChild(message);

let idleInterval = setInterval(() => {
  idleTime = idleTime + 1;
  if (idleTime > 14) {
    message.style.display = "block";
    message.style.borderRadius="20px";

  }
}, 1000);

document.onclick = (e) => {
  idleTime = 0;
  message.style.display = "none";
};

document.onkeydown = (e) => {
  idleTime = 0;
  message.style.display = "none";
};


