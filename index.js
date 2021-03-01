import { width, getWidth } from './js_modules/getWidth.js';

const outputCode = document.getElementById('output-code');


const borderRadius = document.querySelector('.radius');
const borderWidth = document.querySelector('.border-width');
const firstColor = document.querySelector('.first-color');
const secondColor = document.querySelector('.second-color');


getWidth();

const seeCode = document.getElementById('see-code');
seeCode.addEventListener('click', (event) => {
    event.preventDefault();
    outputCode.innerHTML = `My width is ${width}`;
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

//choose angle - handle moving
const chooseAngle = document.querySelector('.choose-angle--js');
let angleText = document.querySelector('.angle-handle__text');
const indicator = document.querySelector('.angle-handle__indicator');
angleText.innerHTML = `${chooseAngle.value}&deg;`;

chooseAngle.addEventListener('input', updateValue);
function updateValue(event) {
    let angle = event.target.value;
    angleText.innerHTML = `${angle}&deg;`;
    indicator.style.transform = `rotate(${angle}deg)`;
};
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
