class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(budget) {

        if (budget < 0) throw new Error("The budget cannot be a negative number");

        this._budget = budget;

    }

    get budget() {
        return this._budget;
    }

    shopping(product) {
        let [type, price] = product;

        if (this.budget < price) throw new Error("Not enough money to buy this product");

        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe) {
        recipe.productsList.forEach(prod => {
            if (!this.products.includes(prod)) throw new Error("We do not have this product");
        });

        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;

        this.dishes.push({ recipeName, productsList });
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        
        let isFound = this.dishes.find(el => el.recipeName === dish);
        if(!isFound) throw new Error("We do not have this dish");

        if (this.guests.hasOwnProperty(name)) throw new Error("This guest has already been invited");

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let resArray = [];
        for (let name in this.guests) {
            let foundProducts = this.dishes.find(el => {
               if(el.recipeName === this.guests[name]) {
                return el.productsList;
               }
            })
            resArray.push(`${name} will eat ${this.guests[name]}, which consists of ${(foundProducts.productsList).join(', ')}`);
        }
        return resArray.join('\n');
    }

}

let dinner = new ChristmasDinner(1000);

console.log(dinner.shopping(['Salt', 1]));
console.log(dinner.shopping(['Beans', 3]));
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 400]);
dinner.shopping(['Honey', 10]);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
console.log(dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
}));
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));
console.log(dinner.inviteGuests('Ivan', 'Oshav'));
console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
console.log(dinner.inviteGuests('Georgi', 'Peppers filled with beans'));
console.log(dinner.showAttendance());

console.log(dinner.dishes[0])
console.log(dinner.products)
console.log(dinner.guests)