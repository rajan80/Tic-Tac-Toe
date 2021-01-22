let cells = document.querySelectorAll(".row > div");
const resetButton=document.getElementById("reset");
// place eventlistener on reset button, calll reset function on the bottom

let player = "X";
let turnCount = 0;
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);

}
resetButton.addEventListener("click",reset);
function cellClicked(e) {
  togglePlayer(e);
  turnCount++;
  win();
  
}
let grid = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[2], cells[4], cells[6]],
];

function togglePlayer(e) {
  let cell = e.target;
  cell.innerText = player;
  if (player == "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function win() {
  console.log("the turn count is " + turnCount);
  for (let j = 0; j < grid.length; j++) {
    let xCount = 0;
    let oCount = 0;
    let drawCount = 0;
    for (let k = 0; k < grid[j].length; k++) {
      if (grid[j][k].textContent === "X") {
        xCount++;
        console.log(xCount);
       
      } else if (grid[j][k].textContent === "O") {
        oCount++;
      }
      if (xCount === 3) {
        alert("x Win");
        reset();
        
      } else if (oCount === 3) {
        alert("O Win");
        reset();
        
      } else if (turnCount === 9) {
        alert("Draw");
         reset();
        break;
      }
    }
  }
}
function reset() {
  
  turnCount=0;
  Player = "x";
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
}
reset();
