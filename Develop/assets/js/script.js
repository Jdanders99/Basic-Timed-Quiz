// Variables
var startBtn = document.getElementById('start');
var seconds = 60;
var timeEl = document.getElementById('time');

// Click the start button, timer starts and user is presented with a question

startBtn.addEventListener('click', function() {
    setTime();
});

function setTime() {
var timerInterval = setInterval(function() {
    seconds--;
    timeEl.textContent = seconds
    if (seconds === 0) {
        clearInterval(timerInterval);
    }

    }, 1000);
}

// Answering a question, leads to the next question

// Answer incorrectly, subtracts time from the timer

// Game is over after all questions or timer hits 0

// When game is over, you can save name and final score

