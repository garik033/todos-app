import {ADD_TODO, CLEAR_FROM_LIST, CLEAR_STATUS, SET_TODO, SET_TODOS, THROW_ERROR_MESSAGE} from "../types";

const initialState = {
    data: null,
    added: false,
    errorMessage: ''
};
const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        //set fetched todos
        case SET_TODOS:
            return {
                ...state,
                data: action.payload
            }
        //add created todo to list
        case ADD_TODO:
            let newData=[...state.data]
            newData.push(action.payload)
            return {
                ...state,
                data: newData,
                added: true
            }
        // update edited todo to list
        case SET_TODO:
            return {
                ...state,
                data: state.data.map(todo => {
                    //find and replace edited todo
                    if (todo._id === action.payload._id) {
                        return action.payload
                    }
                    return todo
                }),
                added: true
            }
        // claer from list after deleting
        case CLEAR_FROM_LIST:
            return {
                ...state,
                data: state.data.filter(todo => todo._id !== action.payload)
            }
        //set error message
        case THROW_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        //clear added status and error message
        case CLEAR_STATUS:
            return {
                ...state,
                added: false,
                errorMessage: ''
            }
        default:
            return state
    }
}
export default todoReducer