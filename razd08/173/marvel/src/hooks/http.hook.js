import { useState, useCallback } from 'react';

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(
		async (
			url,
			method = 'GET',
			body = null,
			headers = { 'Content-Type': 'application/json' }
		) => {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(url, { method, body, headers });

				if (!response.ok) {
					throw new Error(`Could not fetch ${url}, status: ${response.status}`);
				}

				const data = await response.json();
				return data;
			} catch (e) {
				setError(e.message);
				throw e;
			} finally {
				setLoading(false);
			}
		},
		[]
	);

	const clearError = useCallback(() => setError(null), []);
	return { loading, request, error, clearError };
};
