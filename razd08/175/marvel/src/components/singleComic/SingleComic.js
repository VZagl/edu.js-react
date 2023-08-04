import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useMarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';
import Skeleton from '../skeleton/Skeleton';

import './singleComic.scss';
import Spinner from '../spinner/Spinner';

const SingleComic = () => {
	const [comic, setComic] = useState(null);
	const { comicId } = useParams();

	const { loading, error, getComic } = useMarvellService();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => updateComic(), [comicId]);

	const updateComic = () => {
		if (!comicId) return;

		getComic(comicId).then(onComicLoaded).catch(onError);
	};

	const onComicLoaded = (_comic) => setComic(_comic);

	const onError = (e) => console.log('error', e.message);

	const vError = error ? <ErrorMessage /> : null;
	const vSpinner = loading ? <Spinner /> : null;
	const vContent = error || loading || !comic ? null : <View comic={comic} />;
	const navigate = useNavigate();
	//
	return (
		<>
			<AppBanner />
			<div className='single-comic' style={{ textAlign: 'center' }}>
				{vError}
				{vSpinner}
				{vContent}
				<div>
					<button onClick={() => navigate(-1)}>Go back</button>
					<br />
					<Link to='/comics' className='single-comic__back'>
						Back to all
					</Link>
				</div>
			</div>
		</>
	);
};

const View = ({ comic }) => {
	const { title, price, description, thumbnail, pageCount, language } = comic;
	const style =
		thumbnail.indexOf('image_not_available') === -1
			? {}
			: { objectFit: 'contain' };

	return (
		<>
			<img
				src={thumbnail}
				alt={title}
				style={style}
				className='single-comic__img'
			/>
			<div className='single-comic__info'>
				<h2 className='single-comic__name'>{title}</h2>
				<p className='single-comic__descr'>{description}</p>
				<p className='single-comic__descr'>{pageCount}</p>
				<p className='single-comic__descr'>Language: {language}</p>
				<div className='single-comic__price'>{price}</div>
			</div>
		</>
	);
};

export default SingleComic;
