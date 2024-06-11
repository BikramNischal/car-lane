import generateRandomNumber from "../utils/generaterandom.ts";
import { canvas, ctx } from "../modules/canvas.ts";
import {
	/* showStartScreen, */ showGameScreen,
} from "../windows/gamewindow.ts";
import Car from "../modules/car.ts";
import generateEnemy from "./generateEnemy.ts";
import {enemy, Enemy} from "./generateEnemy.ts";
import { roadlines, laneData } from "../modules/roadlines.ts";

import { rightArrowPress, leftArrowPress } from "./movement.ts";


const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const startBtn = document.querySelector(".btn--start") as HTMLButtonElement;
const endBtn = document.querySelector(".btn--restart") as HTMLButtonElement;

// creates car with postion x,y, width, hegith and image
// here x position = lanecenter - imagewidth/2
//similary y postion = canvasHeight - imageheight
const car = new Car(laneData[1] - 75, canvasHeight - 150, 150, 150,"./player.png");
let allEnemy: Enemy[] = generateEnemy();
let enemyOnScreen = generateRandomNumber(allEnemy.length);


startBtn.onclick = () => {
	showGameScreen();
	car.drawCar();
};

endBtn.onclick = showGameScreen;

showGameScreen();

setInterval(() => {
    let reset:boolean = false;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for(let i = 0; i < enemyOnScreen; ++i){
        allEnemy[i].car.moveDown();
        allEnemy[i].car.drawCar();

        if(allEnemy[i].car.y > canvasHeight){
            allEnemy[i].car.resetY();
            reset = true;
        }
    }

    if(reset){
        allEnemy = generateEnemy();
        const tempRand = generateRandomNumber(allEnemy.length); 
        enemyOnScreen = tempRand ? tempRand : 2 ;
        reset = false;
    }
 
	roadlines.forEach((line) => {
		line.drawRoadLine();
		line.move();
	});
	car.drawCar();
}, 10);

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowRight") {
		rightArrowPress(car, allEnemy);
	}

	if (event.key === "ArrowLeft") {
		leftArrowPress(car,allEnemy);
	}
});

// showStartScreen();
