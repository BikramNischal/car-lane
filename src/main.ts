import generateRandomNumber from "../utils/generaterandom.ts";
import { canvas, ctx } from "../modules/canvas.ts";
import {
    showStartScreen,
    showGameScreen,
    showEndScreen,
} from "../windows/gamewindow.ts";
import Car from "../modules/car.ts";
import generateEnemy from "./generateEnemy.ts";
import { Enemy } from "./generateEnemy.ts";
import { roadlines, laneData } from "../modules/roadlines.ts";

import { rightArrowPress, leftArrowPress } from "./movement.ts";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const startBtn = document.querySelector(".btn--start") as HTMLButtonElement;
const endBtn = document.querySelector(".btn--restart") as HTMLButtonElement;

let score = 0;
let gameInterval: ReturnType<typeof setInterval> | null = null;
let car = new Car(
    laneData[1] - 75,
    canvasHeight - 150,
    150,
    150,
    "./player.png"
);


// get Enemy cars
let allEnemy: Enemy[] = generateEnemy();
// get random number of enemy between 1 and 4
const getEnemyNumber = (num: number) => {
    let enemy = generateRandomNumber(num);
    return enemy ? enemy : 2;
};

let enemyOnScreen = getEnemyNumber(allEnemy.length);
let enemyMove = 3;

function displayScore() {
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText("Score : " + score, 10, 100);
}

function resetGame() {
    car = new Car(
        laneData[1] - 75,
        canvasHeight - 150,
        150,
        150,
        "./player.png"
    );

    allEnemy = generateEnemy();
    enemyOnScreen = getEnemyNumber(allEnemy.length);
    score = 0;
    enemyMove = 3;

    if (gameInterval !== null) {
        clearInterval(gameInterval);
        gameInterval = null;
    }
}

// main game function
function startGame() {
    if (gameInterval !== null) return;

    gameInterval = setInterval(() => {
        let reset = false;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        displayScore();

		// render enemy cars
        for (let i = 0; i < enemyOnScreen; ++i) {
            allEnemy[i].car.moveDown(enemyMove);
            allEnemy[i].car.drawCar();

			// check collision between cars
            if (car.collision(allEnemy[i].car)) {
                showEndScreen();
                clearInterval(gameInterval!);
                gameInterval = null;
                resetGame();
                return;
            }

			// reset enemy cars if it goes out canvas height
            if (allEnemy[i].car.y > canvasHeight) {
                allEnemy[i].car.resetY();
                score += 1;
                enemyMove += 0.3;
                reset = true;
            }
        }

		// get new enemys after cars move out of canavas height
        if (reset) {
            allEnemy = generateEnemy();
            enemyOnScreen = getEnemyNumber(allEnemy.length);
            reset = false;
        }

		// draw road lanes
        roadlines.forEach((line) => {
            line.drawRoadLine();
            line.move();
        });

        car.drawCar();
    }, 10);
}

// even detection for left and right arrrow key
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        rightArrowPress(car, allEnemy);
    }

    if (event.key === "ArrowLeft") {
        leftArrowPress(car, allEnemy);
    }
});

showStartScreen();


// display game window on start button click
startBtn.onclick = () => {
    showGameScreen();
    startGame();
};

//display game window on restart button click
endBtn.onclick = () => {
    resetGame();
    showGameScreen();
    startGame();
};

export { resetGame, displayScore };