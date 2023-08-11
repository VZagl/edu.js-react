import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
	return (
		<header className='app__header'>
			<h1 className='app__title'>
				<Link to='/'>
					<span>Marvel</span> information portal
				</Link>
			</h1>
			<nav className='app__menu'>
				<ul>
					<li>
						<NavLink
							end
							to='/'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							Characters
						</NavLink>
					</li>
					/
					<li>
						<NavLink
							to='/comics'
							className={({ isActive }) => (isActive ? 'active' : '')}
						>
							Comics
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
