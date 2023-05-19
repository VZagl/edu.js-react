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

export default tabs;
