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
let button = document.getElementsByTagName("button");
let img = document.getElementById("player-image")
let imageArray =["rock.png", "paper.png", "scissors.png"];




/**
 * Call rock, paper, scissor selections and add click eventlistener 
 */

 function game () {

    rock_selection.addEventListener("click",function(){
       runGame("rock");
       imageSelection()
       displayPlayerImage();
       
     
         
        
    })
    paper_selection.addEventListener("click",function(){
       runGame("paper");
       imageSelection();
       displayPlayerImage();
       
      
        
    }) 
    scissors_selection.addEventListener("click",function(){
       runGame("scissors");
       imageSelection();
       displayPlayerImage();
       
     }) 
 //Call all functions here
}

game();



function runGame(playSelections){
 let computer = computerSelection();
   switch(playSelections + computer) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
         incrementPlayerWin();
         displayPlayerImage();
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
           incrementPlayerLose(); 
           displayPlayerImage();
            break;
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            incrementDraw();
            displayPlayerImage();
           break;                      
        
    }
   // console.log(computer);
}
 
/**
 * 
 * set function to add random selctions for computer
 */

 function computerSelection(){

    let selections = ["rock" , "paper", "scissors"];
   
  /* let comptSelection = Math.floor(Math.random() * imageArray.length);
    selected_image = imageArray[comptSelection];
    document.getElementById("computer-image").src = `assets/images/${selected_image}`; */
    let compSelection = Math.floor(Math.random() * 3); 
  //  return [compSelection];
    return selections[compSelection]; 
}
 
 /**
  * Write statement for computer selcetion images
  */
function imageSelection(){ 
    let comptSelection = Math.floor(Math.random() * imageArray.length);
    selected_image = imageArray[comptSelection];
    document.getElementById("computer-image").src = `assets/images/${selected_image}`

    let computerSelect = computerSelection();
    
    if (computerSelect === "rock"){

       let rockImg = document.createElement("img");
    rockImg.src = "assets/images/rock4.png";
    document.getElementById("computer-image").appendChild(rockImg); 

   } else if (computerSelection() === "paper"){
    
    let rockImg = document.createElement("img");
    rockImg.src = "assets/images/paper4.png";
    document.getElementById("computer-image").appendChild(rockImg); 

   } else if (computerSelect === "scissors"){
    let rockImg = document.createElement("img");
    rockImg.src = "assets/images/scissors4.png";
    document.getElementById("computer-image").appendChild(rockImg); 

   } 
} 

function displayPlayerImage(){

    rock_selection.addEventListener("click", () =>{
        img.src = "assets/images/rock.png";
    })
     
    paper_selection.addEventListener("click", () =>{
        img.src = "assets/images/paper.png";
    
    })

    scissors_selection.addEventListener("click", () =>{
        img.src = "assets/images/scissors.png";
    })

}


   
function incrementPlayerWin(){
    
    let playerCount = document.getElementById("player-score").innerText;
    document.getElementById("player-score").innerText = ++playerCount;
    document.getElementById("result").innerText = "You win!"; 
console.log("win")
}

function incrementPlayerLose(){

    let computerCount = document.getElementById("computer-score").innerText;
    document.getElementById("computer-score").innerText = ++computerCount;
    document.getElementById("result").innerText = "You Lose!"; 
    console.log("lose");
}

function incrementDraw(){
    document.getElementById("result").innerText = "Draw!"; 
}

function removeImage(){
    const selected = document.getElementById("result-selection");
      selected.removeChild(selected.firstElementChild);
}







let pScore = 0;
let cScore = 0;

let user = ["player-score", "computer-score"];


let isGameOver = (score) => {
  if (pScore === 10 || cScore === 10) {
    return true;
  }
  return false;
}

function gameOver() {
  let winner = pScore === 10 ? user[0] : user[1];
  console.log(winner);
}

function theFunctionThatChangesTheScores() {
  // after the code that changes the score
  if ( isGameOver() ) {
    // you can code in this block, but ideally.
    // create another function and call it:
    return gameOver();
  }
  return console.log("game is still on");
}

