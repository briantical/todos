import React, { useState } from 'react';

// Created a list of todos
const mytodos = [
	{
		userId: 1,
		id: 1,
		title: 'Help Grace with a machine',
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: 'Talk to Lyndah Kamasaka',
		completed: false,
	},
	{
		userId: 1,
		id: 3,
		title: 'Akapesh asks Felix for stipend',
		completed: false,
	},
];

const App = () => {
	const [todos, setTodo] = useState(mytodos);
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
		setTodo([...todos, todo]);
		setNewTodo('');
	};

	const handleChange = (event) => {
		setNewTodo(event.target.value);
	};

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
