import { showStartScreen, showGameScreen } from "../windows/gamewindow.ts";

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.height = canvas.clientHeight;
canvas.width = canvas.clientWidth;

const startBtn = document.querySelector(".btn--start") as HTMLButtonElement;
const endBtn = document.querySelector(".btn--restart") as HTMLButtonElement;

function drawRect(x:number = 200,y:number = 200) {
	ctx.fillStyle = "red";
	ctx.fillRect(x, y, 50, 70);
}

startBtn.onclick = () => {
	showGameScreen();
	drawRect();
};

endBtn.onclick = showGameScreen;

showStartScreen();

drawRect();
