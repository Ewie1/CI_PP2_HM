/**
 * Wait for DOM to finish load before running game
 * Call rock, paper, scissor selections and add click eventlistener 
 */


document.addEventListener("DOMContentLoaded", function() {
    let rock_selection = document.getElementById("rock");
    let paper_selection = document.getElementById("paper");
    let scissors_selection = document.getElementById("scissors");

    rock_selection.addEventListener("click",function(){
        alert("You clicked rock")
    })
    paper_selection.addEventListener("click",function(){}) 
    scissors_selection.addEventListener("click",function(){}) 
})

function runGame(){

}

function playerSelection(){

}

function computerSelection(){

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