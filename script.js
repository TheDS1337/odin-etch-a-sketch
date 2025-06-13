const getRandomColor = () => {
    let randomR = Math.floor(Math.random() * 255);
    let randomG = Math.floor(Math.random() * 255);
    let randomB = Math.floor(Math.random() * 255);

    return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

const generateGrid = () => {
    // First digit approximation is just weird in JS
    const squareSize = Math.floor(800 / gridSize).toString() + 'px';

    for( let i = 0; i < gridSize; i++ ) {
        const row = document.createElement("div");

        row.classList.add("grid_row");
        row.style.display = "flex";

        for( let j = 0; j < gridSize; j++ ) {
            const square = document.createElement("div");

            square.classList.add("grid_square");

            square.style.height = squareSize;
            square.style.width = squareSize;
            square.style.backgroundColor = "#a79e84";

            row.appendChild(square);
        }

        grid.appendChild(row);
    }
}

const clearGrid = () => {
    while( grid.firstChild ) {
        const row = grid.lastChild;

        while( row.firstChild )
            row.lastChild.remove();
        
        row.remove();
    }
}

let gridSize = 16;

const grid = document.querySelector("#grid");
generateGrid();

let mouseClicked = false;

// Hovering event propagation to the parent container
grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = getRandomColor();
});

grid.addEventListener("mousedown", () => {
    mouseClicked = true;
});

grid.addEventListener("mouseup", () => {
    mouseClicked = false;
});

grid.addEventListener("mouseout", (event) => {
    if( !mouseClicked )
        event.target.style.backgroundColor = "#a79e84";
});

const button = document.querySelector("#number-of-squares");
button.addEventListener("click", () => {
    gridSize = parseInt(prompt("How many squares do you want in either size? (max. 100)"));

    if( !Number.isInteger(gridSize) || gridSize <= 0 ) {
        console.warn("Non-integer value or negative value of gridSize.");
        gridSize = 16;
    }

    if( gridSize > 100 ) {
        console.warn(`${gridSize} is computationally expensive, clamping to 100...`);
        gridSize = 100;
    }

    clearGrid();
    generateGrid();
});