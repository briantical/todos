import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');

	// Add a new todo
	const addTodo = (value) => {
		// Create a new todo
		let todo = {
			userId: 1,
			id: todos.length + 1,
			title: value,
			completed: false,
		};
		// Retain all the previous todos
		setTodos([...todos, todo]);
		setNewTodo('');
	};

	const handleChange = (event) => {
		setNewTodo(event.target.value);
	};

	const getTodos = async () => {
		const response = await axios.get(
			'http://jsonplaceholder.typicode.com/posts?_page=1&_limit=5'
		);
		const { data: todos } = response;
		setTodos(todos);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<div id="container">
			<h1 id="heading">Incubator Todos</h1>
			<div id="todos">
				<ul>
					{todos.map((todo, index) => {
						const { title } = todo;
						return <li key={index}>{title}</li>;
					})}
				</ul>
			</div>
			<div id="add">
				<input
					type="text"
					placeholder="Type something"
					onChange={handleChange}
					value={newTodo}
				/>
				<button id="addBtn" onClick={() => addTodo(newTodo)}>
					Add Todo
				</button>
			</div>
		</div>
	);
};

export default App;
