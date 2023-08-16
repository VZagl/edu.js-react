import { createStore } from 'redux';

const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
	// негласное правило: `action.type` писать `БОЛЬШИМИ БУКВАМИ`
	switch (action.type) {
		case 'INC':
			return { ...state, value: state.value + 1 };
		case 'DEC':
			return { ...state, value: state.value - 1 };
		case 'RND':
			/* так делать нельзя так как изменяется логика работы редюсера
			return Math.floor(Math.random() * 20 - 10);
			*/
			return { ...state, value: state.value * action.payload };

		default:
			return state;
	}
};

const store = createStore(reducer);

const update = () => {
	document.getElementById('counter').textContent = store.getState().value;
	console.log(store.getState().value);
};

store.subscribe(update);

// action creator
const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RND', payload: value });

document
	.getElementById('inc')
	.addEventListener('click', () => store.dispatch(inc()));

document
	.getElementById('dec')
	.addEventListener('click', () => store.dispatch(dec()));

document.getElementById('rnd').addEventListener('click', () => {
	const value = Math.floor(Math.random() * 10 - 5);
	store.dispatch(rnd(value));
});

/*
console.log(store.getState());
store.dispatch({ type: 'INC' });
store.dispatch({ type: 'INC' });
*/
/*
let state = initialState;
state = reducer(state, { type: 'INC' });
state = reducer(state, { type: 'INC' });
state = reducer(state, { type: 'INC' });
state = reducer(state, { type: 'INC' });

console.log(state);
*/
