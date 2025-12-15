let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function makeMove(index) {
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  document.getElementsByClassName("cell")[index].innerText = currentPlayer;

  if (checkWin()) {
    document.getElementById("status").innerText = `Player ${currentPlayer} wins!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    document.getElementById("status").innerText = "It's a draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
  return winConditions.some(condition =>
    condition.every(index => board[index] === currentPlayer)
  );
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  document.getElementById("status").innerText = "Player X's turn";
  document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}
