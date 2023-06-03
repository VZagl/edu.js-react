import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ( {data} ) => {
	
	const elements = data.map( _el => {
		// 4 рабочих варианта:
		
		// 1 можно в каждом объекте, содержащемся в массиве, прописать свойство "key" и здесь ничего не делать
		// return <EmployeesListItem {..._el} />;

		// 2
		// const {id} =_el;
		// const id =_el.id;
		// return <EmployeesListItem key={id} {..._el} />;

		// 3
		// return <EmployeesListItem key={_el.id} {..._el} />;

		// 4
		if (!_el.key) _el.key = _el.id;
		return <EmployeesListItem {..._el} />;
	} );

	return (
		<ul className="app-list list-group">
			{ elements }
		</ul>
	);
};

export default EmployeesList;