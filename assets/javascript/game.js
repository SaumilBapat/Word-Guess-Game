
var characters = ["gohan", "goku", "krillin", "piccolo", "raditz", "trunks", "vegeta"];
var currentCharacter = 0;
var word = [];
var selectedLetters = [];
var guessesRemaining = 5;
$(document).ready(function() {
    renderWord();
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
    selectedLetters = [];
    guessesRemaining = 5;
    renderWord();
    renderSelectedLetters();
    renderRemainingGuesses();
  } else if (guessesRemaining == 0){
    alert("You Lost! Try Again!");
    currentCharacter = 0;
    selectedLetters = [];
    guessesRemaining = 5;
    renderWord();
    renderSelectedLetters();
    renderRemainingGuesses();
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
  }

});
