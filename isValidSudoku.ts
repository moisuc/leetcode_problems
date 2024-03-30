function isValidSudoku(board: string[][]): boolean {
  const n = 9;

  let rows = new Array(n).fill(0).map(() => new Map());
  let columns = new Array(n).fill(0).map(() => new Map());
  let boxes = new Array(n).fill(0).map(() => new Map());
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let num = board[i][j];
      if (num !== ".") {
        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i].has(num)) {
          return false;
        }
        rows[i].set(num, 1);

        if (columns[j].has(num)) {
          return false;
        }

        columns[j].set(num, 1);
        if (boxes[boxIndex].has(num)) {
          return false;
        }
        boxes[boxIndex].set(num, 1);
      }
    }
  }

  return true;
}

let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));
