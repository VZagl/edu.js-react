import React from 'react';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as yup from 'yup';

/*
const MyTextInput = ({ label, ...props }) => (
	<>
		<label htmlFor={props.name}>{label}</label>
		<Field id={props.name} {...props} />
		<ErrorMessage className='error' name={props.name} component='div' />
	</>
);
*/

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<input {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	);
};

const MyCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });
	return (
		<>
			<label className='checkbox'>
				<input type='checkbox' {...field} {...props} />
				{children}
			</label>
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	);
};

const CustomForm = () => {
	console.log('>> Form > render');

	return (
		<Formik
			initialValues={{
				name: 'name1',
				email: 'e@ma.il',
				amount: 123,
				currency: 'UAH',
				text: 'text1',
				terms: false,
			}}
			validationSchema={yup.object({
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
			})}
			onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
		>
			<Form className='form'>
				<h2>Отправить пожертвование</h2>

				<MyTextInput name='name' type='text' label='Ваше имя' />
				<MyTextInput name='email' type='email' label='Ваша почта' />
				<MyTextInput name='amount' type='number' label='Количество' />

				<label htmlFor='currency'>Валюта</label>
				<Field id='currency' name='currency' as='select'>
					<option value=''>Выберите валюту</option>
					<option value='USD'>USD</option>
					<option value='UAH'>UAH</option>
					<option value='RUB'>RUB</option>
				</Field>
				<ErrorMessage className='error' name='currency' component='div' />
				{/* <MyTextInput name='currency' as='select'>
						<option value=''>Выберите валюту</option>
						<option value='USD'>USD</option>
						<option value='UAH'>UAH</option>
						<option value='RUB'>RUB</option>
					</MyTextInput> */}

				{/* <MyTextInput name='text' label='Ваше сообщение' as='textarea' /> */}

				{/* <label className='checkbox'>
						<Field id='terms' name='terms' type='checkbox' />
						Соглашаетесь с политикой конфиденциальности?
					</label>
					<ErrorMessage className='error' name='terms' component='div' /> */}

				<MyCheckbox name='terms'>
					Соглашаетесь с политикой конфиденциальности?
				</MyCheckbox>

				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);
};

export default CustomForm;
