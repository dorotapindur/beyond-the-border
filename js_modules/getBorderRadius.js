import { outputShape } from '../index.js';

let userBorderRadius = 0;
let borderRadiusUnit = 'px';

function getRadiusUnit() {
    const inputList = document.querySelectorAll('.radius-unit');
    for (let i = 0; i< inputList.length; i++) {
        inputList[i].addEventListener('input', () => {
            borderRadiusUnit = inputList[i].value;
            outputShape.style.borderRadius = `${userBorderRadius}${borderRadiusUnit}`;
        });
    }
};
function getBorderRadius() {
    const borderRadius = document.querySelector('.radius');
    borderRadius.addEventListener('input', (event) => {
        getRadiusUnit()
        userBorderRadius = event.target.value;
        outputShape.style.borderRadius = `${userBorderRadius}${borderRadiusUnit}`;
    })
}


export { userBorderRadius, borderRadiusUnit, getBorderRadius };