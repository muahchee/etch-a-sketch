const dimension = 16;

let drawSquare;
let row;
let canvas;

//create a single draw square
function createDrawSquare(){
    drawSquare = document.createElement("div");
    drawSquare.setAttribute("class", "draw-square");

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
