import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import './App.css';

class Form extends Component {
	// хук "useRef" работает только в функциональных компонентах
	// this.refInput = useRef(null);
	refInput = React.createRef();
	refText = React.createRef();

	componentDidMount() {
		// this.refInput.current.focus();
		this.refText.current.focus();
	}

	onClick_TextArea = () => {
		// this.refInput.current.focus();
		this.refInput2.focus();
	};

	setRef_Input2 = (elem) => {
		// создать ссылку на компонент
		this.refInput2 = elem;
	};

	render() {
		return (
			<Container>
				<form className='w-50 border mt-5 p-3 m-auto'>
					<div className='mb-3'>
						<label htmlFor='exampleFormControlInput1' className='form-label'>
							Email address
						</label>
						<input
							// ref={this.refInput}
							ref={this.setRef_Input2}
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
							onClick={this.onClick_TextArea}
							ref={this.refText}
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
	return <Form />;
}

export default App;
