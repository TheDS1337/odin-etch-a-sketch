const getRandomColor = () => {
    let randomize = Math.random();
    return randomize === 0.5 ? getRandomColor() : randomize > 0.5 ? "#454140" : "#a79e84";
}

const grid = document.querySelector("#grid");

for( let i = 0; i < 16; i++ ) {
    const row = document.createElement("div");

    row.classList.add("grid_row");
    row.style.display = "flex";

    for( let j = 0; j < 16; j++ ) {
        const square = document.createElement("div");

        square.classList.add("grid_square");

        square.style.height = "50px";
        square.style.width = "50px";
        square.style.backgroundColor = "#a79e84" /*getRandomColor()*/;

        row.appendChild(square);
    }

    grid.appendChild(row);
}

// Hovering event propagation to the parent container
grid.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#454140";
});

grid.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "#a79e84";
});