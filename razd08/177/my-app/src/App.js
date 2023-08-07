import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';
/*
function propsCompare(prevProps, nextProps) {
	return (
		prevProps.mail.name === nextProps.mail.name &&
		prevProps.text === nextProps.text
	);
}
// eslint-disable-next-line react/display-name
const Form = React.memo((props) => {
	console.log('>> Form.render');
	console.log('');

	return (
		<Container>
			<form className='w-50 border mt-5 p-3 m-auto'>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlInput1' className='form-label mt-3'>
						Email address
					</label>
					<input
						value={props.mail.name}
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
						value={props.text}
						className='form-control'
						id='exampleFormControlTextarea1'
						rows='3'
					></textarea>
				</div>
			</form>
		</Container>
	);
}, propsCompare);
*/
class Form extends React.Component {
	shouldComponentUpdate(_props) {
		const vRes =
			this.props.mail.name !== _props.mail.name ||
			this.props.text !== _props.text;
		console.log('Form.shouldComponentUpdate', _props, 'vRes=', vRes);
		return vRes;
	}

	render() {
		console.log('>> Form.render');

		return (
			<Container>
				<form className='w-50 border mt-5 p-3 m-auto'>
					<div className='mb-3'>
						<label
							htmlFor='exampleFormControlInput1'
							className='form-label mt-3'
						>
							Email address
						</label>
						<input
							value={this.props.mail.name}
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
							value={this.props.text}
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
				</form>
			</Container>
		);
	}
}

function App() {
	const [data, setData] = useState({
		mail: { name: 'name@example.com' },
		text: 'some text',
	});

	return (
		<>
			<Form mail={data.mail} text={data.text} />
			<button
				onClick={() =>
					setData({
						mail: { name: 'second@example.com' },
						text: 'another text',
					})
				}
			>
				Click me
			</button>
		</>
	);
}

export default App;
