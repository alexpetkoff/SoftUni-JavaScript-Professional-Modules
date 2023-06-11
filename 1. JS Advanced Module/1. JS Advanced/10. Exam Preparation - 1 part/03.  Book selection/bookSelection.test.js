const expect = require('chai').expect;

const bookSelection = {

    isGenreSuitable(genre, age) {
        if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
            return `Books with ${genre} genre are not suitable for kids at ${age} age`;
        } else {
            return `Those books are suitable`;
        }
    },

    isItAffordable(price, budget) {
        if (typeof price !== "number" || typeof budget !== "number") {
            throw new Error("Invalid input");
        }

        let result = budget - price;

        if (result < 0) {
            return "You don't have enough money";
        } else {
            return `Book bought. You have ${result}$ left`;
        }
    },

    suitableTitles(array, wantedGenre) {
        let resultArr = [];

        if (!Array.isArray(array) || typeof wantedGenre !== "string") {
            throw new Error("Invalid input");
        }
        array.map((obj) => {
            if (obj.genre === wantedGenre) {
                resultArr.push(obj.title);
            }
        });
        return resultArr;
    },
};


describe("Tests of bookSelection object:", function () {

    describe("Tests of isGenreSuitable function:", function () {

        it("tests the value of string is Horror or Thriller, and the value of age is less or equal to 12", function () {
            let genre1 = 'Horror';
            let genre2 = 'Thriller';
            let age1 = 12;
            let age2 = 22;
            expect(bookSelection.isGenreSuitable(genre1, age1)).to.equal(`Books with ${genre1} genre are not suitable for kids at ${age1} age`);
            expect(bookSelection.isGenreSuitable(genre2, age1)).to.equal(`Books with ${genre2} genre are not suitable for kids at ${age1} age`);
            expect(bookSelection.isGenreSuitable(genre1, age2)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable(genre2, age2)).to.equal(`Those books are suitable`);
        });

        it("tests the value of string is different than Horror or Thriller", function () {
            let genre1 = 'Sci-Fi';
            let genre2 = 'parody';
            let age1 = 12;
            expect(bookSelection.isGenreSuitable(genre1, age1)).to.equal(`Those books are suitable`);
            expect(bookSelection.isGenreSuitable(genre2, age1)).to.equal(`Those books are suitable`);
        });

    });


    describe("Tests of isItAffordable function:", function () {

        it("check if book is affordable", function () {
            let price1 = 10;
            let price2 = 40;
            let budget = 30;
            let result = budget - price1;

            expect(bookSelection.isItAffordable(price1, budget)).to.equal(`Book bought. You have ${result}$ left`);
            expect(bookSelection.isItAffordable(price2, budget)).to.equal("You don't have enough money");
        });
        it("checking if input is numbers", function () {
            expect(() => bookSelection.isItAffordable('price', 'budget')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('price', 200)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(100, '200')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(undefined, 200)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(100, undefined)).to.throw('Invalid input');
        });

    });

    describe("Tests of suitableTitles function:", function () {

        it("if books genre is equal to wantedGenre", function () {
            let array = [{title: 'The Lord of the Rings', genre: 'Fantasy'},
                         {title: 'The Great Gatsby', genre: 'Fiction'}];

            expect(bookSelection.suitableTitles(array, 'Fantasy')).to.deep.equal(['The Lord of the Rings']);
            expect(bookSelection.suitableTitles(array, 'Fiction')).to.deep.equal(['The Great Gatsby']);
            expect(bookSelection.suitableTitles(array, 'Action')).to.deep.equal([]);
        });

        it("if books is not an array and genre is not a string", function () {
            let books = 12;
            let genre = 123
            
            expect(() => bookSelection.suitableTitles(books, genre)).to.throw("Invalid input");
        });
        
    });
   
});