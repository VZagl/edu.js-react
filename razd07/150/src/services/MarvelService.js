import _api_key from '../components/privates/privates.js';

class MarvelService {
	_api = {
		baseUrl: 'https://gateway.marvel.com:443/v1/public/',
		apikey: _api_key.marwell.public,
	};

	getResource = async (_url) => {
		const res = await fetch(_url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${_url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getAllCharacters = async () => {
		const res = await this.getResource(
			`${this._api.baseUrl}characters?limit=9&offset=210&apikey=${this._api.apikey}`
		);
		return res.data.results.map(this._transformCharacter);
	};

	getCharacter = async (_id) => {
		const res = await this.getResource(
			`${this._api.baseUrl}characters/${_id}?apikey=${this._api.apikey}`
		);
		console.log(`getCharacter(${_id})`, res.data.results[0].description);
		return this._transformCharacter(res.data.results[0]);
	};

	// название метода начинается с "_" - это недокументированное указание другим программистам "не меняй"
	_transformCharacter = (_char) => ({
		name: _char.name,
		description: !_char.description
			? 'Описание отсутствует.'
			: _char.description.length <= 210
			? _char.description
			: _char.description.slice(0, 210) + '...',
		thumbnail: _char.thumbnail.path + '.' + _char.thumbnail.extension,
		homepage: _char.urls[0].url,
		wiki: _char.urls[1].url,
	});
}

export default MarvelService;
