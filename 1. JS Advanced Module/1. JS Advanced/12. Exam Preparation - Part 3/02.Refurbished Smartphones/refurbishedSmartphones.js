class RefurbishedSmartphones {

    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {

        if (model === '' || storage < 0 || storage.isInteger === false || price < 0 || condition === '') {
            throw new Error("Invalid smartphone!");
        }

        this.availableSmartphones.push({ model, storage, price, condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;

    }

    sellSmartphone(model, desiredStorage) {

        let isFound = this.availableSmartphones.find(phone => 
           phone.model === model
        );

        if (isFound === undefined) {
            throw new Error(`${model} was not found!`);
        } else {
            if ((desiredStorage - isFound.storage) <= 128 && (desiredStorage - isFound.storage) > 0) {
                isFound.price -= isFound.price * 0.1;
            } else if ((desiredStorage - isFound.storage) > 128) {
                isFound.price -= isFound.price * 0.2;
            }
            let storage = isFound.storage;
            let soldPrice = isFound.price;
            this.revenue += Number(soldPrice);
            this.soldSmartphones.push({ model, storage, soldPrice });
            let index = this.availableSmartphones.indexOf(isFound);
            this.availableSmartphones.splice(index, 1);

            return `${model} was sold for ${soldPrice.toFixed(2)}$`;
        }

    }

    upgradePhones() {

        if (this.availableSmartphones.length === 0) {

            throw new Error("There are no available smartphones!");

        } else {

            let result = `Upgraded Smartphones:\n`;
            let array = [];
            this.availableSmartphones.forEach(phone => {
                phone.storage *= 2;
                array.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
            });

            return result + array.join('\n');
        }
    }

    salesJournal(criteria) {

        let arraySold = Array.from(this.soldSmartphones);

        switch(criteria) {
            case 'storage': {
                arraySold.sort((a,b) => b.storage - a.storage);
                break;
            }

            case 'model': {
                arraySold.sort((a,b) => a.model.localeCompare(b.model));
                break;
            }
            default: throw new Error("Invalid criteria!");
        }

        let result = `${ this.retailer } has a total income of ${ (this.revenue).toFixed(2) }$\n` + `${ arraySold.length } smartphones sold:\n`;

        let resArr = [];
        arraySold.forEach(phone => {
            resArr.push(`${phone.model} / ${phone.storage} GB / ${Number(phone.soldPrice).toFixed(2)}$`);
        });

        return result + resArr.join('\n');
    }

}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));