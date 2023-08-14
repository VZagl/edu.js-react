import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Helmet from 'react-helmet';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

// import { MainPage, ComicsPage, SingleComicPage } from '../pages';
const Page404 = React.lazy(() => import('../pages/404'));
const MainPage = React.lazy(() => import('../pages/MainPage'));
const ComicsPage = React.lazy(() => import('../pages/ComicsPage'));
const SinglePage = React.lazy(() => import('../pages/SinglePage'));

const App = () => {
	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
			</Helmet>
			<Router>
				<div className='app'>
					<AppHeader />
					<main>
						<React.Suspense fallback={<Spinner />}>
							<Routes>
								<Route path='/' element={<MainPage />} />

								<Route path='/comics' element={<ComicsPage />} />
								<Route
									path='/comics/:id'
									element={<SinglePage dataType='comic' />}
								/>
								<Route
									path='/characters/:id'
									element={<SinglePage dataType='char' />}
								/>

								<Route path='*' element={<Page404 />} />
							</Routes>
						</React.Suspense>
					</main>
				</div>
			</Router>
		</>
	);
};

export default App;
