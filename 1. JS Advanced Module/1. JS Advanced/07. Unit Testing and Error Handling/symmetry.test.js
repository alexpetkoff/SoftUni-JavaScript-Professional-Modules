const { isSymmetric } = require('./symmetry');
const { expect } = require('chai');

describe("Check symetry", function () {
    describe("General tests", function () {
        it("should be a function",function () {
            expect(typeof isSymmetric).to.equal('function');
        })
    });
    describe("Value tests", function () {
        it("should return true for [1, 2, 3, 3, 2, 1]", function () {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
        });
        it("should return false for [1, 2, 3, 4, 2, 1]", function () {
            expect(isSymmetric([1,2,3,4,2,1])).to.be.false;
        });
        it("should return true for [1, 2, 3, 2, 1]", function () {
            expect(isSymmetric([1,2,3,2,1])).to.be.true;
        });
        it("should return false for [1, 2, 3, 4, 1]", function () {
            expect(isSymmetric([1,2,3,4,1])).to.be.false;
        });
        it("should return true for [1]", function () {
            expect(isSymmetric([1])).to.be.true;
        });
        it("should return false for [1, 2]", function () {
            expect(isSymmetric([1,2])).to.be.false;
        });
        it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
        });
        it("should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.false;
        });
        it("should return false for 1, 2, 3", function () {
            expect(isSymmetric(1, 2, 3)).to.be.false;
        });
    })
});




// describe('Test isSymmetric function', () => {

//     it('returns false if it is not an array', () => {
//         let notArray = 'aaaaaa';
//         expect(isSymmetric(notArray)).to.be.false;
//     });

//     it('returns true if it is symmetric array', () => {
//         let array = [1, 2, 2, 1];
//         expect(isSymmetric(array)).to.be.true;
//     });

//     it('returns false if the array is not symmetric', () => {
//         let array = [1, 2, 3, 1];
//         expect(isSymmetric(array)).to.be.false;
//     });

//     it('works with symmetric arrays with odd-length', () => {
//         let array = [1, 2, 3, 2, 1];
//         expect(isSymmetric(array)).to.be.true;
//     });

//     it('returns false for assymetric arrays with odd-length', () => {
//         let array = [1, 2, 3];
//         expect(isSymmetric(array)).to.be.false;
//     });

//     it('works with string arrays', () => {
//         let array = ['1', '2', '2', '1'];
//         expect(isSymmetric(array)).to.be.true;
//     });

//     it('returns false for strings', () => {
//         let array = 'abba';
//         expect(isSymmetric(array)).to.be.false;
//     });

//     it('returns false for no input', () => {
//         expect(isSymmetric()).to.be.false;
//     });

//     it('returns true if input is empty array', () => {
//         expect(isSymmetric([])).to.be.true;
//     });

//     it('Should return false if array is mixed types and is symmetric', () => {
//         expect(isSymmetric(['1', 2, '1'])).to.be.false;
//     });

//     it('Should return false if array is mixed types and is asymmetric', () => {
//         expect(isSymmetric(['1', 2, '1', 5])).to.be.false;
//     });

//     it('Should return false if passed param is object', () => {
//         expect(isSymmetric({})).to.be.false;
//     });

// });