const checkNumInputs = (selector) => {
	const checkNumInputs = document.querySelectorAll(selector);

	checkNumInputs.forEach((item) => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});
};

export default checkNumInputs;
