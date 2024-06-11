const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.height = canvas.clientHeight;
canvas.width = canvas.clientWidth;

export {canvas, ctx};
