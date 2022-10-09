document.addEventListener("DOMContentLoaded", function() {
    let options = document.querySelectorAll(".selections button");
   
  //  for (let i = 0; i < options.length; i++)
    options.forEach(option => {
        option.addEventListener("click", function(){
           
        })
        })
    
 //   document.getElementById("").addEventListener("keydown", function(event) {
 //       if (event.key === "Enter"){
  //          checkAnswer()
  //      }
  //  })
 startGame();
  //  runGame("addition");
})

function startGame ()  {
    let playBtn = document.querySelector(".intro button");
    let introScreen = document.querySelector(".intro");
    let match = document.querySelector(".game");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

function playGame(){
    let options = document.querySelectorAll(".selections button");
    let playerSelection = document.querySelector(".player-image");
    let computerSelection = document.querySelector(".computer-image");

    // Computer option
    let computerOptions =["rock", "paper", "scissors"];

   // for (let i = 0; i < options.length; i++)
   //    options.forEach(option => {
    //        option.addEventListener("click", function(){
                //Computer choice
                let computerNumber = Math.floor(Math.random() * 3);
                let computerChoice = computerOptions[computerNumber];
                
                

                //Call checkWinner here
              checkWinner(this.id, computerChoice);
                

                //Function to display selected images
            playerSelection.src = `assets/images/${this.textContent}.png`;
        //    console.log(this.id)
          computerSelection.src = `assets/images/${computerChoice}.png`;
}

function checkWinner (playerChoice, computerChoice) {
    //Update Text
    let displayResult = document.querySelector(".results");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      displayResult.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        displayResult.textContent = "Youu Wins!!";
        pScore++;
        scoreResults();
        return;
      } else {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        
        return;
      } else {
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        displayResult.textContent = "You lose!";
        cScore++;
        scoreResults();
        return;
      } else {
        displayResult.textContent = "Youu Win!!";
        pScore++;
        scoreResults();
        return;
      }
    }



} 

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  let playBtn = document.querySelector(".intro button");
      let introScreen = document.querySelector(".intro");
      let match = document.querySelector(".game");
      let computerOptions =["rock", "paper", "scissors"];

 
  for (let button of buttons) { 
      button.addEventListener("click", function(){
        if (this.getAttribute("data-type") === "start"){
          introScreen.classList.add("fadeOut");
          match.classList.add("fadeIn");
        }else{
          let computerNumber = Math.floor(Math.random() * 3);
          let computerChoice = computerOptions[computerNumber];
          
          

          //Call checkWinner here
        determineWinner(this.id, computerChoice);
          

          //Function to display selected images
      playerSelection.src = `assets/images/${this.id}.png`;
      console.log(this.id)
    computerSelection.src = `assets/images/${computerChoice}.png`;
        }
      });
      /*{
        if (this.getAttribute("data-type") === "start"){
          alert(hello);
          startGame(); */
          }
        })
     /* }) 
    
    }
    })  */    

 /* function startGame ()  {
      let playBtn = document.querySelector(".intro button");
      let introScreen = document.querySelector(".intro");
      let match = document.querySelector(".game");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };*/


function gameRun(){}

function startGame(){}

function displaySelection(){}

function computerSelect(){}
 
function playerSelection(){}

  function determineWinner(playSelections){
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
       
}

function dispalyWinner(){}

function scoreCount(){}