


let counter; // counts no. of correct guesses

var guess;
var guesses = [];
const btnContainer = document.getElementById("btn-container");
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet)
for ([i, letter] of Object.entries(alphabet)) {
  btnContainer.innerHTML += `<button type="button" id="btn${i}" name = "btns" class="alph-btn col-lg-1 mx-2 my-3 col-md-4 btn btn-secondary fs-4" style= "width: 10%">${letter}</button>`
}


const preview = document.querySelector("preview")
const hint = document.getElementById("hint")
const btnHint = document.getElementById("btn-hint")







var word = []
const fetchWord = () => {
  return fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then(word => word.json())
    .then((randomWord) => {
      word = randomWord[0].split('')
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${randomWord}`)
        .then(response => {
          if (!response.ok) {
            hint.innerHTML = (`No Available Hint for The current word, You are on your own now :(`)
            throw "Sorry Pal, this is not a spelling Bee competition"
          }
          return response.json()
        })
        .then(arr => {
          // console.log(arr)
          const def = arr[0]?.meanings[0].definitions["0"].definition;
          btnHint.addEventListener('click', () => {
            hint.innerHTML = (`Hint: ${def}`)

          })

        })

    })
}

result = function () {
  wordHolder = document.getElementsByClassName('preview')[0];
  correct = document.createElement('ul');

  for (var i = 0; i < word.length; i++) {
    correct.setAttribute('id', 'my-word');

    guess = document.createElement('li');
    guess.setAttribute('class', 'guess');


    guess.innerHTML = "_";


    guesses.push(guess);
    wordHolder.appendChild(correct);
    correct.appendChild(guess);
  }
}
async function startGame() {
  const loadWord = await fetchWord()
  await result()
}
startGame()




//counts number of lives remaining and displays it as a comment:
function comments() {
  livesCounter = document.getElementById("lives");
  livesCounter.innerHTML = "Lives Remaining: " + lives;
  if (lives < 1) {
    livesCounter.innerHTML = "Game Over";
  }
  for (let i = 0; i < guesses.length; i++) {
    if (counter === guesses.length) {
      livesCounter.innerHTML = "You Won!"
    }
  }
}

// check onClick function : 
// when clicking on a letter button ...
function onClick() {
  button = getElementById("btn").getElementByTagName("button");
  button.onClick = function () {
    let guess = (this.innerHTML);
    this.onClick = null;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        guesses[i].innerHTML = guess;
        counter += 1;
      }
    }
    // if the guess is not in the word, the lives will decrease by 1
    let j = word.indexOf(guess)
    if (j === -1) {
      lives -= 1;
      comments();
    } else {
      comments();
    }
  }
}
