function orbit(array) {
    let [sizeA, sizeB, indexA, indexB] = array;
    let matrix = [];

    for(let i = 0; i < sizeA; i++) {
        let arr = [];
        for(let j = 0; j < sizeB; j++) {
            arr.push('*');
        }
        matrix.push(arr);
    }
    let rowStart = indexA + 1;
    let columnStart = indexB + 1;
    
    for(let i = 0; i < sizeA; i++ ) {
        let currentRow = i + 1;
        for(let j = 0; j < sizeB; j++) {
            let currentColumn = j + 1;
            let differenceRow = Math.abs(currentRow - rowStart);
            let differenceColumn = Math.abs(currentColumn - columnStart);
            let checker = Math.max(differenceColumn, differenceRow);
            matrix[i][j] = checker + 1;
        }
    }

    matrix.forEach(x => console.log(x.join(' ')));
}

orbit([5, 5, 2, 2]);