function blackPen() {
    this.classList.add('black');
}

function generateGrid(x, y) {
    const canvas = document.querySelector('.canvas');
    for (let i = 1; i <= x; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (let i = 1; i <= y; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.addEventListener('mouseover', blackPen);
            row.appendChild(box);
        }
        canvas.appendChild(row);
    }
}

const button = document.querySelector('#clearGrid');
button.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        if (box.classList.contains('black')) {
            box.classList.remove('black');
        }
    })
});

const slider = document.querySelector('#gridSize');
slider.addEventListener('input', function(e) {
    const gridSizeText = document.querySelector('#gridSizeText');
    gridSizeText.textContent = `${e.target.value} x ${e.target.value}`
});

const gridChangeButton = document.querySelector('#gridSubmit');
gridChangeButton.addEventListener('click', () => {
    const canvas = document.querySelector('.canvas');
    const boxes = document.querySelectorAll('.row');
    boxes.forEach(box => {
        canvas.removeChild(box);
    })
    generateGrid(slider.value, slider.value);

});

generateGrid(16,16);