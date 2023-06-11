function commonDiviser(x, y) {

    let gcd = 0;
    if (x > y) {
        for(let i = 1; i <= y; i++) {
            if(x % i === 0 && y % i === 0) {
                gcd = i;
            }
        }
    } else {
        for(let i = 1; i <= x; i++) {
            if(x % i === 0 && y % i === 0) {
                gcd = i;
            }
        }
    }
    console.log(gcd);
}

function gcd(x, y) {

    while(y) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    console.log(x);

}

gcd(2154, 458);