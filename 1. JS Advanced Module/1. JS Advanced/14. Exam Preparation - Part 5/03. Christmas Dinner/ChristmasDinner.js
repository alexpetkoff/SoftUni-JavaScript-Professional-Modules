class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(budget) {
        if(budget < 0) {
            throw "The budget cannot be a negative number";
        } else {
            this._budget = budget;
        }
    }

    shopping(productArr) {
        let [type, price] = productArr;

        if(this.budget < price) throw "Not enough money to buy this product";

        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes({recipe}) {
        
    }

}

let dinner = new ChristmasDinner(-12);
console.log(dinner)