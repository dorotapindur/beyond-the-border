import { width, height, getDimensions } from './js_modules/getDimensions.js';
import { angle } from './js_modules/getAngle.js';
import { circle, ellipse, radialBeginning } from './js_modules/getRadialOptions.js';
import { userBorderWidth, getBorderWidth } from './js_modules/getBorderWidth.js';
import { userBorderRadius, borderRadiusUnit, getBorderRadius } from './js_modules/getBorderRadius.js';
import { firstColor, secondColor, getColors } from './js_modules/getColors.js';
import { gradientType, getGradientType } from './js_modules/getGradientType.js';
const outputShape = document.getElementById('output-shape');

export {outputShape};

const image = document.getElementById('output');
const loadFile = function(event) {
	image.src = URL.createObjectURL(event.target.files[0]);
    
};
document.getElementById('photo').addEventListener('input', loadFile);
const imgDiv = document.querySelector('.img');
const rotateXinput = document.getElementById('rotate-x');
const rotateYinput = document.getElementById('rotate-y');
const canvas = document.getElementById("canvas");
function setDegrees() {
    const radiusX = rotateXinput.value;
    const radiusY = rotateYinput.value;
    document.querySelector('.rotate-x-value').innerHTML = radiusX;
    document.querySelector('.rotate-y-value').innerHTML = radiusY;
    image.style.transform = `rotate3d(1, 0, 0, ${radiusX}deg) rotate3d(0, 1, 0, ${radiusY}deg)`;
    canvas.getContext('2d').drawImage(image, 0, 0);
}
rotateXinput.addEventListener('change', setDegrees);
rotateYinput.addEventListener('change', setDegrees);

function downloadImg() {
    const downloadedImage = canvas.toDataURL("image/jpg");
    this.href = downloadedImage;
    console.log('image download');
  };
document.getElementById('download').addEventListener('click', downloadImg);




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
        gradientTypeContent = `Radial shape: circle - ${circle}, ellipse - ${ellipse}. Radial beginning is: ${radialBeginning}.`
    }
    outputCode.innerHTML = `Dimensions: ${width}px x ${height}px. Border width equals ${userBorderWidth}px, border-radius is ${userBorderRadius}${borderRadiusUnit}. Gradient type: ${gradientType}. ${gradientTypeContent} Colors: 1 = <span style="color: ${firstColor}">${firstColor}</span>, 2 = <span style="color: ${secondColor}">${secondColor}</span>`;
})

