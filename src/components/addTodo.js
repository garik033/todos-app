import {useState, useEffect} from 'react';
import {X, Plus, Save} from 'react-feather'
import {useDispatch, useSelector} from "react-redux";
import ColorPick from "./ColorPick";
import {clearStatus, createTodo, updateTodo} from "../redux/actions/todoAction";

const AddTodo = ({cancel, data = null}) => {
    const dispatch = useDispatch();
    const addedStatus = useSelector(state => state.todos.added);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('transparent');
    const [titleLength, setTitleLength] = useState(false);
    const [descLength, setDescLength] = useState(false);
    //if clicked edit todo, fill fields with existing values
    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setDescription(data.description);
            setColor(data.color)
        }
    }, [data])
    useEffect(() => {
        //if todo is successfully edited , clear added status and close form
        if (data && addedStatus) {
            setTimeout(function () {
                dispatch(clearStatus())
                cancel()
            }, 500)
        }
        //if todo is successfully added, clear fields and added status
        else if (addedStatus) {
            setTitle('');
            setDescription('');
            setColor('transparent');
            setTimeout(function () {
                dispatch(clearStatus())
            }, 1000)
        }
    }, [dispatch, addedStatus, cancel, data])
    //save changes (if edit true -> update todo else add)
    const save = (edit = false) => {
        let allow = true
        if (title.trim().length < 3) {
            setTitleLength(true);
            allow = false;
        }
        if (description.trim().length < 5) {
            setDescLength(true);
            allow = false;
        }
        if (allow) {
            if (edit) {
                dispatch(updateTodo({_id: data._id, title, description, color}))
            } else {
                dispatch(createTodo({title, description, color}))
            }
        }
    }
    return (
        <div className='add-todo'>
            {addedStatus && <div className='text-center'>Successfully {data ? 'edited' : 'added'}</div>}
            {!addedStatus && <>
                {/*block with picking color*/}
                <ColorPick activeColor={color} setActive={setColor}/>
                <div className="input-block">
                    <input type="text"
                           placeholder='Title'
                           value={title}
                           onChange={e => setTitle(e.target.value)}
                    />
                    {(titleLength || title.trim().length < 3) && <small>The title must be min 3 character</small>}
                </div>
                <div className="input-block">
                    <textarea placeholder='Description'
                              value={description}
                              onChange={e => setDescription(e.target.value)}/>
                    {(descLength || description.trim().length < 5) && <small>The description must be min 5 character</small>}
                </div>
                <div className="_action">
                    {/*if creating*/}
                    {!data && <div className="_add" onClick={() => save()}><Plus size={26}/></div>}
                    {/*if updating*/}
                    {data && <div className="_add" onClick={() => save(true)}><Save size={26}/></div>}
                    <div className=" danger" onClick={cancel}><X size={26}/></div>
                </div>
            </>}
        </div>
    )
}
export default AddTodo