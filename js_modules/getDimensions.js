import { outputShape } from '../index.js';
let width = 0;
let height = 0;

function getDimensions() {
    const elementWidth = document.querySelector('.width');
    const elementHeight = document.querySelector('.height');
    
    elementWidth.addEventListener('input', (event) => {
        width = event.target.value;
        outputShape.style.width = `${width}px`;
    });

    elementHeight.addEventListener('input', (event) => {
        height = event.target.value;
        outputShape.style.height = `${height}px`;
    });
};

export { getDimensions, width, height };