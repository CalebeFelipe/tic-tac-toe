const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const winningMessage = document.querySelector('[data-winning-message]');

let isCircleTurn;

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const startGame = () => {
    for(const cell of cellElements) {
        cell.addEventListener('click', handleClick, {once: true});
    }

    isCircleTurn = false;

    board.classList.add('x');
}

const endGame = (isDraw) => {
    if(isDraw) {
        winningMessageTextElement.innerText = 'Empate!'; 
    } else {
        winningMessageTextElement.innerText = isCircleTurn ? 'O Venceu!' : 'X Venceu!';
    }

    winningMessage.classList.add('show-message-winning')
}

const checkForWin = (currentPlayer) => {
    return winningCombination.some(combination => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer)
        })
    })
}

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}

const swapTurn = () => {
    isCircleTurn = !isCircleTurn

    board.classList.remove('circle')
    board.classList.remove('x')

    if (isCircleTurn) {
        board.classList.add('circle')
    } else {
        board.classList.add('x')
    }
}
 
const handleClick = (e) => {
    // colocar a marca (X ou Circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';

    placeMark(cell, classToAdd);
    //Verificar a vitória
    const isWin = checkForWin(classToAdd)
    if(isWin) {
        endGame(false)
    }

    //Mudar simbolo
    swapTurn()
}

startGame()

