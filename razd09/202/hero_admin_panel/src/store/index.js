import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
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

const enhancer =
	(createStore) =>
	(...args) => {
		const store = createStore(...args);

		const oldDispatch = store.dispatch;
		store.dispatch = (action) => {
			console.log('store.dispatch', action);
			if (typeof action === 'string') {
				return oldDispatch({ type: action });
			}
			return oldDispatch(action);
		};
		return store;
	};

const store = createStore(
	combineReducers({ heroes: heroesReducer, filters: filtersReducer }),
	compose(
		applyMiddleware(stringMiddleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	/*
	compose(
		enhancer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	*/
);

export default store;