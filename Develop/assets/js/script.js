// Variables
var startBtn = document.getElementById('start');
var seconds = 60;
var timeEl = document.getElementById('time');
var startScreen = document.getElementById('start-page');
var endScreen = document.getElementById('end-page');
var answersEl = document.getElementById('answers');
var questionEl = document.getElementById('question');
var timer;
var correct = 0
var submitBtn = document.getElementById('submit');
userInput = document.getElementById('names');

var questions = [
    {question:'Which of the following elements is not an html element?', answers:['span', 'div', 'h7', 'body'], correctAnswer: 'h7'},
    {question:'Which of the following would you use to create an array?', answers:['< >', '[ ]', '{ }', '( )'], correctAnswer: '[ ]'},
    {question:'How many different header tags can you make?', answers:['2', '3', '5', '6'], correctAnswer: '6'},
    {question:'What is the correct term for true/false statements?', answers:['boolean', 'string', 'numbers', 'span'], correctAnswer: 'boolean'},
    {question:'What can you do if you dont understand this?', answers:['Google', 'Tutor', 'Phone a friend', 'All of the Above'], correctAnswer: 'All of the Above'}
];

startBtn.addEventListener('click', function() {
    var timer = setInterval(setTime, 1000);
    timeEl.textContent = seconds;
    startScreen.setAttribute('class', 'hidden');
    questionEl.removeAttribute('class');
    displayQ();
});

function setTime() {
    seconds--;
    timeEl.textContent = seconds;

    if (seconds <= 0) {
        endPage();
    }
}

var questionNumber = 0;

function displayQ() {
    
    var questionInfo = questions[questionNumber];
    var questionOne = document.getElementById('question-one');

    questionOne.textContent = questionInfo.question;
    answersEl.innerHTML = '';

    for (var i = 0; i < questionInfo.answers.length; i++) {
        var answer = questionInfo.answers[i];
        var ansButton = document.createElement('button');
        ansButton.setAttribute('class', 'answers');
        ansButton.setAttribute('value', answer);

        ansButton.textContent = i + 1 + ". " + answer;
        answersEl.appendChild(ansButton);
    }
}

answersEl.onclick = answerQ;

function answerQ (event) {
    var buttonEl = event.target;

    if (buttonEl.value !== questions[questionNumber].correctAnswer) {
        seconds -= 10;
        timeEl.textContent = seconds;
    }
    
    if (buttonEl.value === questions[questionNumber].correctAnswer) {
        correct++;
    }

    if (seconds <= 0) {
        seconds = 0;
    }

    questionNumber++;

    if(seconds <= 0 || questionNumber === questions.length) {
        endPage()
    } else {
        displayQ();
    }
};

function endPage() {
    questionEl.setAttribute('class', 'hidden');
    endScreen.removeAttribute('class');
    clearInterval(timer);
    timeEl.textContent = seconds;
    seconds = 1

    var total = getElementById('total');
    total.textContent = correct;
}

function highScore() {
    var input = userInput.value;
    if (input !== '') {
        var highscores = 
            JSON.parse(window.localStorage.getItem('highscores'));
        
        var userObject = {
            Score: correct,
            Name: input,
        }
        highscores.push(userObject);
        window.location.href = 'highscores.html';
    }
}

submitBtn.addEventListener('click', highScore());
submitBtn.onlick = highScore;


// Click the start button, timer starts and user is presented with a question - check

// Answering a question, leads to the next question - check

// Answer incorrectly, subtracts time from the timer - check

// Game is over after all questions or timer hits 0 - check

// When game is over, you can save name and final score
