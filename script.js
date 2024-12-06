width = 16;
height = 16;

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

    for(let i = 1 ; i <= width ; i++){
        createDrawSquare();
        row.appendChild(drawSquare);
    }
}

//create full canvas (column of rows according to height dimensions)
function createCanvas(){
    canvas = document.querySelector("#canvas");

    for(let j = 1 ; j <= height ; j++){
        createRow();
        canvas.appendChild(row);
    }

    let allDrawSquares = document.querySelectorAll(".draw-square");

    //enable 'drawing', drawSquares get filled in 
    for (let i = 0 ; i < allDrawSquares.length; i++){

    allDrawSquares[i].addEventListener("mouseenter", () => 
        allDrawSquares[i].setAttribute("class", "fill-square"));
    }
}

createCanvas();


const newCanvas = document.createElement("button");
body = document.querySelector("body");

//make "New Canvas" button
newCanvas.textContent = "New Canvas";
body.insertBefore(newCanvas, canvas);

//delete the rows from canvas (retains #canvas)
function deleteCanvas(){

    canvas = document.querySelector("#canvas");

    while(canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    }
};

//ask for new dimensions and resets canvas
function resetCanvas(){
    deleteCanvas();

    width = prompt("Enter a width!", 16);
    height = prompt("Enter a height!", 16);

    width = parseInt(width);
    height = parseInt(height);

    createCanvas();
}

newCanvas.addEventListener("click", resetCanvas);






