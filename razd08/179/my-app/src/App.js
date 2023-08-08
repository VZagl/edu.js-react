import React, { useState, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function reducer(state, action) {
	console.log('> reducer', action);

	switch (action.type) {
		case 'toggle':
			return { autoplay: !state.autoplay };
		case 'slow':
			return { autoplay: 300 };
		case 'fast':
			return { autoplay: 700 };
		case 'custom':
			return { autoplay: action.payload };
		default:
			throw new Error();
	}
}

function initAutoplayState(_initValue) {
	return { autoplay: _initValue };
}

const Slider = ({ initValue }) => {
	const [slide, setSlide] = useState(0);
	// const [autoplay, setAutoplay] = useState(false);
	const [autoplayState, dispatch] = useReducer(
		reducer,
		initValue,
		initAutoplayState
	);

	function changeSlide(i) {
		setSlide((slide) => slide + i);
	}

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
					{autoplayState.autoplay ? 'auto' : null}
					<br />
					<h1>{JSON.stringify(autoplayState)}</h1>
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
						onClick={() => dispatch({ type: 'toggle' })}
					>
						toggle autoplay
					</button>
					<button
						className='btn btn-primary me-2'
						onClick={() => dispatch({ type: 'slow' })}
					>
						slow autoplay
					</button>
					<button
						className='btn btn-primary me-2'
						onClick={() => dispatch({ type: 'fast' })}
					>
						fast autoplay
					</button>
					<button
						className='btn btn-primary me-2'
						onClick={(e) =>
							dispatch({ type: 'custom', payload: +e.target.textContent })
						}
					>
						1000
					</button>
				</div>
			</div>
		</Container>
	);
};

function App() {
	return <Slider initValue={false} />;
}

export default App;
