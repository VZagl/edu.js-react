import React from 'react';
import MarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import PropTypes from 'prop-types';

import './charList.scss';
import Spinner from '../spinner/Spinner';

class CharList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			charList: [],
			loading: false,
			error: false,
			perPage: 9,
			pageLast: 171,
			// pageLast: 22,
			charEnded: false,
			charCurrent: null,
		};
		this.marvelService = new MarvellService();
		this.charRefs = new Object(null);
	}

	componentDidMount() {
		this.doLoadChars();
	}

	componentWillUnmount() {
		console.log('> CharList > componentWillUnmount()');
	}

	doLoadChars = () => {
		if (this.state.loading) return;

		this.onLoading();
		this.marvelService
			.getAllCharacters(this.state.perPage, this.state.pageLast + 1)
			.then(this.onLoaded)
			.catch(this.onError);
	};

	onLoading = () => {
		this.setState({ loading: true });
	};

	onLoaded = (charList) => {
		charList.forEach((item) => {
			this.charRefs[item.id] = React.createRef();
		});
		this.setState((prevState) => ({
			charList: [...prevState.charList, ...charList],
			loading: false,
			error: false,
			pageLast: prevState.pageLast + 1,
			charEnded: charList.length < prevState.perPage,
		}));
	};

	onError = () => {
		this.setState({ loading: false, error: true });
	};

	onCharSelected = (item) => {
		if (this.state.charCurrent && this.state.charCurrent.id === item.id) return;
		this.setState({ charCurrent: item });
		this.props.onCharSelected(item.id);
		// это делать не обязательно. фокус после клика или табиндекса и так на этом элементе
		this.charRefs[item.id].current.focus();
	};

	charListView = (charList) => {
		const vContent = charList.map((item) => {
			const { name, thumbnail } = item;
			const styleImg =
				thumbnail.indexOf('image_not_available') === -1
					? {}
					: { objectFit: 'contain' };
			const charClasses = [
				'char__item',
				this.state.charCurrent && this.state.charCurrent.id === item.id
					? ' char__item_selected'
					: null,
			].join(' ');

			return (
				<li
					ref={this.charRefs[item.id]}
					className={charClasses}
					key={item.id}
					tabIndex={0}
					onClick={() => {
						this.onCharSelected(item);
					}}
					onKeyDown={(e) => {
						if (e.key === ' ' || e.key === 'Enter') {
							this.onCharSelected(item);
						}
					}}
				>
					<img src={thumbnail} alt={name} style={styleImg} />
					<div className='char__name'>{name}</div>
				</li>
			);
		});

		return <ul className='char__grid'>{vContent}</ul>;
	};

	render() {
		const { charList, loading, error, charEnded } = this.state;
		const vError = error ? <ErrorMessage /> : null;
		const vSpinner = loading ? <Spinner /> : null;
		const vContent = error ? null : this.charListView(charList);
		const vBtnLoadMore_Style = charEnded ? { display: 'none' } : null;

		return (
			<div className='char__list'>
				{vContent}
				{vError}
				{vSpinner}
				<button
					className='button button__main button__long'
					onClick={this.doLoadChars}
					disabled={loading}
					style={vBtnLoadMore_Style}
				>
					<div className='inner'>load more</div>
				</button>
			</div>
		);
	}
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
