import { SELECT_CUSTOMERS, SELECT_ORDERS, SELECT_EMPLOYEES } from "./actionTypes";

export const selectEmployees = () => { 
    console.log('selectEmployees');
    return {
        type: SELECT_EMPLOYEES,
        payload: 'Employees'
    };
};

export const selectCustomers = () => { 
    console.log('selectCustomers');
    return {
        type: SELECT_CUSTOMERS,
        payload: 'Customers'
    };
};

export const selectOrders = () => { 
    console.log('selectOrders');

    return {
        type: SELECT_ORDERS,
        payload: 'Orders'
    };
};
