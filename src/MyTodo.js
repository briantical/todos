import React from 'react';

export default function MyTodo(props) {
	const { userId, title, completed } = props;
	return (
		<div id="mytodo">
			<h4>My Todo</h4>
			<p>User: {userId}</p>
			<p>Title: {title}</p>
			<p>Completed: {completed}</p>
		</div>
	);
}
