class Restaurant {

    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        products.forEach(product => {

            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productTotalPrice = Number(productTotalPrice);
            productQuantity = Number(productQuantity);

            if(this.budgetMoney >= productTotalPrice) {

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

                this.stockProducts[productName] ? 
                    this.stockProducts[productName] += productQuantity :
                    this.stockProducts[productName] = productQuantity;

                this.budgetMoney -= productTotalPrice;

            } else {

                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
                
            }
        });
        
        return this.history.join('\n');

    }

    addToMenu(meal, neededProducts, price) {

        if(!this.menu[meal]) {

            let products = {};

            neededProducts.forEach(p => {
                let [productName, quantity] = p.split(' ');
                quantity = Number(quantity);
                products[productName] = quantity;
            });

            this.menu[meal] = { products, price };

            if(Object.keys(this.menu).length === 1) {

                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;

            } else {

                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;

            }

        } else {

            return `The ${meal} is already in the our menu, try something different.`;

        }
    }

    showTheMenu() {

        let resultArray = [];

        for(let key in this.menu) {

            resultArray.push(`${key} - $ ${this.menu[key].price}`);

        }

        if(resultArray.length === 0) {

            return `Our menu is not ready yet, please come later...`;

        } else {

            return resultArray.join('\n');

        }
     
    }

    makeTheOrder(meal) {

        if(!this.menu[meal]) {

            return `There is not ${meal} yet in our menu, do you want to order something else?`;

        } else {

            let mealRequirements = Object.entries(this.menu[meal].products);
            let haveProducts = true;
            mealRequirements.forEach(prod => {
                if(this.stockProducts[prod[0]] < prod[1] || this.stockProducts[prod[0]] === undefined) {
                    haveProducts = false;
                }
            });

            if(haveProducts === false) { 

                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`

            }

            mealRequirements.forEach(prod => {
                this.stockProducts[prod[0]] -= prod[1];
            });

            this.budgetMoney += this.menu[meal].price;

            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

        }

    }

}
