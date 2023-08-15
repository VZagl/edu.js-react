import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import './charInfo.scss';

const CharInfo = (props) => {
	const [char, setChar] = useState(null);

	const { getCharacter, fsmProcess, setProcess } = useMarvelService();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => updateChar(), [props.charId]);

	const updateChar = () => {
		// console.log('>> CharInfo > updateChar: process=', fsmProcess);
		const { charId } = props;
		if (!charId) return;

		getCharacter(charId)
			.then(onCharLoaded)
			.then(() => setProcess('confirmed'))
			.catch(onError);
	};

	const onCharLoaded = (_char) => setChar(_char);

	const onError = (e) => console.log('error', e.message);
	/*
	console.log('>> CharInfo > render: process=', fsmProcess);
	//*/
	return (
		<div className='char__info'>
			{setContent(fsmProcess, CharView, {
				char,
				comicsMaxCount: props.comicsMaxCount,
			})}
		</div>
	);
};

// eslint-disable-next-line react/display-name
const CharView = React.memo(({ data }) => {
	// console.log('>> CharView > render', data);

	const { name, description, thumbnail, homepage, wiki, comics } = data.char;
	const style =
		thumbnail.indexOf('image_not_available') === -1
			? {}
			: { objectFit: 'contain' };
	const vComics =
		comics.length === 0
			? 'Комиксы отсутствуют.'
			: comics.map((item, i) =>
					i >= data.comicsMaxCount ? null : (
						<li className='char__comics-item' key={i}>
							{item.name}
						</li>
					)
			  );

	return (
		<>
			<div className='char__basics'>
				<img src={thumbnail} alt={name} style={style} />
				<div>
					<div className='char__info-name'>{name}</div>
					<div className='char__btns'>
						<a href={homepage} className='button button__main'>
							<div className='inner'>homepage</div>
						</a>
						<a href={wiki} className='button button__secondary'>
							<div className='inner'>Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div className='char__descr'>{description}</div>
			<div className='char__comics'>Comics:</div>
			<ul className='char__comics-list'>{vComics}</ul>
		</>
	);
});

CharInfo.propTypes = {
	charId: PropTypes.number,
	comicsMaxCount: PropTypes.number,
};

export default CharInfo;
