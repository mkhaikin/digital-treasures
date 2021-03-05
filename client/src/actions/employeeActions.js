import { SELECT_ALL_EMPLOYEES } from "./actionTypes";
import Axios from 'axios';

// , SELECT_ALL_CUSTOMERS, SELECT_ALL_ORDERS

export const fetchEmployees = () => { 
    // console.log('fetchEmployees');

    return async (dispatch, getState) => {
        const response = await Axios.get("http://localhost:5000/admin/employees");

        console.log(response.data);

        dispatch({
            type: SELECT_ALL_EMPLOYEES,
            payload: response.date
        })
    }
};

{
    type: MENU_EMPLOYEES,
    payload: 'Employees'
};