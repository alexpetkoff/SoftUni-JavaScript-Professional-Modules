const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
  checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }

    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;

    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }

    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  }
  ,
  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};

module.exports = lottery;

let expect = require('chai').expect;

describe("Tests Lottery object…", function () {

  describe('Tests on buyLotteryTicket function...', () => {

    it('throws error if inputs are invalid..', () => {
      expect(()=>lottery.buyLotteryTicket('asd', 2, true)).to.throw("Invalid input!");
      expect(()=>lottery.buyLotteryTicket(2, 'asd', true)).to.throw("Invalid input!");
      expect(()=>lottery.buyLotteryTicket(2, 2, 'notBool')).to.throw("Invalid input!");
    });

    it('throws error if buy is false..', () => {
      expect(()=>lottery.buyLotteryTicket(2, 2, false)).to.throw("Unable to buy lottery ticket!");
    });

    it('throws error if ticket price is invalid and ticket count is less than 1..', () => {
      expect(()=>lottery.buyLotteryTicket(-2, 2, true)).to.throw("Invalid input!");
      expect(()=>lottery.buyLotteryTicket(3, 0, true)).to.throw("Invalid input!");
    });

    it('returns on valid input..', () => {
      expect(lottery.buyLotteryTicket(2, 2, true)).to.equal(`You bought ${2} tickets for ${4}$.`);
      
    });
  });

  describe('Tests on checkTicket function...', () => {

    it('throws error on invalid input', () => {
      expect(() => lottery.checkTicket([1,2,3,4,5],[1,2,3,4,5])).to.throw("Invalid input!");
      expect(() => lottery.checkTicket([1,2,3,4,5,6,7],[1,2,3,4,5,6,7])).to.throw("Invalid input!");
      expect(() => lottery.checkTicket('[1,2,3,4,5,6]',[1,2,3,4,5,6])).to.throw("Invalid input!");
      expect(() => lottery.checkTicket([1,2,3,4,5,6],'[1,2,3,4,5,6]')).to.throw("Invalid input!");
    });

    it('returns on valid input on 3 to 5 wining nums..', () => {
      expect(lottery.checkTicket([1,2,3,7,8,9], [1,2,3,4,5,6])).to.equal("Congratulations you win, check your reward!");
      expect(lottery.checkTicket([1,2,3,4,8,9], [1,2,3,4,5,6])).to.equal("Congratulations you win, check your reward!");
      expect(lottery.checkTicket([1,2,3,4,5,9], [1,2,3,4,5,6])).to.equal("Congratulations you win, check your reward!");
    });

    it('returns Jackpot message on 6 wining nums..', () => {
      expect(lottery.checkTicket([1,2,3,4,5,6], [1,2,3,4,5,6])).to.equal("You win the JACKPOT!!!");
    });

  });

  describe('Tests on secondChance(ticketID, secondChanceWinningIDs) function...', () => {

    it('throws error on invalid input...', () => {
      expect(() => lottery.secondChance('someString',[11234,22212,33433])).to.throw("Invalid input!");
      expect(() => lottery.secondChance(1234,'[11234,22212,33433]')).to.throw("Invalid input!");
    });

    it('returns proper message if there is a match..', () => {
      expect(lottery.secondChance(11223344, [131231,11223344,312414])).to.equal("You win our second chance prize!");
    });

    it('returns sorry message if there is no match..', () => {
      expect(lottery.secondChance(11223344, [131231,211223344,312414])).to.equal("Sorry, your ticket didn't win!");
    });

  });

});