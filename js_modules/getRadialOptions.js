import { outputShape } from '../index.js';
import { firstColor, secondColor } from './getColors.js';
let radialShape = 'circle';
let radialBeginning = 'center';
function outputShapeUpdate() {
    outputShape.style.background = `radial-gradient(${radialShape} at ${radialBeginning}, ${firstColor} 0%, ${secondColor} 100%)`;
}


function getRadialShape() {
    outputShapeUpdate();
    const shapeInputList = document.querySelectorAll('.radial__shape-input');
    for (let i = 0; i< shapeInputList.length; i++) {
        shapeInputList[i].addEventListener('click', () => {
            radialShape = shapeInputList[i].value;
            outputShapeUpdate();     
        });
    };
    const inputList = document.querySelectorAll('.radial__input');
    const valueText = document.querySelector('.radial__value--js');
    valueText.textContent = 'center';
    for (let i = 0; i< inputList.length; i++) {
        inputList[i].addEventListener('click', () => {
            valueText.textContent = inputList[i].value;
            radialBeginning = inputList[i].value;
            outputShapeUpdate();
        });
    };
}


export { radialShape, radialBeginning, getRadialShape };