import React from 'react';

import ErrorMessage from '../components/errorMessage/ErrorMessage';
import Skeleton from '../components/skeleton/Skeleton';
import Spinner from '../components/spinner/Spinner';

const setContent = (_process, _Component, _data) => {
	switch (_process) {
		case 'waiting':
			return <Skeleton />;
		case 'loading':
			return <Spinner />;
		case 'confirmed':
			return <_Component data={_data} />;
		case 'error':
			return <ErrorMessage />;
		default:
			throw new Error('error [process]=', _process);
	}
};

export default setContent;
