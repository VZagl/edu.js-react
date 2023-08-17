/* это классовый компонент */

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Counter extends React.Component {
	render() {
		const { counter, inc, dec, rnd } = this.props;

		return (
			<div className='jumbotron'>
				<h1>{counter}</h1>
				<button className='btn btn-primary' onClick={dec}>
					DEC
				</button>
				<button className='btn btn-primary' onClick={inc}>
					INC
				</button>
				<button className='btn btn-primary' onClick={rnd}>
					RND
				</button>
			</div>
		);
	}
}

// функция "mapStateToProps" должна быть "чистой"
const mapStateToProps = (state) => {
	return { counter: state.value };
};

export default connect(mapStateToProps, actions)(Counter);
