import React from 'react';
import { useState, useMemo } from 'react';
// import { useDeferredValue } from 'react';
import { useTransition } from 'react';

import data from './data';

function App() {
	const [text, setText] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [posts, setPosts] = useState(data);
	// const deferredValue = useDeferredValue(text);
	const [isPending, startTransition] = useTransition();

	const filteredPosts = useMemo(() => {
		return posts.filter(
			(item) => item.name.toLowerCase().includes(text)
			// item.name.toLowerCase().includes(deferredValue)
		);
	}, [text, posts]);
	// }, [deferredValue, posts]);

	const onValueChange = (e) => {
		// setText(e.target.value);
		startTransition(() => {
			setText(e.target.value);
		});
	};

	return (
		<>
			<input value={text} type='text' onChange={onValueChange} />
			<hr />
			<div>
				{isPending ? (
					<h4>Loading...</h4>
				) : (
					filteredPosts.map((post) => (
						<div key={post._id}>
							<h4>{post.name}</h4>
						</div>
					))
				)}
			</div>
		</>
	);
}

export default App;
