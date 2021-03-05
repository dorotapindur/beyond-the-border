import { outputShape } from '../index.js';
let userBorderWidth;

function getBorderWidth() {
    const borderWidth = document.querySelector('.border-width');
    borderWidth.addEventListener('input', (event) => {
        userBorderWidth = event.target.value;
        outputShape.style.borderWidth = `${userBorderWidth}px`;
    })
}

export { userBorderWidth, getBorderWidth };
