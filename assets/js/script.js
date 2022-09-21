const yourChoice = document.getElementById("your-choice")
const computerChoice = document.getElementById("computer-choice")
const result = document.getElementById("result")
const allChoices = document.getElementsByClassName("buttons")
let userChoice

allChoices.forEach(allChoices => allChoices.addEventListener("click", (e) => {
    userChoice = e.target.id
    yourChoice.innerHTML = userChoice
}))