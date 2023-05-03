'use strict';
// ==============================
function log(..._args) {
	console.log(new Date(),'\t\t', ..._args);
}
// ==============================

/*
log('Запрос данных...');

const req = new Promise( function(_resolve, _reject) {
	setTimeout( ()=> {
		log('Подготовка данных...');
		const product = {
			name: 'TV',
			price: 2000
		};
		_resolve(product);
	}, 2000);
});

req.then( _data => {
	log('req.then')
	log('Данные получены');

	return new Promise( function(_resolve, _reject) {
		setTimeout( ()=> {
			_data.status = 'order';
			_resolve(_data);
			// _reject();
		}, 2000);
	}).then( _data => {
			log('req2.then')
			_data.modify = true;
			return _data;
		});
}).then( _data => {
	log(_data);
}).catch( () => {
	console.error('Произошла ошибка');
}).finally( () => {
	console.error('req.finally');
});
*/

const test = _time => {
	return new Promise( _resolve => {
		setTimeout( ()=> _resolve(_time), _time);
	});
};

test(2000).then( (_time)=> log('test time=', _time));
test(1000).then( (_time)=> log('test time=', _time));

Promise.all( [test(2000), test(1000)] ).then( (_time)=> log('Promise.all time=', _time) );

Promise.race( [test(2000), test(1000)] ).then( (_time)=> log('Promise.race time=', _time) );

{
	const fOk      = function (_data) { console.log('fOk='     , _data); };
	const fErr     = function (_data) { console.log('fErr='    , _data); };
	const fCatch   = function (_data) { console.log('fCatch='  , _data); };
	const fFinally = function (_data) { console.log('fFinally=', _data); };

	const myPromise = _data => {
		return new Promise( (_fOk, _fErr) => {
			let vResult = false;
			// какие-то действия, результат которых будет записан в vResult
			if (vResult) _fOk(vResult)
			else  _fErr(vResult);
		});
	};

	myPromise()
	//.then(fOk, fErr) // усли в .then не указана fErr, то в случае ошибки вызовется .catch
	.then(fOk)
	.catch(fCatch)
	.finally(fFinally);

}