//generates a random number from 0 to max
export default function generateRandomNumber(max:number){
    return Math.ceil(Math.random()*max);
}