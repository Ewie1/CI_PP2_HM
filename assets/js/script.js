/**
 * Declare all variables
 */
 let playerScore = 0;
 let computerScore = 0;
let rock_selection = document.getElementById("rock");
let paper_selection = document.getElementById("paper");
let scissors_selection = document.getElementById("scissors");
let results = document.getElementsByClassName("result");
let playerCount = document.getElementById("player-score");
let computerCount = document.getElementById("computer-score");
let scoreBoard = document.getElementsByClassName("score-count");




/**
 * Call rock, paper, scissor selections and add click eventlistener 
 */

 function game () {
    rock_selection.addEventListener("click",function(){
        runGame("rock");
    })
    paper_selection.addEventListener("click",function(){
        runGame("paper");
    }) 
    scissors_selection.addEventListener("click",function(){
        runGame("scissors");
    }) 

}

game();



function runGame(playSelections){
 let computer = computerSelection();
   switch(computer + playSelections) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
         incrementPlayerWin();
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
           incrementPlayerLose(); 
            break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            incrementDraw();
           break;                      

    }
}

/**
 * 
 * set function to add random selctions for computer
 */

 function computerSelection(){
    let selections = ["rock", "paper", "scissors"];
    let compSelection = Math.floor(Math.random() * 3);
    return selections[compSelection];
}

function imageSelection(){
    let image = document.getElementsByClassName("result-selection");
}




function gameRules(){

}

function incrementPlayerWin(){

    let playerCount = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerCount;
    document.getElementById("result").innerText = "You win!"; 


   
  /*  playerScore++;
    playerCount.innerHTML = playerScore;
    computerCount.innerHTML = computerScore; */
   // results.innerHTML =` ${player} beats ${computer} You Win!`

    
    
    console.log("win")
}

function incrementPlayerLose(){

    let computerCount = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerCount;
    document.getElementById("result").innerText = "You Lose!"; 
    console.log("lose");
   /* let computerScore = 0;
    computerScore++;
    computerCount.innerHTML = computerScore; */
}

function incrementDraw(){
    document.getElementById("result").innerText = "Draw!"; 
}


function isWinner(){

}

function selectionResults(){

}