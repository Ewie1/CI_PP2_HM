/**
 * Declare all variables
 */
let rock_selection = document.getElementById("rock");
let paper_selection = document.getElementById("paper");
let scissors_selection = document.getElementById("scissors");
let results = document.getElementsByClassName("result");
//let playerCount = document.getElementsByClassName("player-score");
let computerCount = document.getElementsByClassName("computer-score");
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

function playerSelection(){

}




function gameRules(){

}

function incrementPlayerWin(){

    let playerCount = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++playerCount;

   /* let playerScore = 0;
    playerScore++;
    playerCount.innerHTML = playerScore; */
    
    console.log("win")
}

function incrementPlayerLose(){

    let computerCount = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerCount;
    console.log("lose")
   /* let computerScore = 0;
    computerScore++;
    computerCount.innerHTML = computerScore; */
}

function incrementDraw(){
    
}


function isWinner(){

}

function selectionResults(){

}