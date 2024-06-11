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
		move: number = 5,
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
		ctx.drawImage(image,this.x,this.y, this.w, this.h);
		
	}

	moveRight(){
		this.x += this.move;
	}

	moveLeft(){
		this.x -= this.move;
	}
}


export default Car;
