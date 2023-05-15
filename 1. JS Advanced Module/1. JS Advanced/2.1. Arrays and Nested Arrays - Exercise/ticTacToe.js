function ticTacToe(input) {

    let gameBoard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let playerTurn = 'X';

    for (let i = 0; i < input.length; i++) {
        let [x, y] = input[i].split(' ');
        x = +x;
        y = +y;

        if (!gameBoard[x][y]) {
            gameBoard[x][y] = playerTurn;

            if (checkForWinner(gameBoard) || fullBoard(gameBoard)) {
                break;
            }

            playerTurn = playerTurn === 'X' ? 'O' : 'X';

        } else {
            console.log('This place is already taken. Please choose another!');
        }

    }

    function checkForWinner(gameBoard) {

        for (let i = 0; i < 3; i++) {

            let isEqualRow = gameBoard[i].every(val => val === gameBoard[i][0] && val !== false);
            if (isEqualRow) {
                console.log(`Player ${playerTurn} wins!`);
                return true;
            }
        }

        let isEqualDiagonalOne = (gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2] && gameBoard[0][0] != false) ? true : false;
        let isEqualDiagonalTwo = (gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0] && gameBoard[0][2] != false) ? true : false;
        let isEqualColumnOne = (gameBoard[0][0] === gameBoard[1][0] && gameBoard[0][0] === gameBoard[2][0] && gameBoard[0][0] != false) ? true : false;
        let isEqualColumnTwo = (gameBoard[0][2] === gameBoard[1][2] && gameBoard[0][2] === gameBoard[2][2] && gameBoard[0][2] != false) ? true : false;
        let isEqualColumnThree = (gameBoard[0][1] === gameBoard[1][1] && gameBoard[0][1] === gameBoard[2][1] && gameBoard[0][1] != false) ? true : false;

        if (isEqualDiagonalOne || isEqualDiagonalTwo ||
            isEqualColumnOne || isEqualColumnTwo || isEqualColumnThree) {
            console.log(`Player ${playerTurn} wins!`);
            return true;
        }
    }

    function fullBoard(gameBoard) {

        let isFullOne = gameBoard[0].every(val => val !== false);
        let isFullTwo = gameBoard[1].every(val => val !== false);
        let isFullThree = gameBoard[2].every(val => val !== false);

        if (isFullOne && isFullTwo && isFullThree) {
            console.log('The game ended! Nobody wins :(');
            return true;
        }
    }
    gameBoard.forEach(el => console.log(el.join('\t')));
}

ticTacToe(
    ["0 0",
        "0 0",
        "1 1",
        "0 1",
        "1 2",
        "0 2",
        "2 2",
        "1 2",
        "2 2",
        "2 1"]);

/* ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]); */