const btn = document.querySelector('#btn');
const btn_overlay = document.querySelector('#overlay');
// способ 2
// btn.onclick = function () { alert('Click_2'); }
// btn.onclick = function () { alert('Click_2_1'); }
//btn.onclick = null; // убрать обработчик события

// способ 3
const fOnClick = (e) => {
	console.log('\n\tfOnClick');
	console.log('target=', e.target);
 	console.log('currentTarget', e.currentTarget);
	e.target.removeEventListener('click', fOnClick);
};

btn.addEventListener('click', fOnClick );
btn_overlay.addEventListener('click', fOnClick );
// btn.addEventListener('click', () => alert('Click_3_1') );
// btn.addEventListener('mouseover', () => console.log('mouseover_3') );
// btn.addEventListener('mouseout', (e) => { 
// 	console.log(e); 
// 	console.log(e.type); 
// 	console.log(e.target);
// 	// e.target.remove();
// });

// отменить стандартное поведение браузера на событие
const link = document.querySelector('a');

// отменить стандартное поведение браузера на событие "click"
link.addEventListener('click', (e) => console.log('\nlink click_1') ); // будет срабатывать
link.addEventListener('click', (e) => {
	e.preventDefault(); // переход по ссылке не сработает
	console.log('link click_2');
} ); // будет срабатывать
link.addEventListener('click', (e) => console.log('link click_3') ); // будет срабатывать

// опции события
// once: Boolean указывает, что обработчик должен быть вызван не более одного раза после добавления. 
// Если true, обработчик автоматически удаляется при вызове.
btn.addEventListener('click', () => console.log('btn.click once'), {once: true} );
