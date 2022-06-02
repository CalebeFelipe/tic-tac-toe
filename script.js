const cellElements = document.querySelectorAll('[data-cell]');

let isCircleTurn;

for(const cell of cellElements) {
    cell.addEventListener('click', handleClick, {once: true});
}

const handleClick = () => {
    // colocar a marca (X ou Circulo)
    const classToAdd = isCircleTurn ? 'circle' : 'x'
}