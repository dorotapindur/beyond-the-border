import { getAngle } from "./getAngle.js";
import { getRadialShape } from "./getRadialOptions.js";

let gradientType = 'linear';

function getGradientType() {
    const linearType = document.querySelector('.type-linear--js');
    const radialType = document.querySelector('.type-radial--js');
    const linearBox = document.querySelector('.linear');
    const radialBox = document.querySelector('.radial');

    linearType.addEventListener('change', () => {
        if (linearType.value === 'on') {
            linearBox.classList.remove('invisible');
            radialBox.classList.add('invisible');
            getAngle();
            gradientType = 'linear';
        }
    });
    radialType.addEventListener('change', () => {
        if (radialType.value === 'on') {
            radialBox.classList.remove('invisible');
            linearBox.classList.add('invisible');
            getRadialShape();
            gradientType = 'radial';
        }
    });
}

export { gradientType, getGradientType };
