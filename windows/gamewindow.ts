const startScreen =  document.querySelector(".start-window") as HTMLDivElement;
const gameScreen = document.querySelector(".game-window") as HTMLDivElement;
const endScreen = document.querySelector(".end-window") as HTMLDivElement;

const startBtn = document.querySelector(".btn--start") as HTMLButtonElement;
const endBtn = document.querySelector(".btn--restart") as HTMLButtonElement;
 
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

startBtn.onclick = showGameScreen;
endBtn.onclick = showGameScreen;


export {showEndScreen, showStartScreen, showGameScreen};