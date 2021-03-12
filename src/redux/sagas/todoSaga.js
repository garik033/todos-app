import { channel } from 'redux-saga'
import {put, call, takeEvery,take} from 'redux-saga/effects';
import {TODOS_FETCH, CREATE_TODO, CLEAR_TODOLIST, DELETE_TODO, UPDATE_TODO} from "../types";
import {addTodo, clearFromList, setTodo, setTodos, throwErrorMessage} from "../actions/todoAction";

const throwErrorChannel = channel();

//saga watchers
export default function* todoWatcher() {
    yield takeEvery(TODOS_FETCH, todosFetchWorker);
    yield takeEvery(CREATE_TODO, createTodoWorker);
    yield takeEvery(UPDATE_TODO, updateTodoWorker);
    yield takeEvery(CLEAR_TODOLIST, clearTodoListWorker);
    yield takeEvery(DELETE_TODO, deleteTodoWorker);
    while (true) {
        const action = yield take(throwErrorChannel)
        yield put(action)
    }
}
//workers start
function* todosFetchWorker() {
    const res = yield call(todosFetch);
    yield put(!res.error ? setTodos(res) : throwErrorMessage(res.message))

}

function* createTodoWorker(action) {
    const res = yield call(createTodo, action.payload);
    yield put(!res.message ? addTodo(res) : throwErrorMessage(res.message))
}

function* updateTodoWorker(action) {

    const res = yield call(updateTodo, action.payload);
    yield put(!res.message ? setTodo(res) : throwErrorMessage(res.message))
}
function* clearTodoListWorker(action) {
    let todos = action.payload
    const data = yield call(clearTodoList, todos);
    let newData = [];
    console.log(data)
    yield data.forEach((todo) => {
        if (todo !== 'deleted') {
            newData.push(todos.filter(todoItem => todoItem._id === todo.id)[0])
            throwErrorChannel.put(throwErrorMessage(todo.message))
        }
    })
    yield put(setTodos(newData))
}
function* deleteTodoWorker(action) {

    const res = yield call(clearTodo, action.payload);
    yield put(res==='deleted'?clearFromList(action.payload):throwErrorMessage(res.message))
}
//workers end

async function todosFetch() {
    const request = await fetch(`${process.env.REACT_APP_API_URL}todos/`, {
        method: "GET",
    });
    return await request.json()
}

async function createTodo(data) {
    const request = await fetch(`${process.env.REACT_APP_API_URL}todos/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await request.json()
}
async function updateTodo(data) {
    const request = await fetch(`${process.env.REACT_APP_API_URL}todos/${data._id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await request.json()
}

async function clearTodoList(data) {
    return await Promise.all(data.map((todo,i) => clearTodo(todo._id)))
}

function clearTodo(id) {
    return fetch(`${process.env.REACT_APP_API_URL}todos/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => res.message ? {id,message:res.message} : 'deleted');
}


