import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ( {data} ) => {
	
	const elements = data.map( _el => {
		// 5 рабочих вариантов:
		
		// 1 можно в каждом объекте, содержащемся в массиве, прописать свойство "key" и здесь ничего не делать
		// return <EmployeesListItem {..._el} />;

		// 2 = в текущем элементе добавить свойство "key", если его нет
		if (!_el.key) _el.key = _el.id;
		return <EmployeesListItem {..._el} />;

		// 3
		// return <EmployeesListItem key={_el.id} {..._el} />;

		// 4
		// const {id, ...elProps} =_el;
		// return <EmployeesListItem key={id} {..._elProps} />;

		// 5
		// const {id} =_el;
		// или
		// const id =_el.id;
		// return <EmployeesListItem key={id} {..._el} />;


	} );

	return (
		<ul className="app-list list-group">
			{ elements }
		</ul>
	);
};

export default EmployeesList;