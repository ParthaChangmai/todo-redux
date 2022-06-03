import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	addTodoList,
	deleteTodo,
	deleteTodoItem,
} from '../redux/slice/todoSlice';
import TodoListitem from './TodoListitem';

const TodoItem = ({ id, title, list }) => {
	const dispatch = useDispatch();
	const [todoList, setTodoList] = useState('');

	const handleDeleteTodo = () => {
		dispatch(deleteTodo({ id: id }));
	};
	const addList = () => {
		if (todoList.length > 0) {
			dispatch(addTodoList({ id: id, todoList: todoList }));
		}
		setTodoList('');
	};
	const handleDeleteTodoItem = (itemId) => {
		dispatch(deleteTodoItem({ id: id, itemId: itemId }));
	};
	const handleComplete = (itemId) => {};

	return (
		<div className="border-2 p-3 mt-4">
			<div className="flex justify-start mt-6 items-center">
				<p>{title}</p>
				<input
					type="text"
					className="border-2 border-gray-400 mx-3"
					value={todoList}
					onChange={(e) => setTodoList(e.target.value)}
				/>

				<button
					className="bg-black rounded-lg text-white py-1 px-2"
					onClick={addList}
				>
					Add
				</button>
				<button
					className="bg-red-800 rounded-lg text-white py-1 px-2 ml-4"
					onClick={handleDeleteTodo}
				>
					Delete
				</button>
			</div>
			<ul className="flex flex-col">
				{list &&
					list.map(({ listItem, id }) => (
						<TodoListitem
							list={listItem}
							onDelete={() => handleDeleteTodoItem(id)}
							onComplete={() => handleComplete(id)}
						/>
					))}
			</ul>
		</div>
	);
};

export default TodoItem;
