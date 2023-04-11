'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 50}px`;
    elem.style.width = `${w ?? 300}px`;
}

// changeParams(box, newHeight, newWidth);
changeParams(box);
