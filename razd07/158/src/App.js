import React from 'react';
import styled from 'styled-components';
import BootstrapTest from './Bootstrap-test';

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	a {
		display: block;
		margin: 10px 0 10px 0;
		color: ${(props) => (props.active ? 'orange' : 'black')};
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
		const styledField = { width: '300px' };
		return <input placeholder={holder} type='text' style={styledField} />;
	}
}

class WhoAmI extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			years: 27,
			position: '',
		};
	}

	nextYear = () => {
		this.setState((state) => ({ years: state.years + 1 }));
	};

	commitInputChanged = (e) => {
		// e.preventDefault();
		this.setState({
			position: e.target.value,
		});
	};

	render() {
		const { name, surname, link } = this.props;
		const { position, years } = this.state;

		return (
			<EmpItem active>
				<Button onClick={this.nextYear}>+++</Button>
				<EmpItem>
					My name is {name}, surname - {surname}, age - {years}, position -{' '}
					{position}
				</EmpItem>
				<a href={link}>My profile</a>
				<form>
					<span>Введите должность</span>
					<input
						type='text'
						onChange={(e) => this.commitInputChanged(e, 'some color')}
					/>
				</form>
			</EmpItem>
		);
	}
}

const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
	return (
		<div className={'mb-3 p-3 border border-' + props.color}>
			{React.Children.map(props.children, (child) => {
				return React.cloneElement(child, {
					className: 'shadow p-3 m-3 border rounded',
				});
			})}
		</div>
	);
};

const HelloGreating = () => {
	return (
		<div style={{ width: '600px', margin: '0 auto' }}>
			<DynamicGreating color={'primary'}>
				<h2>Hello, World!</h2>
			</DynamicGreating>
		</div>
	);
};

const Message = (props) => {
	return <h2>The counter is {props.msg}</h2>;
};

class Counter extends React.Component {
	state = { counter: 0 };

	changeCounter = () =>
		this.setState(({ counter }) => ({
			counter: counter + 1,
		}));

	render() {
		return (
			<>
				<button className={'btn btn-primary'} onClick={this.changeCounter}>
					Click me
				</button>
				{this.props.fRender(this.state.counter)}
			</>
		);
	}
}

function App() {
	return (
		<Wrapper>
			<DynamicGreating color={'primary'}>
				<Counter fRender={(arg) => <Message msg={arg} />} />
			</DynamicGreating>

			<HelloGreating />
			<BootstrapTest
				left={
					<DynamicGreating color={'primary'}>
						<h2>This well was hard</h2>
						<h2>Hello? World!</h2>
					</DynamicGreating>
				}
				right={
					<DynamicGreating color={'primary'}>
						<h2>RIGHT!</h2>
					</DynamicGreating>
				}
			/>
			<WhoAmI name='John' surname='Smith' link='my-fb.com/1' />
			<WhoAmI name='Alex' surname='Shepard' link='my-fb.com/2' />
			<Field />
		</Wrapper>
	);
}

export default App;
export { Header };
