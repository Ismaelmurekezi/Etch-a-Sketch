const container = document.querySelector(".container");
const gridSizeButton = document.querySelector(".grid-size-button");
const clearButton = document.querySelector(".clear-button");
const resetButton = document.querySelector(".reset-button");
const rainbowButton = document.querySelector(".rainbow-button");
const colorButtons = document.querySelectorAll(".color-button");

let gridSize = 16;
let currentColor = "blue";
let isRainbowEnabled = false;

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

// Function to apply the selected color to a grid cell
function applyColor(e) {
  const cell = e.target;
  if (isRainbowEnabled) {
    const randomHue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${randomHue}, 100%, 50%)`;
    cell.style.backgroundColor = randomColor;
  } else if (clearButton.classList.contains("active")) {
    cell.style.backgroundColor = "";
  } else {
    cell.style.backgroundColor = currentColor;
  }
}

// Function to change the grid size
function changeGridSize() {
  let newGridSize = prompt("Enter grid size (between 2 and 100):");
  newGridSize = parseInt(newGridSize);

  if (newGridSize >= 2 && newGridSize <= 100 && !isNaN(newGridSize)) {
    gridSize = newGridSize;
    createGrid(gridSize);
  } else {
    alert("Invalid grid size! Please enter a number between 2 and 100.");
  }
}



// Function to clear the grid cells
function clearGrid() {
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "";
  });
}

// Function to reset the grid size and clear the grid cells
function resetGrid() {
  gridSize = 16;
  createGrid(gridSize);
  clearGrid();
}

// Event listener for the grid size button
gridSizeButton.addEventListener("click", changeGridSize);

// Event listeners for the color buttons
colorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isRainbowEnabled) {
      isRainbowEnabled = false;
      rainbowButton.classList.remove("active");
    }
    currentColor = e.target.dataset.color;
    clearButton.classList.remove("active");
  });
});


// Event listener for the clear button
clearButton.addEventListener("click", () => {
  clearButton.classList.toggle("active");
});

// Event listener for the reset button
resetButton.addEventListener("click", resetGrid);

// Event listener for the rainbow button
rainbowButton.addEventListener("click", () => {
  isRainbowEnabled = !isRainbowEnabled;
  rainbowButton.classList.toggle("active");
});

// Create the initial grid
createGrid(gridSize);
