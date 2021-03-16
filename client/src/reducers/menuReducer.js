import { MENU_EMPLOYEES, MENU_CUSTOMERS, MENU_ORDERS } from "../actions/actionTypes";

const initialState = {
    title:  ' ',
    data: {}
}

const menuReducer = (state = initialState, action) => {
    switch(action.type){
        case MENU_EMPLOYEES :
            return {
                ...state,
               title : action.title,
               data: action.payload
            };
        case MENU_CUSTOMERS :
            return {
                ...state,
                title : action.title,
                data: action.payload
            };  
        case MENU_ORDERS :
            return {
                title : action.title
            };
        default: 
            return state;
    }
}

export default menuReducer;