// converting number to string 
function choiceToString(choice) {
    if (choice === 1)
        return 'rock'; // 1 is used to represent Rock
    else if (choice === 2)
        return 'paper'; // 2 is used to represent Paper
    else
        return 'scissors'; // 3 is used for Scissors
}


function getComputerChoice() {
}

// listing all the outcomes in a table
const outcomes = {
    "rock": {
        "rock": "draw",
        "paper": "lose",
        "scissors": "win"
      },
      "paper": {
        "rock": "win",
        "paper": "draw",
        "scissors": "lose"
      },
      "scissors": {
        "rock": "lose",
        "paper": "win",
        "scissors": "draw"
      }
};

function playRound(playerSelection, computerSelection) {
    
    // checking for outcome
    if (outcomes[playerSelection][computerSelection] === "win")
        return "You win! " + playerSelection + " beats " + computerSelection;
    else if (outcomes[playerSelection][computerSelection] === "lose")
        return "You lose! " + computerSelection + " beats " + playerSelection;
    else
        return "It's a draw.";
}

function playGame() {

    let playerSelection;
    let keepPlaying;

    while(true) {
        while (true) {
        playerSelection = prompt("Enter your choice (rock, paper, or scissors): ");
        // making playerSelection case-insensitive 
        playerSelection = playerSelection.toLowerCase();
        //checking if the input is legit
        if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors")
            console.log("Invalid input! Try again.");
        else 
            break;
        }

        // getting computer choice
        const computerSelection = getComputerChoice();
        // checking and printing the result
        console.log(playRound(playerSelection, computerSelection));

        //asking the user whether he wants to continue playing
        keepPlaying = prompt("Keep Playing? (yes/no)", "yes");
        if (keepPlaying === "no")
            break;
    }  
}

//running the game
playGame()