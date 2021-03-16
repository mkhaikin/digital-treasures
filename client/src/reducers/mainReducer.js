import { ADD_EMPL_BTN } from "../actions/actionTypes";

const initialState = {
    title:  ' ',
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_EMPL_BTN :
            return {
               title : action.payload.title
            };

        default: 
            return state;
    }

}

export default mainReducer;