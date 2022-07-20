var rn1 = Math.random();
var rnTimes1 = rn1 * 6;
var randomNumber1 = Math.floor(rnTimes1) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1; 
var diceOneImage = document.querySelectorAll("img")[0];
diceOneImage.setAttribute("src", randomImageSource1);

var rn2 = Math.random();
var rnTimes2 = rn2 * 6;
var randomNumber2 = Math.floor(rnTimes2) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var diceTwoImage = document.querySelectorAll("img")[1];
diceTwoImage.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} 
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}