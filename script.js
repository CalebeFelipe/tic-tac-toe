const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');

let isCircleTurn;

const startGame = () => {
    for(const cell of cellElements) {
        cell.addEventListener('click', handleClick, {once: true});
    }

    isCircleTurn = false;

    board.classList.add('x');
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

    swapTurn()
}

startGame()

