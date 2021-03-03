import { SELECT_EMPLOYEE } from "../actions/actionTypes";


const fetchEmployeeReducer = (state = {}, action) => {
    switch(action.type){
        case SELECT_EMPLOYEE :
            return action.payload;
        default: 
            return state;
    }
}

export default fetchEmployeeReducer;