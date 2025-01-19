
# Micromouse Maze Simulator

An interactive web-based maze simulator that allows users to create, customize, and simulate a micromouse navigating through a grid-based maze. The project is implemented using HTML, CSS, and JavaScript.

---

## Features

1. **Maze Generation**
   - Generate an empty maze with customizable rows and columns.
   - Create a randomized maze with obstacles based on user-specified density.

2. **Interactive Customization**
   - Toggle a custom obstacle mode to manually add or remove obstacles by clicking cells.
   - Set the start and destination points for the micromouse.

3. **Micromouse Simulation**
   - Simulates the micromouse navigating from the start to the destination using the breadth-first search (BFS) algorithm.
   - Displays the shortest path with visual indicators.

4. **Controls**
   - Clear the maze to start fresh while retaining current dimensions.
   - Prevent conflicting actions (e.g., disable "Set Start" and "Set End" during custom obstacle mode).

5. **Instructions**
   - Comprehensive guide for using the interface.

---

## Getting Started

### Prerequisites
Ensure you have a modern web browser that supports JavaScript and CSS.

### Installation
1. Clone the repository or download the project files.
   ```bash
   git clone <repository-url>
   ```
2. Open the `index.html` file in your browser to launch the application.

---

## How to Use

1. **Generate Maze**:
   - Use the input fields to specify the number of rows and columns.
   - Click "Generate Empty Maze" to create an empty maze.

2. **Customize Maze**:
   - Use the "Toggle Custom Obstacle Mode" button to add or remove obstacles manually.
   - Set the density and click "Generate Randomized Maze" to populate the maze with random obstacles.

3. **Set Start and Destination**:
   - Toggle the "Custom Obstacle Mode" off.
   - Click on cells to set the start and destination points.

4. **Simulate**:
   - Click "Simulate Micromouse" to visualize the shortest path.
   - The path is highlighted, and distances are displayed in the cells.

5. **Clear Maze**:
   - Click "Clear Maze" to reset the maze.

---

## Controls

| Button                  | Action                                                        |
|-------------------------|--------------------------------------------------------------|
| **Generate Empty Maze** | Creates an empty maze with the specified dimensions.         |
| **Generate Random Maze**| Generates obstacles based on the specified density.          |
| **Toggle Obstacle Mode**| Enables/Disables custom obstacle editing mode.               |
| **Set Start**           | Allows you to set the start point. Disabled in obstacle mode.|
| **Set End**             | Allows you to set the end point. Disabled in obstacle mode.  |
| **Simulate Micromouse** | Runs the simulation to find and display the shortest path.   |
| **Clear Maze**          | Resets the maze to its initial empty state.                  |

---

## Project Structure

```
Micromouse-Maze-Simulator/
├── index.html        # Main HTML structure
├── style.css         # CSS styles for the maze and interface
├── script.js         # JavaScript logic for maze generation and simulation
└── README.md         # Project documentation
```

---

## Future Improvements

1. Add support for other pathfinding algorithms like A* or Dijkstra's.
2. Introduce animations to visualize the micromouse traversal.
3. Enable saving and loading of maze configurations.
4. Improve accessibility for screen readers and keyboard navigation.

---

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

---

## Acknowledgments

- Inspired by the Micromouse competition for robotics enthusiasts.
- Built with HTML, CSS, and JavaScript.

---
