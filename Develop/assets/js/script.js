// Variables
var startBtn = document.getElementById('start');
var seconds = 60;
var timeEl = document.getElementById('time');

var questions = [
    {question:'Which of the following elements is not an html element?', answers:['span', 'div', 'h7', 'body'], correctAnswer: 2},
    {question:'Which of the following would you use to create an array?', answers:['<>', '[]', '{}', '()'], correctAnswer: 1},
    {question:'How many different header tags can you make?', answers:['2', '3', '5', '6'], correctAnswer: 3},
    {question:'What is the correct term for true/false statements?', answers:['boolean', 'string', 'numbers', 'span'], correctAnswer: 0},
    {question:'What can you do if you dont understand this?', answers:['Google', 'Tutor', 'Phone a friend', 'All of the Above'], correctAnswer: 3}
];

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

// Click the start button, timer starts and user is presented with a question

// Answering a question, leads to the next question

// Answer incorrectly, subtracts time from the timer

// Game is over after all questions or timer hits 0

// When game is over, you can save name and final score
