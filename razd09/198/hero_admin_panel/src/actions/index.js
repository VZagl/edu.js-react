//#region HEROES
export const heroesFetching = () => {
	return {
		type: 'HEROES_FETCHING',
	};
};

export const heroesFetched = (heroes) => {
	return {
		type: 'HEROES_FETCHED',
		payload: heroes,
	};
};

export const heroesFetchingError = () => {
	return {
		type: 'HEROES_FETCHING_ERROR',
	};
};
//#endregion HEROES

//#region FILTERS
export const filtersFetching = () => {
	return {
		type: 'FILTERS_FETCHING',
	};
};

export const filtersFetched = (data) => {
	return {
		type: 'FILTERS_FETCHED',
		payload: data,
	};
};

export const filtersFetchingError = () => {
	return {
		type: 'FILTERS_FETCHING_ERROR',
	};
};

export const filtersSet = (data) => {
	return {
		type: 'FILTERS_SET',
		payload: data,
	};
};
//#endregion FILTERS

//#region ADD_HERO
export const addHeroFetching = () => {
	return {
		type: 'ADD_HERO_FETCHING',
	};
};

export const addHeroFetched = (data) => {
	return {
		type: 'ADD_HERO_FETCHED',
		payload: data,
	};
};

export const addHeroFetchingError = () => {
	return {
		type: 'ADD_HERO_FETCHING_ERROR',
	};
};
//#endregion ADD_HERO

//#region DELETE_HERO
export const deleteHeroFetching = () => {
	return {
		type: 'DELETE_HERO_FETCHING',
	};
};

export const deleteHeroFetched = (data) => {
	return {
		type: 'DELETE_HERO_FETCHED',
		payload: data,
	};
};

export const deleteHeroFetchingError = () => {
	return {
		type: 'DELETE_HERO_FETCHING_ERROR',
	};
};
//#endregion DELETE_HERO
