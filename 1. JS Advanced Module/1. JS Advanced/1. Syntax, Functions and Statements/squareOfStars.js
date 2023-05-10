function squareOfStars(input) {
    if(input != undefined) {
        for (let i = 1; i <= input; i++) {
            let row = '';
                for (let j = 1; j <= input; j++) {
                    row += '* ';
                }
                console.log(row);
        }
    } else {
        for (let i = 1; i <= 5; i++) {
            let row = '';
                for (let j = 1; j <= 5; j++) {
                    row += '* ';
                }
            console.log(row);
        }
    }
}

squareOfStars();