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

//create full canvas (column of rows according to height dimension)
function createCanvas(){
    canvas = document.querySelector("#canvas");

    for(let j = 1 ; j <= height ; j++){
        createRow();
        canvas.appendChild(row);
    }

    let allDrawSquares = document.querySelectorAll(".draw-square");

    const randomFill = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        drawSquare.style.backgroundColor = "'#' + randomColor";
        
        console.log(randomColor);
    }

    //enable 'drawing', drawSquares get filled in 
    for (let i = 0 ; i < allDrawSquares.length; i++){

    allDrawSquares[i].addEventListener("mouseenter", () => {
        //generate random rgb code
        const randomColor = "rgb" + `(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;

        allDrawSquares[i].style.backgroundColor = randomColor;
        
        console.log(randomColor);
    });
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

    function getInput(){
        width = prompt("Enter a width!", 16);
        height = prompt("Enter a height!", 16);
        width = parseInt(width);
        height = parseInt(height);
    }

    getInput();

    //limits input to 100 or under
    while (width > 100 || height > 100){
        alert("Please enter a number less than 100.");
        getInput();
    }

    deleteCanvas();

    createCanvas();
}

newCanvas.addEventListener("click", resetCanvas);






