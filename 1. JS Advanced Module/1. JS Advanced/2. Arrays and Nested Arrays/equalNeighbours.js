function equalNeighbours(matrix) {

    let counter = 0;

    for(let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix.length - 1 === i) {
                if(matrix[i][j] == matrix[i][j + 1]) {
                    counter++;
                }
            } else {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    counter++;
                }
                if (matrix[i][j] === matrix[i][j + 1]) {
                    counter++;
                }
            }
        }
    }
    return counter;
}

console.log(equalNeighbours([[2, 2, 5, 7, 4],
                             [4, 0, 5, 5, 4],
                             [2, 5, 5, 4, 2]]));
console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
                             ['well', 'done', 'yo', '6'],
                             ['not', 'done', 'yet', '5']]))