import React from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/Spinner';

export default class RandomChar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { char: {}, loading: true, error: false };
		this.marvelService = new MarvelService();
	}

	onCharLoaded = (char) => {
		// console.log('onCharLoaded', char);
		this.setState({ char, loading: false, error: false });
	};

	onError = () => this.setState({ loading: false, error: true });

	updateChar = (id) => {
		console.log(`updateChar(${id})`);
		this.setState({ loading: true });
		this.marvelService
			.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
		// .catch(err => console.log('updateChar error:', err) );
	};

	componentDidMount() {
		console.log('componentDidMount()');
		this.updateChar(Math.floor(Math.random() * (1011400 - 1011000) + 1011000));
		// this.updateChar(1011062);
		// this.updateChar(123);
	}

	componentWillUnmount() {
		console.log('componentWillUnmount()');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate()');
	}

	render() {
		console.log('render()');
		const { char, loading, error } = this.state;
		const vError = error ? <ErrorMessage /> : null;
		const vSpinner = loading ? <Spinner /> : null;
		const vContent = !(error || loading) ? <View char={char} /> : null;
		//
		return (
			<div className='randomchar'>
				{vError}
				{vSpinner}
				{vContent}
				<div className='randomchar__static'>
					<p className='randomchar__title'>
						Random character for today!
						<br />
						Do you want to get to know him better?
					</p>
					<p className='randomchar__title'>Or choose another one</p>
					<button className='button button__main'>
						<div className='inner'>try it</div>
					</button>
					<img src={mjolnir} alt='mjolnir' className='randomchar__decoration' />
				</div>
			</div>
		);
	}
}

const View = ({ char }) => {
	const { name, description, thumbnail, homepage, wiki } = char;

	return (
		<div className='randomchar__block'>
			<img src={thumbnail} alt='Random character' className='randomchar__img' />
			<div className='randomchar__info'>
				<p className='randomchar__name'>{name}</p>
				<p className='randomchar__descr'>{description}</p>
				<div className='randomchar__btns'>
					<a href={homepage} className='button button__main'>
						<div className='inner'>homepage</div>
					</a>
					<a href={wiki} className='button button__secondary'>
						<div className='inner'>Wiki</div>
					</a>
				</div>
			</div>
		</div>
	);
};
// export default RandomChar;
