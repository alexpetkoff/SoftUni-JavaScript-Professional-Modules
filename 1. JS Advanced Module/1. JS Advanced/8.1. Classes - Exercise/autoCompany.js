function autoCompany(input) {

    let collection = {};

    for(let line of input) {

        let [brand, model, quantity] = line.split(' | ');
        quantity = +quantity;
        
        if(collection.hasOwnProperty(brand)) {

            collection[brand][model] ?
                collection[brand][model] += quantity :
                collection[brand][model] = quantity;

        } else {

            collection[brand] = {};
            collection[brand][model] = quantity;

        }
    }

    let result = '';

    for(let brand in collection) {
        result += `${brand}\n`;

        for(let model in collection[brand]) {
            result += `###${model} -> ${collection[brand][model]}\n`;
        }
    }

    console.log(result);

}

autoCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);