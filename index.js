document.addEventListener('DOMContentLoaded', function() {
    const choices = ["rock", "paper", "scissors"];
    let playerWins = 0;
    let computerWins = 0;

    // Add event listeners for choice buttons
    document.querySelectorAll('.choice').forEach(choice => {
        choice.addEventListener('click', () => play(choice.id));
    });

    // Add event listener for reset button
    document.getElementById('reset').addEventListener('click', resetGame);

    function getUserChoice() {
        let userChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
        while (!choices.includes(userChoice)) {
            userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors").toLowerCase();
        }
        return userChoice;
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if ((userChoice === "rock" && computerChoice === "scissors") ||
                   (userChoice === "scissors" && computerChoice === "paper") ||
                   (userChoice === "paper" && computerChoice === "rock")) {
            playerWins++;
            return "You win!";
        } else {
            computerWins++;
            return "Computer wins!";
        }
    }

    function play(userChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        const resultMessage = determineWinner(userChoice, computerChoice);

        document.getElementById("result").innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${resultMessage}`;
        document.getElementById("score").innerText = `Player: ${playerWins} - Computer: ${computerWins}`;
    }

    function resetGame() {
        playerWins = 0;
        computerWins = 0;
        document.getElementById("score").innerText = `Player: ${playerWins} - Computer: ${computerWins}`;
        document.getElementById("result").innerText = "";
    }
});
