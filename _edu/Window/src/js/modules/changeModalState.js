import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img');
	const windowWidth = document.querySelectorAll('#width');
	const windowHeight = document.querySelectorAll('#height');
	const windowType = document.querySelectorAll('#view_type');
	const windowProfile = document.querySelectorAll('.checkbox');

	checkNumInputs('#width');
	checkNumInputs('#height');

	function bindActionToElems(event, elem, prop) {
		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[prop] = i;
						break;
					case 'INPUT':
						// console.log('INPUT', item.getAttribute('type'));
						if (item.getAttribute('type') === 'checkbox') {
							// console.log('checkbox', i);
							i === 0 ? (state[prop] = 'Холодное') : (state[prop] = 'Тёплое');
							elem.forEach((item, npp) => (item.checked = npp === i));
						} else {
							state[prop] = item.value;
						}
						break;
					case 'SELECT':
						state[prop] = item.value;
						break;
					default:
						console.log('default: ', item.nodeName);
				}

				console.log(state);
			});
		});
	}

	bindActionToElems('click', windowForm, 'form');
	bindActionToElems('focusout', windowWidth, 'width');
	bindActionToElems('focusout', windowHeight, 'height');
	bindActionToElems('change', windowType, 'type');
	bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;
