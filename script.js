const dimension = 16;

//create a single draw square
function createDrawSquare(){
    const drawSquare = document.createElement("div");
    drawSquare.setAttribute("class", "draw-square");

}

//create a row of draw squares according to width dimension
function createRow(){
    const row = document.createElement("div");
    row.setAttribute("clsss", "row");

    for(i = 1 ; i <= dimension ; i++){
        createDrawSquare();
        row.appendChild(drawSquare);
    }
}

//create full canvas (column of rows according to width dimensions)
function createCanvas(){
    const canvas = document.querySelector("#canvas");

    for(i = 1 ; i <= dimension ; i++){
        createRow();
        canvas.appendChild(row);
    }
}

createCanvas();
