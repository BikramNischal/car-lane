import { canvas, ctx } from "../modules/canvas.ts";
import {
	/* showStartScreen, */ showGameScreen,
} from "../windows/gamewindow.ts";
import Car from "../modules/car.ts";

import { rightArrowPress, leftArrowPress } from "./movement.ts";

import { roadlines, laneData } from "../modules/roadlines.ts";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const startBtn = document.querySelector(".btn--start") as HTMLButtonElement;
const endBtn = document.querySelector(".btn--restart") as HTMLButtonElement;

const car = new Car(laneData.secondLane - 75, canvasHeight - 150, 150, 150,"./player.png");

startBtn.onclick = () => {
	showGameScreen();
	car.drawCar();
};

endBtn.onclick = showGameScreen;

showGameScreen();

setInterval(() => {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
	roadlines.forEach((line) => {
		line.drawRoadLine();
		line.move();
	});
	car.drawCar();
}, 100);

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowRight") {
		rightArrowPress(car);
	}

	if (event.key === "ArrowLeft") {
		leftArrowPress(car);
	}
});

// showStartScreen();
