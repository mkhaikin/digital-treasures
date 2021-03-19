import { USER_LOGIN, USER_LOGOUT } from "./actionTypes";

export const logIn = (username) => { 
    console.log(username);
    return  {
        type: USER_LOGIN,
        username
    };
};

export const logOut = () => { 

    return  {
        type: USER_LOGOUT        
    };
};

