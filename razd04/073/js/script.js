'use strict';

window.addEventListener('DOMContentLoaded', () => {

	{// tabs
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
	}
	{// timer
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
	}

	{// modal
		let vModalShowed = false;
		const vModalElement = document.querySelector('.modal');
		
		document.documentElement.addEventListener('click', onModalClick);
		document.documentElement.addEventListener('keydown', onModalKeydown);
		window.addEventListener('scroll', onModalScroll);
		// const vModalTimerId = 
		setTimeout( onModalTimer, 10000);

		//
		function onModalClick(_event) {
			if ( _event.target.hasAttribute('data-modal-show') || _event.target.hasAttribute('data-modal-close') ) {
				doModalToggleShowing(_event);
			}
		}
		//
		function doModalToggleShowing() {
			vModalElement.classList.toggle('show');
			document.body.style.overflow = vModalElement.classList.contains('show') ? 'hidden' : '';
			if ( vModalElement.classList.contains('show') ) {
				vModalShowed = true;
			}
		}
		//
		function onModalKeydown(_event) {
			// console.log('onKeydown', _event.code );
			if ( !vModalElement.classList.contains('show') ) return;
			if(_event.code === 'Escape') {
				doModalToggleShowing();
			}
		}
		//
		function onModalScroll(_event) {
			if (vModalShowed) return;
			// if ( document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight )
			if ( window.pageYOffset >= window.scrollMaxY - 1 ) {
				// console.log('scroll 100%');
				window.removeEventListener('scroll', onModalScroll);
				doModalToggleShowing();
			}
		}
		//
		function onModalTimer() {
			if (vModalShowed) return;
			console.log('onModalTimer' );
			doModalToggleShowing();
		}
		//
	}
});