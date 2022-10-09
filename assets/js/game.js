
function main(){
    let pScore = 0;
    let cScore = 0;
    //call inner functions
   gameIntro();
    runGame();
    winGame();
    loseGame();
    restartGame();
    resetGame();
      // funtion to fade intro page
function gameIntro (){
      let playBtn = document.querySelector(".intro button");
      let introScreen = document.querySelector(".intro");
      let match = document.querySelector(".game");
  
      playBtn.addEventListener("click", function(){
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //function to run game
function  runGame(){
    const options = document.querySelectorAll(".selections button");
    const playerImage = document.querySelector(".player-image");
    const computerImage = document.querySelector(".computer-image");
    const computerOptions =["rock", "paper", "scissors"];
   

   for (let i = 0; i < options.length; i++){
            options[i].addEventListener("click", function(){
                let computerNumber = Math.floor(Math.random() * 3);
                let computerSelection = computerOptions[computerNumber];
                //Call checkWinner here
              checkWinner(this.id, computerSelection);
                // display selected images
            playerImage.src = `assets/images/${this.id}.png`;
            console.log(this.id)
          computerImage.src = `assets/images/${computerSelection}.png`;
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
function checkWinner (playerSelection, computerSelection) {
    //Update Text
    let displayResult = document.querySelector(".results");
    //Checking for a tie
    if (playerSelection === computerSelection) {
      displayResult.textContent = "Draw";
      return;
    }
    //Check for Rock
    if (playerSelection === "rock" && computerSelection === "scissors") {
        displayResult.textContent = "Youu Wins!!";
        pScore++;
        scoreResults();
        winGame();
        loseGame();
        return;
      } else if (playerSelection === "rock" && computerSelection === "paper") { 
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        winGame();
        loseGame();
        return;
      }
  //Check for Paper
    if (playerSelection === "paper" && computerSelection === "scissors") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        winGame();
        loseGame();
        return;
      } else if(playerSelection === "paper" && computerSelection === "rock"){
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        winGame();
        loseGame();
        return;
      }
    //Check for Scissors
    if (playerSelection === "scissors" && computerSelection === "rock") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        winGame();
        loseGame();
        return;
      } else if(playerSelection === "scissors" && computerSelection === "paper") {
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        winGame();
        loseGame();
        return;
      }
      const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener('click', function () {
    window.location.reload();})
    }
    /**Win game function
     * Stop click selection at max pscore value
     * Fade out match screen and fade in restart screen
     */
function winGame(){
 // pScore++;
  //cScore++;
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  let match = document.querySelector(".game");
  let restartScreen = document.querySelector(".restart-game")
  playerScore.innerText = pScore;
  computerScore.innerText = cScore; 
  if(pScore === 12){
    gameOver();
    match.classList.add("fadeOut");
        restartScreen.classList.add("fadeIn");
        const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener('click', () => {
    window.location.reload();})
    console.log("hello");
 console.log(restartBtn);
      //  reset.addEventListener("click", resetGame);
}
    }

     /**lose game function
     * Stop click selection at max cscore value
     * Fade out match screen and fade in restart screen
     */
function loseGame(){
  
  let playerScore = document.getElementById("player-score");
  let computerScore = document.getElementById("computer-score");
  let match = document.querySelector(".game");
  let restartScreen = document.querySelector(".restart-game")
  playerScore.innerText = pScore;
  computerScore.innerText = cScore; 
  if (cScore === 12){
    gameOver();
    match.classList.add("fadeOut");
    restartScreen.classList.add("fadeIn");
    const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener('click', () => {
    window.location.reload();})
    console.log("hello");
 console.log(restartBtn);
    }
} 
/**Game over function
 * Prevent actions when selections are clicked
 */
 
function gameOver(){
  
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");

  rock.setAttribute("disabled", "disabled");
  paper.setAttribute("disabled", "disabled");
  scissors.setAttribute("disabled", "disabled");
}
/**
 * Fades in restart
 */
function restartGame(){
 // let reset = document.getElementsByClassName("restart-game");
 // reset.addEventListener("click", resetGame);
 
}

function resetGame(){
  runGame();
  scoreResults();
  checkWinner();
}

const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener('click', () => {
    window.location.reload();})
    console.log("hello");
 console.log(restartBtn);

}
// call main function
main();
//let options =["rock", "paper", "scissor"];
