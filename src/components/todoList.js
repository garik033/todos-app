import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Todo from "./todo";
import {todosFetch} from "../redux/actions/todoAction";
import {Loader} from 'react-feather'

const TodoList = () => {
    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos.data);
    //get todos
    useEffect(()=>{
        dispatch(todosFetch())
    },[dispatch])
    return (
        <div className='_todo-list'>
            {/*if todos were got*/}
            {todos && todos.map(todo=>
                <Todo data={todo} key={todo._id}/>
            )}
            {/*if there are no todo*/}
            {todos && !todos.length && <div className='text-center'>There is no Todo</div>}
            {/*show loader during fetching todos*/}
            {!todos && <div className='text-center '><Loader className='rotate'/></div>}
        </div>
    )
}
export default TodoList