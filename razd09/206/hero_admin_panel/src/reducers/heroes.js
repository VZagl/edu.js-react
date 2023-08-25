import { createReducer } from '@reduxjs/toolkit';
import {
	heroesFetching,
	heroesFetched,
	heroesFetchingError,
	heroCreated,
	heroDeleted,
} from '../actions';

const initialState = {
	heroes: [],
	heroesLoadingStatus: 'idle',
};

// вариант 1
const heroes = createReducer(
	initialState,
	{
		[heroesFetching]: (state) => {
			state.heroesLoadingStatus = 'loading';
		},
		[heroesFetched]: (state, action) => {
			state.heroesLoadingStatus = 'idle';
			state.heroes = action.payload;
		},
		[heroesFetchingError]: (state) => {
			state.heroesLoadingStatus = 'error';
		},
		[heroCreated]: (state, action) => {
			state.heroes.push(action.payload);
		},
		[heroDeleted]: (state, action) => {
			state.heroes = state.heroes.filter((item) => item.id !== action.payload);
		},
	},
	// здесь могут быть фильтры
	[],
	// обработчик `action` по умолчанию
	(state) => state
);

/*
// вариант 2
const heroes = createReducer(initialState, (builder) => {
	builder
		.addCase(heroesFetching, (state) => {
			state.heroesLoadingStatus = 'loading';
			// ничего возвращать нельзя!
			// если вернуть что-либо, то `state` присвоится возвращаемое значение
		})
		.addCase(heroesFetched, (state, action) => {
			state.heroesLoadingStatus = 'idle';
			state.heroes = action.payload;
		})
		.addCase(heroesFetchingError, (state) => {
			state.heroesLoadingStatus = 'error';
		})
		.addCase(heroCreated, (state, action) => {
			state.heroes.push(action.payload);
		})
		.addCase(heroDeleted, (state, action) => {
			state.heroes = state.heroes.filter((item) => item.id !== action.payload);
		})
		.addDefaultCase(() => {}); // вернёт не изменённый `state`
});
*/

/*
const heroes = (state = initialState, action) => {
	switch (action.type) {
		case 'HEROES_FETCHING':
			return {
				...state,
				heroesLoadingStatus: 'loading',
			};
		case 'HEROES_FETCHED':
			return {
				...state,
				heroes: action.payload,
				heroesLoadingStatus: 'idle',
			};
		case 'HEROES_FETCHING_ERROR':
			return {
				...state,
				heroesLoadingStatus: 'error',
			};

		// Самая сложная часть - это показывать новые элементы по фильтрам
		// при создании или удалении
		case 'HERO_CREATED': {
			return {
				...state,
				heroes: [...state.heroes, action.payload],
			};
		}
		case 'HERO_DELETED': {
			return {
				...state,
				heroes: state.heroes.filter((item) => item.id !== action.payload),
			};
		}
		default:
			return state;
	}
};
*/

export default heroes;
