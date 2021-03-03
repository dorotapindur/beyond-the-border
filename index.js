import { width, getWidth } from './js_modules/getWidth.js';
import { angle, getAngle } from './js_modules/getAngle.js';

const outputCode = document.getElementById('output-code');


const borderRadius = document.querySelector('.radius');
const borderWidth = document.querySelector('.border-width');
const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');


getWidth();
getAngle();

const seeCode = document.getElementById('see-code');
seeCode.addEventListener('click', (event) => {
    event.preventDefault();
    outputCode.innerHTML = `My width is ${width}. My angle is ${angle}.`;
})


//choose linear/radial - options appearing
const linearType = document.querySelector('.type-linear--js');
const radialType = document.querySelector('.type-radial--js');
const linearBox = document.querySelector('.linear');
const radialBox = document.querySelector('.radial');

linearType.addEventListener('change', () => {
    if (linearType.value === 'on') {
        linearBox.classList.remove('invisible');
        radialBox.classList.add('invisible');
    }
});
radialType.addEventListener('change', () => {
    if (radialType.value === 'on') {
        radialBox.classList.remove('invisible');
        linearBox.classList.add('invisible');
    }
});


//choose beginning
const inputList = document.querySelectorAll('.radial__input');
const valueText = document.querySelector('.radial__value--js');

valueText.textContent = 'center';
function getValue() {
    for (let i = 0; i< inputList.length; i++) {
        inputList[i].addEventListener('click', () => {
            valueText.textContent = inputList[i].value;
        });
    }
}
getValue();

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