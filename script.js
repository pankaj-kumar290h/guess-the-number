'use strict';

// random number
let random = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ first fill a number';
  } else if (guess < random) {
    document.querySelector('.message').textContent = 'too low';
    score--;
  } else if (guess > random) {
    document.querySelector('.message').textContent = 'too high';
    score--;
  } else if (guess === random) {
    document.querySelector('.message').textContent = 'correct answer';
    document.querySelector('.number').textContent = random;

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
  }

  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  random = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
