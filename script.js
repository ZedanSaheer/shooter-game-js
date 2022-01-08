const startButton = document.getElementById("start");
const menu = document.getElementById("menu");
const info = document.getElementById("info");
const quitButton = document.getElementById("quit")

//Game menu functions

const startNewGame = () => {
    menu.classList.add("disable_menu");
    startButton.classList.add("disable_menu");
    quitButton.style.display="block"
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
    quitButton.style.display="none"
} 

//Game movement and action functions