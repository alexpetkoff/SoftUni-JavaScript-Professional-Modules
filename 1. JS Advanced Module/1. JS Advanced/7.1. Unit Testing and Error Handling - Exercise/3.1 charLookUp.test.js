const { expect } = require('chai');
const { lookupChar } = require('./charLookUp');


describe('Tests for lookupChar function:', () => {

    it('checking if passed argument is string or index is not an integer', () => {
        expect(lookupChar(123, 2)).to.be.undefined;
        expect(lookupChar('123', 1.3)).to.be.undefined;
    });

    it('checking if index is incorrect', () => {
        expect(lookupChar('123', 3)).to.be.equal("Incorrect index");
        expect(lookupChar('123', -3)).to.be.equal("Incorrect index");
    });

    it('checking if the func returns the correct info', () => {
        expect(lookupChar('abcd', 0)).to.be.equal("a");
        expect(lookupChar('abc', 2)).to.be.equal("c");
    });

    it('checking if the index is not a number', () => {
        expect(lookupChar('abcd', '0')).to.be.undefined;
        expect(lookupChar('abc')).to.be.undefined;
    });

});