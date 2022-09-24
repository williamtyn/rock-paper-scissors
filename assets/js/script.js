// Global variables
const yourChoice = document.getElementById("your-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");
let computerChoices;
let showResult;
let usrname = window.localStorage.getItem('username');
const namebox = document.querySelector('#change');
namebox.innerHTML = `${usrname}s choice:`;
let nameinput = document.getElementById('nickname');

// Make user choice and show computers choice and result
rockChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Rock";
    generateComputerChoice();
    showWinner();
    matchWinner();
});

paperChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Paper";
    generateComputerChoice();
    showWinner();
    matchWinner();
});

scissorChoice.addEventListener("click", function(){
    yourChoice.innerHTML = "Scissors";
    generateComputerChoice();
    showWinner();
    matchWinner();
});


// Generates random computer choice
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) +1;

    if (randomNumber === 1) {
        computerChoices = "Paper";
    }
    if (randomNumber === 2) {
        computerChoices = "Rock";
    }
    if (randomNumber === 3) {
        computerChoices = "Scissors";
    }
    computerChoice.innerHTML = computerChoices;
}

// function to see if the user or computer won and increment scoreboard
function showWinner() {

    if(computerChoices === yourChoice.innerHTML){
        showResult = "It is a Tie!";
    }
    if(computerChoices === "Rock" && yourChoice.innerHTML === "Scissors"){
        showResult = "You Lose!";
        computerScoreIncrement();
    }
    if(computerChoices === "Paper" && yourChoice.innerHTML === "Rock"){
        showResult = "You Lose!";
        computerScoreIncrement();
    }
    if(computerChoices === "Scissors" && yourChoice.innerHTML === "Paper"){
        showResult = "You Lose!";
        computerScoreIncrement();
    }
    if(computerChoices === "Rock" && yourChoice.innerHTML === "Paper"){
        showResult = "You Win!";
        userScoreIncrement();
    }
    if(computerChoices === "Scissors" && yourChoice.innerHTML === "Rock"){
        showResult = "You Win!";
        userScoreIncrement();
    }
    if(computerChoices === "Paper" && yourChoice.innerHTML === "Scissors"){
        showResult = "You Win!";
        userScoreIncrement();
    }
    result.innerHTML = showResult;
}

// Function to increment userscore
function userScoreIncrement() {
    let userScore = document.getElementById("your-score").innerHTML;
    userScore++;
    document.getElementById('your-score').innerHTML = userScore;
}

// Function to increment computerscore
function computerScoreIncrement() {
    let computerScore = document.getElementById("computer-score").innerHTML;
    computerScore++;
    document.getElementById('computer-score').innerHTML = computerScore;
}

// Function to see who won the match
function matchWinner(){
    let yourPoint = document.getElementById('your-score').innerHTML;
    let computerPoint = document.getElementById('computer-score').innerHTML;
    let userWins = document.getElementById("wins-pop");
    let computerWins = document.getElementById("lose-pop");

    if(yourPoint === "3"){
        userWins.style.display = "block";
    }
        
    if(computerPoint === "3"){
        computerWins.style.display = "block";
    }
}
// Function to store player nickname
function storeNick() {
    window.localStorage.setItem('username', document.getElementById('nickname').value);
    if (document.getElementById('nickname').value === '') {
        return;
    }
    else window.location.replace("./game.html");
}

// End of Javascript