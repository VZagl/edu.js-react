import { configureStore } from '@reduxjs/toolkit';

import heroesReducer from '../slices/heroesSlice';
import filtersReducer from '../slices/filtersSlice';

/*
	const stringMiddleware = (store) => (dispatch) => (action) => {
	store содержит 2 функции: dispatch и getState.
	поэтому её можно деструктурировать так:
	const stringMiddleware = ({ dispatch, getState }) => (dispatch) => (action) => {
*/

const stringMiddleware = () => (next) => (action) => {
	// console.log('stringMiddleware', action);
	if (typeof action === 'string') {
		return next({ type: action });
	}
	return next(action);
};

const store = configureStore({
	reducer: { heroes: heroesReducer, filters: filtersReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(stringMiddleware),
	// eslint-disable-next-line no-undef
	devTools: process.env.NODE_ENV !== 'production',
});

export default store;
