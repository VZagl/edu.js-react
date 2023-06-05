// import { Component } from 'react';
import React from 'react';
import './App.css';

/*

const Header = () => <h2>Hello, World!</h2>;
//
const Field1 = () => {
	const holder = 'Enter here';
	const styledField = {width:'300px'};
	return  <input 
		        placeholder = {holder} 
		        type = "text" 
	        	style = {styledField}
	        />;
};
//

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
		{/ * <h1>My name is {name.firstName}, surname - {surname}</h1> * /}
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
			<WhoAmI name={ {firstName: 'Alex'} } surname='Shepard' link='my-fb.com/2'/> * /}
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

*/
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: props.counter,
			min: -5,
			max: 5
		};
	}
  
	// Используйте только стрелочную форму методов
	// Почему? Подробный ответ будет в следующем уроке
	
	doInc = () => {
		this.setState(
			state => ({counter: this.state.counter + (this.state.counter < this.state.max ? 1 : 0) })
		);
	};

	doDec = () => {
		this.setState(
			state => ({counter: (this.state.counter + (this.state.counter > this.state.min ? -1 : 0)) })
		);
	};

	doRnd = () => {
		const vRnd = this.state.max - this.state.min;
		const vCounter = Math.round(Math.random()*vRnd)- this.state.max;
		this.setState(
			state => ({counter: vCounter })
		);
	};
	
	doReset = () => {
		this.setState(
			state => ({counter: this.props.counter })
		);
	};
  
	render() {
		return (
			<div className="app">
				<div className="counter">{this.state.counter}</div>
				<div className="controls">
					<button onClick={this.doInc}>INC</button>
					<button onClick={this.doDec}>DEC</button>
					<button onClick={this.doRnd}>RND</button>
					<button onClick={this.doReset}>RESET</button>
				</div>
			</div>
		);
	}
}

// ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов