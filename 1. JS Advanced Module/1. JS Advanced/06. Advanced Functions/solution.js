function solution(save) {
    return function(add) {
       return save + add;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(100))