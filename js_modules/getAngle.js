let angle;

function getAngle() {
    const chooseAngle = document.querySelector('.choose-angle--js');
    let angleText = document.querySelector('.angle-handle__text');
    const indicator = document.querySelector('.angle-handle__indicator');
    angleText.innerHTML = `${chooseAngle.value}&deg;`;

    chooseAngle.addEventListener('input', updateValue);
    function updateValue(event) {
        angle = event.target.value;
        angleText.innerHTML = `${angle}&deg;`;
        indicator.style.transform = `rotate(${angle}deg)`;
    };
};

export { getAngle, angle };
