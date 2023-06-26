import React from 'react';
import MarvellService from '../../services/MarvellService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';
import Spinner from '../spinner/Spinner';

class CharList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { charList: [], loading: true, error: false };
		this.marvelService = new MarvellService();
	}

	componentDidMount() {
		this.onLoading();
		this.marvelService
			.getAllCharacters()
			.then(this.onLoaded)
			.catch(this.onError);
	}

	onLoading = () => {
		this.setState({ loading: true });
	};

	onLoaded = (charList) => {
		this.setState({ charList, loading: false, error: false });
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
		const { charList, loading, error } = this.state;
		const vError = error ? <ErrorMessage /> : null;
		const vSpinner = loading ? <Spinner /> : null;
		const vContent = error || loading ? null : this.charListView(charList);

		return (
			<div className='char__list'>
				{vError}
				{vSpinner}
				{vContent}
				<button className='button button__main button__long'>
					<div className='inner'>load more</div>
				</button>
			</div>
		);
	}
}

export default CharList;
