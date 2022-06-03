import React from 'react';

const TodoListitem = ({ list, onDelete, onComplete }) => {
	return (
		<li className="flex justify-between items-center">
			<p>{list}</p>
			<button
				className="px-2 my-1 text-white bg-green-800 rounded-full"
				// onClick={onDelete}
			>
				Done
			</button>
			<button
				className="px-2 my-1 text-white bg-red-800 rounded-full"
				onClick={onDelete}
			>
				Delete
			</button>
		</li>
	);
};

export default TodoListitem;
