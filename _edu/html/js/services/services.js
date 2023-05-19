async function postData(_url, _json) {
	const res = await fetch(_url, {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: _json
	});

	return await res.json();
}

async function getResource(_url) {
	const res = await fetch(_url);

	if( !res.ok ) {
		throw new Error(`Could not fetch ${_url}, status: ${res.status}`);
	}
		
	return await res.json();

	/*
	axios.get('http://localhost:3000/menu')
		.then( _data => {
			_data.data.forEach(  ({img, altimg, title, descr, price}) => {
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		})
		.catch( _error => {
			console.log( 'ERROR:', _error);
		});
	*/
}

export {postData};
export {getResource};
