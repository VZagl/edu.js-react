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
		this.state = {
			data: [
				{id: 1, name: 'John Smith'      , salary:  800, increase: false, rise: true  },
				{id: 2, name: 'Ann Smith'       , salary: 3000, increase: true , rise: false, key:'item_2_key' },
				{id: 3, name: 'Ivan Petrichenko', salary: 5000, increase: false, rise: false },
			]
		};
		this.maxId = this.state.data.length;
	}

	getId = () => ++this.maxId;

	onDeleteItem = ( _idItem ) => {
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
		_item.increase = false;
		_item.rise = false;
		this.setState( ({data}) => {
			return {data: [...data, _item] };
		});
	};
	/*
	onToggleIncrease = (id) => {
		console.log('onToggleIncrease', id);
		this.setState( ({data}) =>({
			data: data.map( item => {
				if (item.id === id) return {...item, increase: !item.increase};
				return item;
			})
		}));
	};
	*/
	onToggleProp = (id, prop) => {
		console.log('onToggleProp', id, prop);
		this.setState( ({data}) =>({
			data: data.map( item => {
				if (item.id === id) return {...item, [prop]: !item[prop]};
				return item;
			})
		}));
	};
	
	#getInfoCount = () => this.state.data.length;

	#getInfoIncrease = () => this.state.data.reduce( (sum, cur) => sum += (cur.increase ? 1 : 0), 0 );

	render() {
		const appInfoData = {countAll: this.#getInfoCount(), countIncrease: this.#getInfoIncrease()};
		//
		return (
			<div className="app">
				<AppInfo data={ appInfoData } />

				<div className="search-panel">
					<SearchPanel/>
					<AppFilter/>
				</div>

				<EmployeesList data={this.state.data} 
					onDeleteItem={this.onDeleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm doAddItem={this.doAddItem}/>
			</div>
		);
	}
}

export default App;
