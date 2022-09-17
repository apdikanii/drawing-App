const canvas = document.getElementById("canvas");
const ct2d = canvas.getContext('2d');
let size = 30;
let isPressed = false;
canvas.addEventListener("mousedown", () => {
    isPressed = true;
});
canvas.addEventListener("mouseup", () => {
    isPressed = false;
})
canvas.addEventListener("mousemove", (e) => {
    if(isPressed) {
        const x = e.offsetX;
        const y = e.offsetY;
        drawCircle(x, y);
    }

    
}); 
function drawCircle(x,y){
    ct2d.beginPath();
    ct2d.arc(x, y, size, 0, Math.PI * 2);
    ct2d.fill();
}
// function draw(){
//     ct2d.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x, y);
//     requestAnimationFrame(draw);
// }
// draw();