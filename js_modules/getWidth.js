let width;

function getWidth() {
    const elementWidth = document.querySelector('.width');
    const outputShape = document.getElementById('output-shape');
    elementWidth.addEventListener('input', (event) => {
        width = event.target.value;
        outputShape.style.width = `${width}px`;
        outputShape.style.height = `${width}px`;
    });
};

export { getWidth, width };