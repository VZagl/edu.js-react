import React from 'react';

// import './employees-add-form.css';
import './employees-add-form.scss';

class EmployeesAddForm extends React.Component{
	
	state = {
		name: '',
		salary: ''
	};

	onValueChange = (e) => {
		e.target.value = e.target.value.trimStart();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onAddItem = (e) => {
		e.preventDefault();
		if(!this.state.name || this.state.name.trim().length < 3 || !this.state.salary) return;
		this.props.doAddItem({
			  name: this.state.name.trim()
			, salary: this.state.salary
		});
		this.setState( {name:'', salary: ''} );
	};

	render () {
		const {name, salary} = this.state;

		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form className="add-form d-flex" onSubmit={this.onAddItem}>
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name='name'
						value={name}
						onChange={this.onValueChange}
					/>
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						name='salary'
						value={salary}
						onChange={this.onValueChange}
					/>
					<button type="submit" className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		);
	};
}

export default EmployeesAddForm;