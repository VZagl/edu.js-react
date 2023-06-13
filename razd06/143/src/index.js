import React from 'react';
import styled from 'styled-components';
import {createRoot} from 'react-dom/client';
import './index.css';
import App, {Header, Button} from './App';

const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`;

const root = createRoot( document.getElementById('root') );
root.render(
	<React.StrictMode>
		<Header/>
		<App />
		<BigButton as='a'>отправить</BigButton>
	</React.StrictMode>
);
