function diagonalAttack(array) {

    let arrayToNumbers = [];

    for (let el of array) {

        let currentRow = el.split(' ').map((x) => Number(x));
        arrayToNumbers.push(currentRow);

    }

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0, j = arrayToNumbers.length - 1; i < arrayToNumbers.length; i++, j--) {

        sumFirstDiagonal += arrayToNumbers[i][i];
        sumSecondDiagonal += arrayToNumbers[i][j];

    }

    if (sumFirstDiagonal != sumSecondDiagonal) {

        arrayToNumbers.forEach((x) => console.log(x.join(' ')));

    } else {

        for (let i = 0, j = arrayToNumbers.length - 1; i < arrayToNumbers.length; i++, j--) {

            for (let y = 0; y < arrayToNumbers.length; y++) {
                if (i !== y && j !== y) {
                    arrayToNumbers[i][y] = sumFirstDiagonal;
                }
            }
        }

        arrayToNumbers.forEach((x) => console.log(x.join(' ')));
    }
}

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])