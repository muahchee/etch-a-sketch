const dimension = 16;

let drawSquare;
let row;
let canvas;

//create a single draw square
function createDrawSquare(){
    drawSquare = document.createElement("div");
    drawSquare.setAttribute("class", "draw-square");
}

//change class to fill-square
function fillSquare(){
    drawSquare.setAttribute("class", "fill-square");
}

//create a row of draw squares according to width dimension
function createRow(){
    row = document.createElement("div");
    row.setAttribute("class", "row");

    for(let i = 1 ; i <= dimension ; i++){
        createDrawSquare();
        row.appendChild(drawSquare);
    }
}

//create full canvas (column of rows according to width dimensions)
function createCanvas(){
    canvas = document.querySelector("#canvas");

    for(let j = 1 ; j <= dimension ; j++){
        createRow();
        canvas.appendChild(row);
    }
}

createCanvas();

let i;

let allDrawSquares = document.querySelectorAll(".draw-square");

console.log(allDrawSquares);


for (let i = 0 ; i < allDrawSquares.length; i++){
    console.log(allDrawSquares[i]);
    allDrawSquares[i].addEventListener("mousedown", () => allDrawSquares[i].setAttribute("class", "fill-square")); 
}


