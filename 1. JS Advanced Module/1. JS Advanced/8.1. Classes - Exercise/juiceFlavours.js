function juiceFlavours(input) {

    let objectJuices = {};

    let bottles = {};

    for (let line of input) {

        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (objectJuices.hasOwnProperty(juice)) {

            objectJuices[juice] += quantity;

            if (objectJuices[juice] >= 1000) {

                let bottleCount = Math.floor(objectJuices[juice] / 1000);
                let leftOver = objectJuices[juice] % 1000;

                bottles[juice] ? bottles[juice] += bottleCount : bottles[juice] = bottleCount;
                objectJuices[juice] = leftOver;
            }

        } else {

            if (quantity >= 1000) {

                let bottleCount = Math.floor(quantity / 1000);
                let leftOver = quantity % 1000;

                bottles[juice] = bottleCount;
                objectJuices[juice] = leftOver;

            } else {

                objectJuices[juice] = quantity;

            }
        }
    }

    if(bottles.size != 0) {

        for (let key in bottles) {
            console.log(`${key} => ${bottles[key]}`);
        }

    }

}


juiceFlavours(
    ['Kiwi => 234',
        'Pear => 2345.999999',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']);