/*
в "bootstrap.css" есть стиль 'modal-open'
если этот стиль установить элементу "body", то это будет аналогично:
	document.body.style.overflow = 'hidden';
*/
const modals = () => {
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const triggers = document.querySelectorAll(triggerSelector);
		const close = document.querySelector(closeSelector);
		const modal = document.querySelector(modalSelector);

		triggers.forEach((item) =>
			item.addEventListener('click', (e) => {
				e?.target && e.preventDefault();
				modal.style.display = 'block';
				// document.body.style.overflow = 'hidden';
				document.body.classList.add('modal-open');
			})
		);

		close.addEventListener('click', (e) => {
			e?.target && e.preventDefault();
			modal.style.display = 'none';
			// document.body.style.overflow = '';
			document.body.classList.remove('modal-open');
		});

		modal.addEventListener('click', (e) => {
			if (!e || e.target !== modal) return;
			modal.style.display = 'none';
			// document.body.style.overflow = '';
			document.body.classList.remove('modal-open');
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			document.querySelector(selector).style.display = 'block';
			document.body.classList.add('modal-open');
		}, time);
	}

	bindModal(
		'.popup_engineer_btn',
		'.popup_engineer',
		'.popup_engineer .popup_close'
	);
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	showModalByTime('.popup', 60000);
};

export default modals;
