function smallestTwoNumbers(array) {

    let sortedArray = array.sort((a, b) => a - b);
    console.log(sortedArray.slice(0, 2).join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);