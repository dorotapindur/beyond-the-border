const chooseAngle = document.querySelector('.choose-angle--js');
let angleText = document.querySelector('.angle-handle__text');
const indicator = document.querySelector('.angle-handle__indicator');
console.log(indicator);

angleText.innerHTML = `${chooseAngle.value}&deg;`;

chooseAngle.addEventListener('input', updateValue)
function updateValue(event) {
    let angle = event.target.value;
    angleText.innerHTML = `${angle}&deg;`;
    indicator.style.transform = `rotate(${angle}deg)`;
}






const inputList = document.querySelectorAll('.beginning__input');
const valueText = document.querySelector('.beginning__value--js');

valueText.textContent = 'center';
function getValue() {
    for (let i = 0; i< inputList.length; i++) {
        inputList[i].addEventListener('click', () => {
            valueText.textContent = inputList[i].value;
        });
    }
}
getValue();
