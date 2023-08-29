import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
	createSelector,
} from '@reduxjs/toolkit';
import { useHttp } from '../hooks/http.hook';

const adapter = createEntityAdapter();
const initialState = adapter.getInitialState({
	loadingStatus: 'idle',
});

export const fetchHeroes = createAsyncThunk('heroes/fetch', () => {
	const { request } = useHttp();
	return request('http://localhost:3001/heroes');
});

const heroesSlice = createSlice({
	name: 'heroes',
	initialState,
	reducers: {
		created: (state, action) => {
			adapter.addOne(state, action.payload);
			// state.heroes.push(action.payload);
		},
		deleted: (state, action) => {
			adapter.removeOne(state, action.payload);
			// state.heroes = state.heroes.filter((item) => item.id !== action.payload);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHeroes.pending, (state) => {
				state.loadingStatus = 'loading';
			})
			.addCase(fetchHeroes.fulfilled, (state, action) => {
				state.loadingStatus = 'idle';
				// state.heroes = action.payload;
				adapter.setAll(state, action.payload);
			})
			.addCase(fetchHeroes.rejected, (state) => {
				state.loadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

const { selectAll } = adapter.getSelectors((state) => state.heroes);

export const filteredHeroesSelector = createSelector(
	(state) => state.filters.activeFilter,
	selectAll,
	(filter, heroes) => {
		if (filter === 'all') {
			return heroes;
		} else {
			return heroes.filter((item) => item.element === filter);
		}
	}
);

export const { created: heroCreated, deleted: heroDeleted } =
	heroesSlice.actions;
export default heroesSlice.reducer;
