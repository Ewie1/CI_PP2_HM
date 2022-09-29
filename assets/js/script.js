/**
 * Wait for DOM to finish load before running game
 * Call rock, paper, scissor selections and add click eventlistener 
 */

document.addEventListener("DOMContentLoaded", function() {
    let rock_selection = document.getElementById("rock");
    let paper_selection = document.getElementById("paper");
    let scissors_selection = document.getElementById("scissors");

    rock_selection.addEventListener("click",function(){
        alert("You clicked rock");
        runGame("rock");
    })
    paper_selection.addEventListener("click",function(){
        runGame("paper");
    }) 
    scissors_selection.addEventListener("click",function(){
        runGame("scissor");
    }) 
})

function runGame(playerSelection){

}

function playerSelection(){

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