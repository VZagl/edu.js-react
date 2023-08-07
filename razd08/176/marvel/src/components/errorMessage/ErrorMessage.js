import React from 'react';

import errImg from './error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
	return (
		// <img src={process.env.PUBLIC_URL + '/error.gif'} />;
		<img src={errImg} alt='Error' />
	);
};

export default ErrorMessage;
