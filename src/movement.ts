import Car from "../modules/car.ts";
import Line, { laneWidth, roadlines } from "../modules/roadlines.ts";
import { canvas, ctx } from "../modules/canvas.ts";


//left and right movement animation
function movementAnimation(
	car: Car,
	destinationPos: number,
	lines: Line[],
	direction: number = 1
) {
	const animation = setInterval(() => {
		if (direction === 1) {
			car.moveRight();
		} else {
			car.moveLeft();
		}
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		lines.forEach((line) => {
			line.drawRoadLine();
		});
		car.drawCar();
		if (car.x + car.w / 2 >= destinationPos && direction === 1)
			clearInterval(animation);
		if (car.x + car.w / 2 <= destinationPos && direction === -1)
			clearInterval(animation);

        if(car.x < 0 || car.x + car.w > canvas.width){
            console.log("!!Crash!!");
            clearInterval(animation);
        }

	}, 10);
}

//event handler for right arrow key press
function rightArrowPress(car: Car): void {
	const destination = car.x + car.w / 2 + laneWidth;
	movementAnimation(car, destination, roadlines);
}

//event handler for left arrow key press
function leftArrowPress(car: Car): void {
	const destination = car.x + car.w / 2 - laneWidth;
	movementAnimation(car, destination, roadlines, -1);
}

export { rightArrowPress, leftArrowPress };
