
function main(){
    let pScore = 0;
    let cScore = 0;




function playGame(){
    let options = document.getElementsByClassName("selections");
    let playerHand = document.getElementById("player-image");
    let computerHand = document.getElementById("computer-image");

    // Computer option
    let computerOptions =["rock", "paper", "scissors"];

   
       // options.forEach(option => 
            for (let i = 0; i < options.length; i++){
            options[i].addEventListener("click", function(){
        
                //Computer choice
                let computerNumber = Math.floor(Math.random() * 3) ;
                let computerChoice = computerOptions[computerNumber];
                

                //Call checkWinner here

                //Function to display selected images
         //   document.getElementById("player-image").src = `assets/images${this.textContent}`
            computerHand.src = `assets/${computerChoice}.png`;
            });
       
       
    }
}
//Function to determine winner or loser

function checkWinner(playerChoice, computerChoice){

    let dispalyResult = document.getElementById("result");

    // Check for a Draw

    if(playerChoice === computerChoice){
        dispalyResult.innerText = "It is a Draw";
        return;
    }

    // Check for rock 
    if (playerChoice === "rock"){
        if(computerChoice === "scissors"){
            dispalyResult.innerText = "You win!";
            return;
        } else{
            dispalyResult.innerText = "Computer Wins";
            return;
        }
    }

    // Check for paper
    if (playerChoice === "paper"){
        if(computerChoice === "scissors"){
            dispalyResult.innerText = "Computer Wins";
            return;
        } else{
            dispalyResult.innerText = "You Win!";
            return;
        }
    }
      //Check for scissors
    if (playerChoice === "scissors"){
        if(computerChoice === "rock"){
            dispalyResult.innerText = "Compuer wins!";
            return;
        } else{
            dispalyResult.innerText = "You win!";
            return;
        }
    }
}
// Call all innerfunctions
playGame();
}

// start game function
main();