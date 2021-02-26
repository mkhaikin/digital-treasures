import { SELECT_EMPLOYEE } from "../actions/actionTypes";



const selectEmployeeReducer = (state = {}, action) => {
    switch(action.type){
        case SELECT_EMPLOYEE :
            console.log("Select Employee");
            return state;
        default: 
            console.log("default");    
            return state;
    }
}

export default selectEmployeeReducer;