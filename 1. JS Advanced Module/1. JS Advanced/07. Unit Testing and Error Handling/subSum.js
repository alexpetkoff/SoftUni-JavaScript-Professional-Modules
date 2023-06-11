module.exports = { subSum }; 

function subSum(array, start, end) {

    if(!Array.isArray(array)) {
        return NaN;
    }
    if(start < 0) {
        start = 0;
    }
    if(end > array.length - 1) {
        end = array.length - 1;
    }

    let sum = 0;

    for(let i = start; i <= end; i++) {
        if(typeof(array[i]) === 'number') {
            sum += array[i];
        } else {
            return NaN;
        }
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300 ))