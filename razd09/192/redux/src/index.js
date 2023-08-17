import { createStore, bindActionCreators } from 'redux';

import reducer from './reducer';
import * as actions from './actions';

console.log('actions =', actions);
// actions = Module {__esModule: true, Symbol(Symbol.toStringTag): 'Module'}
// 	dec: (…)
// 	inc: (…)
// 	rnd: (…)
// 	__esModule: true
// 	Symbol(Symbol.toStringTag): "Module"
// 	get dec: () => (/* binding */ dec)
// 	get inc: () => (/* binding */ inc)
// 	get rnd: () => (/* binding */ rnd)
// 	[[Prototype]]: Object

const store = createStore(reducer);
const { dispatch, getState } = store;
// const { subscribe } = store;

/* именно так работает встроенная в Redux функция bindActionCreators
const bindActionCreators = (creator, dispatch) => {
	return (...args) => dispatch(creator(...args));
};
*/
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
	document.getElementById('counter').textContent = getState().value;
	console.log(store.getState().value);
};

store.subscribe(update);

document.getElementById('inc').addEventListener('click', inc);
document.getElementById('dec').addEventListener('click', dec);
document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 100 - 50);
	rnd(value);
});
