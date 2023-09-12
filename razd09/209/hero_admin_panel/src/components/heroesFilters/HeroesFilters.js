import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import {
	activeFilterChanged,
	fetchFilters,
	selectAll as allFiltersSelector,
} from '../../slices/filtersSlice';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
	const filtersLoadingStatus = useSelector(
		(state) => state.filters.loadingStatus
	);
	const activeFilter = useSelector((state) => state.filters.activeFilter);
	const filters = useSelector(allFiltersSelector);
	const dispatch = useDispatch();

	// Запрос на сервер для получения фильтров и последовательной смены состояния
	useEffect(() => {
		dispatch(fetchFilters());
		// eslint-disable-next-line
	}, []);

	if (filtersLoadingStatus === 'loading') {
		return <Spinner />;
	} else if (filtersLoadingStatus === 'error') {
		return <h5 className='text-center mt-5'>Ошибка загрузки</h5>;
	}

	const renderFilters = (arr = []) => {
		if (arr.length === 0) {
			return <h5 className='text-center mt-5'>Фильтры не найдены</h5>;
		}

		// Данные в json-файле я расширил классами и текстом
		return arr.map(({ id, className, label }) => {
			// Используем библиотеку classnames и формируем классы динамически
			const btnClass = classNames('btn', className, {
				active: id === activeFilter,
			});

			return (
				<button
					key={id}
					id={id}
					className={btnClass}
					onClick={() => dispatch(activeFilterChanged(id))}
				>
					{label}
				</button>
			);
		});
	};

	const elements = renderFilters(filters);

	return (
		<div className='card shadow-lg mt-4'>
			<div className='card-body'>
				<p className='card-text'>Отфильтруйте героев по элементам</p>
				<div className='btn-group'>{elements}</div>
			</div>
		</div>
	);
};

export default HeroesFilters;