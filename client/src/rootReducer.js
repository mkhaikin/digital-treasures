import { combineReducers } from 'redux';
// import fetchEmployeeReducer from './reducers/fetchEmployeeReducer';
import menuReducer from './reducers/menuReducer';
import mainReducer from './reducers/mainReducer';


export default combineReducers({
    menu: menuReducer,
    main: mainReducer
});