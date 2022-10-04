
function main(){
    let pScore = 0;
    let cScore = 0;




function playGame(){
    let options = document.getElementsByClassName("selections");

    // Computer option
    let computerOptions =["rock", "paper", "scissors"];

   
       // options.forEach(option => 
            for (let i = 0; i < options.length; i++){
            options[i].addEventListener("click", function(){
        
                //Computer choice
                let computerNumber = Math.floor(Math.random() * 3) ;
                let computerChoice = computerOptions[computerNumber];
                console.log(computerChoice);
            });
       
       
    }
}
// Call all innerfunctions
playGame();
}

// start game function
main();