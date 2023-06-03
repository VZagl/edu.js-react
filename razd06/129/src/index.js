import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/app';

import './index.css';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
