
const canvas = document.getElementById("canvas");
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const sizeEL = document.getElementById('size');
const colorEL = document.getElementById('color');
const clearEL = document.getElementById('clear');
const ct2d = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x1, y1, x2, y2);
        x = x2;
        y = y2;
    }
}); 
function drawCircle(x, y){
    ct2d.beginPath();
    ct2d.arc(x, y, size, 0, Math.PI * 2);
    ct2d.fillStyle = color;
    ct2d.fill();
}
function drawLine(x1, y1, x2, y2){
    ct2d.beginPath();
    ct2d.moveTo(x1, y1);
    ct2d.lineTo(x2, y2);
    ct2d.strokeStyle = color;
    ct2d.lineWidth = size * 2;
    ct2d.stroke();
}

increase.addEventListener("click", () => {
    size += 5;
    if( size > 50) {
        size = 50;
    }
    updateSize();
});
decrease.addEventListener("click", () => {
    size -= 5;
    if( size < 5) {
        size = 5;
    }
    updateSize();
});
colorEL.addEventListener("change", (e) => {
    color = e.target.value;
})
clearEL.addEventListener("click", () =>{
    ct2d.clearRect(0, 0, canvas.width, canvas.height);
})
function updateSize() {
    sizeEL.innerText = size;
}
