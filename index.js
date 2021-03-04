import { width, getWidth } from './js_modules/getWidth.js';
import { angle, getAngle } from './js_modules/getAngle.js';
import { circle, ellipse, radialBeginning, getRadialShape, getBeginningValue } from './js_modules/getRadialOptions.js';
import { userBorderWidth, getBorderWidth } from './js_modules/getBorderWidth.js';
const outputCode = document.getElementById('output-code');
const outputShape = document.getElementById('output-shape');

export {outputShape};

const borderRadius = document.querySelector('.radius');
const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');


getWidth();
getBorderWidth();

//choose linear/radial - options appearing
const linearType = document.querySelector('.type-linear--js');
const radialType = document.querySelector('.type-radial--js');
const linearBox = document.querySelector('.linear');
const radialBox = document.querySelector('.radial');

linearType.addEventListener('change', () => {
    if (linearType.value === 'on') {
        linearBox.classList.remove('invisible');
        radialBox.classList.add('invisible');
        getAngle();
    }
});
radialType.addEventListener('change', () => {
    if (radialType.value === 'on') {
        radialBox.classList.remove('invisible');
        linearBox.classList.add('invisible');
        getRadialShape();
        getBeginningValue();
    }
});

const seeCode = document.getElementById('see-code');
seeCode.addEventListener('click', (event) => {
    event.preventDefault();
    outputCode.innerHTML = `My width is ${width}px. Border width equals ${userBorderWidth}px. My angle is ${angle}deg. Radial shape: circle - ${circle}, ellipse - ${ellipse}. Radial beginning is: ${radialBeginning}`;
})



//aside - about "this"
function greet() {
    const reply = `Hello ${this.name} ${this.surname}!`;
    console.log(reply);
}
const human = {
    name: 'John',
    surname: 'Smith'
}
const cat = {
    name: 'Fluffy',
    surname: 'Meowington'
}
greet.call(human);
greet.call(cat);