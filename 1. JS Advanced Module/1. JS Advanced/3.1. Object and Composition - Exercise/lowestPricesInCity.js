function lowestPricesInCity(array) {

    let collection = {};

    for (let i = 0; i < array.length; i++) {
        let [town, product, price] = array[i].split(' | ');
        price = +price;
        if (!collection.hasOwnProperty(product)) {
            collection[product] = {
                price: price,
                town: town,
            }
        } else {
            if (collection[product].price > price) {
                collection[product] = {
                    price: price,
                    town: town,
                }
            }
        }
    }
    for(let key of Object.keys(collection)) {
        console.log(`${key} -> ${collection[key].price} (${collection[key].town})`)
    }
}

lowestPricesInCity(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 11',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'])

//Sample Product -> 1000 (Sample Town)
//Orange -> 2 (Sample Town)
//Peach -> 1 (Sample Town)
//Burger -> 10 (New York)

