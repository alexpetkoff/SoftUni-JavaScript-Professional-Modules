function sameNumbers(num) {

    let areSame = true;
    let numAsString = num + '';
    let split = numAsString.split('');
    let sum = 0;

    for(let el of split) {
        let firstLetter = split[0];
        if(el !== firstLetter) {
            areSame = false;
        }
        sum += Number(el);
    }

    console.log(areSame);
    console.log(sum);
}

sameNumbers(1234);