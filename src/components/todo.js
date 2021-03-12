import {useState} from 'react';
import {X, Edit} from 'react-feather'
import {useDispatch} from "react-redux";
import {deleteTodo} from "../redux/actions/todoAction";
import AddTodo from "./addTodo";

const Todo = ({data}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    return (
        <div className='_item'>
            {/*if clicked edit button hide block*/}
            {!edit && <>
                <div style={{borderBottom: `3px solid ${data.color}`}}>
                    <h3>{data.title}</h3>
                    <p>{data.description}</p>
                </div>
                <div className="_action">
                    {/*edit button*/}
                    <div className="_todo-edit" onClick={() => setEdit(true)}><Edit size={26}/></div>
                    {/*delete button*/}
                    <div className="danger" onClick={() => dispatch(deleteTodo(data._id))}><X size={26}/></div>
                </div>
            </>}
            {/*if clicked edit button show form*/}
            {edit && <AddTodo cancel={() => setEdit(false)} data={data}/>}
        </div>
    )
}
export default Todo