function sortArray(array, operator) {

    let obj = {
        asc: (a,b) => a - b,
        desc: (a,b) => b - a,
        }
    return array.sort(obj[operator]);
}

sortArray([14, 7, 17, 6, 8], 'desc');