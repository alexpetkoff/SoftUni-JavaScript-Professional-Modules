const weddingDay  = module.require('./weddingDay');
const expect = require('chai').expect;


describe("Tests on weddingDay object", function() {

    describe("PickVenue(capacity, pricePerGuest, location) func tests", function() {

        it("Tests for validation of input…", function() {
            expect(() => weddingDay.pickVenue('asd', 123, 'Varna')).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(10,'asd', 'Varna')).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(15, 50, '')).to.throw("Invalid Information!");
            expect(() => weddingDay.pickVenue(15, 50, 'Pleven')).to.throw("The location of this venue is not in the correct area!");
        });

        it("If the capacity is greater or equal to 150, and pricePerGuest is less or equal to 120", function() {
            let capacity = 150;
            let capacity2 = 151;
            let pricePerGuest = 120;
            let pricePerGuest2 = 119;
            expect(weddingDay.pickVenue(capacity, pricePerGuest, 'Varna')).to.equal(`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`);
            expect(weddingDay.pickVenue(capacity2, pricePerGuest2, 'Varna')).to.equal(`This venue meets the requirements, with capacity of ${capacity2} guests and ${pricePerGuest2}$ cover.`);
        });

        it("if the above conditions are not met, return the following message", function() {
            expect(weddingDay.pickVenue(149, 121, 'Varna')).to.equal("This venue does not meet your requirements!");
        });
        
    });

    describe('Tests for otherSpendings(weddingDecoration, photography, discount) func...', function () {

        it('Calculate the total price to pay depending on the purchased weddingDecoration and photography:', function() {
            let weddingDecoration = ['flowers', "Fabric drapes and curtains"];
            let photography = ['pictures', 'video'];
            
            expect(weddingDay.otherSpendings(weddingDecoration, photography, false)).to.equal('You spend 2900$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(weddingDecoration, photography, true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
        });

        it('validates the input passed:', function() {    
            expect(() => weddingDay.otherSpendings([], 'pictures', false)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings('flowers', [], false)).to.throw("Invalid Information!");
            expect(() => weddingDay.otherSpendings([], [], 'false')).to.throw("Invalid Information!");
        });

    });

    describe('Tests for tableDistribution(guests, tables) func...', function () {
        let guests = 50;
        let tables = 10;
        let peopleOnTable = Math.round(guests / tables);
        it('checks if people on tables are less than 6', function() {    
            expect(weddingDay.tableDistribution(guests,tables)).to.equal(`There is only ${peopleOnTable} people on every table, you can join some tables.`);
        });

        let guests2 = 36;
        let tables2 = 6;
        let peopleOnTable2 = Math.round(guests2 / tables2);
        it('checks if people on table are more or equal to 6', function() {    
            expect(weddingDay.tableDistribution(guests2,tables2)).to.equal(`You have ${tables2} tables with ${peopleOnTable2} guests on table.`);
        });

        it('validates the passed input:', function() {    
            expect(() => weddingDay.tableDistribution('2','1')).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(2,'1')).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution('2',1)).to.throw("Invalid Information!");
            expect(() => weddingDay.tableDistribution(-2,-1)).to.throw("Invalid Information!");
        });

    });

});