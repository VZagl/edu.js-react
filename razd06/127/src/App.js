import React from 'react';
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

function WhoAmI ( {name, surname, link} ) {
	return (
		<div>
			{/* <h1>My name is {name.firstName}, surname - {surname}</h1> */}
			<h1>My name is { name() }, surname - {surname}</h1>
			<a href={link}>My profile</a>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			{/* <WhoAmI name={ {firstName: 'John'} } surname='Smith' link='my-fb.com/1'/>
			<WhoAmI name={ {firstName: 'Alex'} } surname='Shepard' link='my-fb.com/2'/> */}
			<WhoAmI name={ () => { return 'John';} } surname='Smith' link='my-fb.com/1'/>
			<WhoAmI name={ () => { return 'Alex';} } surname='Shepard' link='my-fb.com/2'/>
			<Header/>
			<Field/>
			<Button/>
			<Button text="Logoff"/>
		</div>
	);
}

export default App;
export {Header};
