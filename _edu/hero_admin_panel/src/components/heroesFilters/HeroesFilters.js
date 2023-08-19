import React from 'react';
// import classNames from 'classnames';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

// import { filtersGet, filterSet } from '../../actions';

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const filters = [
	{ id: 'all', name: 'Все', style: 'btn-outline-dark' },
	{ id: 'fire', name: 'Огонь', style: 'btn-danger' },
	{ id: 'water', name: 'Вода', style: 'btn-primary' },
	{ id: 'wind', name: 'Ветер', style: 'btn-success' },
	{ id: 'earth', name: 'Земля', style: 'btn-secondary' },
];

const HeroesFilters = () => {
	const filterCurrent = useSelector((state) => state.filterCurrent);
	//  filters[0]?.id;
	const dispatch = useDispatch();

	const doFilter = (id) => {
		console.log('>> HeroesFilters > doFilter', id);
		// dispatch(filterSet(id));
	};

	const getFilters = (filters) => {
		if (!filters || filters.length === 0) return null;
		return filters.map((item) => {
			return (
				<button
					key={item.id}
					className={classNames(
						'btn',
						item.style,
						item.id === filterCurrent ? 'active' : null
					)}
					onClick={() => doFilter(item.id)}
				>
					{item.name}
				</button>
			);
		});
	};
	//
	console.log('>> HeroesFilters > render');
	return (
		<div className='card shadow-lg mt-4'>
			<div className='card-body'>
				<p className='card-text'>Отфильтруйте героев по элементам</p>
				<div className='btn-group'>
					{/* <button
						className={classNames(
							'btn',
							'btn-outline-dark',
							active === 'all' ? 'active' : null
						)}
					>
						Все
					</button>
					<button
						className={classNames({
							'btn btn-danger': true,
							active: false,
						})}
					>
						Огонь
					</button>
					<button className='btn btn-primary'>Вода</button>
					<button className='btn btn-success'>Ветер</button>
					<button className='btn btn-secondary'>Земля</button> */}

					{getFilters(filters) || <h3>empty</h3>}
				</div>
			</div>
		</div>
	);
};

export default HeroesFilters;
