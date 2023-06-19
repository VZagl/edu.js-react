import _api_key from '../components/privates/privates.js';

class MarvelService {
	_api = {
		baseUrl: 'https://gateway.marvel.com:443/v1/public/',
		apikey: _api_key.marwell.public
	};
	
	getResource = async (_url) => {
		const res = await fetch(_url);
	
		if( !res.ok ) {
			throw new Error(`Could not fetch ${_url}, status: ${res.status}`);
		}
			
		return await res.json();
	};

	getAllCharacters = () => {
		return this.getResource(`${this._api.baseUrl}characters?limit=9&offset=210&apikey=${this._api.apikey}`);
	};

	getCharacter = (_id) => {
		return this.getResource(`${this._api.baseUrl}characters/${_id}?apikey=${this._api.apikey}`);
	};

}

export default MarvelService;
