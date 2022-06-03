import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const AddTodos = () => {
	const [todos, setTodos] = useState([]);
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		if (todos.length > 0) {
			dispatch(
				addTodo({
					title: todos,
				})
			);
		}
		setTodos('');
	};

	return (
		<div>
			<form className="flex mt-2" onSubmit={onSubmit}>
				<input
					type="text"
					className="border-2 border-gray-400 p-2 w-full"
					name="todo"
					placeholder="Add Todo"
					value={todos}
					onChange={(e) => setTodos(e.target.value)}
				/>
				<button
					className="p-2 ml-2 rounded-lg bg-black text-white"
					type="submit"
				>
					Add
				</button>
			</form>
		</div>
	);
};

export default AddTodos;
