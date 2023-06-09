import React from 'react';

import './employees-list-item.css';

class EmployeesListItem extends React.Component{

	render() { 
		const {name, salary
			, increase, rise
			, onDeleteItem, onToggleProp
		} = this.props;
		
		let classNames = 'list-group-item d-flex justify-content-between';
		classNames += increase ? ' increase' : '';
		classNames += rise ? ' like' : '';
		//
		return (
			<li className={classNames}>
				<span 
					className="list-group-item-label"
					data-toggle="rise"
					onClick={ onToggleProp }
				>{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
				<div className='d-flex justify-content-center align-items-center'>
					<button 
						type="button"
						className="btn-cookie btn-sm"
						data-toggle="increase"
						onClick={ onToggleProp }
					>
						<i className="fas fa-cookie" />
					</button>
					<button type="button" className="btn-trash btn-sm" onClick={ onDeleteItem }>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star" />
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;