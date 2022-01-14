import { types } from "../types";

export const todoAddNew = (todo) => ({
    type: types.addTodo,
    payload: todo
});

export const todoAddActive = (todo) => ({
    type: types.setActiveTodo,
    payload: todo
});

export const todoUpdated = (todo) => ({
    type: types.todoUpdated,
    payload: todo
});

export const todoSetCompleted = (id) => ({
    type: types.setCompleted,
    payload: id
});


export const clearActiveTodo = () => ({type: types.todoClearActive});

export const deleteTodo = () => ({type: types.todoDeleted });