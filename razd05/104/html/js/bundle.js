/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "c:\\OSPanel\\domains\\html\\js\\modules\\calc.js":
/*!**************************************************!*\
  !*** c:\OSPanel\domains\html\js\modules\calc.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {

	const vElement_Calc = document.querySelector('div.calculating'),
		vElement_Gender = vElement_Calc.querySelector('#gender'),
		vElements_GenderArr = vElement_Gender.querySelectorAll('.calculating__choose-item'),
		vElement_Medium = vElement_Calc.querySelector('.calculating__choose_medium'),
		vElement_Height = vElement_Medium.querySelector('#height'),
		vElement_Weight = vElement_Medium.querySelector('#weight'),
		vElement_Age    = vElement_Medium.querySelector('#age'),
		vElement_Activity    = vElement_Calc.querySelector('.calculating__choose_big'),
		vElements_ActivityArr = vElement_Activity.querySelectorAll('.calculating__choose-item'),
		vElement_Result = vElement_Calc.querySelector('div.calculating__result span');
		
	doLocalStorage_Load();
	doCalc();

	vElement_Gender.addEventListener('click', _event => {
		if (!_event.target.classList.contains('calculating__choose-item')) return;
		vElements_GenderArr.forEach( _item => {
			_item.classList.remove('calculating__choose-item_active');
			if (_item === _event.target) {
				_item.classList.add('calculating__choose-item_active');
			}
		});
		doCalc();
	});

	vElement_Activity.addEventListener('click', _event => {
		if (!_event.target.classList.contains('calculating__choose-item')) return;
		vElements_ActivityArr.forEach( _item => {
			_item.classList.remove('calculating__choose-item_active');
			if (_item === _event.target) {
				_item.classList.add('calculating__choose-item_active');
			}
		});
		doCalc();
	});

	vElement_Medium.addEventListener('input', () => { doCalc(); });
	// vElement_Height.addEventListener('input', () => { doCalc(); });
	// vElement_Weight.addEventListener('input', () => { doCalc(); });
	// vElement_Age.addEventListener   ('input', () => { doCalc(); });

	function doCalc() {
		const vData = {
			height: doCheckInput_Number(vElement_Height),
			weight: doCheckInput_Number(vElement_Weight),
			age:    doCheckInput_Number(vElement_Age)
		};

		vElements_GenderArr.forEach( _item => {
			if (_item.classList.contains('calculating__choose-item_active')) {
				vData.gender = _item.id;
			}
		});

		vElements_ActivityArr.forEach( _item => {
			if (_item.classList.contains('calculating__choose-item_active')) {
				vData.ratio = +_item.getAttribute('data-ratio');
				vData.ratioId = _item.id;
			}
		});

		let vRes = '____';
		if (vData.height > 0 && vData.weight > 0 && vData.age > 0) {
			if (vData.gender === 'male') {
				vRes = 88.36 + 13.4 * vData.weight + 4.8 * vData.height - 5.7 * vData.age;
			} else {
				vRes = 447.6 + 9.2 * vData.weight + 3.1 * vData.height - 4.3 * vData.age;
			}
			vRes *= vData.ratio;
			vRes = Math.round(vRes); // .toFixed(2);
		}
		
		vElement_Result.textContent = vRes;
		// console.log(vData, vRes);
		doLocalStorage_Save(vData);
	}

	function doCheckInput_Number(_element) {
		const vRes = +_element.value;
		if ( _element.value.match(/\D/g) ) {
			// if ( typeof(vRes) !== 'number' ) {
			_element.style.border = '1px solid red';
		} else {
			_element.style.border = '';
		}
		return vRes;
	}

	function doLocalStorage_Save(_data) {
		localStorage.setItem('calcData', JSON.stringify(_data) );
	}

	function doLocalStorage_Load() {
		if (!localStorage.getItem('calcData') ) return;
		const vData = JSON.parse( localStorage.getItem('calcData') );

		const vElement_Calc = document.querySelector('div.calculating'),
			vElement_Gender = vElement_Calc.querySelector('#gender'),
			vElements_GenderArr = vElement_Gender.querySelectorAll('.calculating__choose-item'),
			vElement_Medium = vElement_Calc.querySelector('.calculating__choose_medium'),
			vElement_Height = vElement_Medium.querySelector('#height'),
			vElement_Weight = vElement_Medium.querySelector('#weight'),
			vElement_Age    = vElement_Medium.querySelector('#age'),
			vElement_Activity    = vElement_Calc.querySelector('.calculating__choose_big'),
			vElements_ActivityArr = vElement_Activity.querySelectorAll('.calculating__choose-item');
			
		if (vData.height)	vElement_Height.value = vData.height;
		if (vData.weight)	vElement_Weight.value = vData.weight;
		if (vData.age)	  vElement_Age.value    = vData.age;
			
		vElements_GenderArr.forEach( _item => {
			if (_item.id === vData.gender) {
				_item.classList.add('calculating__choose-item_active');
			} else {
				_item.classList.remove('calculating__choose-item_active');
			}
		});
			
		vElements_ActivityArr.forEach( _item => {
			if (_item.id === vData.ratioId) {
				_item.classList.add('calculating__choose-item_active');
			} else {
				_item.classList.remove('calculating__choose-item_active');
			}
		});
	}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "c:\\OSPanel\\domains\\html\\js\\modules\\cards.js":
/*!***************************************************!*\
  !*** c:\OSPanel\domains\html\js\modules\cards.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "c:\\OSPanel\\domains\\html\\js\\services\\services.js");


function cards() {

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
		changeToUAH () {
			this.price *= this.transfer;
		}
	
		render() {
			const element = document.createElement('div');
			this.classes.forEach( _v => element.classList.add(_v) );
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

	(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)('http://localhost:3000/menu')
		.then(_data => {
		//                деструктуризация объекта
			_data.forEach(  ({img, altimg, title, descr, price}) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		});

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "c:\\OSPanel\\domains\\html\\js\\modules\\forms.js":
/*!***************************************************!*\
  !*** c:\OSPanel\domains\html\js\modules\forms.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "c:\\OSPanel\\domains\\html\\js\\services\\services.js");
// import {globalObj} from '../services/globals';


function forms( _formSelector = 'form' ) {

	const forms = document.querySelectorAll(_formSelector);
	const messages = {
		loading: 'img/form/spinner.svg',
		succes: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach( _v => bindPostData(_v) );

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

			(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', json )
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
		globalObj.modal.doModalOpen();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div data-modal-close class="modal__close">&times;</div>
				<div class="modal__title">${_message}</div>
			</div>
		`;
		prevModalSelect.parentElement.append(thanksModal);
		setTimeout( () => {
			thanksModal.remove();
			prevModalSelect.classList.remove('hide');
			globalObj.modal.doModalClose();
		}, 4000);
	}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "c:\\OSPanel\\domains\\html\\js\\modules\\modal.js":
/*!***************************************************!*\
  !*** c:\OSPanel\domains\html\js\modules\modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal(_selector) {

	class Modal {

		#privates = Object.create(null);

		constructor( _selector = '.modal' ) {
			this.vModalShowed = false;
			this.vModalElement = document.querySelector( _selector );
		
			document.documentElement.addEventListener('click', _event => this.onModalClick(_event) );
			document.documentElement.addEventListener('keydown', _event => this.onModalKeydown(_event) );
			this.#privates.eventScroll = () => this.onModalScroll();
			window.addEventListener('scroll', this.#privates.eventScroll );
			this.timerId = setTimeout( () => this.onModalTimer(), 5000000);
		}
	
		onModalClick(_event) {
			if ( _event.target.hasAttribute('data-modal-show') ) {
				this.doModalOpen();
			}
			if( _event.target.hasAttribute('data-modal-close') ) {
				this.doModalClose();
			}
		}

		doModalClose() {
			this.vModalElement.classList.add('hide');
			this.vModalElement.classList.remove('show');
			// включает прокрутку на основной странице
			document.body.style.overflow = '';
		}
	
		doModalOpen() {
			clearTimeout(this.timerId);
			this.vModalElement.classList.add('show');
			this.vModalElement.classList.remove('hide');
			// отключает прокрутку на основной странице
			document.body.style.overflow = 'hidden';
			this.vModalShowed = true;
		}

		onModalKeydown(_event) {
		// console.log('onKeydown', _event.code );
			if ( !this.vModalElement.classList.contains('show') ) return;
			if(_event.code === 'Escape') {
				this.doModalClose();
			}
		}

		onModalScroll() {
			// if ( document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight )
			if ( window.pageYOffset >= window.scrollMaxY - 1 ) {
				// TODO: не убирает обработчик события
				// window.removeEventListener('scroll', () => this.onModalScroll() );
				window.removeEventListener('scroll', this.#privates.eventScroll );
				delete(this.#privates.eventScroll);
				if (this.vModalShowed) return;
				this.doModalOpen();
			}
		}

		onModalTimer() {
			if (this.vModalShowed) return;
			// console.log('onModalTimer' );
			this.doModalOpen();
		}

	}
	/*
function modal() {

	let vModalShowed = false;
	const vModalElement = document.querySelector('.modal');
		
	document.documentElement.addEventListener('click', onModalClick);
	document.documentElement.addEventListener('keydown', onModalKeydown);
	window.addEventListener('scroll', onModalScroll);
	setTimeout( onModalTimer, 1000000);
	
	function onModalClick(_event) {
		if ( _event.target.hasAttribute('data-modal-show') ) {
			doModalOpen();
		}
		if( _event.target.hasAttribute('data-modal-close') ) {
			doModalClose();
		}
	}

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

	function onModalKeydown(_event) {
		// console.log('onKeydown', _event.code );
		if ( !vModalElement.classList.contains('show') ) return;
		if(_event.code === 'Escape') {
			doModalClose();
		}
	}

	function onModalScroll() {
		if (vModalShowed) return;
		// if ( document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight )
		if ( window.pageYOffset >= window.scrollMaxY - 1 ) {
			// console.log('scroll 100%');
			window.removeEventListener('scroll', onModalScroll);
			doModalOpen();
		}
	}

	function onModalTimer() {
		if (vModalShowed) return;
		// console.log('onModalTimer' );
		doModalOpen();
	}

}
*/
	return new Modal(_selector);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "c:\\OSPanel\\domains\\html\\js\\modules\\slider.js":
/*!****************************************************!*\
  !*** c:\OSPanel\domains\html\js\modules\slider.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider( {container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field} ) {

	const vSlider_Offer = document.querySelector(container);
	// const vSlider_Counter = vSlider_Offer.querySelector('.offer__slider-counter');
	const vSlider_BtnPrev = vSlider_Offer.querySelector(prevArrow);
	const vSlider_BtnNext = vSlider_Offer.querySelector(nextArrow);
	const vSlider_Wrapper = vSlider_Offer.querySelector(wrapper);
	const vSlider_Inner = vSlider_Offer.querySelector(field);
	const vSlider_Width = +window.getComputedStyle(vSlider_Offer).width.replace( /\D/g, '');
	const vSlider_CounterCurrent = vSlider_Offer.querySelector(currentCounter);
	const vSlides_Data = {
		current: 1,
		slides: [],
		dots: []
	};
	vSlides_Data.slides = vSlider_Offer.querySelectorAll(slide);
	
	const vSlider_CounterTotal = vSlider_Offer.querySelector(totalCounter);
	vSlider_CounterTotal.textContent = `${vSlides_Data.slides.length < 10 ? '0' : ''}${vSlides_Data.slides.length}`;
	
	vSlider_Inner.style.width = 100 * vSlides_Data.slides.length + '%';
	vSlider_Inner.style.display = 'flex';
	vSlider_Inner.style.transition = '0.5s all';
	
	vSlider_Wrapper.style.overflow = 'hidden';

	vSlides_Data.slides.forEach( _v => {
		_v.style.width = vSlider_Width;
	});

	vSlider_Offer.style.position = 'relative';
	const vSlider_Dots = document.createElement('ol');
	vSlider_Dots.classList.add('carousel-indicators');
	vSlider_Offer.append(vSlider_Dots);
	
	for (let i = 0; i < vSlides_Data.slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		vSlider_Dots.append(dot);
		vSlides_Data.dots.push(dot);
	}
	vSlider_Dots.addEventListener('click', _e => {
		if (!_e.target.hasAttribute('data-slide-to') ) return;
		doSlide_Show( +_e.target.getAttribute('data-slide-to') );
	});

	vSlider_BtnPrev.addEventListener('click', () => doSlide_Show(vSlides_Data.current - 1) );
	vSlider_BtnNext.addEventListener('click', () => doSlide_Show(vSlides_Data.current + 1) );

	doSlide_Show();

	function doSlide_Show(_slideIndex = vSlides_Data.current) {
		vSlides_Data.dots[vSlides_Data.current - 1].classList.remove('dot-active');
		vSlides_Data.current = _slideIndex;
		if (_slideIndex < 1) {
			vSlides_Data.current = vSlides_Data.slides.length;
		}
		if (_slideIndex > vSlides_Data.slides.length) {
			vSlides_Data.current = 1;
		}
		vSlides_Data.dots[vSlides_Data.current - 1].classList.add('dot-active');
		vSlider_Inner.style.transform = `translateX(-${(vSlides_Data.current - 1) * vSlider_Width}px)`;
		vSlider_CounterCurrent.textContent = `${vSlides_Data.current < 10 ? '0' : ''}${vSlides_Data.current}`;
	}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "c:\\OSPanel\\domains\\html\\js\\modules\\tabs.js":
/*!**************************************************!*\
  !*** c:\OSPanel\domains\html\js\modules\tabs.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

	const tabs = document.querySelectorAll(tabsSelector);
	const tabsContent = document.querySelectorAll(tabsContentSelector);
	const tabsParent = document.querySelector(tabsParentSelector);
	
	hideTabContent();
	showTabContent();
	
	tabsParent.addEventListener('click', _event => {
		const target = _event.target;
	
		if (!target || !target.classList.contains( tabsSelector.slice(1) ) ) return;
		tabs.forEach( (_item, _i) => {
			if (_item == target) {
				hideTabContent();
				showTabContent(_i);
			}
		});
	});
	
	//-----------------------------------------------
	
	function hideTabContent () {
		tabsContent.forEach( _item => {
			// i.style.display = 'none' 
			_item.classList.remove('show', 'fade');
			_item.classList.add('hide');
		});
			
		tabs.forEach( _item => {
			_item.classList.remove(activeClass);
		});
	}
	
	function showTabContent (_i = 0) {
		tabsContent[_i].classList.remove('hide');
		tabsContent[_i].classList.add('show', 'fade');
		// tabsContent[_i].style.display = 'block';
		tabs[_i].classList.add(activeClass);
	}
	
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "c:\\OSPanel\\domains\\html\\js\\modules\\timer.js":
/*!***************************************************!*\
  !*** c:\OSPanel\domains\html\js\modules\timer.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer (id, deadline) {

	setClock(id, deadline);
	
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

		function setZero (_num) {
			if (_num < 0 || _num >= 10) return `${_num}`;
			return `0${_num}`;
		}
	}
	
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "c:\\OSPanel\\domains\\html\\js\\services\\services.js":
/*!*******************************************************!*\
  !*** c:\OSPanel\domains\html\js\services\services.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
async function postData(_url, _json) {
	const res = await fetch(_url, {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: _json
	});

	return await res.json();
}

async function getResource(_url) {
	const res = await fetch(_url);

	if( !res.ok ) {
		throw new Error(`Could not fetch ${_url}, status: ${res.status}`);
	}
		
	return await res.json();

	/*
	axios.get('http://localhost:3000/menu')
		.then( _data => {
			_data.data.forEach(  ({img, altimg, title, descr, price}) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		})
		.catch( _error => {
			console.log( 'ERROR:', _error);
		});
	*/
}





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************************!*\
  !*** c:\OSPanel\domains\html\js\script.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "c:\\OSPanel\\domains\\html\\js\\modules\\calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "c:\\OSPanel\\domains\\html\\js\\modules\\cards.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "c:\\OSPanel\\domains\\html\\js\\modules\\forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "c:\\OSPanel\\domains\\html\\js\\modules\\modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "c:\\OSPanel\\domains\\html\\js\\modules\\slider.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ "c:\\OSPanel\\domains\\html\\js\\modules\\tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "c:\\OSPanel\\domains\\html\\js\\modules\\timer.js");
// const globalObj = {};
// import {globalObj} from '../services/globals';









window.addEventListener('DOMContentLoaded', () => {
	(0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"]) ('form');
	globalObj.modal =	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])('.modal');
	(0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])  ();
	(0,_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"]) ();
	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__["default"])  ('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	(0,_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"]) ('.timer', '2023-06-22');
	(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])({
		container: 'div.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'
	});
});

console.log('>>> globalObj =', globalObj);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map