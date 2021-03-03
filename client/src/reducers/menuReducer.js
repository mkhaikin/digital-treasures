import { SELECT_CUSTOMERS, SELECT_ORDERS, SELECT_EMPLOYEES } from "../actions/actionTypes";

const initialState = {
    title:  ' ',
}

const menuReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_EMPLOYEES :
            return {
               title : action.payload
            };
        case SELECT_CUSTOMERS :
            return {
                title : action.payload
        };  
        case SELECT_ORDERS :
            return {
                title: action.payload
            };
        default: 
            return state;
    }

}

export default menuReducer;