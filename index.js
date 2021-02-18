const container = document.querySelector('#container');
const btn = document.querySelector('.button');

function getSize() {
    let size = 16;
    do {
        size = window.prompt('Size? At most 100.', '16');
        if (size === null) {
            return '16';
        }
    } while (size > 100);
    return size;
}

function newCanvas() {
    const rows = document.querySelectorAll('.row');

    for (row of rows) {
        container.removeChild(row);
    }
    createCanvas(getSize());
}

function createCanvas(size) {
    for (let i = 0; i < size; i++) {
        const redspan = document.createElement('div');
        redspan.id = `row${i}`;
        redspan.className = 'row';

        container.appendChild(redspan);
        for (let y = 0; y < size; y++) {
            const box = document.createElement('div');
            box.id = `box${i}-${y}`;
            box.className = 'box';
            box.addEventListener('mouseover', function () {
                this.classList.add('box-painted');
            });

            redspan.appendChild(box);
        }
    }
}

btn.addEventListener('click', newCanvas);

const size = getSize();
createCanvas(size);
