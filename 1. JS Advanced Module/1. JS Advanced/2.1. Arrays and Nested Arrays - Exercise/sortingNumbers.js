function sortingNumbers(array) {

    let sortedArray = array.sort((a, b) => a - b);
    let result = [];
    while(sortedArray.length != 0) {
        let currentSmallest = sortedArray.shift();
        let currentBiggest = sortedArray.pop();
        result.push(currentSmallest);
        result.push(currentBiggest);
    }
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);