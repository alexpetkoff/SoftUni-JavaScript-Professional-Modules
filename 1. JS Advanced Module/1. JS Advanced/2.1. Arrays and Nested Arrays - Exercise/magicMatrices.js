function magicMatrices(matrix) {
    let firstRow = 0;
    let sum = matrix[0].forEach(element => {
        firstRow += element;
    });
    
    for(let i = 0; i < matrix.length; i++) {
        let sumRow = 0;
        let sumColumn = 0;
        for(let j = 0; j < matrix.length; j++) {
            sumRow += matrix[i][j];
            sumColumn += matrix[j][i];
        }
        if(sumRow != firstRow || sumColumn != firstRow) {
            return false;
        }
    }

    return true;
}   

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);