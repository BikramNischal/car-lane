import Car from "../modules/car.ts";
import Line, { laneWidth, roadlines } from "../modules/roadlines.ts";
import { canvas, ctx } from "../modules/canvas.ts";
import { Enemy } from "./generateEnemy.ts";
import { showEndScreen } from "../windows/gamewindow.ts";
import { resetGame, displayScore } from "./main.ts";

let movementInterval: ReturnType<typeof setInterval> | null = null;

// left and right movement animation
function movementAnimation(
    car: Car,
    enemyList: Enemy[],
    destinationPos: number,
    lines: Line[],
    direction: number = 1
) {
    if (movementInterval !== null) return;

    movementInterval = setInterval(() => {
		// 1 means move right else move left
        if (direction === 1) {
            car.moveRight();
        } else {
            car.moveLeft();
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        displayScore();
        lines.forEach((line) => {
            line.drawRoadLine();
        });

		//check collision between car
        enemyList.forEach((enemy) => {
            enemy.car.drawCar();
            if (car.collision(enemy.car)) {
                resetGame();
                showEndScreen();
                clearInterval(movementInterval!);
                movementInterval = null;
                return;
            }
        });
        car.drawCar();

		// check if the car reached center for desired lane
        if ((car.x + car.w / 2 >= destinationPos && direction === 1) ||
            (car.x + car.w / 2 <= destinationPos && direction === -1)) {
            clearInterval(movementInterval!);
            movementInterval = null;
        }

        if (car.x < 0 || car.x + car.w > canvas.width) {
            showEndScreen();
            resetGame();
            clearInterval(movementInterval!);
            movementInterval = null;
        }
    }, 10);
}

// event handler for right arrow press 
function rightArrowPress(car: Car, allEnemy: Enemy[]): void {
    const destination = car.x + car.w / 2 + laneWidth;
    movementAnimation(car, allEnemy, destination, roadlines);
}

// even handler for left arrow press
function leftArrowPress(car: Car, allEnemy: Enemy[]): void {
    const destination = car.x + car.w / 2 - laneWidth;
    movementAnimation(car, allEnemy, destination, roadlines, -1);
}

export { rightArrowPress, leftArrowPress };
