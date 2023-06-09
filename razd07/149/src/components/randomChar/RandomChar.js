import React from 'react';
import MarvelService from '../../services/MarvelService';

import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {char: {} };
		this.marvelService = new MarvelService();
	}
	
	onCharLoaded = (char) => {
		// console.log('onCharLoaded', char);
		this.setState({char});
	};
	
	updateChar = (id) => {
		console.log(`updateChar(${id})`);
		this.marvelService.getCharacter(id)
			.then( this.onCharLoaded );
		// .catch(err => console.log('updateChar error:', err) );
	};

	componentDidMount() {
		console.log('componentDidMount()');
		// this.updateChar( Math.floor( Math.random() * (1011400 - 1011000) + 1011000) );
		this.updateChar( 1011062 );
	}

	componentWillUnmount(){
		console.log('componentWillUnmount()');
	}
	componentDidUpdate(){
		console.log('componentDidUpdate()');
	}

	render() {
		console.log('render()');
		const {char: {name, description, thumbnail, homepage, wiki} } = this.state;
		//
		return (
			<div className="randomchar">
				<div className="randomchar__block">
					<img src={thumbnail} alt="Random character" className="randomchar__img"/>
					<div className="randomchar__info">
						<p className="randomchar__name">{name}</p>
						<p className="randomchar__descr">{description}</p>
						<div className="randomchar__btns">
							<a href={homepage} className="button button__main">
								<div className="inner">homepage</div>
							</a>
							<a href={wiki} className="button button__secondary">
								<div className="inner">Wiki</div>
							</a>
						</div>
					</div>
				</div>
				<div className="randomchar__static">
					<p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
					</p>
					<p className="randomchar__title">
                    Or choose another one
					</p>
					<button className="button button__main">
						<div className="inner">try it</div>
					</button>
					<img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
				</div>
			</div>
		);
	}
}

export default RandomChar;