const {expect} = require('chai');
const { createCalculator } = require('./addSub');

let obj;
describe('Checking functionality of creatCalculator func...', () => {
    beforeEach(() => {
        obj = createCalculator();
    })

    it('initial value should be 0', () => {
        expect(obj.get()).to.equal(0);
    });

    it('returns object..', () => {
        expect(typeof obj).to.equal("object");
    });

    it('returns func', () => {
        expect(typeof obj.add).to.equal(typeof (() => {}));
        expect(typeof obj.subtract).to.equal(typeof (() => {}));
        expect(typeof obj.get).to.equal(typeof (() => {}));
    });

    it('checking parsing to Num functionality', () => {
        let string = '100';
        obj.add(string);
        expect(obj.get()).to.equal(100);
        let string2 = '50';
        obj.subtract(string2);
        expect(obj.get()).to.equal(50);
    });

    it('checking NaN func', () => {
        let string = 'aaaa';
        obj.add(string);
        expect(obj.get()).to.be.NaN;
    });

    it('checking if it works with floating point nums', () => {
        let num = 1.5;
        obj.add(num);
        obj.add(num);
        expect(obj.get()).to.equal(3);
    });

});


// console.log(typeof obj.add)