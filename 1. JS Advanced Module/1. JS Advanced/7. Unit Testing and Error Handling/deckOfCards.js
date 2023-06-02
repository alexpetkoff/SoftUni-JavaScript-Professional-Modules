function deckOfCards(input) {
    result = [];
    for(const el of input) {
        if(el.length === 3) {
            const face = el.slice(0,-1);
            const suit = el.slice(-1);
            
        }
    }
    result = [];
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663'};
        
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);