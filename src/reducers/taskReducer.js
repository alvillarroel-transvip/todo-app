import { types } from "../types";



const initialState = {
    tasks: [],
    activeTodo: null
}


export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addTodo:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case types.setActiveTodo:
            return {
                ...state,
                activeTodo: action.payload
            }
        case types.todoClearActive:
            return {
                ...state,
                activeTodo: null
            }
        case types.todoUpdated:
            return {
                ...state,
                tasks: state.tasks.map(todo => (todo.id === action.payload.id) ? action.payload : todo),
                activeTodo: null
            }
        case types.todoDeleted:
            return {
              ...state,
              tasks: state.tasks.filter(todo => (todo.id !== state.activeTodo.id)),
              activeTodo: null
            }
        case types.setCompleted:
            return {
                ...state,
                tasks: state.tasks.map(todo => (todo.id === action.payload.id) ? {...todo, completed: !todo.completed} : todo)
            }
       default:
           return state;
   }
}
