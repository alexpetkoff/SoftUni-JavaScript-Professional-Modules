function processOddPositions(array) {

    array = array.filter((value, index) => index % 2 !== 0)
    let result = array.map((el) => el = el * 2);

    return result.reverse().join(' ');
}

console.log(processOddPositions([10, 15, 20, 25]));