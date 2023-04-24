'use strict';

const box = document.querySelector('.box');

// срабатывает после изменений
const observer = new MutationObserver( _mutationRecords => {
	console.log(_mutationRecords);
});

// следить за "box"
observer.observe(box, { childList: true });

// прекратить следить
observer.disconnect();
