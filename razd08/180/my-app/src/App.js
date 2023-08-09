import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// негласное правило именования HOC:
// имя начинается с "with"
const withSlider = (BaseComponent, getData) => {
	// eslint-disable-next-line react/display-name
	return (props) => {
		const [slide, setSlide] = useState(0);
		const [autoplay, setAutoplay] = useState(false);

		useEffect(() => {
			setSlide(getData());
		}, []);

		function changeSlide(i) {
			setSlide((slide) => slide + i);
		}

		let wrapped = (
			<BaseComponent
				{...props}
				slide={slide}
				autoplay={autoplay}
				setAutoplay={setAutoplay}
				changeSlide={changeSlide}
			/>
		);
		// wrapped.displayName = 'Hello';

		return wrapped;
	};
};

const getDataFromFirstFetch = () => {
	return 10;
};
const getDataFromSecondFetch = () => {
	return 20;
};

const SliderFirst = ({ slide, changeSlide }) => {
	return (
		<Container>
			<div className='slider w-50 m-auto'>
				<img
					className='d-block w-100'
					src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
					alt='slide'
				/>
				<div className='text-center mt-5'>Active slide {slide}</div>
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
				</div>
			</div>
		</Container>
	);
};

const SliderSecond = ({ slide, autoplay, setAutoplay, changeSlide }) => {
	return (
		<Container>
			<div className='slider w-50 m-auto'>
				<img
					className='d-block w-100'
					src='https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
					alt='slide'
				/>
				<div className='text-center mt-5'>
					Active slide {slide} <br />
					{autoplay ? 'auto' : null}{' '}
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
					<button
						className='btn btn-primary me-2'
						onClick={() => setAutoplay((autoplay) => !autoplay)}
					>
						toggle autoplay
					</button>
				</div>
			</div>
		</Container>
	);
};

const SliderwithFirstFetch = withSlider(SliderFirst, getDataFromFirstFetch);
const SliderwithSecondFetch = withSlider(SliderSecond, getDataFromSecondFetch);

// eslint-disable-next-line react/display-name
const withLogger = (WrappedComponent) => (props) => {
	useEffect(() => {
		console.log('>> withLogger', props);
	}, [props]);

	return <WrappedComponent {...props} />;
};

const Hello = ({ name }) => {
	return <h1>Hello, {name}!</h1>;
};

const HelloWithLogger = withLogger(Hello);

function App() {
	return (
		<>
			<HelloWithLogger name={'World'} />
			<SliderwithFirstFetch />
			<SliderwithSecondFetch />
		</>
	);
}

export default App;
