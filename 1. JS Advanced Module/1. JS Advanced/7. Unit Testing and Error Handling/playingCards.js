function playingCards(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663'};
    
    if (faces.indexOf(face) === -1) {
        throw new Error('Invalid Card: ');
    }
    if(suits[suit] == undefined) {
        throw new Error('Invalid suit');
    } 

    const result = {face, suit : suits[suit], toString() {
        return this.face + this.suit; 
        }
    }
    return result;
  
}

console.log(playingCards('1', 'C').toString());