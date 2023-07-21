import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

const Form = () => {
	const [text, setText] = useState('');
	const [data, setData] = useState({ counter: 0 });

	const myRef = useRef(1);

	useEffect(() => {
		// количество рендеров компонента
		// кол-во хранится с рефе
		myRef.current += 1;
		console.log('myRef.current = ', myRef.current);
		// альтернативное решение
		data.counter += 1;
		console.log('data = ', data);
	});

	return (
		<Container>
			<form className='w-50 border mt-5 p-3 m-auto'>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlInput1' className='form-label'>
						Email address
					</label>
					<input
						onChange={(e) => setText(e.target.value)}
						type='email'
						className='form-control'
						id='exampleFormControlInput1'
						placeholder='name@example.com'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlTextarea1' className='form-label'>
						Example textarea
					</label>
					<textarea
						className='form-control'
						id='exampleFormControlTextarea1'
						rows='3'
					></textarea>
				</div>
			</form>
		</Container>
	);
};

function App() {
	return <Form />;
}

export default App;
