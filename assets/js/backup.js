
function main(){
    let pScore = 0;
    let cScore = 0;




function playGame(){
    let options = document.querySelectorAll(".selections button");
    let playerHand = document.querySelector("#player-image");
    let computerHand = document.querySelector("#computer-image");

    // Computer option
    let computerOptions =["rock", "paper", "scissors"];

   // for (let i = 0; i < options.length; i++)
       options.forEach(option => {
            option.addEventListener("click", function(){
        
                //Computer choice
                let computerNumber = Math.floor(Math.random() * 3) ;
                let computerChoice = computerOptions[computerNumber];
                

                //Call checkWinner here
                checkWinner(this.textContent);

                //Function to display selected images
         //   document.getElementById("player-image").src = `assets/images${this.textContent}`
            computerHand.src = `assets/img/${computerChoice}`;
            playerHand.src = `assets/img/${this.textContent}`;
            });
       
       
    });
};
//Function to determine winner or loser

function checkWinner(playerChoice, computerChoice){

    let dispalyResult = document.querySelector(".results");
console.log(dispalyResult);
    // Check for a Draw

    if(playerChoice === computerChoice){
        dispalyResult.textContent = "It is a Draw";
        return;
    }

    // Check for rock 
    if (playerChoice === "rock"){
        if(computerChoice === "scissors"){
            dispalyResult.textContent = "You win!";
            return;
        } else{
            dispalyResult.textContent = "Computer Wins";
            return;
        }
    }

    // Check for paper
    if (playerChoice === "paper"){
        if(computerChoice === "scissors"){
            dispalyResult.textContent = "Computer Wins";
            return;
        } else{
            dispalyResult.textContent = "You Win!";
            return;
        }
    }
      //Check for scissors
    if (playerChoice === "scissors"){
        if(computerChoice === "rock"){
            dispalyResult.textContent = "Compuer wins!";
            return;
        } else{
            dispalyResult.textContent = "You win!";
            return;
        }
    }
}
// Call all innerfunctions
playGame();
}

// start game function
main();