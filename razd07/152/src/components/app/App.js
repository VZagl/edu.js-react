import React from 'react';
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import decoration from '../../resources/img/vision.png';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { selectedChar: null };
	}

	onCharSelect = (id) => {
		// console.log('> App > onCharSelect', id);
		this.setState({ selectedChar: id });
	};

	render() {
		const { selectedChar } = this.state;
		return (
			<div className='app'>
				<AppHeader />
				<main>
					<RandomChar />
					<div className='char__content'>
						<CharList onCharSelected={this.onCharSelect} />
						<CharInfo charId={selectedChar} comicsMaxCount={10} />
					</div>
					<img className='bg-decoration' src={decoration} alt='vision' />
				</main>
			</div>
		);
	}
}
