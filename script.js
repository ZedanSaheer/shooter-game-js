const startButton = document.getElementById("start");
const menu = document.getElementById("menu");
const info = document.getElementById("info");
const quitButton = document.getElementById("quit");
const playerOne = document.getElementById("one");
const playerTwo = document.getElementById("two");
const healthContainer = document.getElementById("health");
const playerOneScore = document.getElementById("playerOneScore");
const playerTwoScore = document.getElementById("playerTwoScore");
const bulletOne = document.getElementById("bullet_one");
const bulletTwo = document.getElementById("bullet_two");
const healthPercentPlayerOne = document.getElementById("health_player_one");
const barPlayerOne = document.getElementById("bar_player_one");
const healthPercentPlayerTwo = document.getElementById("health_player_two");
const barPlayerTwo = document.getElementById("bar_player_two");
const stats = document.getElementById("stats");
const winnerOne = document.getElementById("winner_one");
const winnerTwo = document.getElementById("winner_two");
const winnerMenu = document.getElementById("winner");

//Game menu functions
let scoreOne = 0;
let scoreTwo = 0;

const startNewGame = () => {
    menu.classList.add("disable_menu");
    startButton.classList.add("disable_menu");
    quitButton.style.display = "block";
    playerOne.classList.remove("disable_menu");
    playerTwo.classList.remove("disable_menu");
    healthContainer.classList.remove("disable_menu");
    if (playerOneScore !== 0 || playerTwoScore !== 0) {
        playerOneScore.innerText = scoreOne;
        playerTwoScore.innerText = scoreTwo;
    }
}

const showInfo = () => {
    info.classList.remove("disable_menu");
}

const closeInfo = () => {
    info.classList.add("disable_menu");
}

const quitGame = () => {
    menu.classList.remove("disable_menu");
    startButton.classList.remove("disable_menu");
    quitButton.style.display = "none";
    playerOne.classList.add("disable_menu");
    playerTwo.classList.add("disable_menu");
    healthContainer.classList.add("disable_menu");
    if (playerOneScore !== 0 || playerTwoScore !== 0) {
        playerOneScore.innerText = 0;
        playerTwoScore.innerText = 0;
    }
    healthPercentPlayerOne.innerText = 100 + "%";
    barPlayerOne.style.width = 100 + "%";
    healthPercentPlayerTwo.innerText = 100 + "%";
    barPlayerTwo.style.width = 100 + "%";
}

//Game movement and action functions

let flag = false;
let playerOneHealth = 100;
let playerTwoHealth = 100;

const shootOnClickOrSpace = (e) => {
    if (e.key === "s") {
        bulletOne.classList.toggle("player_one_shoot");
    }
    if (e.key === "ArrowDown") {
        bulletTwo.classList.toggle("player_two_shoot");
    }
}

const jumpOnKeyDown = (e) => {
    if (e.key === "w") {
        playerOne.classList.toggle("jump");
    }
    if (e.key === "ArrowUp") {
        playerTwo.classList.toggle("jump");
    }
}

const gameFunction = (e) => {

    let damageOne = Math.floor(Math.random() * 6);
    let damageTwo = Math.floor(Math.random() * 6);

    if (e.key !== "w" && e.key === "ArrowDown") {
        if (playerOneHealth > 0) {
            playerOneHealth = playerOneHealth - damageOne;
        }
    }
    if (e.key !== "ArrowUp" && e.key === "s") {
        if (playerTwoHealth > 0) {
            playerTwoHealth = playerTwoHealth - damageTwo;
        }
    }
    if (playerOneHealth <= 0) {
        healthPercentPlayerOne.innerText = 0 + "%";
        barPlayerOne.style.width = 0 + "%";
    } else {
        healthPercentPlayerOne.innerText = playerOneHealth + "%";
        barPlayerOne.style.width = playerOneHealth + "%";
    }
    if (playerTwoHealth <= 0) {
        healthPercentPlayerTwo.innerText = 0 + "%";
        barPlayerTwo.style.width = 0 + "%";
    } else {
        healthPercentPlayerTwo.innerText = playerTwoHealth + "%";
        barPlayerTwo.style.width = playerTwoHealth + "%";
    }

    if (healthPercentPlayerOne.innerText === 0 + "%" && scoreOne < 5) {
        playerOneHealth = 100;
        playerTwoHealth = 100;
        scoreOne = scoreOne + 1;
        playerOneScore.innerText = scoreOne;
    }
    if (healthPercentPlayerTwo.innerText === 0 + "%" && scoreTwo < 5) {
        playerTwoHealth = 100;
        playerOneHealth = 100;
        scoreTwo = scoreTwo + 1;
        playerTwoScore.innerText = scoreTwo;
    }
    if (playerOneScore.innerText == 5) {
        theWinner(playerOne,playerTwo);
        setTimeout(location.reload(),6000);
    } else if (playerTwoScore.innerText == 5) {
        theWinner(playerTwo,playerOne);
        setTimeout(()=>{location.reload()},3000);
    }
}

const theWinner = (winner, loser) => {
    winnerMenu.classList.remove("disable_menu");
    stats.classList.add("disable_menu");
    winnerOne.classList.add("disable_menu");
    menu.classList.remove("disable_menu");
    startButton.classList.remove("disable_menu");
    quitButton.style.display = "none";
    loser.classList.add("disable_menu");
    winner.classList.add("disable_menu");
    healthContainer.classList.add("disable_menu");
}



document.addEventListener("keydown", shootOnClickOrSpace);
document.addEventListener("keydown", jumpOnKeyDown);
document.addEventListener("keydown", gameFunction);
