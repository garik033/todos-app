import {
    ADD_TODO, CLEAR_FROM_LIST,
    CLEAR_STATUS,
    CLEAR_TODOLIST,
    CREATE_TODO, DELETE_TODO, SET_TODO,
    SET_TODOS,
    THROW_ERROR_MESSAGE,
    TODOS_FETCH, UPDATE_TODO
} from "../types";
//fetch todos
export const todosFetch=()=>({
    type:TODOS_FETCH
})
//set fetched todos
export const setTodos=(data)=>({
    type:SET_TODOS,
    payload:data
})
// create todo in db
export const createTodo = (data)=>({
    type:CREATE_TODO,
    payload:data
})
// update todo in db
export const updateTodo = (data)=>({
    type:UPDATE_TODO,
    payload:data
})
//delete todo in db
export const deleteTodo = (id)=>({
    type:DELETE_TODO,
    payload:id
})
//clear todo from list
export const clearFromList = (id)=>({
    type:CLEAR_FROM_LIST,
    payload:id
})
//add created todo to list
export const addTodo = (data)=>({
    type:ADD_TODO,
    payload:data
})
// update edited todo to list
export const setTodo = (data)=>({
    type:SET_TODO,
    payload:data
})
// delete all todos in db
export const clearTodoList=(data)=>({
    type:CLEAR_TODOLIST,
    payload:data
})
// add error message
export const throwErrorMessage = (data)=>({
    type:THROW_ERROR_MESSAGE,
    payload:data
})
// clear added status and error message
export const clearStatus = ()=>({
    type:CLEAR_STATUS
})