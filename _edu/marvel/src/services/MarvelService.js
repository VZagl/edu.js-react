import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
	const _api = {
		baseUrl: 'https://gateway.marvel.com:443/v1/public/',
		// eslint-disable-next-line no-undef
		apikey: process.env.REACT_APP_MARWELL_API_KEY,
	};
	// eslint-disable-next-line no-unused-vars
	const { loading, request, error, clearError } = useHttp();

	const getAllCharacters = async (perPage = 9, pageNum = 23) => {
		const res = await request(
			`${_api.baseUrl}characters?limit=${perPage}&offset=${
				pageNum * perPage
			}&apikey=${_api.apikey}`
		);
		return res.data.results.map(_transformCharacter);
	};

	const getCharacter = async (_id) => {
		const res = await request(
			`${_api.baseUrl}characters/${_id}?apikey=${_api.apikey}`
		);
		// console.log(`getCharacter(${_id})`, res.data.results[0].description);
		return _transformCharacter(res.data.results[0]);
	};

	const getCharacterByName = async (_name) => {
		// console.log(`getCharacterByName(${_name})`);
		const res = await request(
			`${_api.baseUrl}characters?name=${_name}&apikey=${_api.apikey}`
		);
		// console.log(`getCharacterByName(${_name})`, res.data.results);
		return res.data.results.map(_transformCharacter);
	};

	// название метода начинается с "_" - это недокументированное указание другим программистам "не меняй"
	const _transformCharacter = (_char) => ({
		id: _char.id,
		name: _char.name,
		description: !_char.description
			? 'Описание отсутствует.'
			: _char.description.length <= 210
			? _char.description
			: _char.description.slice(0, 210) + '...',
		thumbnail: _char.thumbnail.path + '.' + _char.thumbnail.extension,
		homepage: _char.urls[0].url,
		wiki: _char.urls[1].url,
		comics: _char.comics.items,
	});

	const getAllComics = async (perPage = 8, pageNum = 0) => {
		const res = await request(
			`${_api.baseUrl}comics?limit=${perPage}&offset=${
				pageNum * perPage
			}&apikey=${_api.apikey}`
		);
		return res.data.results.map(_transformComics);
	};

	const getComic = async (comicId) => {
		const res = await request(
			`${_api.baseUrl}comics/${comicId}?apikey=${_api.apikey}`
		);
		return _transformComics(res.data.results[0]);
	};

	// название метода начинается с "_" - это недокументированное указание другим программистам "не меняй"
	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || 'There is no description',
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: 'No information about the number of pages',
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || 'en-us',
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: 'not available',
		};
	};

	return {
		loading,
		error,
		clearError,
		getAllCharacters,
		getCharacter,
		getCharacterByName,
		getAllComics,
		getComic,
	};
};

export default useMarvelService;
