import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';
import AppBanner from '../appBanner/AppBanner';

const SinglePage = ({ Component, dataType }) => {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const { getComic, getCharacter, fsmProcess, setProcess } = useMarvelService();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => updateData(), [id]);

	const updateData = () => {
		if (!id) return;

		switch (dataType) {
			case 'comic':
				getComic(id)
					.then(onDataLoaded)
					.then(() => setProcess('confirmed'));
				break;
			case 'char':
				getCharacter(id)
					.then(onDataLoaded)
					.then(() => setProcess('confirmed'));
				break;
			default:
				throw new Error(
					'>> SinglePage > updateData > Error [dataType]',
					dataType
				);
		}
		//.catch(onError);
	};

	const onDataLoaded = (_data) => setData(_data);
	//
	return (
		<>
			<AppBanner />
			{setContent(fsmProcess, Component, data)}
		</>
	);
};

export default SinglePage;
