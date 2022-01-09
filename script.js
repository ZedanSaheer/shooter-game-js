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


//Game menu functions

const startNewGame = () => {
    menu.classList.add("disable_menu");
    startButton.classList.add("disable_menu");
    quitButton.style.display = "block";
    playerOne.classList.remove("disable_menu");
    playerTwo.classList.remove("disable_menu");
    healthContainer.classList.remove("disable_menu");
    if (playerOneScore !== 0 || playerTwoScore !== 0) {
        playerOneScore.innerText = 0;
        playerTwoScore.innerText = 0;
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
}

//Game movement and action functions

const shootOnClickOrSpace = async (e) => {
    if (e.key === "s") {
        bulletOne.classList.toggle("player_one_shoot");
    }
    if (e.key==="ArrowDown"){
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

document.addEventListener("keydown", shootOnClickOrSpace);
document.addEventListener("keydown", jumpOnKeyDown);
