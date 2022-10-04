
function main(){
    let pScore = 0;
    let cScore = 0;




function playGame(){
    let options = document.querySelectorAll(".selections button");
    let playerHand = document.querySelector(".player-image");
    let computerHand = document.querySelector(".computer-image");

    // Computer option
    let computerOptions =["rock", "paper", "scissors"];

   // for (let i = 0; i < options.length; i++)
       options.forEach(option => {
            option.addEventListener("click", function(){
                //Computer choice
                let computerNumber = Math.floor(Math.random() * 3);
                let computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);
                

                //Call checkWinner here
              checkWinner(this.textContent, computerChoice);
                

                //Function to display selected images
            playerHand.src = `assets/images/${this.textContent}.png`;
          computerHand.src = `assets/images/${computerChoice}.png`;
            });
       
       
    });
};

// Function to determine scores

function scoreResults (){
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  playerScore.innerText = pScore;
  computerScore.innerText = cScore;
}



//Function to determine winner or loser

function checkWinner (playerChoice, computerChoice) {
    //Update Text
    let displayResult = document.querySelector(".results");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      displayResult.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        displayResult.textContent = "Player Wins";
        pScore++;
        scoreResults();
        return;
      } else {
        displayResult.textContent = "Computer Wins";
        cScore++;
        scoreResults();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        displayResult.textContent = "Computer Wins";
        cScore++;
        scoreResults();
        return;
      } else {
        displayResult.textContent = "Player Wins";
        pScore++;
        scoreResults();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        displayResult.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        displayResult.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }



}
// Call all innerfunctions
playGame();
}

// start game function
main();