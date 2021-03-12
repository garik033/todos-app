import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from "redux-saga";
import todoWatcher from "./sagas/todoSaga";
const saga =createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(saga),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
saga.run(todoWatcher);
export default store