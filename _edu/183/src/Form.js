import React from 'react';
import * as fk from 'formik';
// import { Formik, Form as FormFormik, Field, ErrorMessage } from 'formik';
// import { useFormik } from 'formik';
import * as yup from 'yup';

/*
const validate = (values) => {
	const errors = {};

	if (!values.name) errors.name = 'Обязательное поле';
	else if (values.name.length < 2) errors.name = 'минимум 2 символа';
	if (!values.email) errors.email = 'Обязательное поле';
	else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
		errors.email = 'Неправильный email адрес';

	return errors;
};
*/

const Form = () => {
	const formik = fk.useFormik({
		initialValues: {
			name: 'name1',
			email: 'e@ma.il',
			amount: 123,
			currency: 'UAH',
			text: 'text1',
			terms: false,
		},
		/*
		// валидация собственной функцией
		validate: validate, 
		*/
		// валидация с помощью схемы, используя "yup"
		validationSchema: yup.object({
			name: yup
				.string()
				.min(2, 'минимум 2 символа')
				.required('Обязательное поле'),
			email: yup
				.string()
				.email('Неправильный email адрес')
				.required('Обязательное поле'),
			amount: yup.number().min(5, 'Не менее 5').required('Обязательное поле'),
			currency: yup.string().required('Выберите валюту'),
			text: yup.string().min(10, 'минимум 10 символов'),
			terms: yup
				.boolean()
				.required('Необходимо согласие1')
				.oneOf([true], 'Необходимо согласие'),
		}),
		onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
	});

	console.log('>> Form > render');

	return (
		<form className='form' onSubmit={formik.handleSubmit}>
			<h2>Отправить пожертвование</h2>
			<label htmlFor='name'>Ваше имя</label>
			<input
				id='name'
				name='name'
				type='text'
				value={formik.values.name}
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
			/>
			{formik.errors.name && formik.touched.name && (
				<div className='error'>{formik.errors.name}</div>
			)}

			<label htmlFor='email'>Ваша почта</label>
			<input
				id='email'
				name='email'
				type='email'
				value={formik.values.email}
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
			/>
			{formik.errors.email && formik.touched.email && (
				<div className='error'>{formik.errors.email}</div>
			)}

			<label htmlFor='amount'>Количество</label>
			<input
				id='amount'
				name='amount'
				type='number'
				value={formik.values.amount}
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
			/>
			{formik.errors.amount && formik.touched.amount && (
				<div className='error'>{formik.errors.amount}</div>
			)}

			<label htmlFor='currency'>Валюта</label>
			<select
				id='currency'
				name='currency'
				value={formik.values.currency}
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
			>
				<option value=''>Выберите валюту</option>
				<option value='USD'>USD</option>
				<option value='UAH'>UAH</option>
				<option value='RUB'>RUB</option>
			</select>
			{formik.errors.currency && formik.touched.currency && (
				<div className='error'>{formik.errors.currency}</div>
			)}

			<label htmlFor='text'>Ваше сообщение</label>
			<textarea
				id='text'
				name='text'
				value={formik.values.text}
				onBlur={formik.handleBlur}
				onChange={formik.handleChange}
			/>
			{formik.errors.text && formik.touched.text && (
				<div className='error'>{formik.errors.text}</div>
			)}

			<label className='checkbox'>
				<input
					name='terms'
					type='checkbox'
					value={formik.values.terms}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				Соглашаетесь с политикой конфиденциальности?
			</label>
			{formik.errors.terms && formik.touched.terms && (
				<div className='error'>{formik.errors.terms}</div>
			)}

			<button type='submit'>Отправить</button>
		</form>
	);
};

export default Form;
