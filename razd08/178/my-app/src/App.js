import { useState } from 'react';
import React from 'react';

import Form from './Form';
import dataContext from './context';

import './App.css';

function App() {
	const [data, setData] = useState({
		mail: 'name@example.com',
		text: 'some text',
		forceChangeMail: forceChangeMail,
	});

	function forceChangeMail(_val) {
		console.log('>> App > forceChangeMail', data, _val);
		setData({ ...data, mail: _val });
	}

	console.log('>> App > render', data);
	return (
		<dataContext.Provider value={data}>
			<Form />
			<button
				onClick={() =>
					setData({
						...data,
						mail: 'second@example.com',
						text: 'another text',
					})
				}
			>
				Click me
			</button>
		</dataContext.Provider>
	);
}

export default App;
