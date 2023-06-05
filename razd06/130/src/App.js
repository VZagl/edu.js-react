// import { Component } from 'react';
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

class WhoAmI extends React.Component {
	constructor ( props ) {
		super();
		this.state = {
			years: 27,
			text: '+++'
		};
	}
	nextYear = () => {
		this.setState( 
			state => ({ years: state.years + 1 })
		);
	};

	render () {
		const {name, surname, link} = this.props;
		return(
			<div>
				{/* <h1>My name is {name.firstName}, surname - {surname}</h1> */}
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is { name }, surname - {surname}, age - {this.state.years}</h1>
				<a href={link}>My profile</a>
			</div>
		);
	};
}

function App() {
	return (
		<div className="App">
			{/* <WhoAmI name={ {firstName: 'John'} } surname='Smith' link='my-fb.com/1'/>
			<WhoAmI name={ {firstName: 'Alex'} } surname='Shepard' link='my-fb.com/2'/> */}
			<WhoAmI name='John' surname='Smith'   link='my-fb.com/1'/>
			<WhoAmI name='Alex' surname='Shepard' link='my-fb.com/2'/>
			<Header/>
			<Field/>
			<Button/>
			<Button text="Logoff"/>
		</div>
	);
}

export default App;
export {Header};
