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

document.addEventListener("DOMContentLoaded", function() {
    rock_selection.addEventListener("click",function(){
        runGame("rock");
    })
    paper_selection.addEventListener("click",function(){
        runGame("paper");
    }) 
    scissors_selection.addEventListener("click",function(){
        runGame("scissor");
    }) 
})


/**
 * 
 * set function to add random selctions for computer
 */

 function computerSelection(){
    let selections = ["rock", "paper", "scissors"];
    let compSelection = Math.floor(Math.random() * 3);
    return selections[compSelection];
}

function runGame(playSelections){
    console.log("me" + playSelections);
   // let computer = computerSelection();
   // let player = playerSelection();
   // switch(computer + player) {
     //   case "rockscissors":
       // case "paperrock":
     //   case "scissorspaper":
     //      console.log("Win!");
     //       break;
     //   case "scissorsrock":
     //   case "rockpaper":
     //   case "paperscissors":
     //       console.log("Lose!"); 
     //       break;
     //   case "scissorsscissors":
     //   case "rockrock":
     //   case "paperpaper":
     //       console.log("Draw!");
     //       break;                      

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