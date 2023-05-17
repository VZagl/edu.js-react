function tabs() {

	const tabs = document.querySelectorAll('.tabheader__item');
	const tabsContent = document.querySelectorAll('.tabcontent');
	const tabsParent = document.querySelector('.tabheader__items');
	
	hideTabContent();
	showTabContent();
	
	tabsParent.addEventListener('click', _event => {
		const target = _event.target;
	
		if (!target || !target.classList.contains('tabheader__item') ) return;
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
			_item.classList.remove('tabheader__item_active');
		});
	}
	
	function showTabContent (_i = 0) {
		tabsContent[_i].classList.remove('hide');
		tabsContent[_i].classList.add('show', 'fade');
		// tabsContent[_i].style.display = 'block';
		tabs[_i].classList.add('tabheader__item_active');
	}
	
}

module.exports = tabs;
