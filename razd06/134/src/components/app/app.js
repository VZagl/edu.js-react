import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{id: 1, name: 'John Smith'      , salary:  800, increase: false },
		{id: 2, name: 'Ann Smith'       , salary: 3000, increase: true , key:'item_2_key' },
		{id: 3, name: 'Ivan Petrichenko', salary: 5000, increase: false },
	];

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
        
			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;
