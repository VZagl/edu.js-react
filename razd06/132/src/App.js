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
			position: '',
			text: '+++'
		};
	}

	nextYear = () => {
		this.setState( 
			state => ({ years: this.state.years + 1 })
		);
	};

	commitInputChanged = (e, color) => {
		// e.preventDefault();
		// console.log(color);
		this.setState({
			position: e.target.value
		});
	};

	render () {
		const {name, surname, link} = this.props;
		const {position, years, text} = this.state;

		return (
			<div>
				<button onClick={this.nextYear}>{text}</button>
				<h1>
					My name is { name }, 
					surname - {surname}, 
					age - {years}, 
					position - {position}
				</h1>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={ (e) => this.commitInputChanged(e, 'some color') } />
				</form>
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
