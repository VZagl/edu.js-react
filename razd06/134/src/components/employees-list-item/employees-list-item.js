import React from 'react';
import './employees-list-item.css';

class EmployeesListItem extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			  name      : props.name
			, salary    : props.salary
			, increase  : props.increase
			, like      : false
		};
	}

	onIncrease = () => {
		// ({increase})=>
		// это деструктуризация "this.state" передаваемого в "setState( (this.state) => ... )"
		this.setState( ({increase})=> ({
			increase: !increase
		}));
	};

	onLike = () => {
		this.setState( ({like})=> ({
			like: !like
		}));
	};

	render() { 
		let classNames = 'list-group-item d-flex justify-content-between';
		if (this.state.increase) {
			classNames += ' increase';
		}
		if (this.state.like) {
			classNames += ' like';
		}


		return (
			<li className={classNames}>
				<span className="list-group-item-label" onClick={this.onLike}>{this.state.name}</span>
				<input type="text" className="list-group-item-input" defaultValue={this.state.salary + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button" className="btn-cookie btn-sm" onClick={this.onIncrease}>
						<i className="fas fa-cookie" />
					</button>
					<button type="button" className="btn-trash btn-sm">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star" />
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;