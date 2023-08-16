import React, { useMemo } from 'react';
import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Helmet from 'react-helmet';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './charList.scss';

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

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [perPage] = useState(9);
	const [pageLast, setPageLast] = useState(171);
	const [charEnded, setCharEnded] = useState(false);

	const { getAllCharacters, fsmProcess, setProcess } = useMarvelService();
	const itemRefs = useRef([]);
	// const itemRefs = useRef(new Object(null));

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => onRequest(true), []);

	const onRequest = (_initial = false) => {
		_initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCharacters(perPage, pageLast + 1)
			.then(onCharListLoaded)
			.then(() => setProcess('confirmed'))
			.catch(onError);
	};

	const onCharListLoaded = (_newCharList) => {
		setCharList([...charList, ..._newCharList]);
		setPageLast(pageLast + 1);
		setCharEnded(_newCharList.length < perPage);
	};

	const onError = (e) => console.log('>> CharList > onError', e.message);

	const focusOnItem = (_id) => {
		console.log('>> CharList > focusOnItem', _id);
		props.onCharSelected(_id);
		itemRefs.current.forEach((item) =>
			item.classList.remove('char__item_selected')
		);
		itemRefs.current[_id].classList.add('char__item_selected');
		itemRefs.current[_id].focus();
	};

	function renderItems(_charList) {
		const vContent = _charList.map((_item) => {
			const { name, thumbnail } = _item;
			const styleImg =
				thumbnail.indexOf('image_not_available') === -1
					? null
					: { objectFit: 'contain' };

			return (
				<CSSTransition
					key={_item.id}
					in={true}
					timeout={1000}
					// unmountOnExit
					classNames='char__item'
				>
					<li
						ref={(_el) => (itemRefs.current[_item.id] = _el)}
						className='char__item'
						tabIndex={0}
						onClick={() => focusOnItem(_item.id)}
						onKeyDown={(e) => {
							if (e.key === ' ' || e.key === 'Enter') focusOnItem(_item);
						}}
					>
						<img src={thumbnail} alt={name} style={styleImg} />
						<div className='char__name'>{name}</div>
					</li>
				</CSSTransition>
			);
		});

		return (
			<ul className='char__grid'>
				<TransitionGroup component={null}>
					{/**/}
					{vContent}
				</TransitionGroup>
			</ul>
		);
	}

	const elements = useMemo(
		() => setContent(fsmProcess, () => renderItems(charList), newItemLoading),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[charList]
	);

	/*
	console.log('>> CharList > render: process=', fsmProcess);
	//*/
	return (
		<div className='char__list'>
			<Helmet>
				<meta name='description' content='Characters list' />
				<title>Characters list</title>
			</Helmet>
			{/* {setContent(fsmProcess, () => renderItems(charList), newItemLoading)} */}
			{/* {charList && renderItems(charList)} */}
			{elements}
			<button
				className='button button__main button__long'
				onClick={() => onRequest()}
				disabled={fsmProcess === 'loading'}
				style={{ display: charEnded ? 'none' : 'block' }}
			>
				<div className='inner'>load more</div>
			</button>
		</div>
	);
};

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
