import { useCallback } from 'react';

export const useHttp = () => {
	// const [process, setProcess] = useState('waiting');

	const request = useCallback(
		async (
			url,
			method = 'GET',
			body = null,
			headers = { 'Content-Type': 'application/json' }
		) => {
			// setProcess('loading');
			console.log(
				'|> useHttp > request: ',
				JSON.stringify({
					url,
					method,
					body,
					headers,
				})
			);
			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(`Could not fetch ${url}, status: ${response.status}`);
				}

				const data = await response.json();

				return data;
			} catch (e) {
				// setProcess('error');
				console.log('>> http.hook.js > useHttp > error');
				throw e;
			}
		},
		[]
	);

	// const clearError = useCallback(() => {
	// setProcess('loading');
	// }, []);

	return {
		request,
		// clearError,
		// process,
		// setProcess
	};
};
