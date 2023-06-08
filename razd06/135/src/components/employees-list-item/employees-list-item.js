import React from 'react';

import './employees-list-item.css';

class EmployeesListItem extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			  increase  : false
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

	onRise = () => {
		this.setState( ({like})=> ({
			like: !like
		}));
	};

	render() { 
		const {name, salary, id, doDeleteItem} = this.props;

		let classNames = 'list-group-item d-flex justify-content-between';
		if (this.state.increase) {
			classNames += ' increase';
		}
		if (this.state.like) {
			classNames += ' like';
		}
		//
		return (
			<li className={classNames}>
				<span className="list-group-item-label" onClick={this.onRise}>{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button" className="btn-cookie btn-sm" onClick={this.onIncrease}>
						<i className="fas fa-cookie" />
					</button>
					<button type="button" className="btn-trash btn-sm" onClick={ () => doDeleteItem(id) }>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star" />
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;