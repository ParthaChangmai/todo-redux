import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/slice/todoSlice';
import TodoItem from './TodoItem';

const Todos = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<div className="grid sm:grid-cols-3">
			{todos.map((todo) => (
				<div key={todo.id} className="mx-2">
					<TodoItem
						id={todo.id}
						title={todo.title}
						completed={todo.completed}
						list={todo.todolist}
					/>
				</div>
			))}
		</div>
	);
};

export default Todos;
