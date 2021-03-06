import { outputShape } from '../index.js';
import { firstColor, secondColor } from './getColors.js';
let angle = 0;

function getAngle() {
    const chooseAngle = document.querySelector('.choose-angle--js');
    let angleText = document.querySelector('.angle-handle__text');
    const indicator = document.querySelector('.angle-handle__indicator');
    angleText.innerHTML = `${chooseAngle.value}&deg;`;

    chooseAngle.addEventListener('input', updateValue);
    function updateValue(event) {
        angle = event.target.value;
        angleText.innerHTML = `${angle}&deg;`;
        indicator.style.transform = `rotate(${angle - 90}deg)`;
        outputShape.style.background = `linear-gradient(${angle}deg, ${firstColor} 0%, ${secondColor} 100%`;
    };
};

export { getAngle, angle };
