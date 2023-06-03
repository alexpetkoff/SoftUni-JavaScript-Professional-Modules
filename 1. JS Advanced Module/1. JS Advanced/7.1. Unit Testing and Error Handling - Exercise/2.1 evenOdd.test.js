const { isOddOrEven } = require('./evenOdd');
const { expect } = require('chai');


describe('Tests for isOddOrEven function:', () => {

    it('checking the type of passed argument', () => {
        expect(isOddOrEven(123)).to.be.undefined;
    });

    it('checking the type of passed argument 2', () => {
        expect(isOddOrEven(['aba'])).to.be.undefined;
    });

    it('checking for odd', () => {
        expect(isOddOrEven('123')).to.be.equal('odd');
    });

    it('checking for even', () => {
        expect(isOddOrEven('1234')).to.be.equal('even');
    });


});
