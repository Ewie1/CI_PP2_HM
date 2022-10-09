




function main(){
    let pScore = 0;
    let cScore = 0;
    //call inner functions
   gameIntro();
    runGame();
      // funtion to fade intro page
function gameIntro ()  {
      let playBtn = document.querySelector(".intro button");
      let introScreen = document.querySelector(".intro");
      let match = document.querySelector(".game");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //function to run game
function  runGame(){
    let options = document.querySelectorAll(".selections button");
    let playerImage = document.querySelector(".player-image");
    let computerImage = document.querySelector(".computer-image");

    // Computer option
    let computerOptions =["rock", "paper", "scissors"];

   for (let i = 0; i < options.length; i++){
            options[i].addEventListener("click", function(){
                let computerNumber = Math.floor(Math.random() * 3);
                let computerChoice = computerOptions[computerNumber];
                //Call checkWinner here
              checkWinner(this.id, computerChoice);
                // display selected images
            playerImage.src = `assets/images/${this.id}.png`;
            console.log(this.id)
          computerImage.src = `assets/images/${computerChoice}.png`;
            })
       }
}

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
        displayResult.textContent = "Youu Wins!!";
        pScore++;
        scoreResults();
        return;
      } else {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      } else {
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      } else {
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        return;
      }
    }
}
}
// start game function
main();