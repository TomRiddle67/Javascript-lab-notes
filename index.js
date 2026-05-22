//objects for abstract concepts

const rps = {
	playerScore: 0,
	computerScore: 0,
	
	playRound (playerChoice) {
		for (choice in playerChoice) {
			if (playerChoice === "rock") {
				if (computerChoice === "rock") {
					return "It's a tie!";
				} else if (computerChoice === "paper") {
					this.computerScore++;
					return "You lose! Paper beats rock.";
				} else {
					this.playerScore++;
					return "You win! Rock beats scissors.";
				}
		}
	
	},
	
	getWinner(){
	
	},
	
	reset(){

	},

};

rps.playRound("rock");
console.log(rps.playerScore);
rps.playRound("rock");
console.log(rps.playerScore);
rps.playRound("scissors");
console.log(computerScore);

console.log(rps.getWinner());

rps.reset();

console.log(rps.playerScore);
console.log (rps.computerScore);
