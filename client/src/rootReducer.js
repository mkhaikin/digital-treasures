import { combineReducers } from 'redux';
// import fetchEmployeeReducer from './reducers/fetchEmployeeReducer';
import menuReducer from './reducers/menuReducer';
import mainReducer from './reducers/mainReducer';
import authReducer from './reducers/authReducer';



export default combineReducers({
    menu: menuReducer,
    main: mainReducer,
    auth: authReducer
});