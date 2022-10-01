/**
 * Declare all variables
 */
let rock_selection = document.getElementById("rock");
let paper_selection = document.getElementById("paper");
let scissors_selection = document.getElementById("scissors");
let results = document.getElementsByClassName("result");
let playercount = document.getElementsByClassName("player-score");
let computerCount = document.getElementsByClassName("computer-score");
let scoreBoard = document.getElementsByClassName("score-count")




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
         console.log("Win!");
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            console.log("Lose!"); 
            break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            console.log("Draw!");
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

}

function incrementPlayerLose(){

}

function isWinner(){

}

function selectionResults(){

}