function forms() {

	const forms = document.querySelectorAll('form');
	const messages = {
		loading: 'img/form/spinner.svg',
		succes: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...'
	};

	forms.forEach( _v => bindPostData(_v) );

	async function postData(_url, _json) {
		const res = await fetch(_url, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: _json
		});

		return await res.json();
	}

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
		doModalOpen();

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
			doModalClose();
		}, 4000);
	}

}

module.exports = forms;
