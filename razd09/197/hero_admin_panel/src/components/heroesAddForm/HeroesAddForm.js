import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidGet } from 'uuid';

import {
	Formik,
	Form as FormFormik,
	Field as FieldFormik,
	ErrorMessage as ErrorMessageFormik,
} from 'formik';
import * as yup from 'yup';

import Spinner from '../spinner/Spinner';
import useHeroesService from '../../services/HeroesService';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
	const filters = useSelector((state) => state.filters);
	const addHeroStatus = useSelector((state) => state.addHeroStatus);
	const { addHero } = useHeroesService();
	let formInitialValues = getInitFormValues();

	useEffect(() => {
		// console.log('>> HeroesAddForm > useEffect[addHeroStatus]', addHeroStatus);
		if (addHeroStatus !== 'idle') return;
		// eslint-disable-next-line react-hooks/exhaustive-deps
		formInitialValues = getInitFormValues();
	}, [addHeroStatus]);

	function getInitFormValues() {
		// console.log('>> HeroesAddForm > getInitFormValues');
		return {
			id: uuidGet(),
			name: '',
			description: '',
			element: '',
		};
	}

	const renderElements = (_filters) => {
		if (!_filters) return null;
		const elementList = _filters.filter((item) => item.id !== 'all');
		if (elementList.count === 0) return null;
		return elementList.map((item) => (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		));
	};

	if (addHeroStatus === 'loading') return <Spinner />;
	if (addHeroStatus === 'error')
		return <h5 className='text-center mt-5'>Ошибка</h5>;

	/*
	console.log('>> HeroesAddForm > render', addHeroStatus);
	//*/
	return (
		<Formik
			className='border p-4 shadow-lg rounded'
			initialValues={formInitialValues}
			validationSchema={yup.object({
				name: yup
					.string()
					.min(2, 'минимум 2 символа')
					.required('Обязательное поле'),
				description: yup.string().min(10, 'минимум 10 символов'),
				element: yup.string().required('Выберите элемент'),
			})}
			onSubmit={(data) => addHero(data)}
		>
			<FormFormik className='border p-4 shadow-lg rounded'>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label fs-4'>
						Имя нового героя
					</label>
					<FieldFormik
						type='text'
						id='name'
						name='name'
						className='form-control'
						placeholder='Как меня зовут?'
					/>
					<ErrorMessageFormik name='name' className='error' component='div' />
				</div>

				<div className='mb-3'>
					<label htmlFor='description' className='form-label fs-4'>
						Описание
					</label>
					<FieldFormik
						id='description'
						name='description'
						as='textarea'
						className='form-control'
						placeholder='Что я умею?'
						style={{ height: '130px' }}
					/>
					<ErrorMessageFormik
						name='description'
						className='error'
						component='div'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='element' className='form-label fs-4'>
						Выбрать элемент героя
					</label>
					<FieldFormik
						id='element'
						name='element'
						as='select'
						className='form-select'
						placeholder='Я владею элементом...'
					>
						<option value=''>Я владею элементом...</option>
						{renderElements(filters)}
					</FieldFormik>
					<ErrorMessageFormik
						name='element'
						className='error'
						component='div'
					/>
				</div>

				<button
					type='submit'
					className='btn btn-primary'
					disabled={addHeroStatus === 'loading'}
				>
					Создать
				</button>
			</FormFormik>
		</Formik>
	);
};

export default HeroesAddForm;
