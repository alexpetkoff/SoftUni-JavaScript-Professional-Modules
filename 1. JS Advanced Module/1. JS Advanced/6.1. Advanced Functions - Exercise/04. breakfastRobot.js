function solution() {

    let recipes = {
        'apple': { 'carbohydrate': 1, 'flavour': 2 },
        'lemonade': { 'carbohydrate': 10, 'flavour': 20 },
        'burger': { 'carbohydrate': 5, 'fat': 7, 'flavour': 3 },
        'eggs': { 'protein': 5, 'fat': 1, 'flavour': 1 },
        'turkey': { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10 },
    }

    let elements = { 
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    }

    return function manager(input) {

        //Object instructions
        let instructions = {
            restock: function restock(product, quantity) {
                quantity = Number(quantity);
                elements[product] += quantity;
                return 'Success';
            },
            prepare: function prepare(product, quantity) {
                quantity = Number(quantity)
                let currentRecipe = recipes[product];
                let check = true;
                for(let key in currentRecipe) {
                    if(!(currentRecipe[key] * quantity) >= elements[key]){
                        check = false; return `Error: not enough ${key} in stock`;
                    }
                }
                if(check === true) {
                    for(let key in currentRecipe) {
                        elements[key] -= (currentRecipe[key] * quantity);
                    }
                    return 'Success';
                }
            },
            report: function report() {
                let output = [];
                for(let key in elements) {
                    output.push(`${key}=${elements[key]}`);
                }
                return output.join(' ');
            }
        }
        let [command, product, quantity] = input.split(' ');
        return instructions[command](product, quantity);
    }
}

let manager = solution();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
