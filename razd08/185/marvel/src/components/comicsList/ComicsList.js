import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';
import Spinner from '../spinner/Spinner';

const ComicsList = () => {
	const [list, setList] = useState([]);
	const [perPage] = useState(8);
	const [pageLast, setPageLast] = useState(4);
	const [ended, setEnded] = useState(false);

	const { loading, error, getAllComics } = useMarvelService();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => onRequest(), []);

	const onRequest = () => {
		if (loading) return;

		getAllComics(perPage, pageLast + 1)
			.then(onCharListLoaded)
			.catch(onError);
	};

	const onCharListLoaded = (_newList) => {
		setList([...list, ..._newList]);
		setPageLast(pageLast + 1);
		setEnded(_newList.length < perPage);
	};

	const onError = (e) => console.log('error', e.message);

	function renderItems(_list) {
		const vContent = _list.map((_item, i) => {
			const { title, thumbnail, price } = _item;
			const styleImg =
				thumbnail.indexOf('image_not_available') === -1
					? {}
					: { objectFit: 'contain' };

			return (
				<li key={i} className='comics__item'>
					<Link to={`${_item.id}`}>
						<img
							src={thumbnail}
							alt={title}
							className='comics__item-img'
							style={styleImg}
						/>
						<div className='comics__item-name'>{title}</div>
						<div className='comics__item-price'>{price}</div>
					</Link>
				</li>
			);
		});

		return <ul className='comics__grid'>{vContent}</ul>;
	}

	const vError = error ? <ErrorMessage /> : null;
	const vSpinner = loading ? <Spinner /> : null;
	const vItems = error ? null : renderItems(list);
	const vBtnLoadMore_Style = ended ? { display: 'none' } : null;

	return (
		<div className='comics__list'>
			{vItems}
			{vError}
			{vSpinner}
			{!loading && (
				<button
					className='button button__main button__long'
					onClick={onRequest}
					disabled={loading}
					style={vBtnLoadMore_Style}
				>
					<div className='inner'>load more</div>
				</button>
			)}
		</div>
	);
};

export default ComicsList;
