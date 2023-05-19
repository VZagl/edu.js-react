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

export default cards;
