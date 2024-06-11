import { ctx } from "./canvas";
class Car {
	x: number;
	y: number;
	w: number;
	h: number;
	move: number;
	imgsrc: string;

	constructor(
		xpos: number,
		ypos: number,
		width: number,
		height: number,
		img: string,
		move: number = 5
	) {
		this.x = xpos;
		this.y = ypos;
		this.w = width;
		this.h = height;
		this.move = move;
		this.imgsrc = img;
	}

	drawCar() {
		const image = new Image();
		image.src = this.imgsrc;
		ctx.drawImage(image, this.x, this.y, this.w, this.h);
	}

	moveRight() {
		this.x += this.move;
	}

	moveLeft() {
		this.x -= this.move;
	}

	moveDown() {
		this.y += this.move;
	}

	resetY() {
		this.y = 0 - 150;
	}

	collision(otherCar: Car) {
		if (
			this.x < otherCar.x + otherCar.w &&
			this.x + this.w > otherCar.x &&
			this.y < otherCar.y + otherCar.h &&
			this.y + this.h > otherCar.y
		) {
			console.log("collision");
			return true;
		}
	}
}

export default Car;
