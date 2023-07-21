import React from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Button, Container } from 'react-bootstrap';

import './App.css';

export default function App() {
	const [sliderVisible, setSliderVisible] = useState(true);

	return (
		<>
			<Button onClick={() => setSliderVisible(!sliderVisible)}>Click</Button>
			{sliderVisible ? <Slider /> : null}
		</>
	);
}
// =====================================================

const countTotal = (num) => {
	console.log('countTotal >', num);
	return num + 10;
};

const Slider = () => {
	console.log('>>');

	const [slide, setSlide] = useState(0);
	const [autoplay, setAutoplay] = useState(false);

	function logging() {
		console.log('> logging');
	}

	const getSomeImages = useCallback(() => {
		console.log('getSomeImages >');
		return [
			'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
			'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
		];
	}, []);

	useEffect(() => {
		console.log('useEffect > logging');
		window.addEventListener('click', logging);
		return () => {
			window.removeEventListener('click', logging);
		};
	}, []);

	useEffect(() => {
		console.log('useEffect > slide', slide);
		document.title = `Slide: ${slide}`;
	}, [slide]);

	useEffect(() => {
		console.log('useEffect > autoplay', autoplay);
	}, [autoplay]);

	function changeSlide(val) {
		setSlide((slide) => slide + val);
	}

	function toggleAutoplay() {
		setAutoplay((autoplay) => !autoplay);
	}

	const total = useMemo(() => countTotal(slide), [slide]);

	const style = useMemo(() => {
		console.log('useMemo > style');
		return { color: slide > 4 ? 'red' : 'black' };
	}, [slide]);

	useEffect(() => console.log('useEffect > style'), [style]);

	console.log('<<');

	return (
		<Container>
			<div className='slider w-50 m-auto'>
				<Slide getSomeImages={getSomeImages} />
				<div className='text-center mt-5'>
					Active slide {slide} <br /> {autoplay ? 'auto' : null}
				</div>
				<div className='text-center mt-5' style={style}>
					Total slides: {total}
				</div>
				<div className='buttons mt-3'>
					<button
						className='btn btn-primary me-2'
						onClick={() => changeSlide(-1)}
					>
						-1
					</button>
					<button
						className='btn btn-primary me-2'
						onClick={() => changeSlide(1)}
					>
						+1
					</button>
					<button className='btn btn-primary me-2' onClick={toggleAutoplay}>
						toggle autoplay
					</button>
				</div>
			</div>
		</Container>
	);
};

const Slide = ({ getSomeImages }) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		setImages(getSomeImages());
	}, [getSomeImages]);

	return (
		<>
			{images.map((url, i) => (
				<img className='d-block w-100' key={i} src={url} alt='slide' />
			))}
		</>
	);
};
