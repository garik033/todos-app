import {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CheckSquare, Trash2} from 'react-feather'
import AddTodo from "./addTodo";
import {clearTodoList} from "../redux/actions/todoAction";


const TodoActions = () => {
    const dispatch=useDispatch();
    const data=useSelector(state=>state.todos.data);
    const [addTodo, setAddTodo] = useState(false)
    return (
        <>
            <div className="_actions">
                {/*clear todolist button*/}
                <button className='btn danger' onClick={()=>dispatch(clearTodoList(data))}><Trash2 className='mr-2'/> Clear Todo list</button>
                {/*create todo button*/}
                {!addTodo && <button className='btn' onClick={()=>setAddTodo(!addTodo)}><CheckSquare className='mr-2' /> Create Todo</button>}
            </div>
            {/*create todo form*/}
            {addTodo && <AddTodo cancel={()=>setAddTodo(false)}/>}
        </>
    )
}
export default TodoActions