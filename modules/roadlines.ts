import { ctx, canvas } from "./canvas.ts";

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;


// road divider line 
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
		dy: number = 3
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

interface Data{
	[index:number]: number;
}

// center X-axis of each lane 
const laneData:Data = {
	'0': laneWidth/2, 
	'1': laneWidth/2 + laneWidth,
	'2': laneWidth/2 + 2*laneWidth,
	'3': laneWidth/2 + 3 * laneWidth,
}

// generate lane dividers 
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