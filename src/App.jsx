import { useState } from 'react';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';
import logo from './logo.svg';
import { useSelector } from 'react-redux';

function App() {
	const state = useSelector((state) => state);

	console.log(state);
	return (
		<div className="grid  place-items-center ">
			<AddTodos />
			<Todos />
		</div>
	);
}

export default App;
