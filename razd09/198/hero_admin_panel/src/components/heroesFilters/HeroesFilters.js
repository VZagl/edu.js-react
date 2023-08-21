import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames/bind';

import Spinner from '../spinner/Spinner';
import useHeroesService from '../../services/HeroesService';
import { filtersSet } from '../../actions';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
	const filtersCurrent = useSelector((state) => state.filtersCurrent);
	const filtersLoadingStatus = useSelector(
		(state) => state.filtersLoadingStatus
	);
	const filters = useSelector((state) => state.filters);
	const dispatch = useDispatch();
	const { getAllFilters } = useHeroesService();

	useEffect(() => {
		getAllFilters();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderContent = (_filters) => {
		if (filtersLoadingStatus === 'loading') return <Spinner />;
		if (filtersLoadingStatus === 'error') {
			return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
		}
		if (!_filters || _filters.length === 0) return <h5>empty</h5>;

		return _filters.map((item) => {
			return (
				<button
					key={item.id}
					className={classNames(
						'btn',
						item.style,
						item.id === filtersCurrent ? 'active' : null
					)}
					style={item.id === filtersCurrent ? { margin: 5 } : {}}
					onClick={() => dispatch(filtersSet(item.id))}
				>
					{item.name}
				</button>
			);
		});
	};

	/*
	console.log('>> HeroesFilters > render', filters);
	//*/
	return (
		<div className='card shadow-lg mt-4'>
			<div className='card-body'>
				<p className='card-text'>Отфильтруйте героев по элементам</p>
				<div className='btn-group'>{renderContent(filters)}</div>
			</div>
		</div>
	);
};

export default HeroesFilters;
