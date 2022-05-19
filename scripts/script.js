




const btnContainer = document.getElementById("btn-container");
console.log(btnContainer)

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
console.log(alphabet);

for ([i, letter] of Object.entries(alphabet)) {
    btnContainer.innerHTML += `<button type="button" class="btn${i} col-lg-1 mx-2 my-3 col-md-4 btn btn-secondary" style= "width: 10%">${letter}</button>`
}


const preview = document.querySelector("preview")





function getData() {

    return fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(word => word.json())
        .then(randomWord => {
            return randomWord[0].split('');

        })
}


