const startScreen =  document.querySelector(".start-window") as HTMLDivElement;
const gameScreen = document.querySelector(".game-window") as HTMLDivElement;
const endScreen = document.querySelector(".end-window") as HTMLDivElement;
 
function showStartScreen(){
    startScreen.style.display = "flex";
    gameScreen.style.display = "none";
    endScreen.style.display = "none";
}

function showGameScreen(){
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    endScreen.style.display = "none";
}

function showEndScreen(){
    startScreen.style.display = "none";
    gameScreen.style.display = "none";
    endScreen.style.display = "flex";
}

// start button on click display canvas 



export {showEndScreen, showStartScreen, showGameScreen};