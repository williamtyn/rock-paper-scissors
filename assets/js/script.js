const yourChoice = document.getElementById("your-choice")
const computerChoice = document.getElementById("computer-choice")
const result = document.getElementById("result")
const rockChoice = document.getElementById("rock")
const paperChoice = document.getElementById("paper")
const scissorChoice = document.getElementById("scissor")
const allChoices = document.getElementsByTagName("button")
let computerChoices;
let showResult;
let choiseString = (rockChoice + paperChoice + scissorChoice)

// Show users choice when pressing buttons
rockChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Rock"
    generateComputerChoice()
    showWinner()
})

paperChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Paper"
    generateComputerChoice()
    showWinner()
})

scissorChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Scissors"
    generateComputerChoice()
    showWinner()
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

function showWinner() {

    if(computerChoices === yourChoice.innerHTML){
        showResult = "It is a Tie!"
    }
    if(computerChoices === "Rock" && yourChoice.innerHTML === "Scissors"){
        showResult = "You Lose!"
    }
    if(computerChoices === "Paper" && yourChoice.innerHTML === "Rock"){
        showResult = "You Lose!"
    }
    if(computerChoices === "Scissors" && yourChoice.innerHTML === "Paper"){
        showResult = "You Lose!"
    }
    if(computerChoices === "Rock" && yourChoice.innerHTML === "Paper"){
        showResult = "You Win!"
    }
    if(computerChoices === "Scissors" && yourChoice.innerHTML === "Rock"){
        showResult = "You Win!"
    }
    if(computerChoices === "Paper" && yourChoice.innerHTML === "Scissors"){
        showResult = "You Win!"
    }
    result.innerHTML = showResult;
}
