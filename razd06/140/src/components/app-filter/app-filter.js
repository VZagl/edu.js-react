import React from 'react';

import './app-filter.css';

class AppFilter extends React.Component {
	constructor(props){
		super(props);
		this.buttons = [
			{id: 1, text: 'Все сотрудники'  },
			{id: 2, text: 'На повышение'    },
			{id: 3, text: 'З/П больше 1000$'}
		];
	}

	render() {
		const curGroup = this.props.curGroup || this.buttons[0].id;
		const elements = this.buttons.map( _item => {
			const active = curGroup === _item.id;
			return (
				<button
					type="button"
					key={_item.id}
					className={`btn ${ active ? 'btn-light' : 'btn-outline-light' }`}
					onClick={ () => this.props.onFilter(_item.id) }
				>{_item.text}</button>
			);
		});
		//
		return (
			<div className="btn-group">
				{elements}
			</div>
		);
	};
}
export default AppFilter;