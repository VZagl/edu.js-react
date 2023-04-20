'use strict';

window.addEventListener('DOMContentLoaded', () => {
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

});