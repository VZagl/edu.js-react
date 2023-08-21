import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useHeroesService from '../../services/HeroesService';
import Spinner from '../spinner/Spinner';

import HeroesListItem from '../heroesListItem/HeroesListItem';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
	const [redrawing, setRegrawing] = useState(null);
	const heroes = useSelector((state) => state.heroes);
	const heroesLoadingStatus = useSelector((state) => state.heroesLoadingStatus);
	const filtersCurrent = useSelector((state) => state.filtersCurrent);
	const addHeroStatus = useSelector((state) => state.addHeroStatus);
	const addHeroData = useSelector((state) => state.addHeroData);
	const deleteHeroStatus = useSelector((state) => state.deleteHeroStatus);
	const deleteHeroData = useSelector((state) => state.deleteHeroData);
	// const dispatch = useDispatch();
	const { getAllHeroes } = useHeroesService();

	useEffect(() => {
		getAllHeroes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (addHeroStatus !== 'idle' || !addHeroData) return;
		// console.log('>>HeroesList > useEffect[addHeroStatus]', addHeroStatus);
		// console.log('addHeroData =', addHeroData);
		heroes.push(addHeroData);
		setRegrawing({});
		// getAllHeroes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [addHeroStatus]);

	useEffect(() => {
		if (deleteHeroStatus !== 'idle') return;
		// console.log('>>HeroesList > useEffect[deleteHeroStatus]', deleteHeroStatus);
		// console.log('deleteHeroData =', deleteHeroData);
		heroes.splice(
			heroes.findIndex((item) => item.id === deleteHeroData),
			1
		);
		setRegrawing({});
		// getAllHeroes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deleteHeroStatus]);

	if (heroesLoadingStatus === 'loading') return <Spinner />;
	if (heroesLoadingStatus === 'error')
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;

	const renderHeroesList = (arr) => {
		if (arr.length === 0) {
			return <h5 className='text-center mt-5'>Героев пока нет</h5>;
		}

		return arr.map((item) => {
			return <HeroesListItem key={item.id} {...item} />;
		});
	};

	const doHeroesFiltering = (_heroes, _filter) => {
		if (!_filter || _filter === 'all') return _heroes;
		return _heroes.filter((item) => (item.element === _filter ? item : null));
	};

	const elements = renderHeroesList(doHeroesFiltering(heroes, filtersCurrent));
	/*
	console.log(
		'>> HeroesList > render: filtersCurrent =',
		filtersCurrent,
		'elements =',
		elements,
		'addHeroStatus =',
		addHeroStatus
	);
	//*/
	return <ul>{elements}</ul>;
};

export default HeroesList;
