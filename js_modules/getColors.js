import { outputShape } from '../index.js';
import { angle } from './getAngle.js';
let firstColor = '#000000';
let secondColor = '#ffffff';

function getColors() {
    const firstColorInput = document.querySelector('.first-color');
    const secondColorInput = document.querySelector('.second-color');
    firstColorInput.addEventListener('input', (event) => {
        firstColor = event.target.value;
        outputShape.style.background = `linear-gradient(${angle}deg, ${firstColor} 0%, ${secondColor} 100%`;
    });
    secondColorInput.addEventListener('input', (event) => {
        secondColor = event.target.value;
        outputShape.style.background = `linear-gradient(${firstColor} 0%, ${secondColor} 100%`;
    })
    
}


export { firstColor, secondColor, getColors };