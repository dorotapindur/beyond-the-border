import { width, height, getDimensions } from './js_modules/getDimensions.js';
import { angle } from './js_modules/getAngle.js';
import { radialShape, radialBeginning } from './js_modules/getRadialOptions.js';
import { userBorderWidth, getBorderWidth } from './js_modules/getBorderWidth.js';
import { userBorderRadius, borderRadiusUnit, getBorderRadius } from './js_modules/getBorderRadius.js';
import { firstColor, secondColor, getColors } from './js_modules/getColors.js';
import { gradientType, getGradientType } from './js_modules/getGradientType.js';
const outputShape = document.getElementById('output-shape');

export {outputShape};

getDimensions();
getBorderWidth();
getBorderRadius();
getColors();
getGradientType();

const seeCode = document.getElementById('see-code');
seeCode.addEventListener('click', (event) => {
    const outputCode = document.getElementById('output-code');
    event.preventDefault();
    let gradientTypeContent;
    if (gradientType === 'linear') {
        gradientTypeContent = `My angle is ${angle}deg.`;
    } else {
        gradientTypeContent = `Radial shape: ${radialShape}. Radial beginning is: ${radialBeginning}.`
    }
    outputCode.innerHTML = `Dimensions: ${width}px x ${height}px. Border width equals ${userBorderWidth}px, border-radius is ${userBorderRadius}${borderRadiusUnit}. Gradient type: ${gradientType}. ${gradientTypeContent} Colors: 1 = <span style="color: ${firstColor}">${firstColor}</span>, 2 = <span style="color: ${secondColor}">${secondColor}</span>`;
})

