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

	const updateChar = (_charName) => {
		// setChar(null);
		getCharacterByName(_charName).then(onCharLoaded).catch(onError);
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
				charName: char?.[0]?.name || 'Thor',
			}}
			validationSchema={Yup.object({
				charName: Yup.string()
					.min(2, 'минимум 2 символа')
					.required('Обязательное поле'),
			})}
			onSubmit={({ charName }) => updateChar(charName)}
		>
			<Form>
				<label className='char__search-label' htmlFor='charName'>
					Or find a character by name:
				</label>
				<div className='char__search-wrapper'>
					<Field
						id='charName'
						name='charName'
						type='text'
						placeholder='Enter name'
					/>
					<button
						type='submit'
						className='button button__main'
						disabled={loading}
					>
						<div className='inner'>find</div>
					</button>
				</div>
				<FormikErrorMessage
					component='div'
					className='char__search-error'
					name='charName'
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
	/*
	console.log(
		'>> CharSearchForm > render:  error=',
		error,
		'loading=',
		loading,
		'char=',
		char
	);
	*/
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
