const startButton = document.getElementById("start");
const menu = document.getElementById("menu");

const startNewGame = () => {
    if (startButton.innerText === "START NEW GAME") {
        menu.classList.add("disable_menu")
        startButton.innerText = "QUIT"
    }
}

const showInfo = () => {
    
}