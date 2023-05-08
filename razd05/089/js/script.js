'use strict';

window.addEventListener('DOMContentLoaded', () => {

	//#region Tabs
	const tabs = document.querySelectorAll('.tabheader__item');
	const tabsContent = document.querySelectorAll('.tabcontent');
	const tabsParent = document.querySelector('.tabheader__items');

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (!target || !target.classList.contains('tabheader__item') ) return;
		tabs.forEach( (item, i) => {
			if (item == target) {
				hideTabContent();
				showTabContent(i);
			}
		});
	});

	//-----------------------------------------------

	function hideTabContent () {
		tabsContent.forEach( item => {
			// i.style.display = 'none' 
			item.classList.remove('show', 'fade');
			item.classList.add('hide');
		});
		
		tabs.forEach( i => {
			i.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent (_i = 0) {
		tabsContent[_i].classList.remove('hide');
		tabsContent[_i].classList.add('show', 'fade');
		// tabsContent[_i].style.display = 'block';
		tabs[_i].classList.add('tabheader__item_active');
	}
	//#endregion Tabs

	//#region Timer
	const deadline = '2022-04-22';
	setClock('.timer', deadline);

	function getTimeRemaining(_endtime) {
		let vT = Date.parse(_endtime) - Date.now();
		if (vT < 0) vT = 0;

		const vMsecInSec    = 1000;
		const vMsecInMinute = vMsecInSec    * 60;
		const vMsecInHour   = vMsecInMinute * 60;
		const vMsecInDay    = vMsecInHour   * 24;

		const vDays    = Math.floor(vT / vMsecInDay        );
		const vHours   = Math.floor(vT / vMsecInHour   % 24);
		const vMinutes = Math.floor(vT / vMsecInMinute % 60);
		const vSeconds = Math.floor(vT / vMsecInSec    % 60);
		// console.log( `vDays=${vDays}, vHours=${vHours}, vMinutes=${vMinutes}, vSeconds=${vSeconds}` );
		return {
			total:   vT,
			days:    vDays,
			hours:   vHours,
			minuts:  vMinutes,
			seconds: vSeconds
		};
	}
	//
	function setClock (_selector, _endtime) {
		const vTimer = document.querySelector(_selector);
		const vDays = vTimer.querySelector('#days');
		const vHours = vTimer.querySelector('#hours');
		const vMinutes = vTimer.querySelector('#minutes');
		const vSeconds = vTimer.querySelector('#seconds');
		const vTimeInterval = setInterval( updateClock, 1000);
		updateClock();

		function updateClock () {
			const vT = getTimeRemaining(_endtime);
			
			vDays.innerText    = setZero(vT.days   );
			vHours.innerText   = setZero(vT.hours  );
			vMinutes.innerText = setZero(vT.minuts );
			vSeconds.innerText = setZero(vT.seconds);
			
			if (vT.total <= 0) {
				clearInterval(vTimeInterval);
			}
		}
		//
		function setZero (_num) {
			if (_num < 0 || _num >= 10) return `${_num}`;
			return `0${_num}`;
		}
		//
	}
	//
	//#endregion Timer

	//#region Modal
	let vModalShowed = false;
	const vModalElement = document.querySelector('.modal');
	
	document.documentElement.addEventListener('click', onModalClick);
	document.documentElement.addEventListener('keydown', onModalKeydown);
	window.addEventListener('scroll', onModalScroll);
	// setTimeout( onModalTimer, 10000);

	//
	function onModalClick(_event) {
		if ( _event.target.hasAttribute('data-modal-show') ) {
			doModalOpen();
		}
		if( _event.target.hasAttribute('data-modal-close') ) {
			doModalClose();
		}
	}
	//
	function doModalClose() {
		vModalElement.classList.add('hide');
		vModalElement.classList.remove('show');
		document.body.style.overflow = '';
	}

	function doModalOpen() {
		vModalElement.classList.add('show');
		vModalElement.classList.remove('hide');
		document.body.style.overflow = 'hidden';
		// clearInterval(modalTimerId);
		vModalShowed = true;
	}
	//
	function onModalKeydown(_event) {
		// console.log('onKeydown', _event.code );
		if ( !vModalElement.classList.contains('show') ) return;
		if(_event.code === 'Escape') {
			doModalClose();
		}
	}
	//
	function onModalScroll(_event) {
		if (vModalShowed) return;
		// if ( document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight )
		if ( window.pageYOffset >= window.scrollMaxY - 1 ) {
			// console.log('scroll 100%');
			window.removeEventListener('scroll', onModalScroll);
			doModalOpen();
		}
	}
	//
	function onModalTimer() {
		if (vModalShowed) return;
		console.log('onModalTimer' );
		doModalOpen();
	}
	//

	// классы для карточек
	class MenuCard {
		constructor(_src, _alt, _title, _descr, _price, _parentSelector, ..._classes) {
			this.src = _src;
			this.alt = _alt;
			this.title = _title;
			this.descr = _descr;
			this.price = _price;
			this.classes = _classes;
			this.parent = document.querySelector(_parentSelector);
			this.transfer = 27;
			//
			this.changeToUAH();
			if (this.classes.length === 0) this.classes.push('menu__item');
		}
		changeToUAH (){
			this.price *= this.transfer;
		}

		render() {
			const element = document.createElement('div');
			this.classes.forEach( v => element.classList.add(v) );
			element.innerHTML = `
				<img src=${this.src} alt=${this.alt}>
				<h3 class="menu__item-subtitle">${this.title}</h3>
				<div class="menu__item-descr">${this.descr}</div>
				<div class="menu__item-divider"></div>
				<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
				</div>
			`;
			this.parent.append(element);
		}
	}
	//
	new MenuCard(
		'img/tabs/vegy.jpg',
		'vegy',
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container'
	).render();
	//
	new MenuCard(
		'img/tabs/elite.jpg',
		'elite',
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		14,
		'.menu .container',
		'menu__item'
	).render();
	//
	new MenuCard(
		'img/tabs/post.jpg',
		'post',
		'Меню "Постное"',
		'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		16,
		'.menu .container',
		'menu__item'
	).render();
	//#endregion Modal

	//#region Forms
	const forms = document.querySelectorAll('form');
	const messages = {
		loading: 'img/form/spinner.svg',
		succes: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach( v => postData(v) );

	function postData(_form) {
		_form.addEventListener('submit', (_e) => {
			_e.preventDefault();
			
			//#region statusMessage
			const statusMessage = document.createElement('img');
			statusMessage.src = messages.loading;
			statusMessage.style.cssText = `
					display: block;
					margin: 0 auto;
				`;
			_form.insertAdjacentElement('afterend', statusMessage);
			//#endregion statusMessage

			const obj = {};
			const formData = new FormData(_form);
			formData.forEach( function(value, key) {
				obj[key] = value;
			});

			fetch('server.php', {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(obj)
			}).then( _data => {
				return _data.text();
			}).then( _data => {
				console.log(_data);
				showThanksModal(messages.succes);
				_form.reset();
			}).catch( () => {
				showThanksModal(messages.failure);
			}).finally( () => {
				statusMessage.remove();
			});

		});
	}
	//

	function showThanksModal (_message) {
		const prevModalSelect = document.querySelector('.modal__dialog');
		prevModalSelect.classList.add('hide');
		doModalOpen();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div data-modal-close class="modal__close">&times;</div>
				<div class="modal__title">${_message}</div>
			</div>
		`;
		prevModalSelect.parentElement.append(thanksModal);
		setTimeout( ()=>{
			thanksModal.remove();
			prevModalSelect.classList.remove('hide');
			doModalClose();
		}, 4000);
	}
	//#endregion Forms

	//#region json-server
	fetch('http://localhost:3000/menu')
		.then(_data => _data.json() )
		.then( _res => console.log(_res) );
	//#endregion json-server

});
