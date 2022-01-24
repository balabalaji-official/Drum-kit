var dicePics = document.querySelectorAll("img");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
dicePics[0].setAttribute("src", "images/" + randomDiceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
dicePics[1].setAttribute("src", "images/" + randomDiceImage2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
} else {
    document.querySelector("h1").textContent = "Match Draw";
}