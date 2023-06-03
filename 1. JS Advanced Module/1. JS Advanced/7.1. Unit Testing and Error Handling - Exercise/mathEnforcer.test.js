const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer');

describe('mathEnforcer:', () => {

    describe('function addFive', () => {
        it ('checking the type of passed argument', () => {
            expect(mathEnforcer.addFive('NaN')).to.be.undefined;
            expect(mathEnforcer.addFive()).to.be.undefined;
        });

        it ('checking if the func adds correctly', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-20)).to.equal(-15);
        });

        it ('checking if the func adds correctly with floating point nums', () => {
            expect(mathEnforcer.addFive(5.211)).to.be.closeTo(10.21, 0.01);
        });
    });

    describe('function subtractTen', () => {
        it ('checking the type of passed argument', () => {
            expect(mathEnforcer.subtractTen('NaN')).to.be.undefined;
            expect(mathEnforcer.subtractTen()).to.be.undefined;
        });

        it ('checking if the func subtracts correctly', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10.54)).to.be.closeTo(0.53, 0.01);
        });
    });

    describe('function sum', () => {
        it ('checking the type of passed arguments', () => {
            expect(mathEnforcer.sum('2', '1')).to.be.undefined;
            expect(mathEnforcer.sum(1, '2')).to.be.undefined;
            expect(mathEnforcer.sum('1', 2)).to.be.undefined;
            expect(mathEnforcer.sum()).to.be.undefined;
        });

        it ('checking if the func sums correctly', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(-1, -5)).to.equal(-6);
        });

        it ('checking if the func sums correctly with floating point nums', () => {
            expect(mathEnforcer.sum(1.555, 1.212)).to.be.closeTo(2.767, 0.01);
            expect(mathEnforcer.sum(10.18, 5.1)).to.be.closeTo(15.28 , 0.01);
        });
    });

});