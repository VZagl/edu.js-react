import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { useHttp } from '../../hooks/http.hook';
import { heroCreated } from '../../slices/heroesSlice';
import { selectAll as allFiltersSelector } from '../../slices/filtersSlice';

const HeroesAddForm = () => {
	// Состояния для контроля формы
	const [heroName, setHeroName] = useState('');
	const [heroDescr, setHeroDescr] = useState('');
	const [heroElement, setHeroElement] = useState('');

	const filtersLoadingStatus = useSelector(
		(state) => state.filters.loadingStatus
	);
	const filters = useSelector(allFiltersSelector);
	const dispatch = useDispatch();
	const { request } = useHttp();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		// Можно сделать и одинаковые названия состояний,
		// хотел показать вам чуть нагляднее
		// Генерация id через библиотеку
		const newHero = {
			id: uuidv4(),
			name: heroName,
			description: heroDescr,
			element: heroElement,
		};

		// Отправляем данные на сервер в формате JSON
		// ТОЛЬКО если запрос успешен - отправляем персонажа в store
		request('http://localhost:3001/heroes', 'POST', JSON.stringify(newHero))
			.then((res) => console.log(res, 'Отправка успешна'))
			.then(dispatch(heroCreated(newHero)))
			.catch((err) => console.log(err));

		// Очищаем форму после отправки
		setHeroName('');
		setHeroDescr('');
		setHeroElement('');
	};

	const renderFilters = (filters, status) => {
		if (status === 'loading') {
			return <option>Загрузка элементов</option>;
		} else if (status === 'error') {
			return <option>Ошибка загрузки</option>;
		}

		// Если фильтры есть, то рендерим их
		if (filters && filters.length > 0) {
			return filters.map(({ id, label }) => {
				// Один из фильтров нам тут не нужен
				// eslint-disable-next-line
				if (id === 'all') return;

				return (
					<option key={id} value={id}>
						{label}
					</option>
				);
			});
		}
	};

	return (
		<form className='border p-4 shadow-lg rounded' onSubmit={onSubmitHandler}>
			<div className='mb-3'>
				<label htmlFor='name' className='form-label fs-4'>
					Имя нового героя
				</label>
				<input
					required
					type='text'
					name='name'
					className='form-control'
					id='name'
					placeholder='Как меня зовут?'
					value={heroName}
					onChange={(e) => setHeroName(e.target.value)}
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='text' className='form-label fs-4'>
					Описание
				</label>
				<textarea
					required
					name='text'
					className='form-control'
					id='text'
					placeholder='Что я умею?'
					style={{ height: '130px' }}
					value={heroDescr}
					onChange={(e) => setHeroDescr(e.target.value)}
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='element' className='form-label'>
					Выбрать элемент героя
				</label>
				<select
					required
					className='form-select'
					id='element'
					name='element'
					value={heroElement}
					onChange={(e) => setHeroElement(e.target.value)}
				>
					<option value=''>Я владею элементом...</option>
					{renderFilters(filters, filtersLoadingStatus)}
				</select>
			</div>

			<button type='submit' className='btn btn-primary'>
				Создать
			</button>
		</form>
	);
};

export default HeroesAddForm;