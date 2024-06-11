class Car {
	x: number;
	y: number;
	w: number;
	h: number;
	move: number;

	constructor(
		xpos: number,
		ypos: number,
		width: number,
		height: number,
		move: number = 5
	) {
		this.x = xpos;
		this.y = ypos;
		this.w = width;
		this.h = height;
		this.move = move;
	}

	drawCar(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}
}


export default Car;
