import { useContext } from 'react';
import React from 'react';

import dataContext from './context';

/*
class InputComponent extends React.Component {
	render() {
		return (
			<dataContext.Consumer>
				{({ mail }) => (
					<input
						value={mail}
						type='email'
						className='form-control'
						id='exampleFormControlInput1'
						placeholder='name@example.com'
					/>
				)}
			</dataContext.Consumer>
		);
	}
}
*/
/*
class InputComponent extends React.Component {
	static contextType = dataContext;

	render() {
		return (
			<input
				value={this.context.mail}
				type='email'
				className='form-control'
				id='exampleFormControlInput1'
				placeholder='name@example.com'
			/>
		);
	}
}
*/

const InputComponent = () => {
	const context = useContext(dataContext);

	console.log('>> InputComponent > render');
	return (
		<input
			value={context.mail}
			onChange={(e) => context.forceChangeMail(e.target.value)}
			type='email'
			className='form-control'
			id='exampleFormControlInput1'
			placeholder='name@example.com'
		/>
	);
};

export default InputComponent;
