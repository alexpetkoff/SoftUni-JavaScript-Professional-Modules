function extractIncreasingSubFromArray(array) {

    let result = [array.shift()];
    let currentBiggestNum = result[0];
    for(let i = 0; i < array.length; i++) {
        if(array[i] >= currentBiggestNum) {
            currentBiggestNum = array[i];
            result.push(currentBiggestNum);
        }
    }
    return result;
}

console.log(extractIncreasingSubFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));