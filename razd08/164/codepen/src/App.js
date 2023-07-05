import React from 'react';
// import { useState, useEffect } from 'react';
// import { Button, Container } from 'react-bootstrap';

import './App.css';

const App = (props) => {
	const counterMin = -5;
	const counterMax = 5;
	const [counter, setCounter] = React.useState(props.counter);
	const [currency, setCurrency] = React.useState('USD');
	const [curs, setCurs] = React.useState({ USD: 1, EUR: 2 });
	// Используйте только стрелочную форму методов
	// Почему? Подробный ответ будет в следующем уроке

	function fOk(res) {
		// console.log('fOk', res);
		// console.log(curs);
		const newCurs = {};
		res.forEach((val) => {
			if (Object.hasOwn(curs, val.cc)) {
				newCurs[val.cc] = val.rate;
				console.log('own', val.cc);
			}
		});
		setCurs(newCurs);
		// console.log(newCurs);
	}

	function fErr(err) {
		console.log('fErr', err);
	}

	React.useEffect(() => {
		console.log('React.useEffect');
		getResource(
			'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
		)
			.then(fOk)
			.catch(fErr);
	}, []);

	function onInc() {
		if (counter >= counterMax) return;
		setCounter((counter) => counter + 1);
	}

	function onDec() {
		if (counter <= counterMin) return;
		setCounter((counter) => counter - 1);
	}

	function onRnd() {
		setCounter(() =>
			Math.round(Math.random() * (counterMax - counterMin) - counterMax)
		);
	}
	function onReset() {
		setCounter(() => props.counter);
	}

	function getCurs(currency) {
		return curs[currency];
	}

	return (
		<div className='app'>
			<div style={{ display: 'inline' }}>
				<div className='counter'>{counter}</div>
				<div>
					{counter} UAH / {getCurs(currency)} ={' '}
					{(counter / getCurs(currency)).toFixed(4)} {currency}
				</div>
			</div>
			<div className='controls'>
				<button onClick={onInc}>INC</button>
				<button onClick={onDec}>DEC</button>
				<button onClick={onRnd}>RND</button>
				<button onClick={onReset}>RESET</button>
			</div>
			<div className='controls'>
				<button
					onClick={() => {
						// console.log(curs);
						setCurrency('USD');
					}}
				>
					USD
				</button>
				<button
					onClick={() => {
						// console.log(curs);
						setCurrency('EUR');
					}}
				>
					EUR
				</button>
			</div>
		</div>
	);
};

const getResource = async (_url) => {
	const res = await fetch(_url);

	if (!res.ok) {
		throw new Error(`Could not fetch ${_url}, status: ${res.status}`);
	}

	return await res.json();
};

export default App;
