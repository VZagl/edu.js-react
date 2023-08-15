import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './comicsList.scss';

const setContent = (_process, _Component, _newItemLoading) => {
	switch (_process) {
		case 'waiting':
			return <Spinner />;
		case 'loading':
			return _newItemLoading ? <_Component /> : <Spinner />;
		case 'confirmed':
			return <_Component />;
		case 'error':
			return <ErrorMessage />;
		default:
			throw new Error('error [process]=', _process);
	}
};

const ComicsList = () => {
	const [list, setList] = useState([]);
	const [perPage] = useState(3);
	const [pageLast, setPageLast] = useState(4);
	const [ended, setEnded] = useState(false);
	const [newItemLoading, setNewItemLoading] = useState(false);

	const { loading, getAllComics, fsmProcess, setProcess } = useMarvelService();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => onRequest(true), []);

	const onRequest = (_initial = false) => {
		_initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllComics(perPage, pageLast + 1)
			.then(onCharListLoaded)
			.then(() => setProcess('confirmed'))
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

	/*
	console.log('>> ComicsList > render: process=', fsmProcess);
	//*/
	return (
		<div className='comics__list'>
			{setContent(fsmProcess, () => renderItems(list), newItemLoading)}
			<button
				className='button button__main button__long'
				onClick={() => onRequest()}
				disabled={loading}
				style={{ display: ended ? 'none' : 'block' }}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};

export default ComicsList;
