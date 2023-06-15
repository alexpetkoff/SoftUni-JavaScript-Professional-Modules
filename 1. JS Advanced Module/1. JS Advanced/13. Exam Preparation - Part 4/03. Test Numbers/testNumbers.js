const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

const expect = require('chai').expect;

describe("testNumbers object:", function() {

    describe('sumNumbers(num1, num2) Tests...', function() {
        it('checking if passed parameter are numbers and can be positive/negative or if they are rounded to 2nd digit:', function() {
            expect(testNumbers.sumNumbers(1,2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(-1,2)).to.equal('1.00');
            expect(testNumbers.sumNumbers('1',2)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1,'2')).to.equal(undefined);
            expect(testNumbers.sumNumbers(Math.PI,Math.PI)).to.equal((Math.PI + Math.PI).toFixed(2));
        });
    });

    describe('numberChecker(input) Tests...', function() {
        it('checking if passed parameter is a number and if it is even/odd , else throws error:', function() {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('4')).to.equal('The number is even!');
            expect(() => testNumbers.numberChecker('abc')).to.throw('The input is not a number!');
        });
    });

    describe('averageSumArray(arr) Tests...', function() {
        it('checking if correctly outputs the avg sum of the array', function() {
            expect(testNumbers.averageSumArray([2,2,2,2])).to.equal(2);
            expect(testNumbers.averageSumArray([10,10,10,10,10])).to.equal(10);
        });
    });

});