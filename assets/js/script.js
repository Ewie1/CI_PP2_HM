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
let finalColumn = document.querySelector("data-final-column");





/**
 * Call rock, paper, scissor selections and add click eventlistener 
 */

 function game () {
    rock_selection.addEventListener("click",function(){
        runGame("rock");
        imageSelection()
        
    })
    paper_selection.addEventListener("click",function(){
         paperImage();
        runGame("paper");
        imageSelection()
        
    }) 
    scissors_selection.addEventListener("click",function(){
        scissorsImage();
        runGame("scissors");
        imageSelection()
        
    }) 

}

game();



function runGame(playSelections){
 let computer = computerSelection();
   switch(playSelections + computer) {
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
    console.log(computer);
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
 
 /**
  * Write statement for computer selcetion images
  */
function imageSelection(){ 
    let computerSelect = computerSelection();
    
  /*  if (computerSelect === "rock"){
        document.getElementById("rock-image").innerText = "rock";
   } else if (computerSelect === "paper"){
       document.getElementById("rock-image").innerText = "paper";
   } else if (computerSelect === "scissors"){
       document.getElementById("rock-image").innerText = "scissors"
   } */
} 

function rockImage()
{

  
  let rockImg = document.createElement("img");
    rockImg.src = "assets/images/rock4.png";
    document.getElementById("paper-image").appendChild(rockImg);

    

        
    }


    




function paperImage(){
    let paperImg = document.createElement("img");
    paperImg.src = "assets/images/paper4.png";
         document.getElementById("paper-image").appendChild(paperImg);

 

}

function scissorsImage(){
    let scissorsImg = document.createElement("img");
    scissorsImg.src = "assets/images/scissors4.png";
    document.getElementById("paper-image").appendChild(scissorsImg);
}
   
 
    








function gameRules(){

}

function incrementPlayerWin(){

    let playerCount = document.getElementById("player-score").innerText;
    document.getElementById("player-score").innerText = ++playerCount;
    document.getElementById("result").innerText = "You win!"; 


   
  /*  playerScore++;
    playerCount.innerHTML = playerScore;
    computerCount.innerHTML = computerScore; */
   // results.innerHTML =` ${player} beats ${computer} You Win!`

    
    
    console.log("win")
}

function incrementPlayerLose(){

    let computerCount = document.getElementById("computer-score").innerText;
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