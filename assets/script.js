var wordArray = ["apple", "banana", "pineapple", "watermelon", "starfruit"];
var livesRemaining = 9;
var wins = 0;
var losses = 0;
var playerInput;
var randomWord;
var wordBlanks;
var guessedLetters = [];
var alphabetString = "abcdefghijklmnopqrstuvwxyz".split("");
var winsHtml = document.getElementsByClassName("winsHtml")[0];
var LossesHtml = document.getElementsByClassName("lossesHtml")[0];
var wordDisplayHtml = document.getElementsByClassName("wordDisplayHtml")[0];
var livesHtml = document.getElementsByClassName("livesHtml")[0];
var guessedLettersHtml = document.getElementsByClassName("guessedLettersHtml")[0];
var alertHtml = document.getElementsByClassName("alertBar");

//determining length of the word and pushing underlines into an array
function displayBlanks() {
	wordBlanks = [];
	for (i = 0; i < randomWord.length; i++) {
		wordBlanks.push("_");
	}

	//replacing the commas in the array with spaces as it is pushed to the HTML
	wordDisplayHtml.innerText = wordBlanks.join(" ");
	console.log(wordBlanks);
}

function getRandomWord() {
	randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    randomWord = randomWord.split("");
    console.log(randomWord);
    displayBlanks();
    
}

function startGame() {
	getRandomWord();
	displayBlanks();
}

startGame();

document.onkeyup = function(event) {
	var playerInput = event.key.toLowerCase();
	console.log(playerInput);
	if (alphabetString.includes(playerInput) == false) {
		console.log("not a letter");
	} else if (guessedLetters.includes(playerInput)) {
		console.log("you already did that");
	} else {
		guessedLetters.push(playerInput);
		console.log(guessedLetters);
		guessedLettersHtml.innerText = guessedLetters.join(", ");
		if (randomWord.includes(playerInput) == false) {
            livesRemaining--;
            livesHtml.innerText = livesRemaining;
            if (livesRemaining == 0){
                return userLosses();
                reset();
            }
		} else {
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i].includes(playerInput)){
                    console.log(i);
                    wordBlanks[i] = playerInput;
                    wordDisplayHtml.innerText = wordBlanks.join(" ");
                    if (wordBlanks.includes("_") == false) {
                        userWins();
                    }
                }
			}
		}
	}
};


function userWins() {
    wordDisplayHtml.innerText = wordBlanks.join(" ")
    wins++;
	winsHtml.textContent = wins;
	alert("yay");
	reset();
}

function userLosses() {
	losses++;
	LossesHtml.textContent = losses;
	alert("Boo!");
	reset();
}

function reset() {
	wordDisplayHtml.textContent = "";
	guessedLettersHtml.textContent = "";
	livesHtml.textContent = "9";
    livesRemaining = 9;
    guessedLetters = [];
    getRandomWord();
    displayBlanks();
}

getRandomWord();
