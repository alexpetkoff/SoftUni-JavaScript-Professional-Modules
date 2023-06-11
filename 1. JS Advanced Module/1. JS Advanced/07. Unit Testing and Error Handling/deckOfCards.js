function deckOfCards(input) {

    let result = [];
    for (const card of input) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);

        try {
            result.push(createCard(face, suit));
        } catch(err) {
            result = [`Invalid card: ${card}`]; break;
        }

    }
    
    console.log(result.join(' '));

    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };

        if (!suits.hasOwnProperty(suit)) {
                throw new Error('Error');
        }
    
        if (faces.indexOf(face) === -1) {
                throw new Error(`Error`);
        }
 
        const temp = {
            face, suit: suits[suit], toString() {
                return this.face + this.suit;
            }
        }
        return temp;;
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', '1C', 'QD']);