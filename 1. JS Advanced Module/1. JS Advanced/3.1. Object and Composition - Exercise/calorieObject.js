function calorieObject(input) {

    let products = {};

    for(let i = 0; i < input.length; i+=2) {
        let product = input[i];
        let calories = Number(input[i + 1]);
        products[product] = calories;
    }
    
    console.log(products)
}

calorieObject(['Yoghurt', '48', 'Rise', '138',
'Apple', '52']);