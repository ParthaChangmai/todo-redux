import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { newTodoItem, newTodoList } from '../../utils/newTodo';

const todoSlice = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push(newTodoList(action.payload.title));
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		addTodoList: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload.id);

			todo.todolist.push(newTodoItem(action.payload.todoList));
		},
		deleteTodoItem: (state, action) => {
			const todo = state.find((todo) => todo.id === action.payload.id);

			const newTodoItemList = todo.todolist.filter(
				(todoItem) => todoItem.id !== action.payload.itemId
			);

			todo.todolist = newTodoItemList;
		},
	},
});
export const { addTodo, deleteTodo, addTodoList, deleteTodoItem } =
	todoSlice.actions;

export default todoSlice.reducer;
