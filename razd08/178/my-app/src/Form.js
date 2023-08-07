import React from 'react';
import { Container } from 'react-bootstrap';

import InputComponent from './Input';
import dataContext from './context';

const Form = () => {
	console.log('>> Form > render');
	return (
		<Container>
			<form className='w-50 border mt-5 p-3 m-auto'>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlInput1' className='form-label mt-3'>
						Email address
					</label>
					<InputComponent />
				</div>
				<div className='mb-3'>
					<label htmlFor='exampleFormControlTextarea1' className='form-label'>
						Example textarea
					</label>
					<dataContext.Consumer>
						{({ text }) => (
							<textarea
								value={text}
								className='form-control'
								id='exampleFormControlTextarea1'
								rows='3'
							></textarea>
						)}
					</dataContext.Consumer>
				</div>
			</form>
		</Container>
	);
};

export default Form;
