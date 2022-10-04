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
let imageArray =["rock4.png", "paper4.png", "scissors4.png"]




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
   // console.log(computer);
}
 
/**
 * 
 * set function to add random selctions for computer
 */

 function computerSelection(){

    let selections = ["rock" , "paper", "scissors"];
   
  /*  let comptSelection = Math.floor(Math.random() * imageArray.length);
    selected_image = imageArray[comptSelection];
    document.getElementById("computer-image").src = `assets/images/${selected_image}`*/
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

   /* let computerSelect = computerSelection();
    
    if (computerSelect === "rock"){

     /*   let rockImg = document.createElement("img");
    rockImg.src = "assets/images/rock4.png";
    document.getElementById("computer-image").appendChild(rockImg); 

   } else if (computerSelection() === "paper"){
    
    let rockImg = document.createElement("img");
    rockImg.src = "assets/images/paper4.png";
    document.getElementById("computer-image").appendChild(rockImg); 

   } else if (computerSelect === "scissors"){
   /* let rockImg = document.createElement("img");
    rockImg.src = "assets/images/scissors4.png";
    document.getElementById("computer-image").appendChild(rockImg); 

   } */
} 

function displayPlayerImage(){

    rock_selection.addEventListener("click", () =>{
        img.src = "assets/images/rock4.png";
    })
     
    paper_selection.addEventListener("click", () =>{
        img.src = "assets/images/paper4.png";
    })

    scissors_selection.addEventListener("click", () =>{
        img.src = "assets/images/scissors4.png";
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

