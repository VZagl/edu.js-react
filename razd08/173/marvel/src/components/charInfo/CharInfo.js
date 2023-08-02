import React from 'react';
import { useState, useEffect } from 'react';
import useMarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import PropTypes from 'prop-types';

import './charInfo.scss';
import Spinner from '../spinner/Spinner';

const CharInfo = (props) => {
	const [char, setChar] = useState(null);

	const { loading, error, getCharacter } = useMarvellService();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => updateChar(), [props.charId]);

	const updateChar = () => {
		const { charId } = props;
		if (!charId) return;

		getCharacter(charId).then(onCharLoaded).catch(onError);
	};

	const onCharLoaded = (_char) => setChar(_char);

	const onError = (e) => console.log('error', e.message);

	const vError = error ? <ErrorMessage /> : null;
	const vSpinner = loading ? <Spinner /> : null;
	const vSkeleton = error || loading || char ? null : <Skeleton />;
	const vContent =
		error || loading || !char ? null : (
			<CharView char={char} comicsMaxCount={props.comicsMaxCount} />
		);
	//
	return (
		<div className='char__info'>
			{vError}
			{vSpinner}
			{vSkeleton}
			{vContent}
		</div>
	);
};

const CharView = (props) => {
	const { name, description, thumbnail, homepage, wiki, comics } = props.char;
	const style =
		thumbnail.indexOf('image_not_available') === -1
			? {}
			: { objectFit: 'contain' };
	const vComics =
		comics.length === 0
			? 'Комиксы отсутствуют.'
			: comics.map((item, i) =>
					i >= props.comicsMaxCount ? null : (
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
};

CharInfo.propTypes = {
	charId: PropTypes.number,
	comicsMaxCount: PropTypes.number,
};

export default CharInfo;
