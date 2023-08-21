const initialState = {
	//#region HEROES
	heroes: [],
	heroesLoadingStatus: 'idle',
	//#endregion HEROES
	//#region FILTERS
	filters: [],
	filtersLoadingStatus: 'idle',
	filtersCurrent: null,
	//#endregion FILTERS

	//#region ADD_HERO
	addHeroStatus: 'idle',
	addHeroData: null,
	//#endregion ADD_HERO

	//#region DELETE_HERO
	deleteHeroStatus: 'idle',
	deleteHeroData: null,
	//#endregion DELETE_HERO
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		//#region HEROES
		case 'HEROES_FETCHING':
			return {
				...state,
				heroes: [],
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
		//#endregion HEROES

		//#region FILTERS
		case 'FILTERS_FETCHING':
			return {
				...state,
				filters: [],
				filtersCurrent: null,
				filtersLoadingStatus: 'loading',
			};
		case 'FILTERS_FETCHED':
			return {
				...state,
				filters: action.payload,
				filtersCurrent: action.payload[0]?.id || null,
				filtersLoadingStatus: 'idle',
			};
		case 'FILTERS_FETCHING_ERROR':
			return {
				...state,
				filtersCurrent: null,
				filtersLoadingStatus: 'error',
			};
		case 'FILTERS_SET':
			return {
				...state,
				filtersCurrent: action.payload,
			};
		//#endregion FILTERS

		//#region ADD_HERO
		case 'ADD_HERO_FETCHING':
			return {
				...state,
				addHeroData: null,
				addHeroStatus: 'loading',
			};
		case 'ADD_HERO_FETCHED':
			return {
				...state,
				addHeroData: action.payload,
				addHeroStatus: 'idle',
			};
		case 'ADD_HERO_FETCHING_ERROR':
			return {
				...state,
				addHeroStatus: 'error',
			};
		//#endregion ADD_HERO

		//#region DELETE_HERO
		case 'DELETE_HERO_FETCHING':
			return {
				...state,
				deleteHeroData: null,
				deleteHeroStatus: 'loading',
			};
		case 'DELETE_HERO_FETCHED':
			return {
				...state,
				deleteHeroData: action.payload,
				deleteHeroStatus: 'idle',
			};
		case 'DELETE_HERO_FETCHING_ERROR':
			return {
				...state,
				deleteHeroStatus: 'error',
			};
		//#endregion DELETE_HERO

		default:
			return state;
	}
};

export default reducer;
