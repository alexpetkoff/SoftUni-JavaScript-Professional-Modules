const expect = require('chai').expect;


const carService = {

    isItExpensive(issue) {
        if (issue === "Engine" || issue === "Transmission") {
            return `The issue with the car is more severe and it will cost more money`;
        } else {
            return `The overall price will be a bit cheaper`;
        }
    },

    discount(numberOfParts, totalPrice) {
        if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
            throw new Error("Invalid input");
        }

        let discountPercentage = 0;

        if (numberOfParts > 2 && numberOfParts <= 7) {
            discountPercentage = 15;
        } else if (numberOfParts > 7) {
            discountPercentage = 30;
        }

        let result = (discountPercentage / 100) * totalPrice;

        if (numberOfParts <= 2) {
            return "You cannot apply a discount";
        } else {
            return `Discount applied! You saved ${result}$`;
        }
    },

    partsToBuy(partsCatalog, neededParts) {
        let totalSum = 0;

        if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
            throw new Error("Invalid input");
        }
        neededParts.forEach((neededPart) => {
            partsCatalog.map((obj) => {
                if (obj.part === neededPart) {
                    totalSum += obj.price;
                }
            });
        });

        return totalSum;
    },
};


// Testing using Mocha and Chai;


describe("Tests carService object...", function () {

    describe("Test isItExpensive(issue) func...", function () {
        it("if value of issue is Engine or Transmission", function () {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
        it("if value of issue is different", function () {
            expect(carService.isItExpensive('flat tire')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe("Test discount(numberOfParts, totalPrice) func...", function () {
        it("Percentage of discount based on the numberOfParts:", function () {
            expect(carService.discount(3, 100)).to.equal(`Discount applied! You saved ${15}$`);
            expect(carService.discount(7, 100)).to.equal(`Discount applied! You saved ${15}$`);
            expect(carService.discount(8, 100)).to.equal(`Discount applied! You saved ${30}$`);
            expect(carService.discount(2, 100)).to.equal("You cannot apply a discount");
            expect(carService.discount(1, 100)).to.equal("You cannot apply a discount");
        });

        it("Invalid input throws error:", function () {
            expect(() => carService.discount('2', 100)).to.throw("Invalid input");
            expect(() => carService.discount(2, 'asd')).to.throw("Invalid input");
        });
    });

    describe("Test partsToBuy(partsCatalog, neededParts) func...", function () {

        let partsCatalog = [{part: "blowoff valve", price: 145}, { part: "coil springs", price: 230 }, {part: "injectors", price: 100}];
        let neededParts = ["blowoff valve", "injectors"];

        it("calculates total price of needed parts", function () {
            expect(carService.partsToBuy(partsCatalog, neededParts)).to.equal(245);
        });

        it("returns 0 if partsCatalog is empty", function () {
            expect(carService.partsToBuy([{}], neededParts)).to.equal(0);
            expect(carService.partsToBuy(partsCatalog, [])).to.equal(0);
        });

        it("throws error if passed vars are not arrays", function () {
            expect(() => carService.partsToBuy(undefined, neededParts)).to.throw("Invalid input");
            expect(() => carService.partsToBuy(partsCatalog, undefined)).to.throw("Invalid input");
            expect(() => carService.partsToBuy('partsCatalog', 'neededParts')).to.throw("Invalid input");
        });
    });

});