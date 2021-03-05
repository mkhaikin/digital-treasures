import { SELECT_ALL_EMPLOYEES, SELECT_ALL_CUSTOMERS, SELECT_ALL_ORDERS } from "../actions/actionTypes";

const initialState = {
    title:  ' ',
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_ALL_EMPLOYEES :
            return {
               title : action.payload.title
            };
        case SELECT_ALL_CUSTOMERS :
            return {
                title : action.payload
            };  
        case SELECT_ALL_ORDERS :
            return {
                title : action.payload
            };
        default: 
            return state;
    }

}

export default mainReducer;