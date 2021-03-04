import { outputShape } from '../index.js';
let userBorderWidth = 0;

function getBorderWidth() {
    const borderWidth = document.querySelector('.border-width');
    borderWidth.addEventListener('input', (event) => {
        userBorderWidth = event.target.value;
        outputShape.style.borderWidth = `${userBorderWidth}px`;
        console.log(userBorderWidth);
    })
}

export { userBorderWidth, getBorderWidth };
