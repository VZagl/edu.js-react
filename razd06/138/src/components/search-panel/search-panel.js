import './search-panel.css';

const SearchPanel = (props) => {
	return (
		<input
			type = "text"
			className = "form-control search-input"
			placeholder = "Найти сотрудника"
			onChange={ (e) => props.onSearch(e.currentTarget.value) }
		/>
	);
};

export default SearchPanel;