import checkNumInputs from './checkNumInputs';

const forms = (state) => {
	const form = document.querySelectorAll('form');
	const inputs = document.querySelectorAll('input');

	checkNumInputs('input[name="user_phone"]');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся.',
		failure: 'Что-то пошло не так...',
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});
		return await res.text();
	};

	const clearInputs = () => inputs.forEach((item) => (item.value = ''));

	form.forEach((item) =>
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			item.appendChild(statusMessage);

			const formData = new FormData(item);
			if (item.getAttribute('data-calc') === 'end') {
				for (let key in state) {
					formData.append(key, state[key]);
				}
			}
			console.log('formData', formData);

			postData('assets/server.php', formData)
				.then((res) => {
					console.log('result', res);
					statusMessage.textContent = message.success;
				})
				.catch((err) => {
					console.log('error', err);
					statusMessage.textContent = message.failure;
				})
				.finally(() => {
					// clearInputs();
					setTimeout(() => statusMessage.remove(), 5000);
				});
		})
	);
};

export default forms;
