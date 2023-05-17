function slider() {

	const vSlider_Offer = document.querySelector('div.offer__slider');
	const vSlider_Counter = vSlider_Offer.querySelector('.offer__slider-counter');
	const vSlider_BtnPrev = vSlider_Counter.querySelector('.offer__slider-prev');
	const vSlider_BtnNext = vSlider_Counter.querySelector('.offer__slider-next');
	const vSlider_Wrapper = vSlider_Offer.querySelector('.offer__slider-wrapper');
	const vSlider_Inner = vSlider_Offer.querySelector('.offer__slider-inner');
	const vSlider_Width = +window.getComputedStyle(vSlider_Offer).width.replace( /\D/g, '');
	const vSlider_CounterCurrent = vSlider_Counter.querySelector('#current');
	const vSlides_Data = {
		current: 1,
		slides: [],
		dots: []
	};
	vSlides_Data.slides = vSlider_Offer.querySelectorAll('.offer__slide');
	
	const vSlider_CounterTotal = vSlider_Counter.querySelector('#total');
	vSlider_CounterTotal.textContent = `${vSlides_Data.slides.length < 10 ? '0' : ''}${vSlides_Data.slides.length}`;
	
	vSlider_Inner.style.width = 100 * vSlides_Data.slides.length + '%';
	vSlider_Inner.style.display = 'flex';
	vSlider_Inner.style.transition = '0.5s all';
	
	vSlider_Wrapper.style.overflow = 'hidden';

	vSlides_Data.slides.forEach( _v => {
		_v.style.width = vSlider_Width;
	});

	vSlider_Offer.style.position = 'relative';
	const vSlider_Dots = document.createElement('ol');
	vSlider_Dots.classList.add('carousel-indicators');
	vSlider_Offer.append(vSlider_Dots);
	
	for (let i = 0; i < vSlides_Data.slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.classList.add('dot');
		vSlider_Dots.append(dot);
		vSlides_Data.dots.push(dot);
	}
	vSlider_Dots.addEventListener('click', _e => {
		if (!_e.target.hasAttribute('data-slide-to') ) return;
		doSlide_Show( +_e.target.getAttribute('data-slide-to') );
	});

	vSlider_BtnPrev.addEventListener('click', () => doSlide_Show(vSlides_Data.current - 1) );
	vSlider_BtnNext.addEventListener('click', () => doSlide_Show(vSlides_Data.current + 1) );

	doSlide_Show();

	function doSlide_Show(_slideIndex = vSlides_Data.current) {
		vSlides_Data.dots[vSlides_Data.current - 1].classList.remove('dot-active');
		vSlides_Data.current = _slideIndex;
		if (_slideIndex < 1) {
			vSlides_Data.current = vSlides_Data.slides.length;
		}
		if (_slideIndex > vSlides_Data.slides.length) {
			vSlides_Data.current = 1;
		}
		vSlides_Data.dots[vSlides_Data.current - 1].classList.add('dot-active');
		vSlider_Inner.style.transform = `translateX(-${(vSlides_Data.current - 1) * vSlider_Width}px)`;
		vSlider_CounterCurrent.textContent = `${vSlides_Data.current < 10 ? '0' : ''}${vSlides_Data.current}`;
	}

}

module.exports = slider;
