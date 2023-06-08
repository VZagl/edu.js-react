import React from 'react';

import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

class EmployeesList  extends React.Component {
	// constructor( props ) {
	// 	super(props);
	// }

	render() {
		const elements = this.props.data.map( _el => {
			if (!_el.key) {
				_el.key = _el.id;
			}
			_el.doDeleteItem = this.props.doDeleteItem;
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