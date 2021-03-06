let circle = true;
let ellipse = false;

function getRadialShape() {
    const circleInput = document.querySelector('.radial__circle-input');
    const ellipseInput = document.querySelector('.radial__ellipse-input');
    circleInput.addEventListener('change', () => {
        if (circleInput.value === 'on') {
            circle = true;
            ellipse = false
        } else {
            circle = false;
            ellipse = true;
        }
    });
    ellipseInput.addEventListener('change', () => {
        if (ellipseInput.value === 'on') {
            ellipse = true;
            circle = false;
        } else {
            ellipse = false;
            circle = true;
        }
    });
}

let radialBeginning = 'center';

function getBeginningValue() {
    const inputList = document.querySelectorAll('.radial__input');
    const valueText = document.querySelector('.radial__value--js');
    valueText.textContent = 'center';
    for (let i = 0; i< inputList.length; i++) {
        inputList[i].addEventListener('click', () => {
            valueText.textContent = inputList[i].value;
            radialBeginning = inputList[i].value;
        });
    }
};

export { circle, ellipse, radialBeginning, getRadialShape, getBeginningValue };