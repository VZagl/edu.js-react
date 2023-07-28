import React from 'react';

import './appHeader.scss';

const AppHeader = ({ pageNum, onSelectPage }) => {
	return (
		<header className='app__header'>
			<h1 className='app__title'>
				<a href='#'>
					<span>Marvel</span> information portal
				</a>
			</h1>
			<nav className='app__menu'>
				<ul>
					<li>
						<a
							href='#'
							className={pageNum === 1 ? 'active' : null}
							onClick={() => onSelectPage(1)}
						>
							Characters
						</a>
					</li>
					/
					<li>
						<a
							href='#'
							className={pageNum === 2 ? 'active' : null}
							onClick={() => onSelectPage(2)}
						>
							Comics
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
