

const hangmanImage = document.querySelector(".hangman-box img");
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
const backgroundMusic = document.getElementById('background-music');
let currentWord, correctLetters, wrongGuessCount, difficulty, ifWordBank, currentScore = 0, currentHighScore;
const maxGuesses = 6;
const disabledKeys = {};
const buttons = [];
let muted = true;



const resetGame = () => {
    //Resetting all game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    currentHighScore = HighScore();
    high_score.innerText = currentHighScore;
    current_score.innerText = currentScore;
    hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    keyboardDiv2.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class = "letter"></li>`).join("");
    gameModal.classList.remove("show");
    enableAllKeys();
}
const getRandomWord = () => {
    const filteredWords = wordList.filter(wordObj => wordObj.word.length === difficulty);
    if(ifWordBank){
        const wordArray = splitWordList(expandedList);
        const filteredWordsArray = wordArray.filter(word => word.length === difficulty);
            if(filteredWordsArray.length === 0){
                const word = getRandomWordList(wordArray);
                currentWord = word;
                document.querySelector(".hint-text b").innerText = "";
                resetGame();
            } else {
                const word = getRandomWordList(filteredWordsArray);
                currentWord = word;
                document.querySelector(".hint-text b").innerText = "";
                resetGame();
            }
            if(currentWord.includes(" ")){
                currentWord = currentWord.replace(/ /g, "-");
            }
            [...currentWord].forEach((letter, index) => {
            if(letter === "-"){
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
            console.log(currentWord);
    } else {
        //Selecting a random word and hint from the wordList
        if (filteredWords.length === 0) {
            // No words of the specified length found, so choose from the entire list
            const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
            currentWord = word;
            document.querySelector(".hint-text b").innerText = hint;
            resetGame();
        } else {
            // Words of the specified length found, choose from the filtered list
            const { word, hint } = filteredWords[Math.floor(Math.random() * filteredWords.length)];
            currentWord = word;
            document.querySelector(".hint-text b").innerText = hint;
            resetGame();
        }
    }
}
const difficultySetting = (selectedDifficulty) => {
    // Depending on the selected difficulty, adjust game behavior
     switch (selectedDifficulty) {
        case "easy":
            difficulty = (Math.floor(Math.random() * 4)+4)
            break;
        case "medium":
            difficulty = (Math.floor(Math.random() * 3)+8)
            break;
        
        case "hard":
            difficulty = (Math.floor(Math.random() * 3)+11)
            break;
        case "any":
            difficulty = 0;
            break;
        default:
            // Default case
            break;
    }
    getRandomWord();
}


const wordBank = (usingWordBank) => {
    switch(usingWordBank) {
        case "no":
            ifWordBank = false;
            break;
        case "yes":
            ifWordBank = true;
            break;
        default:
            break;
    }
    getRandomWord();
}

const gameOver = (isVictory) => {
    //After 600ms of game complete.. showing modal with relevant details
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:`: `The correct word was:`;
        gameModal.querySelector("img").src = `./images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
        if(isVictory){
            currentScore += 1;
            updateHighScore(currentScore);
        }
        else{
            currentScore = 0;
        }
    }, 300);}
    const initGame = (button, clickedLetter) => {
        // Check if clickedLetter is exist on the currentWord
        if(currentWord.includes(clickedLetter)){
            //Showing all correct letters on the word display
            [...currentWord].forEach((letter, index) => {
                if(letter === clickedLetter){
                    correctLetters.push(letter);
                    wordDisplay.querySelectorAll("li")[index].innerText = letter;
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                }
            })
        } else {
            //If clicked letter doesn't exist then update the wrongGuessCount and hangman image
            wrongGuessCount++;
            hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`
        }
    
        button.disabled = true;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
        //Calling gameOver function if any of these condition meets
        if(wrongGuessCount === maxGuesses) return gameOver(false);
        if(correctLetters.length === currentWord.length) return gameOver(true);
    }
    
const initGameInput = (clickedLetter) => {
    // Check if clickedLetter is exist on the currentWord
    if(currentWord.includes(clickedLetter)){
        //Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter){
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        })
    } else {
        //If clicked letter doesn't exist then update the wrongGuessCount and hangman image
        wrongGuessCount++;
        hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`
    }

    //button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    //Calling gameOver function if any of these condition meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}
var difficultySelect = document.getElementById("difficulty");
difficultySelect.addEventListener("change", difficultySetting(difficultySelect)); 

difficultySetting(difficultySelect);

var wordBankUse = document.getElementById("word-bank");
wordBankUse.addEventListener("change", wordBank(wordBankUse));

wordBank(wordBankUse);


function disableKey(key) {
    disabledKeys[key] = true;
  }
  
  // Function to check if a key is disabled
  function isKeyDisabled(key) {
    return disabledKeys[key];
  }

  function enableAllKeys() {
    for (const key in disabledKeys) {
      delete disabledKeys[key];
    }
  }
  function music(){
    if(muted == true){
        backgroundMusic.play();
        muted = false;
    }
    else{
        backgroundMusic.pause();
        muted = true;
    }
  }
const keyboardLayout1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const keyboardLayout2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const keyboardLayout3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

for(let i = 0; i < 10; i++){
    const button = document.createElement("button");
    button.innerText = keyboardLayout1[i];
    keyboardDiv.appendChild(button);
    buttons.push(button); // Store reference to the button

    button.addEventListener("click", e => initGame(e.target, keyboardLayout1[i]));
}
for(let i = 0; i < 9; i++){
    const button = document.createElement("button");
    button.innerText = keyboardLayout2[i];
    keyboardDiv.appendChild(button);
    buttons.push(button); // Store reference to the button

    button.addEventListener("click", e => initGame(e.target, keyboardLayout2[i]));
}



for (let i = 0; i < 7; i++) {
    const button = document.createElement("button");
    button.innerText = keyboardLayout3[i];
    keyboardDiv2.appendChild(button);
    buttons.push(button); // Store reference to the button

    button.addEventListener("click", e => initGame(e.target, keyboardLayout3[i]));
}


function splitWordList(text) {
    return text.trim().split('\n');
}
function getRandomWordList(expandedList) {
    return expandedList[Math.floor(Math.random() * expandedList.length)];
}

window.addEventListener('keydown', (event) => {
    const key = event.key;
    // Check if the pressed key is a letter
    if (/^[a-zA-Z]$/.test(key) && !isKeyDisabled(key)) {
        initGameInput(event.key);
        disableKey(key);
        // Find the button associated with the pressed key in all layouts
        let buttonIndex = keyboardLayout1.indexOf(key);
        if (buttonIndex !== -1) {
            buttons[buttonIndex].disabled = true; // Disable the button
            return; // Exit the event listener early if the button is found
        }
        
        buttonIndex = keyboardLayout2.indexOf(key);
        if (buttonIndex !== -1) {
            buttons[keyboardLayout1.length + buttonIndex].disabled = true; // Disable the button
            return; // Exit the event listener early if the button is found
        }
        
        buttonIndex = keyboardLayout3.indexOf(key);
        if (buttonIndex !== -1) {
            buttons[keyboardLayout1.length + keyboardLayout2.length + buttonIndex].disabled = true; // Disable the button
        }
    } else {
        event.preventDefault();
        console.log(`Invalid key '${key}' pressed or key is disabled.`);
    }
});
function updateHighScore(newScore) {
    // Read the current high score from the file
    

        // Compare the current high score with the new score
        if (newScore > currentHighScore ) {
            // If the new score is higher or there's no current high score, update the file
            addHighScore(newScore);
            
        } 
    }
function addHighScore(score) {
    // Get existing high scores from localStorage or create an empty array if it doesn't exist
    let highScore = JSON.parse(localStorage.getItem('highScores')) || [];
    
    // Add the new high score to the array
    highScore.push({ score });
    
    // Sort the high scores in descending order based on score
    highScore.sort((a, b) => b.score - a.score);
    
    // Keep only the top high score
    highScore = highScore.slice(0);
    
    // Store the updated high scores back in localStorage
    localStorage.setItem('highScore', JSON.stringify(highScore));
}
function HighScore() {
    // Get high scores from localStorage
    let highScores = JSON.parse(localStorage.getItem('highScore')) || [];
    
    // Return the highest score
    if (highScores.length > 0) {
        return highScores[0].score;
    } else {
        return 0; // If no high scores found, return 0
    }
}
  musicBtn.addEventListener("click", () => music());
skipBtn.addEventListener("click", () => difficultySetting(difficultySelect.value));
difficultySetting(difficultySelect.value);
difficultySelect.addEventListener("change", () => {
    currentScore = 0;
    difficultySetting(difficultySelect.value);
    difficultySelect.blur(); // Automatically deselect the drop-down menu
});
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


getRandomWord();


difficultySelect.addEventListener("change", () => difficultySetting(difficultySelect.value));
playAgainBtn.addEventListener("click",()=> difficultySetting());


wordBankUse.addEventListener("change", ()=> {
    wordBank(wordBankUse.value);
    wordBankUse.blur();
});
playAgainBtn.addEventListener("click",() => wordBank());
