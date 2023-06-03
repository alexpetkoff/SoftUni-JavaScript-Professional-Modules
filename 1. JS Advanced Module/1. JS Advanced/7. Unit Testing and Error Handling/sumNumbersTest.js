const { sum } = require('./sumNumbers');
const { expect } = require('chai');

describe('Test function sumNumbers', () => {

    it('Return the sum of the values of all elements inside the array' , () => {
        expect(sum([1,2,3])).to.equal(6, 'test is wrong');
    });

    it('Should cast strings before suming', () => {

        let arr = [1, 2, 3, '4'];
        
        expect(sum(arr)).to.equal(10);
    });

    it('Some elements of the array are not numbers', () => {
        expect(sum([5, 4, 'a'])).to.be.NaN;
    });

});