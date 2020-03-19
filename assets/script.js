var wordArray = ["apple", "banana", "pineapple", "watermelon", "starfruit"];
var livesRemaining = 9;
var wins = 0;
var losses = 0;
var playerInput;
var randomWord;
var wordBlanks;
var alphabetString = "abcdefghijklmnopqrstuvwxyz".split("")[0];
var winsHtml = document.getElementsByClassName("winsHtml")[0];
var LossesHtml = document.getElementsByClassName("lossesHtml")[0];
var wordDisplayHtml = document.getElementsByClassName("wordDisplayHtml")[0];
var livesHtml = document.getElementsByClassName("livesHtml")[0];
var guessedLettersHtml = document.getElementsByClassName(
	"guessedLettersHtml"
)[0];

function displayBlanks() {
	wordBlanks = [];
	for (i = 0; i < randomWord.length; i++) {
		wordBlanks.push("_");
	}
	console.log(wordBlanks);
}

function getRandomWord() {
	randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	console.log(randomWord);
}

function startGame() {
	getRandomWord();
	displayBlanks();
}
startGame();

function userWins() {
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
}

getRandomWord();
