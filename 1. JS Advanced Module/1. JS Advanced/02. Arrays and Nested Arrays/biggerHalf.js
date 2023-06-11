function biggerHalf(array) {

    let sorted = array.sort((a, b) => a - b);
    return sorted.slice(sorted.length / 2);

}

console.log(biggerHalf([4, 7, 2, 5, 8]));