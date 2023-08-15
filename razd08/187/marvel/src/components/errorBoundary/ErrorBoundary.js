import React from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';

class ErrorBoundary extends React.Component {
	state = { error: false };
	/*
	static getDerivedStateFromError() {
		return { error: true };
	}
	*/
	componentDidCatch(error, errorInfo) {
		console.log('>> ErrorBoundary > componentDidCatch');
		console.log(error);
		console.log(errorInfo);
		this.setState({ error: true });
	}

	render() {
		return this.state.error ? <ErrorMessage /> : this.props.children;
	}
}

export default ErrorBoundary;
