import { outputShape } from '../index.js';

let userBorderRadius = 0;
let borderRadiusUnit = 'px';

function getBorderRadius() {
    const input = document.querySelector('.radius');
    const radioButtons = Array.from(document.querySelectorAll('.radius-unit'));

    const setBorderRadius = () => {
    borderRadiusUnit = radioButtons.find((radio) => radio.checked).value;
    userBorderRadius = input.value;
    outputShape.style.borderRadius = `${userBorderRadius}${borderRadiusUnit}`;
    };

    input.addEventListener('input', setBorderRadius);
    radioButtons.forEach((radio) => radio.addEventListener('change', setBorderRadius));
}

export { userBorderRadius, borderRadiusUnit, getBorderRadius };