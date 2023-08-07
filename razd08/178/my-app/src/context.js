import { createContext } from 'react';

const dataContext = createContext({
	mail: '@example.com',
	text: 'text',
	forceChangeMail: () => {},
});

export default dataContext;
