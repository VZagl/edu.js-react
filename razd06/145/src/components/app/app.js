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
			],
			dataFilter: {
				text: '',
				group: 1
			}
		};
		App.maxId = this.state.data.length;
	}

	static maxId;
	static getId = () => ++App.maxId;

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
		_item.id = App.getId();
		_item.increase = false;
		_item.rise = false;
		this.setState( ({data}) => {
			return {data: [...data, _item] };
		});
	};

	onToggleProp = (id, propName) => {
		// console.log('onToggleProp', id, propName);
		this.setState( ({data}) =>({
			data: data.map( item => {
				if (item.id === id) return {...item, [propName]: !item[propName]};
				return item;
			})
		}));
	};

	onChangeSalary = (_id, _value) => {
		this.setState( ({data}) =>{ 
			const newData = data.map( item => {
				if (item.id === _id) {
					item.salary = Number.parseInt(_value);
				}
				return item;
			});
			return	{data: newData};
		});
	};
	
	onSearch = (_text) => {
		// console.log( 'onSearch', _text);
		this.setState( (prevState) => ({dataFilter: {...prevState.dataFilter, text: _text}}));
	};

	onFilter = (_value) => {
		// console.log( 'onFilter', _value);
		this.setState( (prevState) => ({dataFilter: {...prevState.dataFilter, group: _value}}));
	};

	#doFiltering = ( _data, _dataFilter) => {
		return _data.filter( _el => {
			const {text, group} = _dataFilter;

			switch (group) {
			case 2:
				if (!_el.rise) return false;
				break;
			case 3:
				if (_el.salary <= 1000) return false;
				break;
			default:
			}

			if(text.length > 0) {
			// return _el.name.slice(0, text.length).toLowerCase() === text.toLowerCase(); 
				return _el.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
			}

			return true;
		});
	};
	
	#getInfoCount = (_data) => _data.length;

	#getInfoIncrease = (_data) => _data.reduce( (sum, cur) => sum += (cur.increase ? 1 : 0), 0 );

	render() {
		const {data, dataFilter} = this.state;
		const visibleData = this.#doFiltering(data, dataFilter);
		const {group} = dataFilter;
		const appInfoData = {
			countAll: this.#getInfoCount(data), 
			countIncrease: this.#getInfoIncrease(data)
		};
		//
		return (
			<div className="app">
				<AppInfo data={ appInfoData } />

				<div className="search-panel">
					<SearchPanel onSearch={this.onSearch}/>
					<AppFilter onFilter={this.onFilter} curGroup={group}/>
				</div>

				<EmployeesList
					data={visibleData}
					onDeleteItem={this.onDeleteItem}
					onToggleProp={this.onToggleProp}
					onChangeSalary={this.onChangeSalary}
				/>
				<EmployeesAddForm doAddItem={this.doAddItem}/>
			</div>
		);
	}
}

export default App;
