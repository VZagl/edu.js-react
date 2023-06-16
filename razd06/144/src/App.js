import React from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${props => props.active ? 'orange' : 'black'};
	}
	input {
		display: block;
		margin-top: 10px;
	}
`;
const Header = styled.h2`
	font-size: 22px;
`;
export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

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

class WhoAmI extends React.Component {
	constructor ( props ) {
		super();
		this.state = {
			years: 27,
			position: ''
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
		const {position, years} = this.state;

		return (
			<EmpItem active>
				<Button	onClick={this.nextYear}>+++</Button>
				<EmpItem>
					My name is { name }, 
					surname - {surname}, 
					age - {years}, 
					position - {position}
				</EmpItem>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={ (e) => this.commitInputChanged(e, 'some color') } />
				</form>
			</EmpItem>
		);
	};
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

function App() {
	return (
		<Wrapper>
			{/* <div className="App"> */}
			{/* <WhoAmI name={ {firstName: 'John'} } surname='Smith' link='my-fb.com/1'/>
			<WhoAmI name={ {firstName: 'Alex'} } surname='Shepard' link='my-fb.com/2'/> */}
			<WhoAmI name='John' surname='Smith'   link='my-fb.com/1'/>
			<WhoAmI name='Alex' surname='Shepard' link='my-fb.com/2'/>
			<Field/>
			{/* </div> */}
		</Wrapper>
	);
}

export default App;
export {Header};
