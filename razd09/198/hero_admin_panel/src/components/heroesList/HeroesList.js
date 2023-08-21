import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useHeroesService from '../../services/HeroesService';
import HeroesListItem from '../heroesListItem/HeroesListItem';

import Spinner from '../spinner/Spinner';
import './heroesList.scss';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {
	const heroes = useSelector((state) => state.heroes);
	const heroesLoadingStatus = useSelector((state) => state.heroesLoadingStatus);
	const filtersCurrent = useSelector((state) => state.filtersCurrent);
	const addHeroStatus = useSelector((state) => state.addHeroStatus);
	const addHeroData = useSelector((state) => state.addHeroData);
	const deleteHeroStatus = useSelector((state) => state.deleteHeroStatus);
	const deleteHeroData = useSelector((state) => state.deleteHeroData);
	const { getAllHeroes } = useHeroesService();
	const [filteredHeroes, setFilteredHeroes] = useState([]);

	useEffect(() => {
		getAllHeroes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (addHeroStatus !== 'idle' || !addHeroData) return;
		heroes.push(addHeroData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [addHeroStatus]);

	useEffect(() => {
		if (deleteHeroStatus !== 'idle') return;
		heroes.splice(
			heroes.findIndex((item) => item.id === deleteHeroData),
			1
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deleteHeroStatus]);

	useEffect(() => {
		setFilteredHeroes(
			heroes.filter(
				(item) =>
					!filtersCurrent ||
					filtersCurrent === 'all' ||
					item.element === filtersCurrent
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		heroes,
		heroesLoadingStatus,
		filtersCurrent,
		addHeroStatus,
		deleteHeroStatus,
	]);

	if (heroesLoadingStatus === 'loading') return <Spinner />;
	if (heroesLoadingStatus === 'error')
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;

	const renderHeroesList = (arr) => {
		if (arr.length === 0) {
			return (
				<CSSTransition timeout={0} classNames='hero'>
					<h5 className='text-center mt-5'>Героев пока нет</h5>
				</CSSTransition>
			);
		}

		return arr.map((item) => {
			return (
				<CSSTransition key={item.id} timeout={500} classNames='hero'>
					<HeroesListItem {...item} />
				</CSSTransition>
			);
		});
	};

	const elements = renderHeroesList(filteredHeroes);
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
	return <TransitionGroup component='ul'>{elements}</TransitionGroup>;
};

export default HeroesList;
