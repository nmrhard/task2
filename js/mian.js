'use strict'

let gridNumber = 1;

const gridEl = document.querySelector('.page-main__wrapper');

const fistGrid = function() {
    const colOne = document.querySelector('.col--1');
    const colTwo = document.querySelector('.col--2');

    const colSeven = document.querySelector('.col--6');
    const colNine = document.querySelector('.col--9');
    
    colOne.classList.add('col--col-start-span');
    colTwo.classList.add('col--hidden');

    colNine.classList.add('col--row-end-span');
    colSeven.classList.add('col--hidden');

    gridNumber++;
}


const secondGrid = function() {
    const colOne = document.querySelector('.col--1');
    const colNine = document.querySelector('.col--9');
    const colTwo = document.querySelector('.col--2');

    colOne.classList.add('col--hidden');
    colNine.classList.add('col--hidden');
    colTwo.classList.remove('col--hidden');
    gridEl.classList.add('second-grid');

    gridNumber++;
}

const thirdGrid = function() {
    gridEl.classList.remove('second-grid');
    const colEight = document.querySelector('.col--8');
    colEight.classList.add('third-grid');

    gridNumber++;
}

const fourthGrid = function() {
    const colEight = document.querySelector('.col--8');
    colEight.classList.remove('third-grid');

    gridEl.classList.add('fourth-grid');
}

const switchGrid = function() {
    switch (gridNumber) {
        case 1:
            fistGrid();
            break;
        case 2:
            secondGrid();
            break;
        case 3:
            thirdGrid();
            break;
        case 4:
            fourthGrid();
            break;
    }
}

document.addEventListener('click', switchGrid);
