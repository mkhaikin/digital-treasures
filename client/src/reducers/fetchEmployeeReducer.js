import { SELECT_EMPLOYEE } from "../actions/actionTypes";

const fetchEmployeeReducer = (state = {}, action) => {
    switch(action.type){
        case SELECT_EMPLOYEE :
            console.log("Select Employee");
            return state;
        default: 
            console.log("default");    
            return state;
    }
}

export default fetchEmployeeReducer;