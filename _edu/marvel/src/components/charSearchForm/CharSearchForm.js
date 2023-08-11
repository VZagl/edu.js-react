import React, { useState } from 'react';
import {
	Formik,
	Form,
	Field,
	ErrorMessage as FormikErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charSearchForm.scss';
import Spinner from '../spinner/Spinner';

const CharSearchForm = () => {
	const [char, setChar] = useState(null);
	const { loading, error, getCharacterByName } = useMarvelService();

	const findChar = (_data) => {
		setChar(null);
		getCharacterByName(_data.name).then(onCharLoaded).catch(onError);
	};

	const onCharLoaded = (_char) => {
		setChar(_char);
	};

	const onError = (e) => console.log('>> CharSearchForm > error:', e.message);

	//
	const vError = error && (
		<div className='char__search-critical-error'>
			<ErrorMessage />
		</div>
	);
	const vSpinner = loading && <Spinner />;
	const vFormContent = !error && !loading && (
		<Formik
			initialValues={{
				name: 'Thor',
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(2, 'минимум 2 символа')
					.required('Обязательное поле'),
			})}
			onSubmit={findChar}
		>
			<Form>
				<label className='char__search-label' htmlFor='name'>
					Or find a character by name:
				</label>
				<div className='char__search-wrapper'>
					<Field name='name' />
					<button type='submit'>SEARCH</button>
				</div>
				<FormikErrorMessage
					component='div'
					className='char__search-error'
					name='name'
				/>
			</Form>
		</Formik>
	);
	const vCharContent = !char ? null : char.length === 0 ? (
		<div className='char__search-error'>
			The character was not found. Check the name and try again
		</div>
	) : (
		<div className='char__search-wrapper'>
			<div className='char__search-success'>
				There is! Visit {char[0].name} page?
			</div>
			<Link
				to={`/characters/${char[0].id}`}
				className='button button__secondary'
			>
				<div className='inner'>To page</div>
			</Link>
		</div>
	);
	//
	return (
		<div className='char__search-form'>
			{vFormContent}
			{vError}
			{vSpinner}
			{vCharContent}
		</div>
	);
};

export default CharSearchForm;
