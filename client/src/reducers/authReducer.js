import { USER_LOGIN, USER_LOGOUT } from "../actions/actionTypes";

const initialState = {
    loggedIn:  false,
    user: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_LOGIN :
            return {
               ...state, 
               loggedIn : true,
               user: action.username
            };
            case USER_LOGOUT :
            return {
               ...state, 
               loggedIn : false,
               user: ''
            };

        default: 
            return state;
    }

}

export default authReducer;