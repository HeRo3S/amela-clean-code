// let matrix = [[1, 2], [3, 4]];
//
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     console.log(matrix[i][j]);
//   }
// }

const matrix = [
  [1, 2],
  [3, 4],
];

function logMatrixCell(row) {
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
  }
}

for (let i = 0; i < matrix.length; i++) {
  logMatrixCell(matrix[i]);
}
