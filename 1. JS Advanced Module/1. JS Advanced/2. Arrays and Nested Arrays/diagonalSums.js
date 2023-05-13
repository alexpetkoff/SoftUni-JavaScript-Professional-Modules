function diagonalSums(array) {

    let firstSum = 0;
    let secondSum = 0;
    let counter = 0;
    let reverseCounter = array.length - 1;

    for (let i = 0; i < array.length; i++) {
        firstSum += array[i][counter];
        secondSum += array[i][reverseCounter];
        counter++;
        reverseCounter--;
    }

    console.log(firstSum, secondSum);

}

diagonalSums([[10, 2, 3], [4, 5, 6], [7, 8, 90]]);