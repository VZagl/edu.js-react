// import {globalObj} from '../services/globals';
import {postData} from '../services/services';

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

export default forms;
