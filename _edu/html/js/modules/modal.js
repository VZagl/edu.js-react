function modal(_selector) {

	class Modal {

		constructor( _selector = '.modal' ) {
			this.vModalShowed = false;
			this.vModalElement = document.querySelector( _selector );
		
			document.documentElement.addEventListener('click', _event => this.onModalClick(_event) );
			document.documentElement.addEventListener('keydown', _event => this.onModalKeydown(_event) );
			window.addEventListener('scroll', () => this.onModalScroll() );
			setTimeout( () => this.onModalTimer(), 2000000);
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
			this.vModalElement.classList.add('show');
			this.vModalElement.classList.remove('hide');
			// отключает прокрутку на основной странице
			document.body.style.overflow = 'hidden';
			// clearInterval(modalTimerId);
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
			if (this.vModalShowed) return;
			// if ( document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight )
			if ( window.pageYOffset >= window.scrollMaxY - 1 ) {
				// TODO: не убирает обработчик события
				window.removeEventListener('scroll', () => this.onModalScroll() );
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

export default modal;
