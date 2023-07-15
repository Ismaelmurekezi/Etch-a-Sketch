

// const container = document.querySelector(".container");
// const gridSizeButton = document.querySelector(".grid-size-button");
// const clearButton = document.querySelector(".clear-button");
// const resetButton = document.querySelector(".reset-button");
// const colorButtons = document.querySelectorAll(".color-button");

// let gridSize = 16;
// let currentColor = "blue";

// // Function to create the initial grid
// function createGrid(size) {
//   container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//   container.innerHTML = "";

//   for (let i = 0; i < size * size; i++) {
//     const gridCell = document.createElement("div");
//     gridCell.classList.add("grid-cell");
//     container.appendChild(gridCell);
//   }
//   // Event listener for the grid size button
// gridSizeButton.addEventListener("click", function changeGridSize() {
//   let newGridSize = prompt("Enter grid size (between 2 and 100):");
//   newGridSize = parseInt(newGridSize);

//   if (newGridSize >= 2 && newGridSize <= 100 && !isNaN(newGridSize)) {
//     gridSize = newGridSize;
//     createGrid(gridSize);
//   } else {
//     alert("Invalid grid size! Please enter a number between 2 and 100.");
//   }
// });

//   // Add event listeners to the grid cells
//   const gridCells = document.querySelectorAll(".grid-cell");
//   gridCells.forEach((cell) => {
//     cell.addEventListener("mouseenter", applyColor);
//   });
// }

// // Function to apply the selected color or erase the grid cell
// function applyColor(e) {
//   const cell = e.target;
//   if (clearButton.classList.contains("active")) {
//     cell.style.backgroundColor = "";
//   } else {
//     cell.style.backgroundColor = currentColor;
//   }
// }




// // Function to clear the grid cells
// function clearGrid() {
//   const gridCells = document.querySelectorAll(".grid-cell");
//   gridCells.forEach((cell) => {
//     cell.style.backgroundColor = "";
//   });
// }





// // Event listeners for the color buttons
// colorButtons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     currentColor = e.target.dataset.color;
//     clearButton.classList.remove("active");
//   });
// });

// // Event listener for the clear button
// clearButton.addEventListener("click", () => {
//   clearButton.classList.toggle("active");
// });

// // Event listener for the reset button
// resetButton.addEventListener("click",function resetGrid() {
//   gridSize = 16;
//   createGrid(gridSize);
//   clearGrid();
// }
//  );

// // Create the initial grid
// createGrid(gridSize);


const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-button");
const clearButton = document.querySelector(".clear-button");
const resetButton = document.querySelector(".reset-button");
const colorButtons = document.querySelectorAll(".color-button");

let gridSize = 16;
let currentColor = "blue";

// Function to create the initial grid
function createGrid(size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    container.appendChild(gridCell);
  }

  // Add event listeners to the grid cells
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("mouseenter", applyColor);
  });
}

// Function to apply the selected color or erase the grid cell
function applyColor(e) {
  const cell = e.target;
  if (clearButton.classList.contains("active")) {
    cell.style.backgroundColor = "";
  } else {
    cell.style.backgroundColor = currentColor;
  }
}

// Function to clear the grid cells
function clearGrid() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

// Event listener for the grid size button
gridSizeButton.addEventListener("click", () => {
  let newGridSize = prompt("Enter grid size (between 2 and 100):");
  newGridSize = parseInt(newGridSize);

  if (newGridSize >= 2 && newGridSize <= 100 && !isNaN(newGridSize)) {
    gridSize = newGridSize;
    createGrid(gridSize);
  } else {
    alert("Invalid grid size! Please enter a number between 2 and 100.");
  }
});

// Event listeners for the color buttons
colorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentColor = e.target.dataset.color;
    clearButton.classList.remove("active");
  });
});

// Event listener for the clear button
clearButton.addEventListener("click", () => {
  clearButton.classList.toggle("active");
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
  gridSize = 16;
  createGrid(gridSize);
  clearGrid();
});

// Create the initial grid
createGrid(gridSize);

