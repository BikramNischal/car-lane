import { ctx, canvas } from "./canvas.ts";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

class Line {
	x: number;
	y: number;
	w: number;
	h: number;
	dy: number;

	constructor(
		posx: number,
		posy: number,
		width: number,
		height: number,
		dy: number = 5
	) {
		this.x = posx;
		this.y = posy;
		this.w = width;
		this.h = height;
		this.dy = dy;
	}

	drawRoadLine() {
		ctx.fillStyle = "white";
		ctx.fillRect(this.x, this.y, this.w, this.h);
	}

	move() {
		this.y += this.dy;

		if (this.y > canvasHeight) {
			this.y = -this.h;
		}
	}
}

const laneWidth = canvasWidth/4;



// center X-axis of each lane 
const laneData = {
	firstLane: laneWidth/2, 
	secondLane: laneWidth/2 + laneWidth,
	thirdLane: laneWidth/2 + 2*laneWidth,
	forthLane: laneWidth/2 + 3 * laneWidth,
}

// lane dividers 
const roadlines: Line[] = [];
const lineLeft1 = new Line(canvasWidth / 4, 0, 10, 200);
const lineMiddle1 = new Line(canvasWidth / 2, 0, 10, 200);
const lineRight1 = new Line(canvasWidth / 4 + canvasWidth / 2, 0, 10, 200);

const lineLeft2 = new Line(canvasWidth / 4, 325, 10, 200);
const lineMiddle2 = new Line(canvasWidth / 2, 325, 10, 200);
const lineRight2 = new Line(canvasWidth / 4 + canvasWidth / 2, 325, 10, 200);

const lineLeft3 = new Line(canvasWidth / 4, 650, 10, 200);
const lineMiddle3 = new Line(canvasWidth / 2, 650, 10, 200);
const lineRight3 = new Line(canvasWidth / 4 + canvasWidth / 2, 650, 10, 200);

roadlines.push(
	lineLeft1,
	lineMiddle1,
	lineRight1,
	lineLeft2,
	lineMiddle2,
	lineRight2,
    lineLeft3,
    lineMiddle3,
    lineRight3
);

export { roadlines, laneData, laneWidth };
export default Line;