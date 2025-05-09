'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const scoreElement = document.querySelector('.score');
const highscoreElement = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const bodyElement = document.querySelector('body');

const displayMessage = function (message) {
  messageElement.textContent = message;
};

const updateScore = function (score) {
  scoreElement.textContent = score;
};

const resetGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  updateScore(score);
  numberElement.textContent = '?';
  guessInput.value = '';
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
};

const handleGuess = function () {
  const guess = Number(guessInput.value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberElement.textContent = secretNumber;
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreElement.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      updateScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      updateScore(0);
    }
  }
};

document.querySelector('.check').addEventListener('click', handleGuess);
document.querySelector('.again').addEventListener('click', resetGame);
