import { outputShape } from '../index.js';
let userBorderRadius;

function getBorderRadius() {
    const borderRadius = document.querySelector('.radius');
    borderRadius.addEventListener('input', (event) => {
        userBorderRadius = event.target.value;
        outputShape.style.borderRadius = `${userBorderRadius}px`;
    })
}

export { userBorderRadius, getBorderRadius };