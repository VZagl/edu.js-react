import { useHttp } from '../hooks/http.hook';

const useMarvellService = () => {
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

	// название метода начинается с "_" - это недокументированное указание другим программистам "не меняй"
	const _transformComics = (_item) => ({
		id: _item.id,
		title: _item.title,
		price: _item.prices[0].price,
		thumbnail: _item.thumbnail.path + '.' + _item.thumbnail.extension,
	});

	return { loading, error, getAllCharacters, getCharacter, getAllComics };
};

export default useMarvellService;
