import { combineReducers } from 'redux';
// import fetchEmployeeReducer from './reducers/fetchEmployeeReducer';
import menuReducer from './reducers/menuReducer';

export default combineReducers({
    menu: menuReducer
    // fetchEmployeeReducer
});