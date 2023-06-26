import React from 'react';
import MarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/Spinner';

class RandomChar extends React.Component {
	constructor(props) {
		super(props);
		// console.log('> RandomChar > constructor()');
		this.state = { char: {}, loading: true, error: false };
		this.marvelService = new MarvellService();
	}

	onCharLoaded = (char) => {
		// console.log(`> RandomChar > onCharLoaded() [${char.name}]`);
		this.setState({ char, loading: false, error: false });
	};

	onError = () => {
		// console.log('> RandomChar > onError()');
		this.setState({ loading: false, error: true });
	};

	updateChar = () => {
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		// console.log(`> RandomChar > updateChar() [${id}]`);
		this.setState({ loading: true });
		this.marvelService
			.getCharacter(id)
			.then(this.onCharLoaded)
			.catch(this.onError);
	};

	componentDidMount() {
		// console.log('> RandomChar > componentDidMount()');
		this.updateChar();
		// this.updateChar(1011062); // с описанием
		// this.updateChar(123); // err
	}

	componentWillUnmount() {
		// console.log('> RandomChar > componentWillUnmount()');
	}

	componentDidUpdate() {
		// console.log('> RandomChar > componentDidUpdate()');
	}

	render() {
		const { char, loading, error } = this.state;
		const vError = error ? <ErrorMessage /> : null;
		const vSpinner = loading ? <Spinner /> : null;
		const vContent = error || loading ? null : <View char={char} />;

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
					<button className='button button__main' onClick={this.updateChar}>
						<div className='inner'>try it</div>
					</button>
					<img src={mjolnir} alt='mjolnir' className='randomchar__decoration' />
				</div>
			</div>
		);
	}
}

class View extends React.Component {
	render() {
		const { char } = this.props;
		const { name, description, thumbnail, homepage, wiki } = char;
		const style =
			thumbnail.indexOf('image_not_available') === -1
				? {}
				: { objectFit: 'contain' };

		return (
			<div className='randomchar__block'>
				<img
					src={thumbnail}
					alt='Random character'
					className='randomchar__img'
					style={style}
				/>
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
	}
}

export default RandomChar;
