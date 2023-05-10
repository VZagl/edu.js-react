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
	function onModalScroll() {
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
		// console.log('onModalTimer' );
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
	/*
	async function getResource(_url) {
		const res = await fetch(_url);

		if( !res.ok ) {
			throw new Error(`Could not fetch ${_url}, status: ${res.status}`);
		}
		
		return await res.json();
	}

	
	getResource('http://localhost:3000/menu')
		.then(_data => {
			//                деструктуризация объекта
			_data.forEach(  ({img, altimg, title, descr, price}) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		});
	*/
	axios.get('http://localhost:3000/menu')
		.then( _data => {
			_data.data.forEach(  ({img, altimg, title, descr, price}) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		})
		.catch( error => {
			console.log(error);
		});
	//#endregion Modal

	//#region Forms
	const forms = document.querySelectorAll('form');
	const messages = {
		loading: 'img/form/spinner.svg',
		succes: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach( v => bindPostData(v) );

	async function postData(_url, _json) {
		const res = await fetch(_url, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: _json
		});

		return await res.json();
	}

	function bindPostData(_form) {
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

			const formData = new FormData(_form);
			const json = JSON.stringify( Object.fromEntries(formData.entries()) );

			postData('http://localhost:3000/requests', json )
				.then( _data => {
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

	//#region Slider1
	/*
	initSliders();
	
	function initSliders() {
		const vSlidersData = {
			current: 1,
			listSliders: [],
			elements: {}
		};
		const vOfferSlider = document.querySelector('div.offer__slider');
		const vSlider_Counter = vOfferSlider.querySelector('.offer__slider-counter');
		const vSlider_BtnPrev = vSlider_Counter.querySelector('.offer__slider-prev');
		const vSlider_BtnNext = vSlider_Counter.querySelector('.offer__slider-next');
		vSlidersData.elements.counterCurrent = vSlider_Counter.querySelector('#current');
		vSlidersData.elements.counterTotal = vSlider_Counter.querySelector('#total');
		vSlidersData.listSliders = vOfferSlider.querySelectorAll('.offer__slide');
		vSlidersData.elements.counterTotal.textContent = `${vSlidersData.listSliders.length < 10 ? '0' : ''}${vSlidersData.listSliders.length}`;

		vSlidersData.listSliders.forEach( v => doHide_Element(v) );
		doSlider_Show(1);

		vSlider_BtnPrev.addEventListener('click', () => doSlider_Plus(-1) );
		vSlider_BtnNext.addEventListener('click', () => doSlider_Plus( 1) );

		function doSlider_Plus(_num) {
			doSlider_Show(vSlidersData.current + _num);
		}

		function doSlider_Show(_number) {
			doHide_Element( vSlidersData.listSliders[vSlidersData.current - 1] );
			vSlidersData.current = _number;
			if (_number < 1) {
				vSlidersData.current = vSlidersData.listSliders.length;
			}
			if (_number > vSlidersData.listSliders.length) {
				vSlidersData.current = 1;
			}
			doShow_Element( vSlidersData.listSliders[vSlidersData.current - 1] );
			vSlidersData.elements.counterCurrent.textContent = `${vSlidersData.current < 10 ? '0' : ''}${vSlidersData.current}`;
		}

		function doHide_Element(_element) {
			_element.classList.add('hide');
		}

		function doShow_Element(_element) {
			_element.classList.remove('hide');
		}

	}
	*/
	//#endregion Slider1
	
	//#region Slider2
	initSliders();
	
	function initSliders() {
		const vSlider_Offer = document.querySelector('div.offer__slider');
		const vSlider_Counter = vSlider_Offer.querySelector('.offer__slider-counter');
		const vSlider_BtnPrev = vSlider_Counter.querySelector('.offer__slider-prev');
		const vSlider_BtnNext = vSlider_Counter.querySelector('.offer__slider-next');
		const vSlider_Wrapper = vSlider_Offer.querySelector('.offer__slider-wrapper');
		const vSlider_Inner = vSlider_Offer.querySelector('.offer__slider-inner');
		const vSlider_Width = Number.parseInt( window.getComputedStyle(vSlider_Offer).width );
		const vSlider_CounterCurrent = vSlider_Counter.querySelector('#current');
		const vSlides_Data = {
			current: 1,
			slides: []
		};
		vSlides_Data.slides = vSlider_Offer.querySelectorAll('.offer__slide');
		
		const vSlider_CounterTotal = vSlider_Counter.querySelector('#total');
		vSlider_CounterTotal.textContent = `${vSlides_Data.slides.length < 10 ? '0' : ''}${vSlides_Data.slides.length}`;
		
		vSlider_Inner.style.width = 100 * vSlides_Data.slides.length + '%';
		vSlider_Inner.style.display = 'flex';
		vSlider_Inner.style.transition = '0.5s all';
		
		vSlider_Wrapper.style.overflow = 'hidden';

		vSlides_Data.slides.forEach( v => {
			v.style.width = vSlider_Width;
		});

		vSlider_BtnPrev.addEventListener('click', () => doSlide_Show(vSlides_Data.current - 1) );
		vSlider_BtnNext.addEventListener('click', () => doSlide_Show(vSlides_Data.current + 1) );

		doSlide_Show();

		function doSlide_Show(_slideIndex = vSlides_Data.current) {
			vSlides_Data.current = _slideIndex;
			if (_slideIndex < 1) {
				vSlides_Data.current = vSlides_Data.slides.length;
			}
			if (_slideIndex > vSlides_Data.slides.length) {
				vSlides_Data.current = 1;
			}
			vSlider_Inner.style.transform = `translateX(-${(vSlides_Data.current - 1) * vSlider_Width}px)`;
			vSlider_CounterCurrent.textContent = `${vSlides_Data.current < 10 ? '0' : ''}${vSlides_Data.current}`;
		}
	}
	//#endregion Slider2
});
