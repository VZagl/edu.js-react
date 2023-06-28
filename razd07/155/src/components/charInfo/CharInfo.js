import React from 'react';
import MarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import PropTypes from 'prop-types';

import './charInfo.scss';
import Spinner from '../spinner/Spinner';

class CharInfo extends React.Component {
	constructor(props) {
		super(props);
		// console.log('> CharInfo', props);
		this.state = { char: null, loading: false, error: false };
		this.marvelService = new MarvellService();
	}

	componentDidMount() {
		this.updateChar();
	}

	componentDidUpdate(prevProps) {
		if (this.props.charId === prevProps.charId) return;
		this.updateChar();
	}

	onLoading = () => {
		this.setState({ loading: true });
	};

	onLoaded = (char) => {
		this.setState({ char, loading: false, error: false });
	};

	onError = () => {
		this.setState({ loading: false, error: true });
	};

	updateChar = () => {
		const { charId } = this.props;
		if (!charId) {
			return;
		}

		this.onLoading();
		this.marvelService
			.getCharacter(charId)
			.then(this.onLoaded)
			.catch(this.onError);
	};

	charView = (char) => {
		const { name, description, thumbnail, homepage, wiki, comics } = char;
		const style =
			thumbnail.indexOf('image_not_available') === -1
				? {}
				: { objectFit: 'contain' };
		const vComics =
			comics.length === 0
				? 'Комиксы отсутствуют.'
				: comics.map((item, i) =>
						i >= this.props.comicsMaxCount ? null : (
							<li className='char__comics-item' key={i}>
								{item.name}
							</li>
						)
				  );

		return (
			<>
				<div className='char__basics'>
					<img src={thumbnail} alt={name} style={style} />
					<div>
						<div className='char__info-name'>{name}</div>
						<div className='char__btns'>
							<a href={homepage} className='button button__main'>
								<div className='inner'>homepage</div>
							</a>
							<a href={wiki} className='button button__secondary'>
								<div className='inner'>Wiki</div>
							</a>
						</div>
					</div>
				</div>
				<div className='char__descr'>{description}</div>
				<div className='char__comics'>Comics:</div>
				<ul className='char__comics-list'>{vComics}</ul>
			</>
		);
	};

	render() {
		const { char, loading, error } = this.state;
		const vError = error ? <ErrorMessage /> : null;
		const vSpinner = loading ? <Spinner /> : null;
		const vSkeleton = error || loading || char ? null : <Skeleton />;
		const vContent = error || loading || !char ? null : this.charView(char);
		//
		return (
			<div className='char__info'>
				{vError}
				{vSpinner}
				{vSkeleton}
				{vContent}
			</div>
		);
	}
}

CharInfo.propTypes = {
	charId: PropTypes.number,
};

export default CharInfo;
