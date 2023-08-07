import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

// import { MainPage, ComicsPage, SingleComicPage } from '../pages';
const Page404 = React.lazy(() => import('../pages/404'));
const MainPage = React.lazy(() => import('../pages/MainPage'));
const ComicsPage = React.lazy(() => import('../pages/ComicsPage'));
const SingleComicPage = React.lazy(() => import('../pages/SingleComicPage'));

const App = () => {
	return (
		<Router>
			<div className='app'>
				<AppHeader />
				<main>
					<React.Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<MainPage />} />

							<Route path='/comics' element={<ComicsPage />} />
							<Route path='/comics/:comicId' element={<SingleComicPage />} />

							<Route path='*' element={<Page404 />} />
						</Routes>
					</React.Suspense>
				</main>
			</div>
		</Router>
	);
};

export default App;
