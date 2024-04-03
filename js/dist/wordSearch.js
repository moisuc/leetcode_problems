"use strict";
function exist(board, word) {
    let rows = board.length;
    let cols = board[0].length;
    let visited = Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
    function dfs(row, col, index) {
        if (index === word.length) {
            return true;
        }
        if (row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            visited[row][col] ||
            board[row][col] !== word[index]) {
            return false;
        }
        visited[row][col] = true;
        if (dfs(row + 1, col, index + 1) ||
            dfs(row - 1, col, index + 1) ||
            dfs(row, col + 1, index + 1) ||
            dfs(row, col - 1, index + 1)) {
            return true;
        }
        visited[row][col] = false;
        return false;
    }
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (dfs(row, col, 0)) {
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=wordSearch.js.map