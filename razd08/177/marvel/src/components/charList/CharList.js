import React from 'react';
import { useState, useEffect, useRef } from 'react';
import useMarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types';

import './charList.scss';
import Spinner from '../spinner/Spinner';

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [perPage] = useState(9);
	const [pageLast, setPageLast] = useState(171);
	const [charEnded, setCharEnded] = useState(false);
	const [charCurrent, setCharCurrent] = useState(null);

	const { loading, error, getAllCharacters } = useMarvellService();
	// const itemRefs = useRef([]);
	const itemRefs = useRef(new Object(null));

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => onRequest(), []);

	const onRequest = () => {
		if (loading) return;

		getAllCharacters(perPage, pageLast + 1)
			.then(onCharListLoaded)
			.catch(onError);
	};

	const onCharListLoaded = (_newCharList) => {
		setCharList([...charList, ..._newCharList]);
		setPageLast(pageLast + 1);
		setCharEnded(_newCharList.length < perPage);
	};

	const onError = (e) => console.log('error', e.message);

	const focusOnItem = (_item) => {
		// console.log('>> CharList > focusOnItem', _item.id);
		// if (charCurrent && charCurrent.id === _item.id) return;

		setCharCurrent(_item);
		props.onCharSelected(_item.id);
		// это делать не обязательно. фокус после клика или табиндекса и так на этом элементе
		itemRefs.current[_item.id].focus();
	};

	function renderItems(_charList) {
		const vContent = _charList.map((_item) => {
			const { name, thumbnail } = _item;
			const styleImg =
				thumbnail.indexOf('image_not_available') === -1
					? {}
					: { objectFit: 'contain' };
			const charClasses = [
				'char__item',
				charCurrent && charCurrent.id === _item.id
					? ' char__item_selected'
					: null,
			].join(' ');

			return (
				<li
					ref={(_el) => {
						itemRefs.current[_item.id] = _el;
					}}
					className={charClasses}
					key={_item.id}
					tabIndex={0}
					onClick={() => {
						focusOnItem(_item);
					}}
					onKeyDown={(e) => {
						if (e.key === ' ' || e.key === 'Enter') {
							focusOnItem(_item);
						}
					}}
				>
					<img src={thumbnail} alt={name} style={styleImg} />
					<div className='char__name'>{name}</div>
				</li>
			);
		});

		return <ul className='char__grid'>{vContent}</ul>;
	}

	const vError = error ? <ErrorMessage /> : null;
	const vSpinner = loading ? <Spinner /> : null;
	const vItems = error ? null : renderItems(charList);
	const vBtnLoadMore_Style = charEnded ? { display: 'none' } : null;

	return (
		<div className='char__list'>
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

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
