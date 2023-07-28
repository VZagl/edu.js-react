import React from 'react';
import { useState } from 'react';
import AppHeader from '../appHeader/AppHeader';
import PageChars from '../pageChars/PageChars';
import PageComics from '../pageComics/PageComics';

const App = () => {
	// eslint-disable-next-line no-unused-vars
	const [selectedChar, setChar] = useState(null);
	const [page, setPage] = useState(1);
	const pageCount = 2;

	const onCharSelected = (id) => setChar(id);

	const onPageSelected = (pageNum) => {
		if (!pageNum || pageNum < 1 || pageNum > pageCount || pageNum === page)
			return;

		setPage(pageNum);
	};

	return (
		<div className='app'>
			<AppHeader pageNum={page} onSelectPage={onPageSelected} />
			<main>
				{page == 1 && (
					<PageChars
						onCharSelected={onCharSelected}
						selectedChar={selectedChar}
					/>
				)}
				{page == 2 && <PageComics />}
			</main>
		</div>
	);
};

export default App;
