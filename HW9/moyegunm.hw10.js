
/* HW 9 - Rock, Paper, Scissors */

// Keep playing until the user decides to stop
let playAgain = true;

while (playAgain) {
    let userChoice = "";

    // Ask for a choice and check if it is valid
    while (userChoice !== "rock" &&
           userChoice !== "paper" &&
           userChoice !== "scissors") {

        let input = prompt("Choose rock, paper, or scissors:");

        if (input === null) {
            userChoice = "cancel";
            break;
        }

        userChoice = input.toLowerCase().trim();

        if (userChoice !== "rock" &&
            userChoice !== "paper" &&
            userChoice !== "scissors") {
            alert("Invalid choice. Please try again.");
        }
    }

    if (userChoice === "cancel") {
        break;
    }

    // Generate a random computer choice
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];

    // Display both choices in the console
    console.log("User chose: " + userChoice);
    console.log("Computer chose: " + computerChoice);

    // Determine who wins
    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("User wins!");
    } else {
        console.log("Computer wins!");
    }

    // Ask the user if they want another round
    playAgain = confirm("Would you like to play again?");
}

console.log("Thanks for playing!");
