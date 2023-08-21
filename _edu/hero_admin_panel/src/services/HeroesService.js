import { useDispatch } from 'react-redux';

import { useHttp } from '../hooks/http.hook';
import * as actions from '../actions';

const useHeroesService = () => {
	const _api = {
		baseUrl: 'http://localhost:3001/',
		// eslint-disable-next-line no-undef
		// apikey: process.env.REACT_APP_MARWELL_API_KEY,
	};

	const { request } = useHttp();
	const dispatch = useDispatch();

	const getAllHeroes = async () => {
		dispatch(actions.heroesFetching());
		request(`${_api.baseUrl}heroes`)
			.then((data) => dispatch(actions.heroesFetched(data)))
			.catch(() => dispatch(actions.heroesFetchingError()));
	};

	const getAllFilters = async () => {
		dispatch(actions.filtersFetching());
		request(`${_api.baseUrl}filters`)
			.then((data) => dispatch(actions.filtersFetched(data)))
			.catch(() => dispatch(actions.filtersFetchingError()));
	};

	const addHero = async (_hero) => {
		dispatch(actions.addHeroFetching());
		request(`${_api.baseUrl}heroes`, 'POST', JSON.stringify(_hero), {
			'Content-type': 'application/json',
		})
			.then(() => dispatch(actions.addHeroFetched(_hero)))
			.catch(() => dispatch(actions.addHeroFetchingError()));
	};

	const deleteHero = async (_id) => {
		dispatch(actions.deleteHeroFetching());
		request(`${_api.baseUrl}heroes/${_id}`, 'DELETE')
			.then(() => dispatch(actions.deleteHeroFetched(_id)))
			.catch(() => dispatch(actions.deleteHeroFetchingError()));
	};

	return { getAllHeroes, getAllFilters, addHero, deleteHero };
};

export default useHeroesService;
