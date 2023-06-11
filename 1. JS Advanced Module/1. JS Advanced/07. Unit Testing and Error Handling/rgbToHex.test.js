const { rgbToHexColor } = require('./rgbToHex');
const { expect } = require('chai');

describe('Test of function rgbToHex', function() {
    
    it('converts to black', () => {
        expect(rgbToHexColor(0,0,0)).to.equal('#000000');
    });

    it('converts to white', () => {
        expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF');
    });

    it('converts to other color', () => {
        expect(rgbToHexColor(35,68,101)).to.equal('#234465');
    });

    it('returns undefined with missing args...', () => {
        expect(rgbToHexColor(0,0)).to.be.undefined;
        expect(rgbToHexColor(0)).to.be.undefined;
        expect(rgbToHexColor()).to.be.undefined;
    });

    it('returns undefined with args out of range..', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        expect(rgbToHexColor(0, 257, 0)).to.be.undefined;
        expect(rgbToHexColor(-1, 255, 255)).to.be.undefined;
    });
    
});