import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';

import SingleComic from '../singleComic/SingleComic';
import SingleChar from '../singleChar/SingleChar';

// import './singlePage.scss';
import Spinner from '../spinner/Spinner';

const SinglePage = ({ dataType }) => {
	const [data, setData] = useState(null);
	const { id } = useParams();
	const { loading, error, getComic, getCharacter } = useMarvelService();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => updateData(), [id]);

	const updateData = () => {
		if (!id) return;

		switch (dataType) {
			case 'comic':
				getComic(id).then(onDataLoaded);
				break;
			case 'char':
				getCharacter(id).then(onDataLoaded);
				break;
			default:
				throw new Error('>> SinglePage > updateData > Error [dataType]');
		}
		//.catch(onError);
	};

	const onDataLoaded = (_data) => setData(_data);

	// const onError = (e) => console.log('error', e.message);

	const getContent = () => {
		switch (dataType) {
			case 'comic':
				return <SingleComic data={data} />;
			case 'char':
				return <SingleChar data={data} />;
			default:
				return <ErrorMessage />;
		}
	};
	//
	const vError = error && <ErrorMessage />;
	const vSpinner = loading && <Spinner />;
	const vContent = !error && !loading && data && getContent();
	//
	return (
		<>
			<AppBanner />
			{vError}
			{vSpinner}
			{vContent}
		</>
	);
};

export default SinglePage;
