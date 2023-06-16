class WineSelection {

    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.space === 0) throw new Error("Not enough space in the cellar.");

        this.space--;
        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;

    }

    payWineBottle(wineName, price) {

        let isFound = this.wines.find(wine => wine.wineName === wineName);

        if (!isFound) {
            throw new Error(`${wineName} is not in the cellar.`);
        } else {
            if (isFound.paid) {
                throw new Error(`${wineName} has already been paid.`);
            }
            else {
                isFound.paid = true;
                this.bill += price;
                return `You bought a ${wineName} for a ${price}$.`;
            }
        }
    }

    openBottle(wineName) {

        let isFound = this.wines.find(wine => wine.wineName === wineName);
        let index = this.wines.indexOf(isFound);
        if (!isFound) {
            throw new Error(`The wine, you're looking for, is not found.`);
        } else {
            if (!isFound.paid) {
                throw new Error(`${wineName} need to be paid before open the bottle.`);
            } else {
                this.wines.splice(index, 1);
                return `You drank a bottle of ${wineName}.`;
            }
        }

    }

    cellarRevision(wineType) {

        if (!wineType) {
            let result = [];
            result.push(`You have space for ${this.space} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);

            let sorted = this.wines;
            sorted.sort((a, b) => a.wineName.localeCompare(b.wineName));
            sorted.forEach(line => result.push(`${line.wineName} > ${line.wineType} - ${this.isPaid(line.paid)}.`));

            return result.join('\n');
        }


        let isFound = this.wines.find(wine => wine.wineType === wineType);

        if (isFound) {
            let result = [];
            this.wines.forEach(el => {
                if (el.wineType === wineType) {
                    result.push(`${el.wineName} > ${el.wineType} - ${this.isPaid(el.paid)}.`);
                }
            });

            return result.join('\n');
        }

        throw new Error(`There is no ${wineType} in the cellar.`);

    }

    isPaid(boolean) {
        if (boolean === false) return 'Not Paid';

        return 'Has Paid';
    }

}

const selection = new WineSelection(5);
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());