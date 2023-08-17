import React from 'react';

import Counter from './Counter';

const App = () => {
	return (
		<Counter
			counter={counter}
			inc={inc}
			dec={dec}
			rnd={() => {
				const value = Math.floor(Math.random() * 100 - 50);
				rnd(value);
			}}
		/>
	);
};

export default App;
