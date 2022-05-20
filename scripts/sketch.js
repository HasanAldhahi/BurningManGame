

const portrait = document.getElementById('portrait')


function windowResized() {
    resizeCanvas(window.innerWidth / 2, window.innerHeight / 5);


}
function setup() {
    var canvas = createCanvas(window.innerWidth / 2, window.innerHeight / 5);
    canvas.parent("portrait")
}

function draw() {
    background(0, 0, 0);




}





