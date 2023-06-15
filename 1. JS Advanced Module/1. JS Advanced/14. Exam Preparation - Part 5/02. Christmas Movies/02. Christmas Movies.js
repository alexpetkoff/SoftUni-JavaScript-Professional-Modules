class ChristmasMovies {
    constructor() {
        this.movieCollection = [];
        this.watched = {};
        this.actors = [];
    }

    buyMovie(movieName, actors) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        let uniqueActors = new Set(actors);

        if (movie === undefined) {
            this.movieCollection.push({ name: movieName, actors: [...uniqueActors] });
            let output = [];
            [...uniqueActors].map(actor => output.push(actor));
            return `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`;
        } else {
            throw new Error(`You already own ${movieName} in your collection!`);
        }
    }

    discardMovie(movieName) {
        let filtered = this.movieCollection.filter(x => x.name === movieName)

        if (filtered.length === 0) {
            throw new Error(`${movieName} is not at your collection!`);
        }
        let index = this.movieCollection.findIndex(m => m.name === movieName);
        this.movieCollection.splice(index, 1);
        let { name, _ } = filtered[0];
        if (this.watched.hasOwnProperty(name)) {
            delete this.watched[name];
            return `You just threw away ${name}!`;
        } else {
            throw new Error(`${movieName} is not watched!`);
        }

    }

    watchMovie(movieName) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        if (movie) {
            if (!this.watched.hasOwnProperty(movie.name)) {
                this.watched[movie.name] = 1;
            } else {
                this.watched[movie.name]++;
            }
        } else {
            throw new Error('No such movie in your collection!');
        }
    }

    favouriteMovie() {
        let favourite = Object.entries(this.watched).sort((a, b) => b[1] - a[1]);
        if (favourite.length > 0) {
            return `Your favourite movie is ${favourite[0][0]} and you have watched it ${favourite[0][1]} times!`;
        } else {
            throw new Error('You have not watched a movie yet this year!');
        }
    }

    mostStarredActor() {
        let mostStarred = {};
        if (this.movieCollection.length > 0) {
            this.movieCollection.forEach(el => {
                let { _, actors } = el;
                actors.forEach(actor => {
                    if (mostStarred.hasOwnProperty(actor)) {
                        mostStarred[actor]++;
                    } else {
                        mostStarred[actor] = 1;
                    }
                })
            });
            let theActor = Object.entries(mostStarred).sort((a, b) => b[1] - a[1]);
            return `The most starred actor is ${theActor[0][0]} and starred in ${theActor[0][1]} movies!`;
        } else {
            throw new Error('You have not watched a movie yet this year!')
        }
    }
}

///// UNIT TESTING USING MOCHA AND CHAI //////
const expect = require('chai').expect;

describe("Tests ChristmasMovies class:", function () {

    let christmas;

    beforeEach(function () {
        christmas = new ChristmasMovies();
    });

    describe("constructor tests:", function () {

        it('should initialize properties correctly...', () => {
            expect(christmas.movieCollection).to.deep.equal([]);
            expect(christmas.watched).to.deep.equal({});
            expect(christmas.actors).to.deep.equal([]);
        });

    });

    describe("buyMovie tests:", function () {

        it('If you dont have the movie in your collection, you should add it..and if only unique actors are added..', () => {

            let movieName = 'Die Hard 4';
            let actors = ['Bruce Willis', 'Bruce Willis']

            expect(christmas.buyMovie(movieName, actors)).to.equal(`You just got ${movieName} to your collection in which Bruce Willis are taking part!`);
            expect(() => christmas.buyMovie(movieName, actors)).to.throw(`You already own ${movieName} in your collection!`);

        });

    });

    describe("discardMovie(movieName)", function () {

        it('should throw error if the movie is not in the collection', () => {
            expect(() => christmas.discardMovie('Sex and the City :D :D :D')).to.throw(`Sex and the City :D :D :D is not at your collection!`);
        });

        it('should throw error if movie is not watched', () => {
            christmas.buyMovie('Die Hard', ['Bruce Willis']);
            expect(() => christmas.discardMovie('Die Hard')).to.throw(`Die Hard is not watched!`);
        });

        it('should correctly discard movie', () => {
            christmas.buyMovie('Die Hard', ['Bruce Willis']);
            christmas.watchMovie('Die Hard');
            expect(christmas.discardMovie('Die Hard')).to.equal(`You just threw away Die Hard!`);
        });

    });

    describe("favouriteMovie tests", function () {

        it('should throw error if nothing is watched', () => {
            expect(() => christmas.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        });

        it('should return the most watched movie + counter', () => {

            christmas.buyMovie('Die Hard', ['Bruce Willis']);
            christmas.watchMovie('Die Hard');
            christmas.buyMovie('Two Girls One Cup', ['Girl One', 'Girl Two']);
            christmas.watchMovie('Two Girls One Cup');
            christmas.watchMovie('Two Girls One Cup');

            expect(christmas.favouriteMovie()).to.equal(`Your favourite movie is Two Girls One Cup and you have watched it 2 times!`);
        });

    });

    describe("watchMovie(movieName) tests:", function () {

        it('throw error if movie is not bought', () => {
            expect(() => christmas.watchMovie('How I Met Your Mother')).to.throw('No such movie in your collection!');
        });

    });

    describe("mostStarredActor tests..", function () {

        it('should throw error if nothing was watched', () => {
            expect(() => christmas.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        });

        it('should return the most starred actor and the movies count', () => {
            christmas.buyMovie('Mama ti i zadacha', ['Typa i gadna']);
            christmas.buyMovie('Mama ti i zadacha 2', ['Typa i gadna']);
            christmas.buyMovie('Die Hard', ['Bruce Willis']);

            expect(christmas.mostStarredActor()).to.equal(`The most starred actor is Typa i gadna and starred in 2 movies!`);
        });

    });

});