const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
	// негласное правило: `action.type` писать `БОЛЬШИМИ БУКВАМИ`
	switch (action.type) {
		case 'INC':
			return { ...state, counter: state.counter + 1 };
		case 'DEC':
			return { ...state, counter: state.counter - 1 };
		case 'RND':
			/* так делать нельзя так как изменяется логика работы редюсера
			return Math.floor(Math.random() * 20 - 10);
			*/
			return {
				...state,
				counter: state.counter + action.payload,
				payload: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
