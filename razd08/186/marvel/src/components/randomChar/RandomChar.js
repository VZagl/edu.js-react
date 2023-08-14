import React from 'react';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/Spinner';

const RandomChar = () => {
	const [char, setChar] = useState(null);

	const { loading, error, getCharacter } = useMarvelService();

	useEffect(() => {
		updateChar();
		const timerId = setInterval(updateChar, 60000);

		return () => {
			clearInterval(timerId);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateChar = () => {
		if (loading) return;

		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		getCharacter(id).then(onCharLoaded).catch(onError);
	};

	const onCharLoaded = (_char) => setChar(_char);

	const onError = (e) => console.log('error', e.message);

	const vError = error ? <ErrorMessage /> : null;
	const vSpinner = loading ? <Spinner /> : null;
	const vContent =
		!char || error || loading ? null : <RandomCharView char={char} />;

	return (
		<div className='randomchar'>
			{vError}
			{vSpinner}
			{vContent}
			<div className='randomchar__static'>
				<p className='randomchar__title'>
					Random character for today!
					<br />
					Do you want to get to know him better?
				</p>
				<p className='randomchar__title'>Or choose another one</p>
				<button className='button button__main' onClick={updateChar}>
					<div className='inner'>try it</div>
				</button>
				<img src={mjolnir} alt='mjolnir' className='randomchar__decoration' />
			</div>
		</div>
	);
};

const RandomCharView = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki } = char;
	const style =
		thumbnail.indexOf('image_not_available') === -1
			? {}
			: { objectFit: 'contain' };

	return (
		<div className='randomchar__block'>
			<img
				src={thumbnail}
				alt='Random character'
				className='randomchar__img'
				style={style}
			/>
			<div className='randomchar__info'>
				<p className='randomchar__name'>{name}</p>
				<p className='randomchar__descr'>{description}</p>
				<div className='randomchar__btns'>
					<a href={homepage} className='button button__main'>
						<div className='inner'>homepage</div>
					</a>
					<a href={wiki} className='button button__secondary'>
						<div className='inner'>Wiki</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default RandomChar;
