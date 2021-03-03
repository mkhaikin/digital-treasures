import {SELECT_EMPLOYEE} from "./actionTypes";

import axios from 'axios';


export const selectEmployee = () => async (dispatch, getState) => { 
    const response = await axios.get(
        'http://localhost:5000/admin/employees'
    );

    dispatch({
        type: SELECT_EMPLOYEE,
        payload: response.data
    });
};

