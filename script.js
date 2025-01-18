document.getElementById("generateEmptyMaze").addEventListener("click", generateEmptyMaze);
document.getElementById("generateRandomMaze").addEventListener("click", generateRandomMaze);
document.getElementById("simulate").addEventListener("click", simulateMicromouse);
document.getElementById("clearMaze").addEventListener("click", clearMaze);
document.getElementById("toggleObstacleMode").addEventListener("click", toggleObstacleMode);

let maze = [];
let start = null;
let destination = null;
let customObstacleMode = false;

function generateEmptyMaze() {
  const rows = parseInt(document.getElementById("rows").value);
  const cols = parseInt(document.getElementById("columns").value);

  maze = Array.from({ length: rows }, () => Array(cols).fill(0));
  start = null;
  destination = null;

  renderMaze(rows, cols);
  document.getElementById("generateRandomMaze").disabled = false;
  document.getElementById("toggleObstacleMode").disabled = false;
  document.getElementById("clearMaze").disabled = false;
}

function generateRandomMaze() {
  const density = parseInt(document.getElementById("density").value);

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      maze[i][j] = Math.random() * 100 < density ? 1 : 0;
    }
  }

  renderMaze(maze.length, maze[0].length);
}

function renderMaze(rows, cols) {
  const mazeDiv = document.getElementById("maze");
  mazeDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  mazeDiv.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  mazeDiv.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("div");
      cell.className = `cell ${maze[i][j] === 1 ? "obstacle" : "empty"}`;
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.addEventListener("click", () => handleCellClick(i, j));
      mazeDiv.appendChild(cell);
    }
  }
}

function handleCellClick(row, col) {
  if (customObstacleMode) {
    maze[row][col] = maze[row][col] === 1 ? 0 : 1;
    renderMaze(maze.length, maze[0].length);
  } else if (!start) {
    start = [row, col];
    document.querySelector(`[data-row="${row}"][data-col="${col}"]`).classList.add("start");
  } else if (!destination) {
    destination = [row, col];
    document.querySelector(`[data-row="${row}"][data-col="${col}"]`).classList.add("destination");
    document.getElementById("simulate").disabled = false;
  }
}

function simulateMicromouse() {
  if (!start || !destination) {
    alert("Please set both start and destination points.");
    return;
  }

  const directions = [
    [0, -1], [0, 1], [-1, 0], [1, 0]
  ];
  const queue = [[...start, 0]];
  const visited = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(false));
  const parents = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(null));

  visited[start[0]][start[1]] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (x === destination[0] && y === destination[1]) {
      reconstructPath(parents, x, y);
      return;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;

      if (nx >= 0 && nx < maze.length && ny >= 0 && ny < maze[0].length &&
          maze[nx][ny] === 0 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
        parents[nx][ny] = [x, y];
      }
    }
  }

  alert("No path found.");
}

function reconstructPath(parents, x, y) {
  while (parents[x][y]) {
    const cell = document.querySelector(`[data-row="${x}"][data-col="${y}"]`);
    cell.classList.add("path");
    [x, y] = parents[x][y];
  }
}

function clearMaze() {
  maze = Array.from({ length: maze.length }, () => Array(maze[0].length).fill(0));
  start = null;
  destination = null;
  renderMaze(maze.length, maze[0].length);
  document.getElementById("simulate").disabled = true;
}

function toggleObstacleMode() {
  customObstacleMode = !customObstacleMode;
  alert(customObstacleMode ? "Custom Obstacle Mode Enabled." : "Custom Obstacle Mode Disabled.");
}
