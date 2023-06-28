import React from 'react';
import MarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';

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
		};
		this.marvelService = new MarvellService();
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

	charListView = (charList) => {
		const vContent = charList.map((item) => {
			const { name, thumbnail } = item;
			const style =
				thumbnail.indexOf('image_not_available') === -1
					? {}
					: { objectFit: 'contain' };

			return (
				<li
					className='char__item'
					key={item.id}
					onClick={() => {
						this.props.onCharSelected(item.id);
					}}
				>
					<img src={thumbnail} alt={name} style={style} />
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

export default CharList;
