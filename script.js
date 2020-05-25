const square = document.querySelector(".square");

let divX = 10;
let divY = 20;
square.style.left = `${divX}px`;
square.style.top = `${divY}px`;

let drawActive = false;

let insertX;
let insertY;

square.addEventListener("mousedown",(e) => {
    square.style.backgroundColor = "gray";
    drawActive = !drawActive;

    insertX = e.offsetX;
    insertY = e.offsetY;
})

square.addEventListener("mousemove",(e) => {
    if(drawActive){
        divX = e.clientX - insertX;
        divY = e.clientY - insertY;
        square.style.left = `${divX }px`;
        square.style.top = `${divY }px`;
    }
    
    
})

square.addEventListener("mouseup",() => {
    square.style.backgroundColor = "black";
    drawActive = !drawActive;
})


