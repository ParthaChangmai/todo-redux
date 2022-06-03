import { nanoid } from '@reduxjs/toolkit';

export const newTodoList = (title) => ({
	id: nanoid(),
	title,
	todolist: [],
});

export const newTodoItem = (listItem) => ({
	id: nanoid(),
	listItem,
	completed: false,
});
