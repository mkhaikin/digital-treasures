import { MENU_EMPLOYEES, MENU_CUSTOMERS, MENU_ORDERS } from "./actionTypes";
import Axios from 'axios';

export const menuEmployees = () => async (dispatch, getState) => {
        const response = await Axios.get("http://localhost:5000/admin/employees");
        const data = response.data;
        console.log(data);
        dispatch({
            type: MENU_EMPLOYEES,
            title: "Employees",
            payload: data
        })
    };

export const menuCustomers = () => async (dispatch, getState) => {
        const response = await Axios.get("http://localhost:5000/customers");
        const data = response.data;
        console.log(data);
        dispatch({
            type: MENU_CUSTOMERS,
            title: "Customers",
            payload: data
        })
    } 


export const menuOrders = () => { 
    console.log('menuOrders');

    return {
        type: MENU_ORDERS,
        title: 'Orders'
    };
};
