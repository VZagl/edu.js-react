import React from 'react';
// import { useState, useEffect } from 'react';

import './App.css';

function useCounter(initialValue) {
	const [value, setValue] = React.useState(initialValue);

	React.useEffect(() => {
		fetch(
			'https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new'
		)
			.then((res) => res.text())
			.then((res) => setValue(res))
			.catch((err) => console.log(err));
	}, []);

	const incCounter = () => {
		if (value < 50) {
			setValue((counter) => counter + 1);
		}
	};

	const decCounter = () => {
		if (value > -50) {
			setValue((counter) => counter - 1);
		}
	};

	const rndCounter = () => {
		setValue(+(Math.random() * (-50 - 50) + 50).toFixed(0));
	};

	const resetCounter = () => {
		setValue(initialValue);
	};

	return { value, incCounter, decCounter, rndCounter, resetCounter };
}

/* ================================== */

const Counter = (props) => {
	const counter = useCounter(props.counter);

	return (
		<div className='component'>
			<div className='counter'>{counter.value}</div>
			<div className='controls'>
				<button onClick={counter.incCounter}>INC</button>
				<button onClick={counter.decCounter}>DEC</button>
				<button onClick={counter.rndCounter}>RND</button>
				<button onClick={counter.resetCounter}>RESET</button>
			</div>
		</div>
	);
};

const RndCounter = (props) => {
	const counter = useCounter(props.counter);

	return (
		<div className='component'>
			<div className='counter'>{counter.value}</div>
			<div className='controls'>
				<button onClick={counter.rndCounter}>RND</button>
				<button onClick={counter.resetCounter}>RESET</button>
			</div>
		</div>
	);
};

const App = () => {
	return (
		<>
			<Counter counter={0} />
			<RndCounter counter={5} />
		</>
	);
};

// ReactDOM.render(<App />, document.getElementById('app'));

export default App;
