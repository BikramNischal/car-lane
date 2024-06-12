import Car from "../modules/car.ts";
import { laneData} from "../modules/roadlines.ts";
import generateRandomNumber from "../utils/generaterandom.ts";

// list of enemy image src
const enemySrc = ["./enemy1.png", "./enemy2.png", "./enemy3.png"];

export type Enemy = {
	car: Car;
	laneNo: number;
}

export default function generateEnemy() {
    const lanes:number[] = [];
    const enemyList: Enemy[] = [];
	for (let i = 0; i < 4; ++i) {
        const imgIndex = generateRandomNumber(2);
        const lane:number = generateRandomNumber(4);
        if(lanes.indexOf(lane) !== -1)  continue;
        lanes.push(lane);

        // creates car with postion x,y, width, hegith and image
        // here x position = lanecenter - imagewidth/2
        //similary y postion = canvasHeight - imageheight
        const enemyCar = new Car(laneData[lane] - 50, 0 - 150, 100,150, enemySrc[imgIndex]);
        const enemy:Enemy = {car: enemyCar, laneNo: lane};
        enemyList.push(enemy);
    }
    return enemyList;
}
