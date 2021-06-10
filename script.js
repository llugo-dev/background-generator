var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector("#generator");

function createGradient(first, second) {
    body.style.background = `linear-gradient(to right, ${first}, ${second})`;
    css.textContent = body.style.background + ";";
}

function generateRandom() {
    return Math.floor(Math.random() * 255);
}

function createColor() {
    var red = generateRandom();
    var green = generateRandom();
    var blue = generateRandom();
    return `rgb(${red}, ${green}, ${blue})`;
}

function pickRandomColors() {
    createGradient(createColor(), createColor());
}


color1.addEventListener("input", function(event) {
    createGradient(color1.value, color2.value);
});

color2.addEventListener("input", function(event) {
    createGradient(color1.value, color2.value);
});

button.addEventListener("click", pickRandomColors);


createGradient(color1.value, color2.value);
