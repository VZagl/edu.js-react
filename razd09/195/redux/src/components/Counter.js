import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec, rnd } from '../actions';

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	//
	console.log('>> Counter > render');
	return (
		<div className='jumbotron'>
			<h1>{counter}</h1>
			<button className='btn btn-primary' onClick={() => dispatch(dec())}>
				DEC
			</button>
			<button className='btn btn-primary' onClick={() => dispatch(inc())}>
				INC
			</button>
			<button className='btn btn-primary' onClick={() => dispatch(rnd())}>
				RND
			</button>
		</div>
	);
};

export default Counter;
