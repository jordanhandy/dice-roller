// Dice Roller
// Random selction between 2 die, to see who Wins

// Start game only on mouse click
document.querySelector("h1").addEventListener("click", diceChange);

// Create two random numbers.  One for die one, and one for die two
function diceChange() {
  var diceGenerator1 = Math.floor(Math.random() * 6 + 1);
  var diceGenerator2 = Math.floor(Math.random() * 6 + 1);
  //Alerts for debugging
  // alert("Dice Generator 1 = " + diceGenerator1);
  // alert("Dice Generator 2 = " + diceGenerator2);

  // First Die
  // Changing image located in HTML tags, depending on value of random number

  if (diceGenerator1 == 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
  } else if (diceGenerator1 == 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
  } else if (diceGenerator1 == 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
  } else if (diceGenerator1 == 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
  } else if (diceGenerator1 == 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  }
  // Second Die
  // Changing image located in HTML tags, depending on value of random number

  if (diceGenerator2 == 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  } else if (diceGenerator2 == 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  } else if (diceGenerator2 == 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  } else if (diceGenerator2 == 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  } else if (diceGenerator2 == 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }

  // Conditional determining the winner, depending on die values
  if (diceGenerator1 > diceGenerator2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  } else if (diceGenerator1 < diceGenerator2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw! 🚩";
  }
}
