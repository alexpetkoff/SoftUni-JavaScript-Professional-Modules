function aggregateElements(array) {

    let sum = 0;
    let sumInverse = 0;
    let concat = '';

    for(let el of array) {
        sum += el;
        sumInverse += 1 / el;
        concat += el;
    }

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

aggregateElements([1, 2, 3]);