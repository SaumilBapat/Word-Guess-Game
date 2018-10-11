
var characters = ["gohan", "goku", "krillin", "piccolo", "raditz", "trunks", "vegeta"];
var currentCharacter = 0;
var word = [];
var selectedLetters = [];
var guessesRemaining = 5;
var wins = 0;
var losses = 0;
$(document).ready(function() {
  renderWord();
  renderSelectedLetters();
  renderRemainingGuesses();
  renderScore();
});

function renderWord() {
  var won = true;
  $("#letters").empty();
  for (var i = 0; i < characters[currentCharacter].length; i++) {

    var letter = $("<div>");
    letter.addClass("letter");
    letter.attr("data-letter", letters[i]);
    if(selectedLetters.indexOf(characters[currentCharacter][i]) > -1) {
      word[i] = characters[currentCharacter][i];
    } else {
      word[i] = "-";
      won = false;
    }
    letter.text(word[i]);
    $("#letters").append(letter);
  }
  if (won) {
    alert("Congrats! the word is " + characters[currentCharacter]);
    currentCharacter++;
    wins++;
    selectedLetters = [];
    guessesRemaining = 5;
    renderWord();
    renderSelectedLetters();
    renderRemainingGuesses();
    renderScore();
  } else if (guessesRemaining == 0){
    alert("You Lost! Try Again!");
    currentCharacter = 0;
    losses++;
    selectedLetters = [];
    guessesRemaining = 5;
    renderWord();
    renderSelectedLetters();
    renderRemainingGuesses();
    renderScore();
  }
}

function renderSelectedLetters() {
  $("#lettersSelected").empty();
  for (var i = 0; i < selectedLetters.length; i++) {
    var letter = $("<div>");
    letter.addClass("letter");
    letter.attr("data-letter", selectedLetters[i]);
    letter.text(selectedLetters[i]);
    $("#lettersSelected").append(letter);
  }
}

function renderScore() {
    $("#score").empty();
    var winScore = $("<div>");
    winScore.addClass("letter");
    winScore.attr("data-letter", wins);
    winScore.text("Wins: " + wins);
    $("#score").append(winScore);
    var lossScore = $("<div>");
    lossScore.addClass("letter");
    lossScore.attr("data-letter", losses);
    lossScore.text("Losses: " + losses);
    $("#score").append(lossScore);
}

function renderRemainingGuesses() {
  $("#guessesRemaining").empty();
    var letter = $("<div>");
    letter.addClass("letter");
    letter.attr("data-letter", guessesRemaining);
    letter.text(guessesRemaining);
    $("#guessesRemaining").append(letter);
}

$(document).keydown(function(event) {
  if(event.which > 64 && event.which < 91) {
    if(selectedLetters.indexOf(event.key) < 0) {
      selectedLetters[selectedLetters.length] = event.key;
      if(characters[currentCharacter].indexOf(event.key) < 0) {
        guessesRemaining--;
      }
    }
    renderWord();
    renderSelectedLetters();
    renderRemainingGuesses();
    renderScore();
  }

});
