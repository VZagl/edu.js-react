'use strict';

const data = [
	{
		id: 'box',
		tag: 'div'
	},
	{
		id: '',
		tag: 'nav'
	},
	{
		id: 'circle',
		tag: ''
	}
];
data.forEach( (_blockObj, _i) => {
	try {
		// if (!_blockObj.tag) throw new Error(`в данных под номером ${_i+1} нет tag`);
		if (!_blockObj.id) throw new SyntaxError(`в данных под номером ${_i+1} нет id`);

		const block = document.createElement(_blockObj.tag);
		block.setAttribute('id', _blockObj.id);
		document.body.append(block);
	} catch (_err) {
		if (_err instanceof SyntaxError) {
			console.dir(_err);
		}	else throw _err;
	}
});

// const err = new SyntaxError('dsasdasdas');
// console.dir(err);
