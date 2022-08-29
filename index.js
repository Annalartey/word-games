const inputs = document.querySelector(".inputs");
reset = document.querySelector(".reset-btn");
hint = document.querySelector(".hint span");
guesses = document.querySelector(".guess-remaining span");
wrongLetters = document.querySelector(".wrong-letter span");
typingInput = document.querySelector(".typing-inputs");
let word,
  maxGuesses,
  corrects = [];
  incorrects = [];

function randomWord() {
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word;
  maxGuesses = 8;
  corrects = [];
  incorrects = [];
  console.log(word); 

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;
  hint.innerHTML = ranObj.hint;
  guesses.innerHTML = maxGuesses;
  wrongLetters.innerText = incorrects;
}
randomWord();

function initGame(e) {
  let key = typingInput.value;
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrects.includes(` ${key}`) &&
    !corrects.includes(key)
  ) {
    console.log(key);
    //if the letter is found in word
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        //showing matched letter in respective box
        if (word[i] === key) {
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      incorrects.push(` ${key}`);
    }
    guesses.innerHTML = maxGuesses;
    wrongLetters.innerText = incorrects;
  }

  typingInput.value = "";

  setTimeout(() => {
    if (maxGuesses < 1) {
      alert("better luck next time");
      for (let i = 0; i < word.length; i++) {
        //showing letter in respective box
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    } else if (corrects.length === word.length) {
      alert("you did well guy");
      randomWord();
    }
  });
}
initGame();

reset.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
document.addEventListener("keydown", () => typingInput.focus());
