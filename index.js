// For the right image
var numberRandome1 = Math.floor(Math.random() * 6) + 1;
var randomeDiceImage = "Dice" + numberRandome1 + ".png";
var randomImageSource = "images/" + randomeDiceImage;
var image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomImageSource);

// For the left image
var numberRandome2 = Math.floor(Math.random() * 6) + 1;
var randomeDiceImage2 = "Dice" + numberRandome2 + ".png";
var randomImageSource2 = "images/" + randomeDiceImage2;
var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);

if (numberRandome1 < numberRandome2) {
  document.querySelector("h2").innerHTML =
    "Le joueur 2 a gagné Rakh GORGORLOUL";
} else if (numberRandome1 > numberRandome2) {
  document.querySelector("h2").innerHTML =
    "Le joueur 1 a gagné Rakh GORGORLOUL";
} else {
  document.querySelector("h2").innerHTML = "Diémolen Dra";
}
