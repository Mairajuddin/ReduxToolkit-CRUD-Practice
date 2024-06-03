import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, title: "Todo 1" }]
}
export const todoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action, state)
            const todo = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            console.log(action, state)
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        },
        readTodo: (state, action) => {
            state.todos = action.payload
        },

    }
})
export const { addTodo, removeTodo, updateTodo, readTodo } = todoSlice.actions
export default todoSlice.reducer    