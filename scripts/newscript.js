const wordList = [
    {word: "guitar", hint: "A musical instrument with strings."},
    {word: "oxygen", hint: "A colorless, odorless gas essential for life."},
    {word: "mountain", hint: "A large natural elevation of the Earth's surface."},
    {word: "painting", hint: "An art form using colors on a surface."},
    {word: "astronomy", hint: "The scientific study of celestial objects."},
    {word: "football", hint: "A popular sport played with a spherical ball."},
    {word: "chocolate", hint: "A sweet treat made from cocoa beans."},
    {word: "butterfly", hint: "An insect with colorful wings."},
    {word: "history", hint: "The study of past events."},
    {word: "pizza", hint: "A savory dish with toppings on a round base."},
    {word: "camera", hint: "A device used to capture images."},
    {word: "diamond", hint: "A precious gemstone known for its brilliance."},
    {word: "adventure", hint: "An exciting or daring experience."},
    {word: "science", hint: "The systematic study of the natural world."},
    {word: "bicycle", hint: "A human-powered vehicle with two wheels."},
    {word: "sunset", hint: "The daily disappearance of the sun."},
    {word: "coffee", hint: "A popular caffeinated beverage."},
    {word: "galaxy", hint: "A vast system of stars and dust."},
    {word: "volcano", hint: "A mountain with a vent that ejects lava."},
    {word: "rainbow", hint: "A meteorological phenomenon with colors."},
    {word: "universe", hint: "All existing matter and space."},
    {word: "piano", hint: "A musical instrument with keys."},
    {word: "vacation", hint: "Time devoted to rest and relaxation."},
    {word: "fire", hint: "Combustion that gives heat and light."},
    {word: "love", hint: "An intense feeling of affection."},
    {word: "book", hint: "Pages bound together for reading."},
    {word: "tree", hint: "A woody plant with a trunk and branches."},
    {word: "moon", hint: "Earth's natural satellite."},
    {word: "star", hint: "A luminous point in the night sky."},
    {word: "unbelievable", hint: "Too extraordinary to be believed."},
    {word: "extraordinary", hint: "Very unusual or remarkable."},
    {word: "magnificent", hint: "Extremely beautiful or impressive."},
    {word: "spectacular", hint: "Beautiful in a dramatic way."},
    {word: "imagination", hint: "The ability to form new ideas or images."},
    {word: "celebration", hint: "Marking a special occasion with activity."}
];

const expandedList = "";

// Game Variables
const hangmanImage = document.querySelector("#hangman-svg");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const keyboardDiv2 = document.querySelector(".keyboard2");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const musicBtn = document.querySelector("#music-button");
const skipBtn = document.querySelector("#skip-button");
const high_score = document.querySelector(".high_score");
const current_score = document.querySelector(".current_score");

let currentWord, correctLetters, wrongGuessCount, difficulty, ifWordBank, currentScore = 0, currentHighScore;
const maxGuesses = 6;
const disabledKeys = {};
const buttons = [];

// Hangman SVG stages
const hangmanStages = [
    // Stage 0 - Base only (already in HTML)
    `<line x1="10" y1="230" x2="150" y2="230" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="230" x2="40" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="20" x2="120" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="20" x2="120" y2="50" stroke="#333" stroke-width="4"/>`,
    // Stage 1 - Head
    `<line x1="10" y1="230" x2="150" y2="230" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="230" x2="40" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="20" x2="120" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="20" x2="120" y2="50" stroke="#333" stroke-width="4"/>
     <circle cx="120" cy="65" r="15" stroke="#333" stroke-width="4" fill="none"/>`,
    // Stage 2 - Body
    `<line x1="10" y1="230" x2="150" y2="230" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="230" x2="40" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="20" x2="120" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="20" x2="120" y2="50" stroke="#333" stroke-width="4"/>
     <circle cx="120" cy="65" r="15" stroke="#333" stroke-width="4" fill="none"/>
     <line x1="120" y1="80" x2="120" y2="130" stroke="#333" stroke-width="4"/>`,
    // Stage 3 - Left arm
    `<line x1="10" y1="230" x2="150" y2="230" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="230" x2="40" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="20" x2="120" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="20" x2="120" y2="50" stroke="#333" stroke-width="4"/>
     <circle cx="120" cy="65" r="15" stroke="#333" stroke-width="4" fill="none"/>
     <line x1="120" y1="80" x2="120" y2="130" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="90" x2="95" y2="110" stroke="#333" stroke-width="4"/>`,
    // Stage 4 - Right arm
    `<line x1="10" y1="230" x2="150" y2="230" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="230" x2="40" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="20" x2="120" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="20" x2="120" y2="50" stroke="#333" stroke-width="4"/>
     <circle cx="120" cy="65" r="15" stroke="#333" stroke-width="4" fill="none"/>
     <line x1="120" y1="80" x2="120" y2="130" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="90" x2="95" y2="110" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="90" x2="145" y2="110" stroke="#333" stroke-width="4"/>`,
    // Stage 5 - Left leg
    `<line x1="10" y1="230" x2="150" y2="230" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="230" x2="40" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="20" x2="120" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="20" x2="120" y2="50" stroke="#333" stroke-width="4"/>
     <circle cx="120" cy="65" r="15" stroke="#333" stroke-width="4" fill="none"/>
     <line x1="120" y1="80" x2="120" y2="130" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="90" x2="95" y2="110" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="90" x2="145" y2="110" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="130" x2="100" y2="160" stroke="#333" stroke-width="4"/>`,
    // Stage 6 - Right leg (complete)
    `<line x1="10" y1="230" x2="150" y2="230" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="230" x2="40" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="40" y1="20" x2="120" y2="20" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="20" x2="120" y2="50" stroke="#333" stroke-width="4"/>
     <circle cx="120" cy="65" r="15" stroke="#333" stroke-width="4" fill="none"/>
     <line x1="120" y1="80" x2="120" y2="130" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="90" x2="95" y2="110" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="90" x2="145" y2="110" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="130" x2="100" y2="160" stroke="#333" stroke-width="4"/>
     <line x1="120" y1="130" x2="140" y2="160" stroke="#333" stroke-width="4"/>`
];

function updateHangmanImage() {
    hangmanImage.innerHTML = hangmanStages[wrongGuessCount];
}

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    currentHighScore = HighScore();
    high_score.innerText = currentHighScore;
    current_score.innerText = currentScore;
    updateHangmanImage();
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    keyboardDiv2.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
    enableAllKeys();
}

const getRandomWord = () => {
    const filteredWords = wordList.filter(wordObj => wordObj.word.length === difficulty);
    
    if (filteredWords.length === 0) {
        const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
        currentWord = word;
        document.querySelector(".hint-text b").innerText = hint;
    } else {
        const { word, hint } = filteredWords[Math.floor(Math.random() * filteredWords.length)];
        currentWord = word;
        document.querySelector(".hint-text b").innerText = hint;
    }
    resetGame();
}

const difficultySetting = (selectedDifficulty) => {
    switch (selectedDifficulty) {
        case "easy":
            difficulty = Math.floor(Math.random() * 4) + 4;
            break;
        case "medium":
            difficulty = Math.floor(Math.random() * 3) + 8;
            break;
        case "hard":
            difficulty = Math.floor(Math.random() * 3) + 11;
            break;
        case "any":
            difficulty = 0;
            break;
    }
    getRandomWord();
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        const modalContent = gameModal.querySelector(".content");
        modalContent.querySelector("img").src = isVictory ? './images/victory.gif' : './images/lost.gif';
        gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
        
        if (isVictory) {
            currentScore += 1;
            updateHighScore(currentScore);
        } else {
            currentScore = 0;
        }
    }, 300);
}

const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        updateHangmanImage();
    }
    
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

const initGameInput = (clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        updateHangmanImage();
    }
    
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}

function disableKey(key) {
    disabledKeys[key] = true;
}

function isKeyDisabled(key) {
    return disabledKeys[key];
}

function enableAllKeys() {
    for (const key in disabledKeys) {
        delete disabledKeys[key];
    }
}

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

function updateHighScore(newScore) {
    if (newScore > currentHighScore) {
        addHighScore(newScore);
    }
}

function addHighScore(score) {
    let highScore = JSON.parse(localStorage.getItem('highScores')) || [];
    highScore.push({ score });
    highScore.sort((a, b) => b.score - a.score);
    highScore = highScore.slice(0, 1);
    localStorage.setItem('highScore', JSON.stringify(highScore));
}

function HighScore() {
    let highScores = JSON.parse(localStorage.getItem('highScore')) || [];
    return highScores.length > 0 ? highScores[0].score : 0;
}

// Keyboard setup
const keyboardLayout1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const keyboardLayout2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const keyboardLayout3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

for (let i = 0; i < 10; i++) {
    const button = document.createElement("button");
    button.innerText = keyboardLayout1[i];
    keyboardDiv.appendChild(button);
    buttons.push(button);
    button.addEventListener("click", e => initGame(e.target, keyboardLayout1[i]));
}

for (let i = 0; i < 9; i++) {
    const button = document.createElement("button");
    button.innerText = keyboardLayout2[i];
    keyboardDiv.appendChild(button);
    buttons.push(button);
    button.addEventListener("click", e => initGame(e.target, keyboardLayout2[i]));
}

for (let i = 0; i < 7; i++) {
    const button = document.createElement("button");
    button.innerText = keyboardLayout3[i];
    keyboardDiv2.appendChild(button);
    buttons.push(button);
    button.addEventListener("click", e => initGame(e.target, keyboardLayout3[i]));
}

// Keyboard event listener
window.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (/^[a-z]$/.test(key) && !isKeyDisabled(key)) {
        initGameInput(key);
        disableKey(key);
        
        let buttonIndex = keyboardLayout1.indexOf(key);
        if (buttonIndex !== -1) {
            buttons[buttonIndex].disabled = true;
            return;
        }
        
        buttonIndex = keyboardLayout2.indexOf(key);
        if (buttonIndex !== -1) {
            buttons[keyboardLayout1.length + buttonIndex].disabled = true;
            return;
        }
        
        buttonIndex = keyboardLayout3.indexOf(key);
        if (buttonIndex !== -1) {
            buttons[keyboardLayout1.length + keyboardLayout2.length + buttonIndex].disabled = true;
        }
    }
});

// Event listeners
let muted = true;
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.volume = 0.5;
musicBtn.addEventListener("click", () => {
    if(muted) {
        backgroundMusic.play();
        musicBtn.innerHTML = '<span>🔊 Music On</span>';
        muted = false;
    } else {
        backgroundMusic.pause();
        musicBtn.innerHTML = '<span>🔇 Music Off</span>';
        muted = true;
    }
});


const difficultySelect = document.getElementById("difficulty");
const wordBankUse = document.getElementById("word-bank");

skipBtn.addEventListener("click", () => difficultySetting(difficultySelect.value));

difficultySelect.addEventListener("change", () => {
    currentScore = 0;
    difficultySetting(difficultySelect.value);
    difficultySelect.blur();
});

playAgainBtn.addEventListener("click", () => difficultySetting(difficultySelect.value));

// Initialize game
difficultySetting(difficultySelect.value);
