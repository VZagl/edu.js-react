import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {Header} from './App';

const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(
	// <React.StrictMode>
	<StrictMode>
		<Header/>
		<App />
	</StrictMode>
	// </React.StrictMode>
);

/*
// не работает. устаревший синтаксис?

ReactDOM.render(
	<StrictMode>
		<Header/>
		<App/>
	</StrictMode>
	, document.getElementById('root')
);
*/