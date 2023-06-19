import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import MarvelService from './services/MarvelService';

import './style/style.scss';

const marvelService = new MarvelService();
marvelService.getCharacter(1011052).then( res => console.log(res));
marvelService.getAllCharacters().then( res => console.log(res));

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

