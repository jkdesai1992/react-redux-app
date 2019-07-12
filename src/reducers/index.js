import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import userDetailsReducer from '../reducers/userDetailsReducer';


// all reducer file import in this file

export default combineReducers({
    router: routerReducer,
    userDetailsReducer
});
