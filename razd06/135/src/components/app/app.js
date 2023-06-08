import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {data: [
			{id: 1, name: 'John Smith'      , salary:  800, increase: false },
			{id: 2, name: 'Ann Smith'       , salary: 3000, increase: true , key:'item_2_key' },
			{id: 3, name: 'Ivan Petrichenko', salary: 5000, increase: false },
		]};
		this.maxId = this.state.data.length;
	}

	getId = () => ++this.maxId;

	doDeleteItem = ( _idItem ) => {
		this.setState( ({data}) => {
			// способ 1
			// const vInd = data.findIndex( (_v, _i) => _v.id === _idItem );
			// const newData = [...data.slice(0, vInd), ...data.slice(vInd+1)];
			// return {data: newData};
			// способ 2
			return {data: data.filter( item => item.id !== _idItem) };
		});
	};

	doAddItem = ( _item ) => {
		_item.id = this.getId();
		this.setState( ({data}) => {
			return {data: [...data,_item] };
		});
	};
	
	render() {
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployeesList data={this.state.data} doDeleteItem={this.doDeleteItem} />
				<EmployeesAddForm doAddItem={this.doAddItem}/>
			</div>
		);
	}
}

export default App;
