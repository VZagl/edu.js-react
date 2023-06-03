import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ( {data} ) => {
	
	const elements = data.map( _el => <EmployeesListItem {..._el} /> );

	return (
		<ul className="app-list list-group">
			{ elements }
		</ul>
	);
};

export default EmployeesList;