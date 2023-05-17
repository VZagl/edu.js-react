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

module.exports = calc;
