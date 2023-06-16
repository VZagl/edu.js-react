import React from 'react';
import styled from 'styled-components';
import {createRoot} from 'react-dom/client';
import App, {Header, Button} from './App';
import BootstrapTest from './Bootstrap-test';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`;

const root = createRoot( document.getElementById('root') );
root.render(
	<React.StrictMode>
		<BootstrapTest />
		<Header/>
		<App />
		<BigButton as='a'>отправить</BigButton>
	</React.StrictMode>
);
