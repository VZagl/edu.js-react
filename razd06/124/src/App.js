import React, {StrictMode} from 'react';
import './App.css';

const Header = () => <h2>Hello, World!</h2>;
/*
const Field1 = () => {
	const holder = 'Enter here';
	const styledField = {width:'300px'};
	return  <input 
		        placeholder = {holder} 
		        type = "text" 
	        	style = {styledField}
	        />;
};
*/

class Field extends React.Component {
	render() {
		const holder = 'Enter here';
		const styledField = {width:'300px'};
		return  <input 
			placeholder = {holder} 
			type = "text" 
			style = {styledField}
		/>;
	}
}

const Button = (_props) => {
	return <button>{_props.text || 'Log in'}</button>;
};

function App() {
	return (
		<div className="App">
			<StrictMode>
				<Header/>
			</StrictMode>
			<Field/>
			<Button/>
			<Button text="Logoff"/>
		</div>
	);
}

export default App;
export {Header};
