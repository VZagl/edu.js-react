import React from 'react';

import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

class EmployeesList  extends React.Component {

	render() {
		const elements = this.props.data.map( _el => {
			if (!_el.key) _el.key = _el.id;
			_el.onDeleteItem = () => this.props.onDeleteItem(_el.id);
			_el.onToggleProp = (e) => this.props.onToggleProp( _el.id, e.currentTarget.getAttribute('data-toggle') );
			// debugger;
			return <EmployeesListItem {..._el} />;
		});
		//
		return (
			<ul className="app-list list-group">
				{elements}
			</ul>
		);
	}
}

export default EmployeesList;