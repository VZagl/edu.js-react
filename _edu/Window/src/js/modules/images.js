const images = () => {
	const imgPopup = document.createElement('div');
	const bigImage = document.createElement('img');
	const workSection = document.querySelector('.works');

	imgPopup.classList.add('popup');
	workSection.appendChild(imgPopup);
	imgPopup.appendChild(bigImage);

	imgPopup.style.justifyContent = 'center';
	imgPopup.style.alignContent = 'center';
	imgPopup.style.objectFit = 'contain';

	workSection.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;
		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex';
			const path = target.parentNode.getAttribute('href');
			bigImage.setAttribute('src', path);
		}
		if (target && target.matches('div.popup')) {
			imgPopup.style.display = 'none';
		}
	});
};

export default images;
