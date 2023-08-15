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
import Spinner from '../spinner/Spinner';

import './charSearchForm.scss';

const setContent = (_process, _Component) => {
	switch (_process) {
		case 'waiting':
			return null;
		case 'loading':
			return <Spinner />;
		case 'confirmed':
			return <_Component />;
		case 'error':
			return (
				<div className='char__search-error'>
					The character was not found. Check the name and try again
				</div>
			);
		default:
			throw new Error('error [process]=', _process);
	}
};

const CharSearchForm = () => {
	const [char, setChar] = useState(null);
	const { getCharacterByName, fsmProcess, setProcess } = useMarvelService();

	const updateChar = (_charName) => {
		// setChar(null);
		getCharacterByName(_charName).then(onCharLoaded);
		// .catch(onError);
	};

	const onCharLoaded = (_char) => {
		// console.log('onCharLoaded ', _char);
		setChar(_char);
		_char.length === 0 ? setProcess('error') : setProcess('confirmed');
	};

	// const onError = (e) => console.log('>> CharSearchForm > error:', e.message);

	//
	// const vError = fsmProcess === 'error' && (
	// 	<div className='char__search-critical-error'>
	// 		<ErrorMessage />
	// 	</div>
	// );
	// const vSpinner = loading && <Spinner />;

	const vCharContent = (char) => (
		/*
	null : char.length === 0 ? 
	(
		<div className='char__search-error'>
			The character was not found. Check the name and try again
		</div>
	) : 
	*/
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

	//*
	// console.log('>> CharSearchForm > render: process=', fsmProcess, char);
	//*/
	return (
		<div className='char__search-form'>
			{fsmProcess !== 'loading' && (
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
								disabled={fsmProcess === 'loading'}
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
			)}
			{setContent(fsmProcess, () => vCharContent(char))}
		</div>
	);
};

export default CharSearchForm;
