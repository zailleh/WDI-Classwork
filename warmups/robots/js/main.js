
const state = {
  squares: [],
  robot_index: 0,
};

// make container
function makeContainer() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.appendChild(container);
  state.container = container;
}

// make grid of 64 squares
function makeGrid() {
  for (let i = 0; i < 64; i++) {
    const div = document.createElement('div');
    div.className = 'square';
    state.container.appendChild(div);
    state.squares.push(div);
  }
}

function makeRobot() {
  const robot = document.createElement('div')
  robot.className = 'robot'
  robot.classList.add('up');
  state.container.firstChild.appendChild(robot);
  state.robot = robot;
}

// provide direction as up, down, left, or right
function turnRobot(direction) {
  state.robot.classList.remove('up','down','left','right')
  state.robot.classList.add(direction);
}

// move robot
function moveRobot(direction) {
  let move = 0;
  switch (direction) {
    case "ArrowUp":
      // if move up would result in being off the top, don't allow it
      move = state.robot_index < 8 ? 0 : -8;
      turnRobot("up");
      break;
    case "ArrowDown":
      // if move up would result in being off the bottom, don't allow it
      move = state.robot_index > 55 ? 0 : 8;
      turnRobot("down");
      break;
    case "ArrowLeft":
      // if move up would result in being off the left, don't allow it
      move = state.robot_index % 8 != 0 ? -1 : 0;
      turnRobot("left");
      break;
    case "ArrowRight":
      // if move up would result in being off the right, don't allow it
      move = state.robot_index % 8 != 7 ? 1 : 0;
      turnRobot("right");
      break;
    default:
      break;
  }

  const newIndex = state.robot_index + move;

  state.squares[state.robot_index].firstChild.remove();
  state.squares[newIndex].appendChild(state.robot);
  state.robot_index = newIndex
}

document.addEventListener("DOMContentLoaded", function() {
  makeContainer();
  makeGrid();
  makeRobot();

  window.addEventListener('keydown', function(e) {
    moveRobot(e.key);
  })
});