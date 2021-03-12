import {useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import TodoActions from "./components/todoActions";
import TodoList from "./components/todoList";
import {clearStatus} from "./redux/actions/todoAction";

import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const dispatch=useDispatch();
    const errorMessage=useSelector(state=>state.todos.errorMessage);
    //catch error and display
    useEffect(()=>{
        if(errorMessage!==''){
            toast.error(errorMessage);
            dispatch(clearStatus())
        }
    },[errorMessage,dispatch])
    return (
        <div className="App">
            <div className="box">
                <h1 className="_title">
                   Todos
                </h1>
                <TodoActions/>
                <TodoList/>
            </div>
            <ToastContainer />
        </div>

    );
}

export default App;
