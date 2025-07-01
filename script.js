document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('.cell');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('reset-btn');

    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWin = () => {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameActive = false;
                message.textContent = `${currentPlayer} wins!`;
                cells[a].classList.add('win');
               cells[b].classList.add('win');
               cells[c].classList.add('win');
                break;
            }
        }
        if (!board.includes('') && gameActive) {
            gameActive = false;
            message.textContent = "It's a draw!";
        }
    };

    const handleClick = (index) => {
        if (gameActive && board[index] === '') {
            board[index] = currentPlayer;
            cells[index].textContent = currentPlayer;
            checkWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    };

    const resetGame = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'X';
        gameActive = true;
        message.textContent = '';
        cells.forEach(cell => {
        cell.classList.remove('win');
});

    };

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleClick(index));
    });

    resetButton.addEventListener('click', resetGame);
});
