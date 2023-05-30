function add(num) {
    sum = 0;
    sum += num;

    function addMore(anotherNum) {
        sum += anotherNum;
        return addMore; 
    }
    addMore.toString = () => sum;
    return addMore;
}
console.log(add(1)(6)(2)(2)(90).toString());