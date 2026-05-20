//objects as data structure

//without objects
const playerOneName = "Tom";
const playerTwoName = "Doris";
const playerOneMarker = "X";
const playerTwomarker = "O"

//with objects
const playerOne = {
	name: "Tom",
	marker: "X",
};

const playerTwo = {
	name: "Doris",
	marker: "O",
};

function gameOver(winningPlayer) {
	console.log(`congratulations ${winningPlayer.name} is the winner!`)
};

gameOver(playerOne);

