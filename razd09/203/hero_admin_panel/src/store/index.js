import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import heroesReducer from '../reducers/heroes';
import filtersReducer from '../reducers/filters';

/*
	const stringMiddleware = (store) => (dispatch) => (action) => {
	store содержит 2 функции: dispatch и getState.
	поэтому её можно деструктурировать так:
	const stringMiddleware = ({ dispatch, getState }) => (dispatch) => (action) => {
*/

const stringMiddleware = () => (next) => (action) => {
	console.log('stringMiddleware', action);
	if (typeof action === 'string') {
		return next({ type: action });
	}
	return next(action);
};

const store = createStore(
	combineReducers({ heroes: heroesReducer, filters: filtersReducer }),
	compose(
		applyMiddleware(ReduxThunk, stringMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
