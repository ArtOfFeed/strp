import {combineReducers, createStore, applyMiddleware} from "redux";
import TemplateReducer from './reducers/TemplateReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    templatesPage: TemplateReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;