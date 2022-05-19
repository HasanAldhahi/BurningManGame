




const btnContainer = document.getElementById("btn-container");
console.log(btnContainer)

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

for ([i, letter] of Object.entries(alphabet)) {
    btnContainer.innerHTML += `<button type="button" id="btn${i}" class="alph-btn col-lg-1 mx-2 my-3 col-md-4 btn btn-secondary fs-4" style= "width: 10%">${letter}</button>`
}


const preview = document.querySelector("preview")
const hint = document.getElementById("hint")
const btnHint = document.getElementById("btn-hint")









fetch("https://random-word-api.herokuapp.com/word?number=1")
    .then(word => word.json())
    .then((randomWord) => {
        const pressed = 0;
        const getDefinition = () => {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${randomWord}`)
                .then(response => {
                    if (!response.ok) {
                        throw "Sorry Pal, this is not a spelling Bee competition"
                    }
                    return response.json();
                })
                .then(arr => {
                    console.log("hello")
                    const def = arr[0]?.meanings[0].definitions["0"].definition;
                    console.log(def);
                    console.log(hint)
                    hint.innerHTML += (`Hint: ${def}`)

                }).catch(error => {
                    console.log(error)
                    hint.innerHTML += `${error}`
                    console.log(hint)
                })
        }


        btnHint.addEventListener('click', () => {
            if (pressed !== 0) {
                getDefinition();
                pressed += 1;
            }
        })
        return randomWord[0].split('');
    })


