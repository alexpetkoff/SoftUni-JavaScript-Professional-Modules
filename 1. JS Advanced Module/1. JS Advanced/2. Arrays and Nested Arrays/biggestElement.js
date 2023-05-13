function biggestElement(array) {
    let biggestNum = array[0][0];

    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array[i].length; j++) {
            if(array[i][j] > biggestNum) {
                biggestNum = array[i][j];
            }
        }
    }

    return biggestNum;
}

console.log(biggestElement([[20, 50, 10],
[8, 33, 145]]));