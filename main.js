window.addEventListener('load', init);
//Available level
var levels = {
    easy: 5,
    medium: 3,
    hard: 2
}

//To change level
var currentLevel = levels.easy;

//global variable
let time = currentLevel;
let score = 0;
let isPlaying;
//DOM Elements
const wordInput = document.querySelector('.input-text');
const currentWord = document.querySelector('.current-word');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const seconds = document.querySelector('.seconds');
const mess = document.querySelector('.mess');
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

//Initialize Game
function init() {
    showWord(words);
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50);
    wordInput.addEventListener('input', startMatch);
}

function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}
function countDown() {
    if (time > 0) {
        time--;
    } else if (time == 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}
function checkStatus() {
    if (!isPlaying && time === 0) {
        mess.innerHTML = 'Game Over';
        score = -1;
    }
}
function startMatch() {
    if (matchWords()) {
        isPlayin = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;

    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else { scoreDisplay.innerHTML = score; }

}
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        mess.innerHTML = 'Correct'
        return true;
    } else {
        mess.innerHTML = '';
        return false;
    }
}