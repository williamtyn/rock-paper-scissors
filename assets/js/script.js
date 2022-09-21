const yourChoice = document.getElementById("your-choice")
const computerChoice = document.getElementById("computer-choice")
const result = document.getElementById("result")
const rockChoice = document.getElementById("rock")
const paperChoice = document.getElementById("paper")
const scissorChoice = document.getElementById("scissor")
const allChoices = document.getElementsByClassName("buttons")
let computerChoices;


// Show users choice when pressing buttons
rockChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Rock"
    generateComputerChoice()
})

paperChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Paper"
    generateComputerChoice()
})

scissorChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Scissors"
    generateComputerChoice()
})

// Generates random computer choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1

    if (randomNumber === 1) {
        computerChoices = "Paper"
    }
    if (randomNumber === 2) {
        computerChoices = "Rock"
    }
    if (randomNumber === 3) {
        computerChoices = "Scissors"
    }
    computerChoice.innerHTML = computerChoices
}
