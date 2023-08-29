import {
	createSlice,
	createAsyncThunk,
	createEntityAdapter,
} from '@reduxjs/toolkit';
import { useHttp } from '../hooks/http.hook';

const adapter =
	createEntityAdapter(/* { selectId: (filter) => filter.name } */);

const initialState = adapter.getInitialState({
	// filters: [],
	loadingStatus: 'idle',
	activeFilter: 'all',
});

export const fetchFilters = createAsyncThunk('filters/fetch', () => {
	const { request } = useHttp();
	return request('http://localhost:3001/filters');
});

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		activeFilterChanged(state, action) {
			state.activeFilter = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilters.pending, (state) => {
				state.loadingStatus = 'loading';
			})
			.addCase(fetchFilters.fulfilled, (state, action) => {
				state.loadingStatus = 'idle';
				// state.filters = action.payload;
				adapter.setAll(state, action.payload);
			})
			.addCase(fetchFilters.rejected, (state) => {
				state.loadingStatus = 'error';
			})
			.addDefaultCase(() => {});
	},
});

export const { selectAll } = adapter.getSelectors((state) => state.filters);

export const { activeFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
