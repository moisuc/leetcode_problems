/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let n = image.length;
  let m = image[0].length - 1;

  for (let i = 0; i < n; i++) {
    let k = m;
    for (let j = 0; j < m && j <= k; j++) {
      let temp = image[i][j];
      image[i][j] = image[i][k];
      image[i][k] = temp;

      k--;
    }
    for (let j = 0; j <= m; j++) {
      image[i][j] = image[i][j] == 1 ? 0 : 1;
    }
  }
  return image;
};

let image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];
//[[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]
console.log(flipAndInvertImage(image));
